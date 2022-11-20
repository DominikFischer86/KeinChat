import { useEffect, useState } from "react"

const PREFIX = "chat-app-"

export const useLocalstorage = (
  key: string,
  initialValue: () => void | string
) => {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)
    if (typeof initialValue === "function") return initialValue()
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [value, prefixedKey])

  return [value, setValue]
}
