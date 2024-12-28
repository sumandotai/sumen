import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Share2 } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Breakthrough in Quantum Computing Achieved",
    category: "Technology",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    summary: "Scientists have achieved a major breakthrough in quantum computing, demonstrating sustained quantum coherence for over 10 minutes.",
  },
  {
    id: 2,
    title: "New AI Model Surpasses Human Performance",
    category: "Artificial Intelligence",
    date: "March 14, 2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    summary: "A newly developed AI model has demonstrated superior performance in complex problem-solving tasks compared to human experts.",
  },
  {
    id: 3,
    title: "Tech Industry Embraces Sustainable Practices",
    category: "Industry",
    date: "March 13, 2024",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    summary: "Major tech companies announce new initiatives to achieve carbon neutrality by 2025.",
  },
  // Add more news items as needed
];

const NewsPage = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Latest Tech News
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Stay updated with the latest developments in technology, AI, and more.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <Card key={news.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-t-lg overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="mb-2">{news.category}</Badge>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                    <button className="hover:text-primary transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;