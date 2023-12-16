import React from 'react';
import { FiDatabase } from "react-icons/fi"
import { MdCloudUpload } from "react-icons/md"
import { TbApi } from "react-icons/tb"
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/homeAnimation.json";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-[#0b64b4]">
                                Save Your Database, Secure Your Future
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Upload
                            <br className="hidden md:block" />
                            And Share {' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                Your Images
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Drag and drop anywhere you want and start uploading your images now. Direct image links, BBCode and HTML thumbnails.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 items-center md:flex-row">
                        <Link
                            className="inline-block rounded border border-[#0b64b4] bg-[#0b64b4] px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-indigo-500"
                            to="/upload"
                        >
                            Start Uploading
                        </Link>


                        <a
                            className="inline-block rounded border border-[#0b64b4] px-12 py-3 text-sm font-medium text-[#0b64b4] hover:bg-[#0b64b4] hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download"
                        >
                            Get API Key
                        </a>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    {/* <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt=""
                    /> */}
                    <Lottie className="object-cover w-full h-56 rounded sm:h-96" animationData={groovyWalkAnimation} loop={true} />
                    {/* <a
                        href="/"
                        aria-label="Play Video"
                        className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                    >
                        <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                            <svg
                                className="w-10 text-gray-900"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                            </svg>
                        </div>
                    </a> */}
                </div>
            </div>
            <div className="relative px-4 sm:px-0">
                <div className="absolute inset-0 h-1/2" />
                <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">

                            <FiDatabase className="w-8 h-8" />
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                            Save Your Database
                        </p>
                    </div>
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                            <MdCloudUpload className="w-8 h-8" />
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                            Upload Free Image
                        </p>
                    </div>
                    <div className="inline-block p-8 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">

                            <TbApi className="w-8 h-8" />
                        </div>
                        <p className="font-bold tracking-wide text-gray-800">
                            Use Api For Upload
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
