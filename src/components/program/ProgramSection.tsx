import { ArrowRight, Dumbbell, Heart, Trophy, Weight } from "lucide-react";

const programs = [
  {
    icon: <Dumbbell className="h-8 w-8 text-white" />,
    title: "Strength Training",
    description: "Our trainers will design that a progressive workout plan that proper achieve gains strength.",
  },
  {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Basic Yoga",
    description: "This program combines yoga with cardio & strength training to help lose weight & fitness.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-white" />,
    title: "Body Building",
    description: "For those looking to increase strength build lean muscle, our strength & muscle.",
  },
  {
    icon: <Weight className="h-8 w-8 text-white" />,
    title: "Weight Loss",
    description: "Our weight loss programs are designed to help you make sustainable lifestyle changes.",
  },
];

export const ProgramSection = () => {
  return (
    <section className="py-20 px-4 bg-zinc-700">
      <div className="max-w-6xl mx-auto">
        <div className=" mb-16 lg:grid grid-cols-2">
          <div className="text-4xl font-bold text-white mb-4 ">
            The Best Programs We Offers For You
          </div>
          <div className="text-gray-400 lg:px-8">
            We offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness levels. Our aim to help your achieve specific goals & maximize results.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`p-6 bg-stone-500 hover:bg-orange-500 duration-300 transform hover:-translate-y-1 transition-transform`}
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-white hover:text-gray-100 mb-3">
                {program.title}
              </h3>
              <p className={`mb-4 text-sm hover:text-gray-100 text-white`}>
                {program.description}
              </p>
              <button
                className={`flex items-center p-0 h-auto text-white  hover:text-gray-400 hover:bg-transparent`}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};