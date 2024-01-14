'use client';

import PostCard from '../PostCard/PostCard';
import Pagination from '../Pagination/Pagination';
import styles from './PostsList.module.css';
import useSWR from 'swr';

const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
};

export default function PostsList({ page, tag }) {
    const { data, error } = useSWR(
        `http://localhost:3000/api/posts?tag=${tag || ''}&page=${page}`,
        fetcher
    )
    if (error) return <div>Failed to load</div>;
    if (!data) return <div style={{ textAlign: 'center', font: 'bold 5rem sans-serif' }}>Loading...</div>;

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
