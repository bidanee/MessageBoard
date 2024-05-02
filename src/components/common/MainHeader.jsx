import { Link } from "react-router-dom"
import styles from "./MainHeader.module.css"
import { MdPostAdd, MdMessage } from "react-icons/md"

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        아무말 대잔치
      </h1>
      <p>
        <Link to="/create-post" className={styles.button}>
          <MdPostAdd size={18} />
          메시지 작성{" "}
        </Link>
      </p>
    </header>
  )
}
