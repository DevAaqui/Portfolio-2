"use client";
import { Card, CardBody, Link, Button } from "@nextui-org/react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className="max-w-xl mx-auto">
        <Card className="mb-8">
          <CardBody className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <Link
                  href="mailto:aaquibrais12345@gmail.com"
                  className="text-primary"
                >
                  aaquibrais12345@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <Link href="tel:+916394941128" className="text-primary">
                  +91 6394941128
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <Button
                  as={Link}
                  href="https://github.com/aaquibrais"
                  target="_blank"
                  rel="noopener noreferrer"
                  startContent={<FaGithub />}
                  variant="flat"
                  color="default"
                  size="lg"
                >
                  GitHub
                </Button>

                <Button
                  as={Link}
                  href="https://www.linkedin.com/in/aaquib-rais-1386a5a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startContent={<FaLinkedin />}
                  variant="flat"
                  color="primary"
                  size="lg"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
