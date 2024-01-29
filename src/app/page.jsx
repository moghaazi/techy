'use client';
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Tags from "./components/Tags/Tags";
import NextNProgress from 'nextjs-progressbar';
import Hero from "./components/Hero/Hero";
import PostsList from "./components/PostsList/PostsList";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query"

export default function Home({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;

  const queryClient = new QueryClient()

  return (

    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>

        <NextNProgress />
        <ScrollProgress />
        <ScrollToTop />
        <Header />
        <Hero />
        <Tags />
        <div className="posts container">
          <PostsList page={page} />
        </div>
        <Footer />
      </div>
    </HydrationBoundary>
  )
}


