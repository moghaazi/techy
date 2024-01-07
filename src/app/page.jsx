'use client';
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import PostCard from "./components/PostCard/PostCard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Tags from "./components/Tags/Tags";
import Pagination from "./components/Pagination/Pagination";
import Article from "./[slug]/page";
import NextNProgress from 'nextjs-progressbar';
import Hero from "./components/Hero/Hero";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;

  return (
    <div>

      <NextNProgress />
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <Hero />
      <Tags />
      {/* Posts */}
      <div className="posts container">
        <PostCard {...page} />
        <PostCard />
        <PostCard />
      </div>
      <Pagination />
      <Footer />
    </div>
  )
}


