import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="text-3xl font-bold text-blue-600">DELL</div>
              <p className="text-gray-300 leading-relaxed">
                Leading technology company providing innovative solutions for
                businesses and consumers worldwide since 1984.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-500 hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-500 hover:bg-white/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-pink-500 hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-700 hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-red-600 hover:bg-white/10">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Products</h3>
              <ul className="space-y-3">
                {["Laptops", "Desktops", "Workstations", "Servers", "Monitors", "Accessories"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Support</h3>
              <ul className="space-y-3">
                {[
                  "Customer Support",
                  "Technical Support",
                  "Warranty",
                  "Driver Downloads",
                  "User Manuals",
                  "Community Forum",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest news, product updates, and exclusive offers.
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-300">
                <div>📞 1-800-DELL-CARE</div>
                <div>✉️ support@dell.com</div>
                <div>🕒 24/7 Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            © 2024 Dell Technologies Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Accessibility</a>
            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Site Map</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;
