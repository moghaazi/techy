'use client';
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

export default function Tags() {
  return (
    <div className={styles.container}>
      <Tooltip id="my-tooltip" />

      <div className={styles.tagContainer}>
        <Link href="/blog?tag=all">
          <span className={styles.allTag}>#All</span>
        </Link>
        <Link href="/blog?tag=web">
          <span className={styles.webTag}>#Web</span>
        </Link>
        <Link href="/blog?tag=ai">
          <span className={styles.aiTag}>#AI</span>
        </Link>
        <Link href="/blog?tag=cybersecurity">
          <span className={styles.cybersecurityTag}>#Cybersecurity</span>
        </Link>
        <Link href="/blog?tag=gaming">
          <span className={styles.gamingTag}>#Gaming</span>
        </Link>
        <Link href="/blog?tag=crypto">
          <span className={styles.cryptoTag}>#Crypto</span>
        </Link>
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
        <Select options={options} defaultValue={options[0]} className={styles.select} />
      </div>
    </div>
  );
}
