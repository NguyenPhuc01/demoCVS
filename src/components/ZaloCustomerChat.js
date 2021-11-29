import React, { useEffect } from "react"

export default function ZaloCustomerChat() {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://sp.zalo.me/plugins/sdk.js"

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <div
        className="zalo-chat-widget"
        data-oaid="1128136385012072908"
        data-welcome-message="Rất vui khi được hỗ trợ bạn!"
        data-autopopup="0"
        data-width="350"
        data-height="420"
      ></div>
    </>
  )
}
