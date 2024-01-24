'use client';

import styles from './Tags.module.css';
import { Tooltip } from 'react-tooltip';
import Select from 'react-select';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

const options = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
    { value: 'all', label: 'All' },
];

export default function Tags() {
    // Fetch the posts 
    const { data, isLoading, error } = useQuery(
        {
            queryKey: ['tags'],
            queryFn: () => fetch(`/api/tags`).then(res => res.json()),
        },
    );

    if (isLoading) return <div className={styles.loader}>Loading...</div>;
    if (error) return <div className={styles.loader}>Failed to load</div>;

    return (
        <div className={styles.container}>
            <Tooltip id="my-tooltip" />
            <div className={styles.tagContainer}>
                {data?.map((item) => (
                    <Link href={`/pages/blog?tag=${item.slug}`} key={item._id}>
                        <span className={`${styles.tag} ${styles[item.slug]}`}>
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>

            <div className={styles.postsFilder}>
                <span data-tooltip-id="my-tooltip" data-tooltip-content="Treading">
                    🔥
                </span>
                <span data-tooltip-id="my-tooltip" data-tooltip-content="New">
                    🆕
                </span>
                <span data-tooltip-id="my-tooltip" data-tooltip-content="Top">
                    🔝
                </span>
                <Select
                    options={options}
                    defaultValue={options[0]}
                    className={styles.select}
                />
            </div>
        </div>
    );
}
