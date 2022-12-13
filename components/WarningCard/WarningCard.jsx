import styles from './WarningCard.module.css'

export default function WarningCard({ children }) {
  return (
    <div className={styles.WarningCard} role="alert">
      <p>{children}</p>
    </div>
  )
}
