import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useParams } from 'react-router-dom';

const ProfileImageCollection = () => {

    const { token } = useContext(AuthContext)
    // console.log(token);
    const { email } = useParams();

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch(`http://localhost:10000/api/v1/user/image/${email}?api_key=${token}`).then((res) => res.json()).then((data) => setImages(data.data))
    }, [email])

    console.log(images);

    return (
        <div className=' py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                {
                    images.map((image, index) => (
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src={`http://localhost:10000/api/v1/image/${image._id}`}
                                loading="lazy"
                                alt="Photo by Minh Pham"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                                <p className="text-white text-lg font-semibold">{image.name}</p>
                            </div>
                        </a>
                    ))
                }
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                    >
                        <img
                            src={`http://localhost:10000/api/v1/image/${image._id}`}
                            loading="lazy"
                            alt={`Photo ${index + 1}`}
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                       
                    </div>
                ))}
            </div> */}



        </div>
    );
};

export default ProfileImageCollection;