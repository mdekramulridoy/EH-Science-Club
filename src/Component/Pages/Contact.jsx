import React, { useState } from "react";

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-500 via-black to-black text-white lg:mt-32 md:mt-20 mt-10">
      {/* Hero Section */}
      <div className="hero-section text-center py-20">
        <h1 className="text-xl md:text-3xl font-bold mb-4 text-white">
          Get in Touch with Us
        </h1>

        <div className="flex flex-col ">
          <li className="text-sm md:text-xl text-gray-300">
            I'm here to answer your questions and connect with you!
          </li>
          <li className="text-sm md:text-xl text-gray-300">
            Give me your valuable feedback that helps me to grow !!
          </li>
          <a href="https://www.facebook.com/scienceclub.eh" target="_blank" rel="noopener noreferrer" className="text-black font-bold py-s px-4 bg-white my-6 lg:w-2/12 mx-auto rounded-xl border">You can follow me</a>

        </div>
      </div>
      {/* FAQs Section */}
      <div className="faqs-section py-2 px-5 md:px-20">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-white">
          Frequently Asked Questions
        </h2>

        {[
          {
            question: "What is Google AdSense?",
            answer:
              "Google AdSense is a program that allows publishers to earn revenue by displaying ads on their websites, blogs, or videos.",
          },
          {
            question: "How can I earn money through AdSense?",
            answer:
              "You can earn money by monetizing your website, blog, or YouTube channel and displaying relevant ads.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="faq-item mb-6 border-b border-gray-700 lg:w-[60%] mx-auto pb-4 text-white"
          >
            <button
              className="w-full text-left font-semibold text-sm bg-gray-800 p-4 rounded-lg focus:outline-none hover:bg-gray-700 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openFAQ === index ? "max-h-[200px] mt-2" : "max-h-0"
              }`}
            >
              <p className="text-white mt-2 pl-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Posts Section */}
      <div className="py-16 px-5 md:px-20">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-white">
          Recent Updates
        </h2>

        {/* First Embedded Facebook Post */}
        <div className="w-full flex flex-col gap-6 items-center">
          <h3 className="text-sm font-bold text-center text-white">
            Got Google AdSense Pin Letter
          </h3>
          <iframe
            className="rounded-lg shadow-lg w-[90%] md:w-[650px] h-[400px] lg:w-[1080px] lg:h-[600px]"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fscienceclub.eh%2Fvideos%2F1168210191032612%2F&show_text=false&width=560&t=0"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

        {/* Second Embedded Facebook Post */}
        <div className="mt-1 w-full flex flex-col gap-6 items-center">
          <h3 className="text-sm font-bold text-white">Got Monetization</h3>
          <iframe
            className="rounded-lg shadow-lg w-[90%] md:w-[650px] h-[400px] lg:w-[1080px] lg:h-[600px]"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fscienceclub.eh%2Fposts%2F122120634566130146&show_text=true&width=500"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
