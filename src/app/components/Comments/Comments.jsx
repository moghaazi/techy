import styles from './Comments.module.css';
import Link from 'next/link';

export default function Comments() {
     const isAuthenticated = true;

     return (
          <div className={styles.comments}>
               <h1 className={styles.title}> Comments</h1>
               {isAuthenticated ?
                    (
                         <div className={styles.addComment}>
                              <textarea className={styles.textArea} placeholder='Add a comment...'></textarea>
                              <button>Submit</button>
                         </div>
                    ) : (<Link href="/login">Login</Link>)}

               <div className={styles.commentsList}>
                    <div className={styles.comment}>
                         <div className={styles.user}>
                              <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={styles.user__image} />
                              <div className={styles.user__info}>
                                   <h5>Jane Doe</h5>
                                   <small>2h ago</small>
                              </div>
                         </div>

                         <p className={styles.commentText}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                         </p>
                    </div>
               </div>
          </div>
     );
}
