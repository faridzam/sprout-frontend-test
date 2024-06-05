import styles from './LoadingModal.module.css'

// interface ILoadingModalProps {
//   open: boolean
// }

const LoadingModal = () => {
  return(
    <div className={styles.loadingModal} id="modal-loading" data-backdrop="static">
      <div className={styles.loadingModalBody}>
        <div className={styles.loadingSpinner}></div>
        <div>Loading...</div>
      </div>
    </div>
  )
}

export default LoadingModal