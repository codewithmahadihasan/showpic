import React from 'react';
import { FiDatabase } from 'react-icons/fi';
import { FaCloud, FaCode, FaShareAlt } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';

const Feature = () => {
    const features = [
        {
            icon: <FaCloud className="w-6 h-6 " />,
            title: "Free Image Hosting",
            desc: "Users can upload images without the need to create an account."
        },
        {
            icon: <LuUpload className="w-6 h-6" />,
            title: "Image Upload",
            desc: "Users can upload images from their devices to the ShowPic platform."
        },
        {
            icon: <FaShareAlt className="w-6 h-6" />,
            title: "Image Sharing",
            desc: "Users get links to share images on websites or any social media."
        },
        {
            icon: <FaCode className="w-6 h-6" />,
            title: "Embed Codes",
            desc: "Users can get embed codes to directly display images on websites."
        },
        {
            icon: <MdDeleteOutline className="w-6 h-6" />,
            title: "Image Deletion",
            desc: "Users have the option to delete their uploaded images if needed."
        },
        {
            icon: <TbApi className="w-6 h-6" />,
            title: "API Support",
            desc: "We offer API support for developers, who needs gui less image upload."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Our Core Features And Services
                        </h3>
                        <p className="mt-3">
                            ShowPic is constantly evolving, adding new functionalities and improving existing ones. So, explore ShowPic's potential and experience a smooth and powerful image hosting solution!
                        </p>
                    </div>
                    <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx * 4} className="bg-white hover:border-[#0b64b4] hover:shadow-xl cursor-pointer space-y-3 p-4  border rounded-lg">
                                    <div className="text-white bg-[#0b64b4] rounded-full h-10 w-10 flex justify-center items-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Feature;