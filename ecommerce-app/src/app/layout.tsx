"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ApolloWrapper } from '@/lib/apollo-provider';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ApolloWrapper> */}
          <Navbar/>
          {children}
        {/* </ApolloWrapper> */}
      </body>
    </html>
  )
}
