import Link from 'next/link';
import styles from "./PostCard.module.css";

export default function PostCard({ key, item }) {
    const tagClassName = styles[item?.tagSlug.toLowerCase()] || styles.tagAll; 

    return (
        <div className={styles.container} key={key}>
            <div className={`${styles.card} ${tagClassName}`}>
                <div className={styles.card__header}>
                    <img
                        src={item?.img || "https://source.unsplash.com/random"}
                        width="100%"
                        alt="card__image"
                        className={styles.card__image}
                    />
                </div>
                <div className={styles.card__body}>
                    <Link href={`/pages/blog?tag=${item?.tagSlug}`}>
                        <span className={`${styles.tag} ${tagClassName}`}>
                            {item?.tagSlug || "No Tag"}
                        </span>
                    </Link>
                    <h4>{item?.title || "No Title"}</h4>
                    <p> {item?.desc.slice(0, 160) || "No Description"} </p>
                    <Link href={`/pages/posts/${item?.slug}`}>
                        <button className={styles.readMore}>Read More</button>
                    </Link>
                </div>
                <div className={styles.card__footer}>
                    <div className={styles.user}>
                        <img
                            src="../team/me.jpg"
                            alt="user__image"
                            className={styles.user__image}
                        />
                        <div className={styles.user__info}>
                            <h5>{item?.author || "No Author"}</h5>
                            <small>{item?.date.slice(0, 10) || "No Date"}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
