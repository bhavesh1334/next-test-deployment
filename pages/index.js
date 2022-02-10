import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h2 style={{textAlign: 'center'}}>Home</h2>
<ul >

<li>
<Link href="/about">
          <a>About</a>
        </Link>

</li>
 

<li>
 <Link href="/contact">
          <a>contact</a>
        </Link>

</li>

</ul>
    </div>
  )
}
