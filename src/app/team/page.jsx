import styles from './team.module.css';
import Header from "../components/Header/Header"

const Team = () => {
  return (
    <div>
    <Header />
    <div className={styles.team}>
      <h1>Our Team</h1>
      <img src="/team/me.jpg" alt="Team Member 1" className={styles.image} />
      <img src="/team/me.jpg" alt="Team Member 1" className={styles.image} />
      <img src="/team/me.jpg" alt="Team Member 1" className={styles.image} />
      <h3 className={styles.name}>Ahmad Moghazi</h3>
      <p className={styles.role}>Web Dev</p>
      <h3 className={styles.name}>Ahmad Moghazi</h3>
      <p className={styles.role}>Web Dev</p>
      <h3 className={styles.name}>Ahmad Moghazi</h3>
      <p className={styles.role}>Web Dev</p>
    </div>
    </div>
  );
};

export default Team;
