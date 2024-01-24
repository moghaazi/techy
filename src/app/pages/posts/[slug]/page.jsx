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
import { useQuery } from '@tanstack/react-query';

export default function Article({ params: { slug } }) {
     const { data: session } = useSession(); // for checking if user is logged in

     const commentsRef = useRef(); // for scrolling to comments

     // Fetch the article
     const { data: article, isLoading, error } = useQuery(
          {
               queryKey: ['post', slug],
               queryFn: () => fetch(`/api/posts/${slug}`).then(res => res.json()),
          },
     );

     if (isLoading) return <div className={styles.loader}>Loading...</div>;
     if (error) return <div className={styles.loader}>Failed to load</div>;

     // Clipboard 
     const copy = () => toast("Article URL Copied!");
     const like = () => toast("Liked!");
     const bookmark = () => toast("Bookmarked!");

     // useEffect(() => {
     //   const clipboard = new Clipboard('#copyButton', {
     //     text: () => window.location.href,
     //   });
     //
     //   return () => clipboard.destroy();
     // }, []);

     // Comments
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
                    <h1 className={styles.title}> {article.title || 'No Title'}</h1>
                    <div className={styles.articlePic}>
                         <img src={article.img || "https://picsum.photos/1000/600"} />
                    </div>

                    <div className={styles.author}>
                         <div className={styles.user}>
                              <img src={article.user?.image || "https://picsum.photos/100/100"} alt="user__image" className={styles.user__image} />
                              <div className={styles.user__info}>
                                   <h5>{article.user?.name || 'No Author'}</h5>
                                   <small>{article.date.slice(0, 10) || 'No Date'}</small>
                              </div>
                         </div>
                    </div>

                    <div className={styles.contentWrapper}>
                         <div className={styles.content} dangerouslySetInnerHTML={{ __html: article?.content }} />



                         {/* Icons */}
                         <aside className={styles.asideIcons}>
                              <div className={styles.icon}>
                                   <img src="/articleIcons/eye.png" />
                                   <span>{article.views || 0}</span>
                              </div>
                              <div className={styles.icon} onClick={scrollToComments}>
                                   <img src="/articleIcons/comments.png" alt="Comments" />
                                   <span>{article.comment|| 0}</span>
                              </div>
                              <div className={styles.icon}>
                                   <img onClick={like} src="/articleIcons/heart-filled.png" />
                                   <span>{article.likes || 0}</span>
                              </div>
                              <div className={styles.icon}>
                                   <img onClick={bookmark} src="/articleIcons/bookmark.png" />
                                   <span>{article.bookmarks || 0}</span>
                              </div>
                              <img id="copyButton" onClick={copy} src="/articleIcons/copy.png" />
                              <img src="/articleIcons/share.png" />
                         </aside>
                    </div>
               </div>

               <div ref={commentsRef}>
                    <Comments postSlug={slug} />
               </div>
          </div >
     )
}
