const axios = require("axios");
const FormData = require("form-data");

const url = "https://demo.computervision.com.vn/api/v2/ekyc/face_matching";

export default function handler(req, res) {
  if (req.method === `POST`) {
    const file1 = req.files[0];
    const file2 = req.files[1];
    let form = new FormData();
    form.append("img1", file1.buffer, file1.originalname);
    form.append("img2", file2.buffer, file2.originalname);

    axios({
      method: "POST",
      url: `${url}?format_type=file&type1=card`,
      auth: {
        username: process.env.GATSBY_API_USERNAME,
        password: process.env.GATSBY_API_PASSWORD
      },
      data: form,
      headers: form.getHeaders()
    })
      .then(response => {
        res.json(response.data);
      })
      .catch(err => {
        res.status(400).send(err);
        // console.log(err)
      });
  }

  if (req.method === `GET`) {
    const img1 = req.query.img1;
    const img2 = req.query.img2;
    axios({
      method: "GET",
      url: `${url}?format_type=url&type1=card&img1=${img1}&img2=${img2}`,
      auth: {
        username: process.env.GATSBY_API_USERNAME,
        password: process.env.GATSBY_API_PASSWORD
      },
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => {
        res.json(response.data);
      })
      .catch(err => {
        res.status(400).send(err);
        // console.log(err)
      });
  }
}
