import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Mail, MessageSquare, Star, User } from "lucide-react";

const demoReviews = [
  { id: 1, name: "Sarah Johnson", role: "AI Engineer", rating: 5, comment: "Exceptional insights into AI and machine learning!" },
  { id: 2, name: "Michael Chen", role: "Data Scientist", rating: 5, comment: "The courses are incredibly well-structured." },
  { id: 3, name: "Emma Davis", role: "Tech Lead", rating: 5, comment: "Transformed my understanding of AI applications." },
];

const demoCourses = [
  { id: 1, title: "Advanced Machine Learning", students: 1200, duration: "8 weeks", level: "Advanced" },
  { id: 2, title: "AI Ethics & Implementation", students: 850, duration: "6 weeks", level: "Intermediate" },
  { id: 3, title: "Neural Networks Deep Dive", students: 950, duration: "10 weeks", level: "Expert" },
];

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
            <Button size="lg" className="animate-fade-in hover:scale-105 transition-transform">
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="animate-fade-in hover:scale-105 transition-transform">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="glass p-8 max-w-[500px] mx-auto animate-slide-in">
            <img
              src="/lovable-uploads/af3b6ebd-13f1-4a31-a452-2fbcefdb5852.png"
              alt="Sumen.ai Profile"
              className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoCourses.map((course) => (
              <Card key={course.id} className="hover:scale-105 transition-transform animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Students: {course.students}</p>
                    <p>Duration: {course.duration}</p>
                    <p>Level: {course.level}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoReviews.map((review) => (
              <Card key={review.id} className="hover:scale-105 transition-transform animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    {review.name}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="section-padding bg-card mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@sumen.ai
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-muted-foreground">
              123 AI Innovation Center<br />
              Silicon Valley, CA 94025<br />
              United States
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Courses</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 Sumen.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;