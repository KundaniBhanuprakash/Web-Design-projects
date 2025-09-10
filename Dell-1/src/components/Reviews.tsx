import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "Design Studio Inc.",
      avatar: "SJ",
      rating: 5,
      review:
        "The Dell XPS 13 has transformed my workflow. The 4K display is absolutely stunning for design work, and the performance is flawless even with multiple Adobe applications running simultaneously.",
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      company: "Tech Solutions",
      avatar: "MC",
      rating: 5,
      review:
        "As a developer, I need reliability and performance. The XPS 13 delivers on both fronts. The keyboard is comfortable for long coding sessions, and the battery life easily gets me through a full workday.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Global Corp",
      avatar: "ER",
      rating: 5,
      review:
        "Perfect balance of power and portability. I travel frequently for work, and the XPS 13 is light enough to carry everywhere yet powerful enough to handle all my presentations and video calls.",
    },
    {
      name: "David Kim",
      role: "Architect",
      company: "Urban Design",
      avatar: "DK",
      rating: 5,
      review:
        "The build quality is exceptional. The machined aluminum feels premium, and the InfinityEdge display provides more screen real estate for my CAD work. Highly recommended for professionals.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-colors ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#dbeafe,_transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by millions of professionals worldwide. See why the Dell XPS
            13 is the choice of industry leaders.
          </p>
        </div>

        {/* Review Card */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white border border-gray-200 shadow-xl rounded-2xl">
            <CardContent className="p-12">
              <div
                key={currentReview}
                className="text-center space-y-6 animate-fade-in"
              >
                <Quote className="w-12 h-12 text-blue-600 mx-auto opacity-50" />

                <blockquote className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium italic">
                  “{reviews[currentReview].review}”
                </blockquote>

                <div className="flex justify-center">{renderStars(reviews[currentReview].rating)}</div>

                <div className="flex items-center justify-center gap-4">
                  <Avatar className="w-14 h-14 ring-2 ring-blue-500 ring-offset-2">
                    <AvatarImage src="" alt={reviews[currentReview].name} />
                    <AvatarFallback className="bg-blue-600 text-white">
                      {reviews[currentReview].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {reviews[currentReview].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {reviews[currentReview].role} at{" "}
                      {reviews[currentReview].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentReview
                    ? "bg-blue-600 scale-110 shadow-lg"
                    : "bg-gray-300 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-2 group">
            <div className="text-4xl font-extrabold text-blue-600 group-hover:scale-110 transition-transform">
              4.8/5
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="flex justify-center">{renderStars(5)}</div>
          </div>

          <div className="space-y-2 group">
            <div className="text-4xl font-extrabold text-blue-600 group-hover:scale-110 transition-transform">
              15,000+
            </div>
            <div className="text-sm text-gray-600">Customer Reviews</div>
          </div>

          <div className="space-y-2 group">
            <div className="text-4xl font-extrabold text-blue-600 group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-sm text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
