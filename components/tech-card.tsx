import { motion } from "framer-motion";

interface TechProps {
  tech: {
    name: string;
    category: string;
    icon: JSX.Element;
  };
}

export function TechCard({ tech }: TechProps) {
  return (
    <motion.div
      className="bg-gray-800 text-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105 w-full min-h-[180px]"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-3">{tech.icon}</div>
      <h3 className="text-lg font-semibold">{tech.name}</h3>
      <p className="text-xs text-gray-400">{tech.category}</p>
    </motion.div>
  );
}
