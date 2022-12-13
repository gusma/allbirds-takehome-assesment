import styles from './SuccessCard.module.css'

export default function SuccessCard() {
  return (
    <div className={styles.successCard} role="alert">
      Success! Your message has been properly sent.
    </div>
  )
}
