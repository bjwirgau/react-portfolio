import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollTop = window.scrollY;
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollHeight > 0) {
        const percentage = (totalScrollTop / totalScrollHeight) * 100;
        setProgress(percentage);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })

  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '4px',
      backgroundColor: '#e0e0e0',
      zIndex: 1000,
    },
    bar: {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: '#fd0000',
      transition: 'width 0.1s ease-out',
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.bar} />
    </div>
  )
}