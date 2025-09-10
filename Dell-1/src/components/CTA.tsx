import { ArrowRight, Clock, Gift, ShieldCheck } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Special Offer Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center bg-white/20 text-white border border-white/30 text-sm px-4 py-2 rounded-full">
              <Gift className="w-4 h-4 mr-2" />
              Limited Time Offer
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Get Your Dell XPS 13 Today
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Experience the perfect blend of performance, portability, and premium design. 
              Join millions of satisfied customers worldwide.
            </p>
          </div>

          {/* Offer Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold">$200 OFF</div>
                <div className="text-sm opacity-90">Limited Time Discount</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">FREE</div>
                <div className="text-sm opacity-90">Express Shipping</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">30-Day</div>
                <div className="text-sm opacity-90">Money-Back Guarantee</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 group">
              Buy Now - $999
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/40 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg">
              Configure & Price
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>3-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              <span>Free Setup</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="text-center pt-4">
            <div className="text-sm opacity-75 mb-2">Offer expires in:</div>
            <div className="text-lg font-mono font-bold">23:59:47</div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default CTA;
