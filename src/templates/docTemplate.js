import React from "react"

export default function DocTemplate({ pageContext }) {
  const { title, content } = pageContext

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}