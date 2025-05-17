"use client";
import { Card, CardBody, Progress, Tooltip, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React & Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Material UI", level: 88 },
        { name: "Redux", level: 85 },
        { name: "Vite JS", level: 82 },
      ]
    },
    {
      name: "Backend Development",
      icon: "🔧",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 84 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Sequelize", level: 78 },
      ]
    },
    {
      name: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "AWS", level: 72 },
        { name: "Linux", level: 80 },
        { name: "Deployment", level: 82 },
        { name: "System Design", level: 85 },
      ]
    },
    {
      name: "Professional Skills",
      icon: "🤝",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Team Collaboration", level: 92 },
        { name: "Project Management", level: 85 },
        { name: "Agile Methodologies", level: 88 },
        { name: "Time Management", level: 87 },
      ]
    }
  ];

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
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
          A comprehensive overview of my technical expertise and professional capabilities
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div key={categoryIndex} variants={item}>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardBody>
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h2 className="text-2xl font-semibold text-primary">{category.name}</h2>
                </div>
                <Divider className="my-4" />
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Tooltip content={`${skill.level}% proficiency`}>
                        <Progress 
                          value={skill.level} 
                          color={getColorForSkillLevel(skill.level) as any}
                          className="h-2" 
                          aria-label={`${skill.name} skill level`}
                        />
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16"
      >
        <Card className="border-none shadow-lg">
          <CardBody>
            <h2 className="text-2xl font-semibold mb-6 text-center">Additional Expertise</h2>
            <Divider className="my-4" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Data Structures", "Algorithms", "REST API", "TypeScript",
                "Responsive Design", "System Design", "Project Management", "Code Review",
                "Technical Documentation", "Performance Optimization", "Security Best Practices", "API Design"
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