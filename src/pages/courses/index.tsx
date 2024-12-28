import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Star } from "lucide-react";

const coursesData = [
  {
    id: 1,
    title: "Advanced Machine Learning",
    description: "Deep dive into neural networks, reinforcement learning, and advanced ML concepts",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    instructor: "Dr. Sarah Johnson",
    duration: "12 weeks",
    students: 1250,
    rating: 4.8,
    level: "Advanced",
    price: "$599",
    tags: ["Machine Learning", "AI", "Python"],
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and cloud technologies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    instructor: "Mike Chen",
    duration: "16 weeks",
    students: 2100,
    rating: 4.9,
    level: "Intermediate",
    price: "$699",
    tags: ["React", "Node.js", "Web Dev"],
  },
  {
    id: 3,
    title: "AI Ethics & Implementation",
    description: "Understanding ethical considerations in AI development and deployment",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    instructor: "Dr. Emma Davis",
    duration: "8 weeks",
    students: 850,
    rating: 4.7,
    level: "Intermediate",
    price: "$449",
    tags: ["AI Ethics", "Implementation", "Case Studies"],
  },
  {
    id: 4,
    title: "Data Science Fundamentals",
    description: "Learn essential data science skills with Python and real-world projects",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    instructor: "Prof. Alex Turner",
    duration: "10 weeks",
    students: 1750,
    rating: 4.6,
    level: "Beginner",
    price: "$499",
    tags: ["Data Science", "Python", "Analytics"],
  },
  {
    id: 5,
    title: "Cloud Architecture Mastery",
    description: "Design and implement scalable cloud solutions with AWS and Azure",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    instructor: "James Wilson",
    duration: "14 weeks",
    students: 920,
    rating: 4.9,
    level: "Advanced",
    price: "$799",
    tags: ["Cloud", "AWS", "Azure"],
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native and Flutter",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    instructor: "Lisa Anderson",
    duration: "12 weeks",
    students: 1500,
    rating: 4.7,
    level: "Intermediate",
    price: "$649",
    tags: ["Mobile", "React Native", "Flutter"],
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Expand Your Knowledge
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Choose from our wide range of professional courses designed to help you
            advance in your career and stay ahead in the tech industry.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="animate-fade-in hover:scale-105 transition-transform">
              Browse All Courses
              <BookOpen className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="animate-fade-in hover:scale-105 transition-transform">
              View Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-t-lg overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{course.level}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="font-semibold">{course.price}</div>
                  <Button variant="secondary">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;