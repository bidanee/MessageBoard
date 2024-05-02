import { useNavigate } from "react-router-dom"
import styles from "./Modal.module.css"
export default function Modal({ children }) {
  const navigate = useNavigate()
  const closeHandler = () => {
    navigate("..")
    // 한단계 위로 가는거라 더 유연함
  }
  return (
    <>
      <div className={styles.background} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  )
}
