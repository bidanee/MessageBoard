import styles from "./NewPost.module.css"
import Modal from "../components/common/Modal"
import { Form, Link, redirect } from "react-router-dom"
export default function NewPost() {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body"></textarea>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author"></input>
        </p>
        <p className={styles.actions}>
          <button>제출</button>

          <Link to=".." type="button">
            취소
          </Link>
        </p>
      </Form>
    </Modal>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData)
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return redirect("/")
}
