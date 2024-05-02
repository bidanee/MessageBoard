import { useLoaderData, Link } from "react-router-dom"

import styles from "./PostDetails.module.css"
import Modal from "../components/common/Modal"

function PostDetails() {
  const post = useLoaderData()

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>찾는 메시지가 없어요</h1>
          <p>메시지가 없는걸 어떡합니까??</p>
          <p>
            <Link to=".." className={styles.btn}>
              확인
            </Link>
          </p>
        </main>
      </Modal>
    )
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </main>
    </Modal>
  )
}

export default PostDetails

export async function loader({ params }) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`)
  const getData = await response.json()
  return getData.post
}
