import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100/50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="flex items-center gap-2 text-blue-600">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">
                Rated #1 by Professionals
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Dell XPS 13 –{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Power Meets Performance
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-gray-600 max-w-lg">
              Experience unmatched speed, reliability, and design with the
              latest Dell XPS 13. Built for professionals who demand
              excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToFeatures}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.8/5</div>
                <div className="text-sm text-gray-500">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50M+</div>
                <div className="text-sm text-gray-500">Units Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/latitude/compact-design/fy25/lati-compact-franchise-1920x1440-fy25-mod-1.png?fmt=png-alpha&wid=1920&hei=1440"
                alt="Dell XPS 13 Laptop"
                className="w-full h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="text-xs text-gray-500">Processor</div>
              <div className="font-semibold text-blue-600">Intel i7 12th Gen</div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-xs text-gray-500">Battery Life</div>
              <div className="font-semibold text-blue-600">12+ Hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default Hero;
