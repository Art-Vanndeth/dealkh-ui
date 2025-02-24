"use client"
import { Link} from '@nextui-org/react';
import Next, { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { BsCamera } from 'react-icons/bs';
import { PiInstagramLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import Map from '../map/map';
import {Button} from "@nextui-org/react";

type ProfileProps = {
    
};

const ProfileComponent: NextPage<ProfileProps> = () => {
    const [profileImage, setProfileImage] = useState('/images/members/votey.jpg');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e: any) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="bg-white dark:bg-black rounded-md min-h-[55vh] w-full p-8">
            <div className="relative w-full h-72">
                <Image 
                    src="/images/members/layhak.jpg" 
                    alt="Header Image" 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="relative mt-4">
                <div className="absolute top-0 bottom-24 left-10 flex items-center">
                    <div className="relative flex-shrink-0">
                        <label htmlFor="fileInput" className="cursor-pointer relative">
                            <Image 
                                src={profileImage} 
                                alt="Logo" 
                                width={120} 
                                height={120} 
                                className="rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 bg-warning p-2 rounded-full">
                                <BsCamera className="text-white" size={20} />
                            </div>
                        </label>
                        <input 
                            id="fileInput" 
                            type="file" 
                            accept="image/members/votey.jpg" 
                            className="hidden" 
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="ml-4 mr-3">
                        <h2 className="text-lg font-medium pt-8">Hom Pheakakvotey</h2>
                        {/* <PiInstagramLogo className="w-8 h-8 " /> */}
                    </div>
                </div>
            </div>
        </div>

        <div className=" mt-8 bg-white dark:bg-black rounded-md min-h-[55vh] w-full p-8">
            <p className="text-2xl font-medium">Personal Information</p>
            <div className="p-4 text-black dark:text-white flex flex-col md:flex-row">
                <div className="flex-1 mb-4 md:mb-0">
                    <div className="py-4">
                        <p className="font-semibold text-lg">Email Address</p>
                        <p className="text-md mt-2">Pheakakvotey@gmail.com</p>
                    </div>
                    <div className="py-4">
                        <p className="font-semibold text-lg">Phone Number</p>
                        <p className="mt-2 text-md">096 908 897</p>
                    </div>
                    <div className="py-4">
                        <p className="font-semibold text-lg">Date of Birth</p>
                        <p className="mt-2 text-md">Aug 30,2024</p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="py-4">
                        <p className="font-semibold text-lg">Gender</p>
                        <p className="mt-2 text-md">Female</p>
                    </div>
                    <p className="text-lg font-semibold mb-3">Social Media</p>
                    <div className="flex gap-2 py-2">
                    <Link
                            href="#"
                        >
                           <SlSocialFacebook className="w-8 h-8 text-black" />  
                    </Link>
                    <Link
                            href="#"
                        >
                             <PiInstagramLogoLight className="w-9 h-9 text-black"/>
                    </Link>
                    <Link
                            href="#"
                        >
                             <PiTelegramLogo className="w-9 h-9 text-black"/>
                    </Link>
                    </div>
                </div>
            </div>

            {/* <div className="py-4">
                <p className="font-semibold text-lg mb-5">Location</p>
                <Map shops={[]}/>
            </div> */}

            <div className="flex justify-end ">
                        <Link
                            href="/profiles/profileSellerUpdate"
                        >
                            <Button color="warning" className="text-white bg-gradient-to-r text-md to-yellow-500 from-pink-500 rounded-md">
                                Update
                            </Button>  
                        </Link>
                </div>

        </div>
        </div>
    );
};

export default ProfileComponent;
