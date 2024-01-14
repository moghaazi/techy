'use client';

import styles from "./Article.module.css";
import Header from "../../../components/Header/Header";
import ScrollProgress from "../../../components/ScrollProgress";
import { useEffect, useRef, useState } from "react";
import Clipboard from 'clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comments from "../../../components/Comments/Comments";
import ScrollToTop from "../../../components/ScrollToTop";
import { useSession } from 'next-auth/react';


export default function Article() {
  const { data: session, status } = useSession();

  // Clipboard 
  const copy = () => toast("Article URL Copied!");
  const like = () => toast("Liked!");
  const bookmark = () => toast("Bookmarked!");

  useEffect(() => {
    const clipboard = new Clipboard('#copyButton', {
      text: () => window.location.href,
    });
    return () => clipboard.destroy();
  }, []);

  const commentsRef = useRef();

  const scrollToComments = () => {
    if (commentsRef.current) {
      commentsRef.current.scrollIntoView({ behavior: 'instant' });
    }
  };

  return (
    <div>
      <Header />
      <ScrollToTop />
      <ScrollProgress />
      <ToastContainer autoClose={300} />
      
      <div className={styles.article}>
        <h1 className={styles.title}> {session?.post?.title || 'No Title'}</h1>
        <div className={styles.articlePic}>
          <img src={session?.post?.img || "https://picsum.photos/1000/600"} />
        </div>

        <div className={styles.author}>
          <div className={styles.user}>
            <img src={session?.user?.image} alt="user__image" className={styles.user__image} />
            <div className={styles.user__info}>
              <h5>{session?.user?.name}</h5>
              <small>{'no date'}</small>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
          </div>

          {/* Icons */}
          <aside className={styles.asideIcons}>
            <div className={styles.icon}>
              <img src="/articleIcons/eye.png" />
              <span>{session?.post?.views || 0}</span>
            </div>
            <div className={styles.icon} onClick={scrollToComments}>
              <img src="/articleIcons/comments.png" alt="Comments" />
              <span>{session?.post?.comments.length || 0}</span>
            </div>
            <div className={styles.icon}>
              <img onClick={like} src="/articleIcons/heart-filled.png" />
              <span>{session?.post?.likes.length || 0}</span>
            </div>
            <div className={styles.icon}>
              <img onClick={bookmark} src="/articleIcons/bookmark.png" />
              <span>{session?.post?.bookmarks.length || 0}</span>
            </div>
            <img id="copyButton" onClick={copy} src="/articleIcons/copy.png" />
            <img src="/articleIcons/share.png" />
          </aside>
        </div>
      </div>

      <div ref={commentsRef}>
        <Comments />
      </div>
    </div >
  )
}
