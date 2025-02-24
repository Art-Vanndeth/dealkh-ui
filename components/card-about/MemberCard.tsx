'use client';
import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import { MemberList } from './memberList';
import { Image } from '@nextui-org/react';
import Marquee from 'react-fast-marquee';

type Members = {
  img: string;
  name: string;
  role: string;
};

export default function MemberCard() {
  const [members, setMembers] = useState<Members[]>(MemberList);

  return (
    <Marquee pauseOnHover={true} speed={50} className={'my-8 flex space-x-10'}>
      <div className="flex space-x-10">
        {members.map((item, index) => (
          <div
            key={index}
            className="relative w-[250px] max-w-sm  items-center  overflow-hidden rounded-3xl   px-5 py-10 dark:border-warning-200"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute inset-[0%] animate-[spin_3s_linear_infinite] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#EC4899_0%,#EAB308_50%,#EC4899_100%)]  blur-sm"></span>
              <Image
                isBlurred
                isZoomed
                radius={'full'}
                src={item.img}
                alt={item.name}
                className="h-[200px] w-[200px]"
              />
            </div>
            <div className="py-4 text-center">
              <div className="mb-2 text-2xl font-bold">{item.name}</div>
              <div className="mb-2 text-lg ">{item.role}</div>
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
    </Marquee>
  );
}
