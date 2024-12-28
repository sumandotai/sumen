import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-2rem)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 section-padding animate-fade-in">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Welcome to{" "}
            <span className="text-primary">
              Sumen<span className="text-foreground">.ai</span>
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Exploring the intersection of technology, innovation, and human
            potential. Join me on a journey through AI, development, and creative
            problem-solving.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="glass p-8 max-w-[500px] mx-auto">
            <img
              src="/lovable-uploads/af3b6ebd-13f1-4a31-a452-2fbcefdb5852.png"
              alt="Sumen.ai Profile"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-padding bg-accent/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Latest Course",
              "Recent Blog Post",
              "Upcoming Event",
            ].map((item) => (
              <div
                key={item}
                className="glass p-6 hover:scale-105 transition-transform cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-4">{item}</h3>
                <p className="text-muted-foreground">
                  Click to explore more about {item.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;