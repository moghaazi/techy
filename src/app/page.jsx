import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import PostCard from "./components/PostCard/PostCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      <ScrollToTop />
      <Header/>

      {/* Posts */}
      <div className="posts container">
        <div className="tags">

        </div>
        <PostCard />
        <PostCard />
      </div>

      <Footer />
    </div>
  )
}


