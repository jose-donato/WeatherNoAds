import axios from "axios";

export default function fetch(text) {
  return axios
    .get(
      "https://eu1.locationiq.com/v1/search.php?key=secret_key&q=" +
        text +
        "&format=json"
    )
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
