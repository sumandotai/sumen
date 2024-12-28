import { cn } from "@/lib/utils";
import {
  Home,
  BookOpen,
  Users,
  Newspaper,
  Bell,
  Briefcase,
  Mail,
  Image,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: BookOpen, label: "Courses", path: "/courses" },
  { icon: Users, label: "Reviews", path: "/reviews" },
  { icon: Newspaper, label: "News", path: "/news" },
  { icon: Bell, label: "Notices", path: "/notices" },
  { icon: Briefcase, label: "Career", path: "/career" },
  { icon: Mail, label: "Contact", path: "/contact" },
  { icon: Image, label: "Posts", path: "/posts" },
];

export const Sidebar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden",
          open ? "block" : "hidden"
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-card border-r transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/af3b6ebd-13f1-4a31-a452-2fbcefdb5852.png"
              alt="Sumen.ai"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold text-xl">Sumen.ai</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};