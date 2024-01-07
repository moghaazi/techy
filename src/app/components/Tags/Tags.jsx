'use client';

import useSWR from 'swr';
import styles from './Tags.module.css';
import { Tooltip } from 'react-tooltip';
import Select from 'react-select';
import Link from 'next/link';

const options = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
    { value: 'all', label: 'All' },
];

const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
};

export default function Tags() {
    const { data, error } = useSWR('http://localhost:3000/api/tags', fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <Tooltip id="my-tooltip" />
                       <div className={styles.tagContainer}>
                {data?.map((item) => (
                    <Link href={`/blog?tag=${item.slug}`} key={item._id}>
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
