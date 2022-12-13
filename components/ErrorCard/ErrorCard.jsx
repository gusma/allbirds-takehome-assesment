import styles from './ErrorCard.module.css'

export default function ErrorCard() {
  return (
    <div className={styles.errorCard} role="alert">
      Oops! There's been an error sending your request.
    </div>
  )
}
