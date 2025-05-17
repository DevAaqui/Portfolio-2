"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Button,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import { projects } from "./project";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A showcase of my recent work and technical expertise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-none shadow-lg hover:shadow-xl transition-all"
          >
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{project.title}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.techStack.map((tech, index) => (
                    <Chip key={index} size="sm" color="primary" variant="flat">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="mb-4">
                <Image
                  alt={project.title}
                  className="object-cover rounded-xl w-full h-48"
                  src={project.image}
                  fallbackSrc="https://via.placeholder.com/300x150?text=Project+Image"
                />
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="font-semibold mb-2">Key Features:</p>
                <div className="flex flex-wrap gap-1">
                  {project.features.map((feature, index) => (
                    <Chip key={index} size="sm" variant="flat" className="mb-1">
                      {feature}
                    </Chip>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Achievements:</p>
                <ul className="list-disc list-inside text-gray-600">
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                as={Link}
                href="#"
                color="primary"
                variant="flat"
                className="mr-2"
                isDisabled
              >
                View Details
              </Button>
              <Button
                as={Link}
                href="#"
                color="primary"
                variant="ghost"
                isDisabled
              >
                Source Code
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
