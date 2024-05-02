import { useLoaderData } from "react-router-dom"
import Post from "./Post"
import styles from "./PostsList.module.css"

export default function PostsList() {
  const posts = useLoaderData()

  return (
    <>
      {posts.length === 0 ? (
        <div className={styles.msg}>
          <h2>아직 작성된 메시지가 없습니다.</h2>
          <p>메시지를 적어보세요!!</p>
        </div>
      ) : (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
    </>
  )
}
