import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    text: "QuickFunded has surpassed my expectations. Their thorough evaluation process, excellent trader support, and appealing profit-sharing model have made my trading journey both challenging and rewarding. If you're a disciplined trader looking for a prop trading opportunity, I highly recommend considering QuickFunded.",
  },
  {
    name: "Maria Gonzalez",
    text: "QuickFunded truly values its traders. The low commissions and excellent spreads have noticeably boosted my trading performance.",
  },
  {
    name: "David Lee",
    text: "I passed my two-step verification today and want to extend my gratitude to QuickFunded. I've tried several prop firms, but QuickFunded stands out with its tight spreads and impressive execution times.",
  },
];

const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className="w-full   
 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="flex justify-center text-[60px] font-bold bg-clip-text bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent mb-4">
          Success Stories
        </h2>

        {/* Testimonial carousel */}
        <div className="relative">
          {/* Circular name element */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg height="120" width="120" className="transform -rotate-90">
                <circle
                  cx="60"
                  cy="60"
                  r="58"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  fill="transparent"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="58"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="364"
                  strokeDashoffset="91"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-green-600 font-semibold text-sm">
                  {testimonials[currentIndex].name}
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial text */}
          <p className="text-center text-[#121316] opacity-[72%] font-[18px] mb-8 max-w-2xl mx-auto">
            {testimonials[currentIndex].text}
          </p>

          {/* Navigation buttons */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     name: "Alex Johnson",
//     text: "QuickFunded has surpassed my expectations. Their thorough evaluation process, excellent trader support, and appealing profit-sharing model have made my trading journey both challenging and rewarding. If you're a disciplined trader looking for a prop trading opportunity, I highly recommend considering QuickFunded.",
//   },
//   {
//     name: "Maria Gonzalez",
//     text: "QuickFunded truly values its traders. The low commissions and excellent spreads have noticeably boosted my trading performance.",
//   },
//   {
//     name: "David Lee",
//     text: "I passed my two-step verification today and want to extend my gratitude to QuickFunded. I've tried several prop firms, but QuickFunded stands out with its tight spreads and impressive execution times.",
//   },
// ];

// const SuccessStory = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div className="w-full bg-white">
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <h2
//           className="flex justify-center text-[60px] font-bold bg-clip-text
//                 bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent mb-4"
//         >
//           Success Stories
//         </h2>

//         {/* Testimonial carousel */}
//         <div className="relative">
//           {/* Circular name element */}
//           <div className="flex justify-center mb-8">
//             <div className="relative">
//               <svg height="120" width="120" className="transform -rotate-90">
//                 <circle
//                   cx="60"
//                   cy="60"
//                   r="58"
//                   stroke="#4CAF50"
//                   strokeWidth="2"
//                   fill="transparent"
//                 />
//                 <circle
//                   cx="60"
//                   cy="60"
//                   r="58"
//                   stroke="#4CAF50"
//                   strokeWidth="2"
//                   fill="transparent"
//                   strokeDasharray="364"
//                   strokeDashoffset="91"
//                 />
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-green-600 font-semibold text-sm">
//                   {testimonials[currentIndex].name}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Testimonial text */}
//           <p className="text-center text-[#121316] opacity-[72%] font-[18px] mb-8 max-w-2xl mx-auto">
//             {testimonials[currentIndex].text}
//           </p>

//           {/* Navigation buttons */}
//           <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
//             <button
//               onClick={prevTestimonial}
//               className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
//             >
//               <ChevronLeft size={24} />
//             </button>
//           </div>
//           <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
//             <button
//               onClick={nextTestimonial}
//               className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessStory;
