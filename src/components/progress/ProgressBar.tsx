import styles from './ProgressBar.module.css';

interface IProgressBarProps {
  value : number
  max?: number
  [key: string]: any
}

const ProgressBar = (params: IProgressBarProps) => {
  const {value, max=100} = params

  return (
    <progress
      className={`progressBar ${styles.progressBar} ${value >= 50 ? styles.progressBarHigh : styles.progressBarLow}`}
      value={value}
      max={max}
    />
  )
}

export default ProgressBar