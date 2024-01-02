import styles from './Hero.module.css'

export default function Hero() {
  return (
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Techy</h1>
        <img src="/wave.svg" alt="wave" className={styles.wave} />
      </header>
  )
}
