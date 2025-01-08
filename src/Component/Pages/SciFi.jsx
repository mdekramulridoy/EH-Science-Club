import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeSwitch/ThemeContext';

const SciFi = () => {
    const [videos, setVideos] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        fetch('videos.json') 
            .then(response => response.json())
            .then(data => {
                // Filter videos to only include those in the "tutorial" category
                const tutorialVideos = data.filter(video => video.category === 'sci-fi');
                setVideos(tutorialVideos);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Tutorial Videos</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {videos.map(video => (
                    <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden border-2 p-4 bg-transparent">
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-44 object-cover rounded-tr-lg rounded-tl-lg"
                        />
                        <div className="p-4 bg-white h-44 rounded-br-lg rounded-bl-lg flex flex-col justify-between">
                            <h2
                                className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-black' : 'text-black'}`}
                            >
                                {video.title}
                            </h2>
                            
                            <Link to={`/details/${video.id}`} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 text-center">
                                See Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SciFi;
