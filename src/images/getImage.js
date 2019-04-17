export default function getImage(name) {
  switch (name) {
    case "clear-day":
      return require("../images/clear.png");
    case "clear-night":
      return require("../images/clear.png");
    case "rain":
      return require("../images/rain.png");
    case "snow":
      return require("../images/rain.png");
    case "slet":
      return require("../images/rain.png");
    case "cloudy":
      return require("../images/cloudy.png");
    case "wind":
      return require("../images/wind.png");
    case "partly-cloudy-day":
      return require("../images/partly-cloudy-day.png");
    case "partly-cloudy-night":
      return require("../images/partly-cloudy-day.png");
    default:
      return require("../images/partly-cloudy-day.png");
  }
}
