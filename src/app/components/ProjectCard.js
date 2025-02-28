import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ 
  name, 
  description,
  badges = [], 
  isGithub = true,
  imageContent,
  href 
}) => {
  return (
    <Link 
      href={href}
      className="block transition-transform lg:hover:-translate-y-1"
    >
      <Card className="w-full max-h-[390px] bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-4">

          {/* Image */}
          <div className="xs:h-48 lg:h-38 bg-white flex items-center justify-center mb-4">
            <Image 
                src={imageContent} 
                width={256}
                height={256}
                alt={name}
                className="object-contain h-256 w-256 rounded-lg border shadow-md"
              />
          </div>

          {/* Name */}
          <div className="mb-3">
            <span className="text-dark-gray font-medium">{name.length > 25 ? `${name.slice(0, 25)}...` : name}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-light-gray-3 hover:bg-light-gray-2"
              >
                {badge}
              </Badge>
            ))}
            {isGithub && (
                <Badge
                    variant="secondary"
                    className="bg-black hover:bg-light-gray-3 text-white hover:text-black"
                >
                    GITHUB
                </Badge>
            )}
          </div>

          {/* Description */}
          <div className="mt-3">
            <span className="text-dark-gray text-xs">{description.length > 40 ? `${description.slice(0, 40)}...` : description}</span>
          </div>

        </CardContent>
      </Card>
    </Link>
  );
};

// Usage
export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
      <ProjectCard
        name="Kaku Task & Notes"
        description="Task management and note-taking PWA."
        badges={["NEXT.JS"]}
        isGithub={true}
        imageContent={"/thumbnail/kakupreview.jpg"}
        href="#"
      />
      <ProjectCard
        name="NitroClicker"
        description="Open source console-based autoclicker."
        badges={["C++"]}
        isGithub={true}
        imageContent={"/thumbnail/nitropreview.jpg"}
        href="#"
      />
      <ProjectCard
        name="Goodwill Hotel"
        description="Hotel management system for Goodwill Hotel by IBSG."
        badges={["PHP", "CSS"]}
        isGithub={true}
        imageContent={"/thumbnail/goodwillpreview.jpg"}
        href="#"
      />
      <ProjectCard
        name="Camlin Arts & Crafts (Vanilla)"
        description="Basic landing page for Camlin Arts & Crafts"
        badges={["CSS", "HTML"]}
        isGithub={true}
        imageContent={"/thumbnail/camlinpreview.jpg"}
        href="#"
      />
    </div>
  );
}