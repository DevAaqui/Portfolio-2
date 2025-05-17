"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  const handleDownloadResume = () => {
    // Create a link to the existing resume file in the root folder
    const link = document.createElement("a");
    link.href = "/Resume/Resume_aaquib.pdf";
    link.setAttribute("download", "Resume_Aaquib_Rais.pdf");
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4">
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl md:text-xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Aaquib Rais</span>
          </h3>
          <p className="text-xl mb-8 text-gray-600">
            Full Stack Developer specializing in modern web applications
          </p>
          <div className="flex justify-center gap-4">
            <Button as={Link} href="/projects" color="primary" size="lg">
              View My Work
            </Button>
            <Button
              color="primary"
              variant="bordered"
              size="lg"
              startContent={<FaDownload />}
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
