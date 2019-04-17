import axios from "axios";

export default function fetch(lat, lon) {
  return axios
    .get(
      "https://api.darksky.net/forecast/secret_key/" +
        lat +
        "," +
        lon +
        "?units=si"
    )
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
