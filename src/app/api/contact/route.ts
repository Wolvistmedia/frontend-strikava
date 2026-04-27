import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  program?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const { name, email, phone = "Not provided", program = "Not selected", message } = payload;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message fields are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      program,
      message,
      date: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), "leads.json");
    let leads = [] as Array<Record<string, unknown>>;

    if (existsSync(filePath)) {
      const fileData = await fs.readFile(filePath, "utf-8");
      leads = JSON.parse(fileData) as Array<Record<string, unknown>>;
    }

    leads.push(lead);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2));

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: "info@strikava.com",
        subject: `New Lead from ${name}: ${program || "General Inquiry"}`,
        text: `New Contact Form Submission!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram of Interest: ${program}\n\nMessage:\n${message}`,
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Error saving lead or sending email:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
