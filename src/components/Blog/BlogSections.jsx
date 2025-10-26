import { FloatingBackground } from "../FloatingBackground";
import { Header } from "./Header";
import { FeaturedArticleCard } from "./FeaturedArticleCard";
import { ArticleSlider } from "./ArticleSlider";


// Blog Section
export const BlogSection = () => {
  return (
    <section
      id="blog"
      className="relative h-screen max-h-[100vh] flex items-center bg-gray-950 overflow-hidden"
    >
      <FloatingBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/90 z-0 pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <Header />
        <div className="grid md:grid-cols-[1.8fr_1fr] gap-6 items-stretch h-[75vh]">
          <FeaturedArticleCard />
          <ArticleSlider />
        </div>
      </div>
    </section>
  );
};
