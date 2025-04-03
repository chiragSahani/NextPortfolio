"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TechCard } from "@/components/tech-card";
import { technologies } from "@/lib/data";

export default function TechnologiesPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(technologies.map((tech) => tech.category)));
  const filteredTechnologies = filter
    ? technologies.filter((tech) => tech.category === filter)
    : technologies;

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-background py-16 md:py-24 px-4 md:px-8">
      
      {/* Heading Section */}
      <motion.div
        className="flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Technologies & Skills
        </h1>
        <p className="max-w-xl text-muted-foreground md:text-lg">
          Explore the technologies and tools I specialize in.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Button
          variant={filter === null ? "default" : "outline"}
          onClick={() => setFilter(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Technologies Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {filteredTechnologies.map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </motion.div>
    </main>
  );
}
