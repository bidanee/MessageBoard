import { Outlet } from "react-router-dom"
import PostsList from "../components/post/PostsList"

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  )
}

export default Posts

export async function loader() {
  const response = await fetch("http://localhost:8080/posts")
  const getData = await response.json()
  return getData.posts
}
