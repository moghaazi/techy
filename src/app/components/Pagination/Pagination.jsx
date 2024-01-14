'use client';
import { useRouter } from 'next/navigation';
import styles from './Pagination.module.css';

export default function Pagination({ page, hasPrev, hasNext, totalPages }) {
     const router = useRouter();

     const handlePageClick = (pageNumber) => {
          router.push(`?page=${pageNumber}`);
     }

     return (
          <div className={styles.pagination}>
               <button
                    onClick={() => handlePageClick(page - 1)}
                    disabled={!hasPrev}
                    className={styles.prev}
               >
                    Prev
               </button>

               {[...Array(totalPages)].map((_, index) => (
                    <button
                         key={index}
                         onClick={() => handlePageClick(index + 1)}
                         className={index + 1 === page ? styles.active : ''}
                    >
                         {index + 1}
                    </button>
               ))}

               <span>...</span>
               <button onClick={() => handlePageClick(totalPages)}>{totalPages}</button>

               <button
                    onClick={() => handlePageClick(page + 1)}
                    disabled={!hasNext}
                    className={styles.next}
               >
                    Next
               </button>
          </div>
     )
}
