import Header from "../../components/Header/Header"
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.about}>
        <p>Welcome to our tech website! We are passionate about technology and strive to provide valuable insights, news, and resources to our readers.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to keep you informed about the latest in the tech world. From software development to hardware innovations, we cover it all.</p>
      </div>
    </div >
  )
}
