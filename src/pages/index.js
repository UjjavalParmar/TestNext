import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    const myName = process.env.NEXT_PUBLIC_MYNAME;

    return (
        <div>
            <Head>
                <title>{myName}</title>
                <meta name="description" content="A simple landing page using Next.js" />
            </Head>
            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <h1>Welcome to {myName}'s Landing Page</h1>
                <p>This is a simple Next.js landing page using environment variables!</p>
            </main>
        </div>
    );
}

