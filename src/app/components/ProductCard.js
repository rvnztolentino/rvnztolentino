import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ 
  name, 
  subtitle,
  price,
  badges = [], 
  isAvailable = true,
  imageContent,
  href,
  type = "all",
}) => {
  return (
    <Link 
      href={isAvailable ? href : "#"}
      onClick={(e) => {
        if (!isAvailable) {
          e.preventDefault()
          alert("This product is currently not available.")
        }
      }}
      className="block transition-transform lg:hover:-translate-y-1"
    >
      <Card className="w-full max-h-[450px] bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-4">

          {/* Image */}
          <div className="h-64 bg-white flex items-center justify-center mb-4">
            <Image 
                src={imageContent} 
                width={256}
                height={256}
                alt={name}
                className="object-contain h-256 w-256 rounded-lg shadow-md"
              />
          </div>

          {/* Name */}
          <div className="mb-3">
            <span title={name} className="text-dark-gray font-medium">{name.length > 25 ? `${name.slice(0, 25)}...` : name}</span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span className="text-green-600 font-medium">{price == 0 ? "FREE" : `$${price}`}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-light-gray-3 hover:bg-light-gray-2 text-gray-600 rounded-full"
              >
                {badge}
              </Badge>
            ))}
          </div>
          
          {/* Subtitle */}
          <div className="mt-3">
            <span title={subtitle} className="text-dark-gray text-xs">{subtitle.length > 40 ? `${subtitle.slice(0, 40)}...` : subtitle}</span>
          </div>

        </CardContent>
      </Card>
    </Link>
  );
};

// Usage
export default function ProductGrid({ type }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">

      {(type === "notion" || type === "all") && (
        <ProductCard
          name="My Manga Library & Reading Tracker"
          subtitle="Track & organize your manga reading."
          price="2.60"
          badges={["NOTION TEMPLATE", "NEW"]}
          isAvailable={false}
          imageContent={"/thumbnail/mangalibrary.jpg"}
          href="#"
        />
      )}
      
      {(type === "notion" || type === "all") && (
        <ProductCard
          name="Student Life Dashboard"
          subtitle="Customizable student management tool."
          price="0"
          badges={["NOTION TEMPLATE", "FREE"]}
          isAvailable={false}
          imageContent={"/thumbnail/studentdashboard.jpg"}
          href="#"
        />
      )}
      
    </div>
  );
}