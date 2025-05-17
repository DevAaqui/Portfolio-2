"use client";
import { Card, CardBody } from "@nextui-org/react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <div className="max-w-3xl">
        <Card className="mb-8">
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

        <Card className="mb-8">
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

        <Card>
          <CardBody>
            <h2 className="text-2xl font-semibold mb-4">
              Education & Experience
            </h2>
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
      </div>
    </div>
  );
}
