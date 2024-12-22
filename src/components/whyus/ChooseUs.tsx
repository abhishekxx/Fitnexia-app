import { Heart, Flame, Check } from "lucide-react";

export const ChooseUs = () => {
  const features = [
    {
      title: "Personal Training",
      description:
        "Our personal trainers can help you create a personalized fitness plan and track your progress.",
    },
    {
      title: "Expert Trainer",
      description:
        "Our gym is proud to offer a team of highly skilled and certified trainer help achieve your health & fitness goals.",
    },
    {
      title: "Flexible Time",
      description:
        "There are many fitness classes that are offered during off-peak hours, such as early morning or late evening.",
    },
  ];

  return (
    <section className="py-20 px-4 relative bg-zinc-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Should People Choose Fitnexia Services
            </h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-orange-500 flex-shrink-0 flex items-center justify-center">
                     <Check className=" h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 p-3 rounded-md text-white hover:text-black bg-red-500 hover:bg-red-600">
              Join Today
            </button>
          </div>

          <div className="relative aspect-square">
            <div className="relative w-full h-full  rounded-full bg-orange-500 overflow-hidden">
             <img
                    src="fitness.png"
                    alt="Fitness trainer"
                    className="absolute inset-0 aspect-auto w- h-full object-cover"
                />
            </div>
              <div className="absolute top-4 right-6 bg-white rounded-lg p-3 shadow-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-sm font-semibold">70 bpm</div>
                  <div className="text-xs text-gray-500">Heart Rate</div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-sm font-semibold">24%</div>
                  <div className="text-xs text-gray-500">Fat Burning</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};