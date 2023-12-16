'use client';

import { useEffect, useState } from 'react';
import ScrollProgress from 'scrollprogress';

export default function ScrollProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progressObserver = new ScrollProgress((x, y) => setProgress(y * 100));

        return () => progressObserver.destroy();
    }, []);

    const style = {
        background: `linear-gradient(to right, #d8771b, #ee1556)`,
        height: '10px',
        position: 'fixed',
        borderRadius: '0 50px 50px 0',
        top: 0,
        bottom: 0,
        width: `${progress}%`,
        zIndex: 9999,
    };

    return <div className="progress-bar" style={style} />;
};
