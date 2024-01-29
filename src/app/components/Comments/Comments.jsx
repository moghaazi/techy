import styles from './Comments.module.css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useQuery, useMutation, queryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Comments({ postSlug }) {
   const [desc, setDesc] = useState('');
   const { data: session, status } = useSession();
   const isAuthenticated = status === 'authenticated';

   const { data: comments, isLoading, error } = useQuery(
      {
         queryKey: ['comments', postSlug],
         queryFn: () => fetch(`/api/comments?postSlug=${postSlug}`).then(res => res.json()),
      },
   );






   if (isLoading) return <div className={styles.loader}>Loading...</div>
   if (error) return <div className={styles.loader}>Failed to load</div>

   return (
      <div className={styles.comments}>
         <h1 className={styles.title}> Comments</h1>
         {isAuthenticated ? (
            <div className={styles.addComment}>
               <textarea
                  className={styles.textArea}
                  placeholder='Add a comment...'
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
               />
<button onClick={() => mutation.mutate({ postSlug, desc })}>Submit</button>
            </div>
         ) : (
            <Link href="/pages/login" className={styles.link}>Login to add a comment!</Link>
         )}

         <div className={styles.commentsList}>
            {comments?.map(comment => (
               <div className={styles.comment} key={comment._id}>
                  {/* User */}
                  <div className={styles.user}>
                     <img src={comment?.user?.image} className={styles.user__image} alt="User Image" />
                     <div className={styles.user__info}>
                        <h5>{comment?.user?.name}</h5>
                        <small>{comment?.date.slice(0, 10)}</small>
                     </div>
                  </div>

                  {/* Comment */}
                  <p className={styles.commentText}>{comment?.desc} </p>
               </div>
            ))}
         </div>
      </div>
   );
}
