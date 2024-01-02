'use client';
import styles from "./PostCard.module.css";

export default function Card() {
  return (
    <div className={styles.container }>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className={styles.card__image} width="600" />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles.tag_blue}`}>Web</span>
          <h4>What's new in 2022 Tech</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={styles.user__image} />
            <div className={styles.user__info}>
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
