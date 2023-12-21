'use client';
import styles from "./PostCard.module.css";

const Card = ({ image, tag, title, body, userImage, userName, time }) => (
    <div className={styles.card}>
        <div className={styles.card__header}>
            <img src={image} alt="" className={styles.card__image} width="600" />
        </div>
        <div className={styles.card__body}>
            <span className={`${styles.tag} ${styles[`tag-${tag}`]}`}>{tag}</span>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
            <div className={styles.user}>
                <img src={userImage} alt="" className={styles.postCardImg} />
                <div className={styles.user__info}>
                    <h5>{userName}</h5>
                    <small>{time}</small>
                </div>
            </div>
        </div>
    </div>
);

const Cards = () => (
    <div className={styles.cardWrapper}>
        <Card
            image="https://source.unsplash.com/600x400/?computer"
            tag="crypto"
            title="What's new in 2022 Tech"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!"
            userImage="https://i.pravatar.cc/40?img=1"
            userName="Jane Doe"
            time="2h ago"
        />

        <Card
            image="https://source.unsplash.com/600x400/?computer"
            tag="ai"
            title="What's new in 2022 Tech"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!"
            userImage="https://i.pravatar.cc/40?img=1"
            userName="Jane Doe"
            time="2h ago"
        />
    </div>
);

export default Cards;
