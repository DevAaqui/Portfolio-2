"use client";
import { Card, CardBody, Progress, Tooltip, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { skillCategories } from "./skillData";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiGraphql,
  SiSequelize,
  SiMaterialdesign,
  SiMaterialdesignicons,
  SiAmazondynamodb,
  SiAmazonwebservices,
} from "react-icons/si";

const frontendSkills = [
  { name: "React & Next.js", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <FaReact /> },
  { name: "HTML/CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiMaterialdesignicons /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Vite JS", icon: <SiVite /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "RESTful APIs", icon: <FaDatabase /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Sequelize", icon: <SiSequelize /> },
  { name: "AWS", icon: <SiAmazonwebservices /> },
];

export default function Skills() {
  // Function to determine color based on skill level
  const getColorForSkillLevel = (level: number) => {
    if (level >= 90) return "success";
    if (level >= 80) return "primary";
    if (level >= 70) return "secondary";
    return "warning";
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">My Skills</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and professional
          capabilities
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8"
      >
        <Card>
          <CardBody>
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">💻</span>
              <h2 className="text-2xl font-semibold text-primary">
                Frontend Development
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {/* <div className="flex items-center gap-4">
                <span className="w-4 h-4 bg-primary rounded-full"></span>
                <span>React & Next.js</span>
                <span className="text-gray-400 text-xs">2019 - Present</span>
              </div> */}
              {frontendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-blue-700"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🛠️</span>
              <h2 className="text-2xl font-semibold text-primary">
                Backend Development
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {backendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-blue-700"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16"
      >
        <Card className="border-none shadow-lg">
          <CardBody>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Additional Expertise
            </h2>
            <Divider className="my-4" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Data Structures",
                "Algorithms",
                "REST API",
                "TypeScript",
                "Responsive Design",
                "System Design",
                "Project Management",
                "Code Review",
                "Technical Documentation",
                "Performance Optimization",
                "Security Best Practices",
                "API Design",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-default-100 rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
