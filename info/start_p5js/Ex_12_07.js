var weatherData;

function preload() {
  weatherData = loadJSON("media/cincinnati.json");
}

function setup() {
  var temp = getTemp(weatherData);
  print(temp);
}

function getTemp(data) {
  return data.list[0].main.temp;
}
