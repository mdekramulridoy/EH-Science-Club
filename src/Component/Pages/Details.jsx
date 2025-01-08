import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        fetch('/videos.json') 
            .then(response => response.json())
            .then(data => {
                const selectedVideo = data.find(video => video.id === parseInt(id));
                setVideo(selectedVideo);
            });
    }, [id]);

    if (!video) {
        return <div>Loading...</div>;
    }

    const embedUrl = video.videoUrl.replace('watch?v=', 'embed/'); // Convert to embed URL

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">{video.title}</h1>
            <div className="mb-6">
                <iframe
                    src={embedUrl}
                    title={video.title}
                    className="w-full h-64"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <p className="text-lg">{video.description}</p>
        </div>
    );
};

export default Details;
