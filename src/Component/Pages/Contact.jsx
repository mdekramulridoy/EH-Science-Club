import React from "react";
import Slider from "../Slider";

const Contact = () => {
  return (
    <div className="min-h-screen mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col items-center lg:h-[500px]">
        <Slider></Slider>
      </div>
      {/* Slider division */}
      <div className="flex flex-col items-center gap-0"> 
        <h1 className="text-center my-6 font-bold text-3xl text-blue-500 bg-slate-100 p-4 rounded-lg">Facebook Page</h1>
        
        {/* First Embedded Facebook Post */}
        <div className="w-full flex flex-col gap-2 items-center">
        <h1 className="my-2 font-bold md:text-2xl text-sm  text-center">
            Got Google AdSense Pin letter  
          </h1>
          <iframe className="lg:w-[1080px] lg:h-[720px] md:w-auto md:h-auto w-[300px]" 
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fscienceclub.eh%2Fvideos%2F1168210191032612%2F&show_text=false&width=560&t=0" 
            width="560" 
            height="314" 
            style={{border: 'none', overflow: 'hidden'}} 
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        </div>

        {/* Second Embedded Facebook Post */}
        <div className="md:my-6 w-full flex flex-col gap-2 items-center">
          <h1 className="my-2 font-bold md:text-2xl text-sm">
            Got Monetization  
          </h1>
          <iframe className="w-4/5 md:w-3/4" 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fscienceclub.eh%2Fposts%2F122120634566130146&show_text=true&width=500" 
            width="500" 
            height="590" 
            style={{border: 'none', overflow: 'hidden'}} 
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
