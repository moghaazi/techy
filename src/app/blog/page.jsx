import styles from "./BlogPage.module.css";
import PostCard from "../components/PostCard/PostCard";
import Pagination from "../components/Pagination/Pagination";
import Header from "../components/Header/Header";
import Tags from "../components/Tags/Tags";

export default function Blog() {
  return (
    <div>
      <Header />
      <div className={styles.blogPage}>
        <h1 className={styles.title}>Programming</h1>
        <Tags />
        <div className={styles.posts}>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <Pagination />
      </div>
    </div >
  )
}
