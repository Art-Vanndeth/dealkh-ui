'use client'
import React from 'react'
import { Link, Image } from '@nextui-org/react';
import ClearanceCardComponent from '@/components/card/ClearanceCard';
import ServiceCardComponent from '@/components/card/Service';

export default function Service() {
  return (
    <main>
        {/* Banner */}
        <div className="">
          <Image
            src="https://img.freepik.com/free-vector/flat-design-car-dealer-sale-banner-template_23-2149998205.jpg?t=st=1717932978~exp=1717936578~hmac=d2cc12bf7fd0d8b21f645c1176881947e68cd8601f7397c04fe30391f29febe4&w=1060"
            className="h-[320px] w-[1300px] object-cover" alt='Service'
          ></Image>
        </div>
        {/* Card */}
        <div className='my-10'>
        <ServiceCardComponent/>
        </div>
        <ServiceCardComponent/>
    </main>
  )
}
