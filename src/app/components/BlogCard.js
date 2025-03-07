import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Atom, BatteryCharging, Milestone } from 'lucide-react';

const BlogCard = ({ 
  title,
  icon, 
  date, 
  href
}) => {
  return (
    <Link href={href}>
      <Button
        variant="outline"
        className="block w-full text-left text-sm text-dark-gray xs:pt-3 lg:pt-5 xs:pb-12 lg:pb-10 rounded-lg bg-white hover:bg-light-gray-3"
      >
        <div className="lg:flex justify-between w-full items-center">
          <span className="flex items-center">
            <div className="mr-2">{icon}</div>
            <p title={title} className="block lg:hidden">{title.length > 36 ? `${title.slice(0, 36)}...` : title}</p>
            <p title={title} className="xs:hidden lg:block">{title.length > 50 ? `${title.slice(0, 50)}...` : title}</p>
          </span>
          <span className="text-light-gray">{date}</span>
        </div>
      </Button>
    </Link>
  );
};

// Usage
export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <BlogCard
        title="5 better ways to create a React app"
        icon={<Atom />}
        date="Feb. 16, 2025"
        href="/blog/5-better-ways-to-create-a-react-app"
      />
      <BlogCard
        title="7 apps + websites for productivity and students 💻"
        icon={<BatteryCharging />}
        date="Feb. 10, 2025"
        href="/blog/7-apps-websites-for-productivity-and-students"
      />
      <BlogCard
        title="becoming 20 years old."
        icon={<Milestone />}
        date="Jan. 20, 2025"
        href="/blog/becoming-20-years-old"
      />
    </div>
  );
}