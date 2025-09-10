import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Monitor, HardDrive, Wifi, Box, Gpu } from "lucide-react";

const Specifications = () => {
  const specs = [
    {
      category: "Processor",
      icon: <Cpu className="w-5 h-5 text-dell-blue" />,
      items: [
        { label: "CPU", value: "12th Gen Intel Core i7-1250U" },
        { label: "Cores", value: "10-core (2P + 8E)" },
        { label: "Base Clock", value: "1.1 GHz" },
        { label: "Max Turbo", value: "Up to 4.7 GHz" }
      ]
    },
    {
      category: "Memory & Storage",
      icon: <HardDrive className="w-5 h-5 text-dell-blue" />,
      items: [
        { label: "RAM", value: "16GB LPDDR5" },
        { label: "Storage", value: "512GB PCIe NVMe SSD" },
        { label: "Memory Speed", value: "5200 MHz" },
        { label: "Expandable", value: "No (Soldered)" }
      ]
    },
    {
      category: "Display",
      icon: <Monitor className="w-5 h-5 text-dell-blue" />,
      items: [
        { label: "Size", value: "13.4-inch InfinityEdge" },
        { label: "Resolution", value: "3840 x 2400 (4K UHD+)" },
        { label: "Technology", value: "OLED Touchscreen" },
        { label: "Color Gamut", value: "100% DCI-P3" }
      ]
    },
    {
      category: "Graphics",
      icon: <Gpu className="w-5 h-5 text-dell-blue" />,
      items: [
        { label: "GPU", value: "Intel Iris Xe Graphics" },
        { label: "VRAM", value: "Shared System Memory" },
        { label: "External Display", value: "Up to 4K @ 60Hz" },
        { label: "HDR Support", value: "Yes" }
      ]
    },
    {
      category: "Connectivity",
      icon: <Wifi className="w-5 h-5 text-dell-blue" />,
      items: [
        { label: "USB-C", value: "2x Thunderbolt 4" },
        { label: "Audio", value: "3.5mm Headphone Jack" },
        { label: "Wireless", value: "Wi-Fi 6E + Bluetooth 5.2" },
        { label: "Webcam", value: "720p HD with IR" }
      ]
    },
    {
      category: "Physical",
      icon: <Box className="w-5 h-5 text-dell-blue" />,
      items: [
        { label: "Dimensions", value: "11.64 x 7.86 x 0.58 in" },
        { label: "Weight", value: "2.64 lbs (1.2 kg)" },
        { label: "Material", value: "Machined Aluminum" },
        { label: "Color", value: "Platinum Silver" }
      ]
    }
  ];

  return (
    <section id="specifications" className="py-20 bg-dell-light-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-dell-blue">Specifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Detailed specifications of the Dell XPS 13, engineered for peak performance 
            and maximum productivity.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-dell-gray/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-3">
                  {spec.icon}
                  {spec.category}
                  {spec.category === "Processor" && (
                    <Badge variant="secondary" className="bg-dell-blue/10 text-dell-blue text-xs">
                      Latest
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="flex justify-between items-center py-2 border-b border-dell-gray/20 last:border-0"
                    >
                      <dt className="text-sm text-muted-foreground font-medium">{item.label}:</dt>
                      <dd className="text-sm text-foreground font-semibold text-right">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Highlights */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 text-white shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4.7GHz</div>
              <div className="text-sm opacity-90">Max Turbo Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">16GB</div>
              <div className="text-sm opacity-90">LPDDR5 Memory</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4K</div>
              <div className="text-sm opacity-90">OLED Display</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">12+</div>
              <div className="text-sm opacity-90">Hours Battery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
