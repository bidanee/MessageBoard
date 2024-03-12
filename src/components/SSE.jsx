import axios from "axios"
import { useEffect, useState } from "react"

export default function SSE() {
  const [sseData, setSseData] = useState([])
  useEffect(() => {
    const fetchPrevNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:8000/notifications")
        const data = response.data
        console.log(data)
        setSseData(data)
      } catch (error) {
        console.log("전 데이터 받아오기 : ", error)
      }
    }
    fetchPrevNotifications()
  }, [])
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3001")

    // SSE 이벤트 수신
    eventSource.onmessage = function (event) {
      const currentTime = JSON.parse(event.data)
      console.log(currentTime)

      // 새로운 데이터를 배열에 추가
      setSseData((prevData) => [...prevData, currentTime])

      // 배열이 너무 커지면 처음 항목 삭제 (옵션)
      if (sseData.length > 10) {
        setSseData((prevData) => prevData.slice(1))
      }
    }

    // SSE 에러 처리
    eventSource.onerror = function (error) {
      console.error("EventSource failed:", error)
      eventSource.close()
    }

    // 컴포넌트 언마운트 시 EventSource 종료
    return () => {
      eventSource.close()
    }
  }, [sseData])

  return (
    <ul>
      {sseData.map((item) => (
        <li key={item.notificationsId}>{item.message}</li>
      ))}
    </ul>
  )
}
