import React, { useEffect } from "react"

export default function FacebookShareButton() {
  useEffect(() => {
    ;(function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.0"
      fjs.parentNode.insertBefore(js, fjs)
    })(document, "script", "facebook-jssdk")
  })
  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-share-button"
        data-href={typeof window !== 'undefined' && window.location.href}
        data-layout="button_count"
        data-size="large"
      ></div>
    </>
  )
}
