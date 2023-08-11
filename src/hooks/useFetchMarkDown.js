import { useState, useEffect } from "react";

const useFetchMarkDown = ({ md }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [md])

  return content
}

export default useFetchMarkDown
