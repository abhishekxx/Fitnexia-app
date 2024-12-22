import { Play } from "lucide-react";
import NavBar from "../navbar/NavBar";

export const HeroSection = () => {
  return (
    <div className="relative bg-zinc-800 min-h-screen p-2">
      <div className="max-w-6xl mx-auto">
        <nav className="sticky top">
        <NavBar />
        </nav>
        <div className="flex md:hidden">
            <img
              src="fitness.png"
              alt="Fitness couple"
              className="w-full h-auto object-cover"
            />
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight">
              GET HEALTHY BODY<br />
              WITH THE PERFECT<br />
              EXERCISES
            </h1>
            <p className="text-gray-300 text-lg">
              We are always there to help you to make a healthy body<br />
              and mind through the power of fitness.
            </p>
            <div className="flex items-center gap-4">
              <button  className="bg-red-600 text-white hover:text-black hover:bg-red-700 p-4 rounded-lg">
                Get Started
              </button>
              <button
                className="text-white hover:text-red-600 flex"
              >
                <Play className="mr-2" />
                Watch Video
              </button>
            </div>
            <div className="flex items-center gap-12 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">105+</div>
                <div className="text-gray-400">Expert Trainers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">970+</div>
                <div className="text-gray-400">Member Joined</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">135+</div>
                <div className="text-gray-400">Fitness Programs</div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="fitness.png"
              alt="Fitness couple"
              className="w-full h-full  object-cover"
            />
            <div className="absolute bottom-20 -left-10 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-sm text-gray-600">Todays Calories</div>
              <div className="text-xl font-bold">150 Cal</div>
                 <div className="flex mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-4 bg-red-600 mr-1"
                    style={{ height: `${i * 10}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};