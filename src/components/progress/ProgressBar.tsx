import styles from './ProgressBar.module.css'

interface IProgressBarProps {
  value : number
  [key: string]: any
}

const ProgressBar = (params: IProgressBarProps) => {
  const {value} = params

  return (
    <progress
      className={styles.progressBar}
      value={value}
      max={100}
    />
  )
}

export default ProgressBar