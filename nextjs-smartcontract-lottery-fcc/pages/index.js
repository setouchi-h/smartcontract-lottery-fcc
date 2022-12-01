// imports work with our front end
// require does not
// nodejs != js
// backend JS is a little different from frontend JS

import Head from "next/head"
import styles from "../styles/Home.module.css"
import ManualHeader from "../components/ManualHeader"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader />
            Hi
        </div>
    )
}
