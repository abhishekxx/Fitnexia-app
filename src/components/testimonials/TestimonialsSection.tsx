"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Farhan Rio",
    role: "Happy Customer",
    content: "I've been coming to this gym for 3 year now and I've never been in better shape. The trainers are amazing and they always push me be my best. I'm so glad to this gym",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Member",
    content: "The variety of classes and expert trainers have transformed my fitness journey. Highly recommend!",
    rating: 5
  },
  {
    name: "Mike Johnson",
    role: "Client",
    content: "Best fitness investment I've made. The community is supportive and the results speak for themselves.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-zinc-800">
      <div className="max-w-6xl mx-auto xl:flex ">
        <div className="p-2">
        <h2 className="text-4xl font-bold text-white ">
          What Our Happy Clients<br/> Say About Us 
        </h2>
        <p className="text-white mt-5">
            We are a gym that is committed to helping people reach their fitness goals. 
          <br/>We offer a variety of fitness programs and services to fit your needs, whether 
          you are a experienced athlete.
        </p>
        <div className="text-gray-400 flex items-center mt-5 gap-3">
            <StarIcon className="text-gray-400 h-10 w-10" /> <span className="font-bold text-2xl">Trustpilot</span>
        </div>
        </div>
        <div className="relative">
          <div className="bg-gray-700 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-500 rounded-full mr-4" />
              <div>
                <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-gray-300">{testimonials[currentIndex].content}</p>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-12 bg-orange-500 p-1 rounded-full text-white hover:bg-orange-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-8 top-1/2 -translate-y-1/2 translate-x-12 bg-orange-500 p-1 rounded-full text-white hover:bg-orange-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

//            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600"
