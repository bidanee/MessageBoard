const names = ["danbi", "bidan"]

export default function Post() {
  const randomName = Math.random() > 0.5 ? names[0] : names[1]
  const nowTime = Date.now().toLocaleString()
  console.log(nowTime)
  return (
    <div>
      <p>{randomName}</p>
      <p>빨리 빨리!!!!!!!!!!!</p>
    </div>
  )
}
