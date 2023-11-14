import Navbar from './components/navbar';
import Carousel from './components/carousel';
import React from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(): React.ReactNode {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Carousel/>
    </main>
  )
}
