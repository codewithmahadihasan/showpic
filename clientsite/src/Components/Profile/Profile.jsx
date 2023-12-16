import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FiLogOut } from 'react-icons/fi';
import { FaKey } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { user, logOut, token } = useContext(AuthContext)

    const { email } = useParams();
    console.log(user?.email, email);

    const textToCopy = token;
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        // Create a temporary element (input) to hold the text
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);

        // Select and copy the text
        tempInput.select();
        document.execCommand('copy');

        // Remove the temporary element
        document.body.removeChild(tempInput);

        // Set the state to show "Copied!" on the button
        setIsCopied(true);

        // Reset the state after a brief delay
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };


    return (
        <div className="bg-white rounded-lg shadow-xl pb-8 px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

            <div className="w-full h-[250px]">
                <img
                    src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
                    className="w-full h-full rounded-tl-lg rounded-tr-lg"
                    alt="Profile Background"
                />
            </div>
            <div className="flex flex-col items-center -mt-20">
                {user?.photoURL ? <img
                    src={user?.photoURL}
                    className="w-40 border-4 border-white rounded-full"
                    alt="Profile"
                /> : <div className="w-40 border-4 border-white rounded-full h-40 text-7xl text-white flex justify-center items-center bg-gray-500 ">{user?.displayName.slice(0, 1)}</div>}
                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl">{user?.displayName}</p>
                    <span className="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-100 h-2.5 w-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="4"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </span>
                </div>
                {/* <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-2 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">Images</dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">22</dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-2 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">Album</dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-2 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">Favorite</dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                        </div>
                    </dl>
                </div> */}
            </div>
            {email === user?.email && <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100" onClick={copyToClipboard}>
                        {isCopied ? 'Copied!' :
                            <div className='flex items-center gap-2'>
                                <FaKey className="h-4 w-4" />
                                <span>Get Api Key</span>
                            </div>}

                    </button>
                    <button onClick={() => logOut()} className="flex items-center bg-red-600 hover:bg-red-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                        <FiLogOut className="h-4 w-4" />
                        <span>Log Out</span>
                    </button>
                </div>
            </div>}
        </div>
    );
};

export default Profile;