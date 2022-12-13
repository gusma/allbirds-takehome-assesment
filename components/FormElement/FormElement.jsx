import styles from '../../styles/Home.module.css'

export default function FormElement({ title, children }) {
  return (
    <div className={styles.formElement}>
      <label>{title && title}</label>
      {children}
    </div>
  )
}
