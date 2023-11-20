import Carousel from './components/carousel';
import React from 'react';
import styles from './page.module.css';

export default function Home(): React.ReactNode {
  return (
    <main className={styles.main}>
      <Carousel/>
    </main>
  )
}
