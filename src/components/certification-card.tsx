"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  image: string;
  href: string;
}

interface Props {
  certifications: Certification[];
}

export function CertificationCard({ certifications }: Props) {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex w-max animate-scroll-left gap-4">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="min-w-[220px] max-w-[220px] flex flex-col items-center justify-between border shadow-sm hover:shadow-md transition-all duration-300 bg-background"
          >
            {/* <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
              <Image
                src={cert.image}
                alt={cert.title}
                width={60}
                height={60}
                className="object-contain"
              />
              <h3 className="text-sm font-semibold text-center">{cert.title}</h3>
            </CardContent> */}
            {/* <CardContent className="flex flex-col items-center justify-between p-3">
  <div className="w-full h-[140px] flex items-center justify-center">
    <Image
      src={cert.image}
      alt={cert.title}
      width={200}
      height={140}
      className="object-contain w-full h-full rounded-md"
    />
  </div>
  <h3 className="mt-2 text-sm font-semibold text-center leading-tight px-2">
    {cert.title}
  </h3>

</CardContent> */}
<CardContent className="flex flex-col items-center justify-start p-2">
  <div className="w-full h-[180px] flex items-center justify-center">
    <Image
      src={cert.image}
      alt={cert.title}
      width={220}
      height={180}
      className="object-contain w-full h-full rounded-md"
    />
  </div>
  <h3 className="mt-1 text-sm font-semibold text-center leading-snug px-2">
    {cert.title}
  </h3>
</CardContent>

            <CardFooter className="pb-4">
              <Link href={cert.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs px-3 py-1 hover:bg-blue-500 hover:text-white transition"
                >
                  View Credential
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
