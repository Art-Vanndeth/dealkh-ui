'use client';
import React, { useState } from 'react';
import { MentorList } from './mentorList';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import { Image } from '@nextui-org/react';

type MentorList = {
  img: string;
  name: string;
};

export default function MentorCard() {
  const [mentors, setMentors] = useState<MentorList[]>(MentorList);

  return (
    <div className="my-8 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
      {mentors.map((item, index) => (
        <div
          key={index}
          className="w-72 max-w-sm overflow-hidden rounded-xl  p-8 "
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute inset-[-0.35%] animate-[spin_3s_linear_infinite] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#EC4899_0%,#EAB308_50%,#EC4899_100%)] p-[1px] blur-sm"></span>
            <div className="relative rounded-full bg-background p-1">
              <Image
                isBlurred
                radius={'full'}
                src={item.img}
                alt={item.name}
                className="h-[210px] w-[210px] "
              />
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="mb-2 text-center text-xl font-bold">
              {item.name}
            </div>
          </div>
          <div className="flex w-full justify-around px-6 py-4">
            <div className="flex flex-col justify-center">
              <div className="mx-auto max-w-7xl">
                <div className="st-current group relative flex items-center gap-1.5 overflow-hidden rounded-full p-[1px] font-semibold text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <span className="absolute inset-[-10%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EC4899_0%,#EAB308_50%,#EC4899_100%)]"></span>
                  <div className="mx-[0.5px] my-[0.5px] inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-background text-sm font-medium text-foreground backdrop-blur-3xl transition-background group-hover:bg-background/70">
                    <FaFacebookF />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mx-auto max-w-7xl">
                <div className="st-current group relative flex items-center gap-1.5 overflow-hidden rounded-full p-[1px] font-semibold text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <span className="absolute inset-[-10%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EC4899_0%,#EAB308_50%,#EC4899_100%)]"></span>
                  <div className="mx-[0.5px] my-[0.5px] inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-background text-sm font-medium text-foreground backdrop-blur-3xl transition-background group-hover:bg-background/70">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mx-auto max-w-7xl">
                <div className="st-current group relative flex items-center gap-1.5 overflow-hidden rounded-full p-[1px] font-semibold text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <span className="absolute inset-[-10%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EC4899_0%,#EAB308_50%,#EC4899_100%)]"></span>
                  <div className="mx-[0.5px] my-[0.5px] inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-background text-sm font-medium text-foreground backdrop-blur-3xl transition-background group-hover:bg-background/70">
                    <FaGoogle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
