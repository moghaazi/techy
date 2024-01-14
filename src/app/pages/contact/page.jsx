'use client';

import styles from './contact.module.css'; // Import your CSS file for styling
import Header from "../../components/Header/Header"

export default function ContactPage() {
  return (
    <div>
      <Header />
      <div className={styles.contact}>
        <form action="" >
          <input placeholder="Name" autoFocus />
          <input type="email" placeholder="Email" />
          <input placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
