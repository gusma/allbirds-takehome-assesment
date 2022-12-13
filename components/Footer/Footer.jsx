import Link from 'next/link'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <small>
          Created by{' '}
          <Link className={styles.link} href="http://www.gustavomalamud.com">
            Gustavo Malamud
          </Link>
          - 2022
        </small>
      </p>
    </footer>
  )
}
