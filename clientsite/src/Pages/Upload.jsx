// import React, { useState } from 'react';

// const Upload = () => {
//     const [files, setFiles] = useState(false)

//     const handleFileChange = (e) => {
//         const selectedFile = e.target.files[0];
//         if (selectedFile) {
//             setFiles(selectedFile)
//         }
//         else {
//             setFiles(false)
//         }
//         console.log('Selected file:', selectedFile);
//     };
//     return (
//         <div>
//             {
//                 !files ? <section className="bg-gray-50">
//                     <div>
//                         <div className="mx-auto max-w-screen-xl px-4 py-40 lg:flex lg:items-center">
//                             <div className="mx-auto max-w-2xl text-center">
//                                 <h1 className="text-3xl font-extrabold sm:text-5xl">
//                                     Upload and share your images.
//                                 </h1>

//                                 <p className="mt-4 sm:text-xl/relaxed">
//                                     Share your photos with the world or keep them private for personal use. You can upload up to 8 files at once, each file should
//                                 </p>

//                                 <div className="mt-8 flex flex-wrap justify-center gap-4">
//                                     <div>
//                                         <label htmlFor="fileInput" className="block w-full rounded bg-[#42a7ff] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#0B64B4] focus:outline-none focus:ring active:bg-[#0B64B4] sm:w-auto cursor-pointer">
//                                             Start Uploading
//                                         </label>
//                                         <input
//                                             type="file"
//                                             id="fileInput"
//                                             className="hidden"
//                                             onChange={handleFileChange}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section> :
//                     <section className="bg-gray-50">
//                         <div>
//                             <div className="mx-auto max-w-screen-xl px-4 py-40 lg:flex lg:items-center">
//                                 <div className="mx-auto max-w-2xl text-center">
//                                     <h1 className="text-3xl font-extrabold sm:text-5xl">
//                                         FIle Uploaded
//                                     </h1>

//                                     <img src={files} alt="" />

//                                     <div className="mt-8 flex flex-wrap justify-center gap-4">
//                                         <div>
//                                             <label htmlFor="fileInput" className="block w-full rounded bg-[#42a7ff] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#0B64B4] focus:outline-none focus:ring active:bg-[#0B64B4] sm:w-auto cursor-pointer">
//                                                 Start Uploading
//                                             </label>
//                                             <input
//                                                 type="file"
//                                                 id="fileInput"
//                                                 className="hidden"
//                                                 onChange={handleFileChange}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//             }

//         </div>
//     );
// };
import React, { useContext, useState } from 'react';
import { FaCross } from 'react-icons/fa';
import { ImCross } from "react-icons/im";
import { AuthContext } from '../Provider/AuthProvider';

const Upload = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        if (selectedFiles.length > 0) {
            setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
        }
    };

    const handleDelete = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    const handleDrop = (e) => {
        e.preventDefault();

        const droppedFiles = Array.from(e.dataTransfer.files);

        if (droppedFiles.length > 0) {
            setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const [loading, setLoading] = useState(false)
    const { token } = useContext(AuthContext)




    const handleUpload = async () => {
        const formData = new FormData();
        if (files.length > 1) {
            // multiple 

            for (const file of files) {
                formData.append("images", file);
            }
        }
        else {
            // single 
            const file = files[0]
            formData.append("image", file);
        }

        console.log(formData);


        try {

            const singleUrl = `http://localhost:10000/api/v1/image?api_key=${token}`
            const multipleUrl = `http://localhost:10000/api/v1/image/multiple?api_key=${token}`

            const url = files.length > 1 ? multipleUrl : singleUrl;

            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log(data);
            // Update UI with uploaded image information
        } catch (error) {
            console.error(error);
        } finally {
            setFiles([]); // Clear file selection
        }
    };




    return (
        <div>
            {files.length === 0 ? (
                <section onDrop={handleDrop}
                    onDragOver={handleDragOver} className="bg-gray-50">
                    <div>
                        <div className="mx-auto max-w-screen-xl px-4 py-40 lg:flex lg:items-center">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Upload and share your images.
                                </h1>

                                <p className="mt-4 sm:text-xl/relaxed">
                                    Share your photos with the world or keep them private for personal use. You can upload multiple files at once.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <div>
                                        <label htmlFor="fileInput" className="block w-full rounded bg-[#42a7ff] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#0B64B4] focus:outline-none focus:ring active:bg-[#0B64B4] sm:w-auto cursor-pointer">
                                            Start Uploading
                                        </label>
                                        <input
                                            accept='image'
                                            type="file"
                                            id="fileInput"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section onDrop={handleDrop}
                    onDragOver={handleDragOver} className="bg-gray-50">
                    <div>
                        <div className="mx-auto max-w-screen-xl px-4 py-40 lg:flex lg:items-center">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Files Uploaded
                                </h1>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    {files.map((file, index) => (
                                        <div key={index} className="relative group">
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt={`Uploaded File ${index}`}
                                                className="w-32 h-32 rounded object-cover border cursor-pointer"
                                            />
                                            <button
                                                className="absolute top-2 right-2 flex justify-center items-center bg-red-500 text-white z-20 h-4 w-4 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                                                onClick={() => handleDelete(index)}
                                            >
                                                <ImCross className='h-2 w-2' />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <div>
                                        <button onClick={() => handleUpload()} htmlFor="fileInput" className="block w-full rounded bg-[#42a7ff] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#0B64B4] focus:outline-none focus:ring active:bg-[#0B64B4] sm:w-auto cursor-pointer">
                                            Upload your file
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

// export default Upload;

export default Upload;