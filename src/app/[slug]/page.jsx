'use client';
import styles from "./Article.module.css";
import Header from "../components/Header/Header";
import ScrollProgress from "../components/ScrollProgress";
import { useEffect } from "react";
import Clipboard from 'clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comments from "../components/Comments/Comments";
import ScrollToTop from "../components/ScrollToTop";

export default function Article() {
  const copy = () => toast("Copied!");
  const like = () => toast("Liked!");
  const comment = () => toast("Commented!");
  const bookmark = () => toast("Bookmarked!");

  // Clipboard
  useEffect(() => {
    const clipboard = new Clipboard('#copyButton', {
      text: () => window.location.href,
    });

    return () => clipboard.destroy();
  }, []);

  return (
    <div>
      <ToastContainer autoClose={300} />
      <ScrollToTop />
      <ScrollProgress />
      <Header />

      <div className={styles.article}>
        <h1 className={styles.title}> Crafting the Future of Mobile UX </h1>
        <div className={styles.articlePic}>
          <img src="https://picsum.photos/1000/600" />
        </div>
        <div className={styles.author}>
          <div className={styles.user}>
            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={styles.user__image} />
            <div className={styles.user__info}>
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
          </div>
          <aside className={styles.asideIcons}>
            <img onClick={bookmark} src="articleIcons/bookmark.png" />
            <img onClick={like} src="articleIcons/heart-filled.png" />
            <img id="copyButton" onClick={copy} src="articleIcons/copy.png" />
            <img src="articleIcons/share.png" />
          </aside>
        </div>
      </div>

      <Comments />
    </div >
  )
}
