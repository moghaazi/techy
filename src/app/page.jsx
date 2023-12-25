import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import PostCard from "./components/PostCard/PostCard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
     return (
          <div>
               <ScrollProgress />
               <ScrollToTop />
               <Header />

               {/* Posts */}
               <div className="posts container">
                    <div className="tags">
                         <h1>🔥</h1>
                         <span>🆕</span>
                         <span>🔝</span>
                         <select defaultValue={"Today"}>
                              <option value="Today">Today</option>
                              <option value="Week">Week</option>
                              <option>Month</option>
                              <option>Year</option>
                              <option>All</option>
                         </select>
                    </div>
                    <PostCard />
                    <PostCard />
               </div>

               <Footer />
          </div>
     )
}


