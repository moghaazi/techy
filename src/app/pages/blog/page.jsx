import styles from "./BlogPage.module.css";
import Header from "../../components/Header/Header";
import Tags from "../../components/Tags/Tags";
import PostsList from "../../components/PostsList/PostsList";

export default function Blog({ searchParams }) {
   const page = parseInt(searchParams.page) || 1;
  const { tag } = searchParams;

     return (
          <div>
               <Header />
               <div className={styles.blogPage}>
                    <h1  className={`${styles.title} ${styles[tag]}`}>{tag}</h1>
                    <Tags />
                    <div className={styles.posts}>
                         <PostsList {...{ page, tag }} />
                    </div>
               </div>
          </div >
     )
}
