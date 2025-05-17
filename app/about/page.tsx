"use client";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function About() {
  // Animation variant for right-to-left motion
  const cardVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };
  const cardVariantLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* 1st Card: Left */}
      <div className="flex justify-start">
        <div className="w-full md:w-1/2">
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <Card className="mb-2">
              <CardBody>
                <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                <p className="text-gray-600 mb-4">
                  I'm a dynamic Full Stack Developer with a strong foundation in
                  system design and a deep interest in building scalable web
                  applications. With hands-on experience across both frontend and
                  backend technologies, I specialize in creating performance-driven
                  solutions using tools like NextJS, ReactJS, NodeJS, MongoDB,
                  MySQL, AWS Serverless, and more.
                </p>
                <p className="text-gray-600 mb-4">
                  My professional journey spans across impactful domains such as
                  solar energy solutions, IoT-based systems, and enterprise-grade
                  applications. I've had the opportunity to contribute to platforms
                  like solar based iot solutions, traceability system, failure
                  tracking tools, and store-and-forward systems that ensure data
                  integrity in low-connectivity environments.
                </p>
                <p className="text-gray-600 font-semibold">
                  I'm passionate about solving real-world problems through
                  technology and enjoy collaborating with cross-functional teams to
                  transform ideas into reliable products.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* 2nd Card: Right */}
      <div className="flex justify-end">
        <div className="w-full md:w-1/2">
          <motion.div
            variants={cardVariantLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <Card className="mb-2">
              <CardBody>
                <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-primary mb-3">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        React.js
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Tailwind CSS
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Material UI
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-primary mb-3">
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Express.js
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        MongoDB
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        MySQL
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Amazon DynamoDB
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-primary mb-3">
                      Cloud & DevOps
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        AWS
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Azure
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Git
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        CI/CD
                      </span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* 3rd Card: Left */}
      <div className="flex justify-start">
        <div className="w-full md:w-1/2">
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <Card className="mb-2">
              <CardBody>
                <h2 className="text-2xl font-semibold mb-4">Education & Experience</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-primary">
                      Professional Experience
                    </h3>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="font-medium">Software Engineer</p>
                        <p className="text-sm text-gray-500">
                          Quadrical AI | Dec 2024 – Present
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Software Engineer</p>
                        <p className="text-sm text-gray-500">
                          Techpearl | Jun 2023 – Dec 2024
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Backend Engineer</p>
                        <p className="text-sm text-gray-500">
                          Myweblink Technologies | Nov 2021 – May 2023
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-primary">Education</h3>
                    <div className="mt-2 space-y-3">
                      <div>
                        <p className="font-medium">
                          B.Tech in Electronics & Communication Engineering
                        </p>
                        <p className="text-sm text-gray-500">RKGIT | 2011 – 2015</p>
                      </div>
                      <div>
                        <p className="font-medium">
                          Intermediate – PCM with Science
                        </p>
                        <p className="text-sm text-gray-500">
                          Oxford Model Sr. Sec. School | 2008 – 2009
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
