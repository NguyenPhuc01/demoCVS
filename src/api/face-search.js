const axios = require("axios");
const FormData = require("form-data");

const url = "https://dev.computervision.com.vn/api/celeb/get_name";

export default function handler(req, res) {
  if (req.method === `POST`) {
    const file = req.files[0];
    let form = new FormData();
    form.append("file", file.buffer, file.originalname);

    axios({
      method: "POST",
      url: `${url}`,
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
    const img = req.query.url;
    axios({
      method: "GET",
      url: `${url}?url=${img}`,
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
