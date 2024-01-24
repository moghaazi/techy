'use client';

import PostCard from '../PostCard/PostCard';
import Pagination from '../Pagination/Pagination';
import styles from './PostsList.module.css';
import { useQuery } from '@tanstack/react-query';

export default function PostsList({ page, tag }) {
    // Fetch the posts 
    const { data, isLoading, error } = useQuery(
        {
            queryKey: ['post', tag, page],
            queryFn: () => fetch(`/api/posts?tag=${tag || ''}&page=${page}`).then(res => res.json()),
        },
    );

    if (isLoading) return <div className={styles.loader}>Loading...</div>;
    if (error) return <div className={styles.loader}>Failed to load</div>;

    const POST_PER_PAGE = 3;
    const hasPrev = page > 1;
    const hasNext = data.length === POST_PER_PAGE
    const totalPages = Math.ceil(data.length / POST_PER_PAGE);

    console.log(`Total Pages: ${totalPages}`);
    console.log(`data length: ${data.length}`);


    return (
        <div className={styles.postsList}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {data?.map((item) => (
                    <PostCard key={item._id} item={item} />
                ))}
            </div>
            <Pagination {...{ page, hasPrev, hasNext, totalPages }} />
        </div>
    );
}
