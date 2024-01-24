'use client';

import styles from "./Write.module.css";
import Header from '../../components/Header/Header'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Write() {
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState('');

      const { data, status } = useSession();
      const route = useRouter();

      if (status === 'loading') {
            return <div className={styles.loading}>Loading...</div>
      }

      status === 'authenticated' ? route.push('/pages/write') : route.push('/pages/login');

      return (
            <div>
                  <Header />
                  <div className={styles.write}>
                        <input type="text" placeholder="Title" className={styles.title} />
                        <div className={styles.editor}>
                              <img
                                    src="../plus.png"
                                    width={30}
                                    className={styles.addBtn}
                                    onClick={() => setOpen(!open)}
                                    alt="Add button"
                              />
                              {open &&
                                    (
                                          <div>
                                                <button>Img URL</button>
                                                <input type="file" />
                                                <button>{'</>'}</button>
                                          </div>
                                    )
                              }
                              <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Write" />
                        </div>
                        <button className={styles.publish}>Publish</button>
                  </div>
            </div>
      );
}
