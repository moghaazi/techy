import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <button>Google</button>
      <button>GitHub</button>
    </div>
  );
}
