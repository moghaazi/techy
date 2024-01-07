'use client';

import styles from "./Write.module.css";
import Header from '../components/Header/Header'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
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

    status === 'authenticated' ? route.push('/write') : route.push('/login');


    const handleImageUpload = () => {
        const url = prompt("Enter the image URL:");
        if (url) {
            const newValue = `${value} <img src="${url}" alt="Uploaded Image" />`;
            setValue(newValue);
        }
    };

    const handleCodeButtonClick = () => {
        const codeSnippet = prompt("Enter your code snippet:");
        if (codeSnippet) {
            const newValue = `${value} \n\n\`\`\` \n${codeSnippet} \n\`\`\``;
            setValue(newValue);
        }
    };

    const handlePublish = () => {
    };

    return (
        <div>
            <Header />
            <div className={styles.write}>
                <input type="text" placeholder="Title" className={styles.title} />
                <div className={styles.editor}>
                    <img
                        src="./plus.png"
                        width={30}
                        className={styles.addBtn}
                        onClick={() => setOpen(!open)}
                        alt="Add button"
                    />
                    {open &&
                        (
                            <div>
                                <button onClick={handleImageUpload}>Img URL</button>
                                <input type="file"  />
                                <button onClick={handleCodeButtonClick}>{'</>'}</button>
                            </div>
                        )
                    }

                    <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Write" />
                </div>
                <button className={styles.publish} onClick={handlePublish}>Publish</button>
            </div>
        </div>
    );
}
