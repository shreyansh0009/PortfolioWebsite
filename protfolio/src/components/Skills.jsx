import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  "ReactJS", "NextJS", "JavaScript", "TypeScript", "Tailwind CSS",
  "Shadcn UI", "Node.js", "Express.js", "MongoDB", "SQL",
  "Supabase", "Git", "GitHub",
  "Postman",
];

function Skills() {
  return (
    <div className="max-w-5xl mx-auto pb-10 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center mb-8"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
        {SKILLS.map((skill, index) => (
          <span
            key={index}
            className="bg-stone-800 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
