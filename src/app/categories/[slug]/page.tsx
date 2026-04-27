import { getCategoryBySlug, getProgramsByCategory, categories } from "@/lib/data";
import { notFound } from "next/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Cloud, Lock, Server, Shield, Database, Network } from "lucide-react";

import { Metadata } from "next";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.title} Training & Certification | Strikava`,
    description: category.desc,
  };
}

const IconMap: Record<string, React.ElementType> = {
  Database, Cloud, Lock, Shield, Server, Network
};

export default async function CategoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.slug);
  const categoryPrograms = getProgramsByCategory(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-accent mb-4 font-semibold uppercase tracking-wider">
            Domain Category
          </div>
          <h1 className="text-5xl font-extrabold mb-6 capitalize text-white">
            {category.title} <span className="text-gradient">Training</span>
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            {category.desc} Explore all our specialized programs within the {category.title} domain below.
          </p>
        </div>

        {categoryPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPrograms.map((prog, idx) => {
              const Icon = IconMap[prog.iconName] || Cloud;
              return (
                <GlassCard key={prog.slug} delay={idx * 0.05} className="flex flex-col h-full">
                  <Icon className={`text-primary w-8 h-8 mb-4`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{prog.title}</h3>
                  <p className="text-foreground/70 flex-grow mb-6">{prog.desc}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <AnimatedButton href={`/programs/${prog.slug}`} variant="outline" className="flex-1 text-sm py-3 px-0">
                      View Program
                    </AnimatedButton>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        ) : (
          <div className="text-center p-12 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-lg text-foreground/70">New programs in this category are coming soon.</p>
          </div>
        )}

      </div>
    </div>
  );
}
