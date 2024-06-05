import { ReactNode } from "react"
import styles from './TextButton.module.css'

interface ITextButtonProps {
  onClick: () => void
  children: ReactNode
  [key: string]: any
}

const TextButton = (params: ITextButtonProps) => {
  const {onClick, children, ...props} = params

  return(
    <button {...props} onClick={onClick} className={styles.textButton}>
      {children}
    </button>
  )
}

export default TextButton