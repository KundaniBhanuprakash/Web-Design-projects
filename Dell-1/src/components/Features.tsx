import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Battery, Monitor, Feather, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "Powerful Intel Processor",
      description:
        "Latest 12th Gen Intel Core i7 processor delivers exceptional performance for demanding tasks and multitasking.",
      highlight: "Up to 4.7GHz",
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description:
        "All-day productivity with up to 12+ hours of battery life. Fast charging gets you back to work quickly.",
      highlight: "12+ Hours",
    },
    {
      icon: Monitor,
      title: "Stunning 4K Display",
      description:
        "13.4-inch InfinityEdge touchscreen with 4K UHD+ resolution brings your content to life with vibrant colors.",
      highlight: "4K UHD+",
    },
    {
      icon: Feather,
      title: "Ultra-Portable Design",
      description:
        "At just 2.64 lbs and 0.58 inches thin, the XPS 13 is designed for life on the go without compromising power.",
      highlight: "2.64 lbs",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Dell XPS 13</span>
          </h2>
          <p className="text-xl text-gray-600">
            Engineered with premium materials and cutting-edge technology to deliver
            an exceptional computing experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    {feature.highlight}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6">
                    {feature.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            variant="default"
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors group"
          >
            Explore All Features
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
