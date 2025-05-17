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
              Hi, I’m a passionate developer who loves turning ideas into
              scalable, efficient, and user-friendly applications. With a strong
              foundation in e.g., JavaScript, React.js, Next.js, Node.js, etc., I
              build full-stack web solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-4">
              My journey in tech started with a curiosity for how things work
              under the hood — now, I’m driven by the challenge of creating
              seamless digital experiences. Whether it’s designing responsive
              frontends, architecting clean APIs, or optimizing performance, I
              bring a balance of creativity and technical expertise to every
              project.
            </p>
            <p className="text-gray-600">
              Beyond code, I value clear communication, continuous learning, and
              building products that make a difference.
            </p>
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
                    <p className="font-medium">Senior Frontend Developer</p>
                    <p className="text-sm text-gray-500">
                      Tech Solutions Inc. | 2021 - Present
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Web Developer</p>
                    <p className="text-sm text-gray-500">
                      Digital Creations | 2019 - 2021
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary">Education</h3>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="font-medium">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-sm text-gray-500">
                      University of Technology | 2015 - 2019
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
