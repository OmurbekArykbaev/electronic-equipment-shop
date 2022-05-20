import React from "react"

const Typography = ({
  text,
  type,
  color = "var(--color-dark)",
  weight = "normal",
  size = "14px",
}) => {
  const Tag = type || "h1"

  return (
    <Tag style={{ color: color, fontWeight: weight, fontSize: size }}>
      {text}
    </Tag>
  )
}

export default Typography
