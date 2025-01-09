import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch("/videos.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedVideo = data.find((video) => video.id === parseInt(id));
        setVideo(selectedVideo);
      });
  }, [id]);

  if (!video) {
    return <div>Loading...</div>;
  }

  const embedUrl = video.videoUrl.replace("watch?v=", "embed/"); // Convert to embed URL

  return (
    <div className="mt-32 md:mt-36 lg:mt-48 px-6 container mx-auto p-4 flex flex-col text-justify">
      <h1 className="text-3xl font-bold mb-6">{video.title}</h1>
      <div className="mb-6">
        <iframe
          src={embedUrl}
          title={video.title}
          className="w-full h-96"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-lg">{video.description}</p>
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Details;
