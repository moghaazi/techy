import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="wave.svg" alt="wave" className={styles['wave-image']} />
      <div className={styles.container}>
        <p>&copy; 2023 Techy. All rights reserved.</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam molestiae ipsam obcaecati rerum nesciunt corrupti? Sint, illum minima reiciendis atque doloremque laborum dicta rem consectetur, inventore incidunt natus omnis distinctio.
        </p>
        <h2 className={styles.author}>Designed & Developed by <span >Moghaazi</span></h2>
      </div>
    </footer>
  );
}
