import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Team = () => {

    const teamData = [
        {
            name: "Saidur Rahman Siam",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Founder & CEO",
            social: [
                {
                    facebook: "www.facebook.com",
                    twitter: "www.x.com",
                    linkedin: "www.linkedin.com"
                }
            ]
        },
        {
            name: "Uyemong Marma",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Founder & CEO",
            social: [
                {
                    facebook: "www.facebook.com",
                    twitter: "www.x.com",
                    linkedin: "www.linkedin.com"
                }
            ]
        },
        {
            name: "Mahadi Hasan",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Founder & CEO",
            social: [
                {
                    facebook: "www.facebook.com",
                    twitter: "www.x.com",
                    linkedin: "www.linkedin.com"
                }
            ]
        },
        {
            name: "John Doe",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Founder & CEO",
            social: [
                {
                    facebook: "www.facebook.com",
                    twitter: "www.x.com",
                    linkedin: "www.linkedin.com"
                }
            ]
        },
        {
            name: "John Doe",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Founder & CEO",
            social: [
                {
                    facebook: "www.facebook.com",
                    twitter: "www.x.com",
                    linkedin: "www.linkedin.com"
                }
            ]
        },
        {
            name: "John Doe",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Founder & CEO",
            social: [
                {
                    facebook: "www.facebook.com",
                    twitter: "www.x.com",
                    linkedin: "www.linkedin.com"
                }
            ]
        },
        {
            name: "John Doe",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Founder & CEO",
            social: [
                {
                    facebook: "www.facebook.com",
                    twitter: "www.x.com",
                    linkedin: "www.linkedin.com"
                }
            ]
        },
        {
            name: "John Doe",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Founder & CEO",
            social: [
                {
                    facebook: "www.facebook.com",
                    twitter: "www.x.com",
                    linkedin: "www.linkedin.com"
                }
            ]
        },
    ]


    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16'>
            <section className="bg-white ">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
                        Our Executive Team
                    </h1>
                    <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex
                        placeat modi magni quia error alias, adipisci rem similique, at omnis
                        eligendi optio eos harum.
                    </p>
                    <div >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                teamData.map((team, index) => (
                                    <SwiperSlide key={index + 2}> <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#0b64b4] border-gray-700 ">
                                        <img
                                            className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                                            src={team.image}
                                            alt=""
                                        />
                                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                                            {team.name}
                                        </h1>
                                        <p className="mt-2 text-gray-500 group-hover:text-white capitalize">
                                            {team.title}
                                        </p>
                                        <div className=" mt-3 -mx-2">
                                            {team.social.map((social, socialIdx) => (
                                                <div className='flex'>

                                                    {social.facebook && <a
                                                        href="#"
                                                        className="mx-2 text-gray-600  hover:text-gray-500 hover: group-hover:text-white"
                                                    >
                                                        <FaFacebook className="w-6 h-6 fill-current" />


                                                    </a>}
                                                    {social.linkedin && <a
                                                        href="#"
                                                        className="mx-2 text-gray-600  hover:text-gray-500 hover: group-hover:text-white"
                                                    >
                                                        <FaLinkedin className="w-6 h-6 fill-current" />

                                                    </a>}
                                                    {social.twitter && <a
                                                        href="#"
                                                        className="mx-2 text-gray-600  hover:text-gray-500 hover: group-hover:text-white"
                                                    >
                                                        <FaTwitter className="w-6 h-6 fill-current" />

                                                    </a>}
                                                </div>
                                            ))}
                                        </div>
                                    </div></SwiperSlide>

                                ))
                            }

                        </Swiper>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Team;
