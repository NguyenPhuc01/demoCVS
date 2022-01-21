const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Code\\CVS\\cvs-demo-web\\src\\pages\\404.js"))),
  "component---src-pages-company-contact-js": hot(preferDefault(require("C:\\Code\\CVS\\cvs-demo-web\\src\\pages\\company\\contact.js"))),
  "component---src-pages-ekyc-js": hot(preferDefault(require("C:\\Code\\CVS\\cvs-demo-web\\src\\pages\\ekyc.js"))),
  "component---src-pages-facial-recognition-js": hot(preferDefault(require("C:\\Code\\CVS\\cvs-demo-web\\src\\pages\\facial-recognition.js"))),
  "component---src-pages-image-recognition-js": hot(preferDefault(require("C:\\Code\\CVS\\cvs-demo-web\\src\\pages\\image-recognition.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Code\\CVS\\cvs-demo-web\\src\\pages\\index.js"))),
  "component---src-pages-ocr-js": hot(preferDefault(require("C:\\Code\\CVS\\cvs-demo-web\\src\\pages\\ocr.js")))
}

