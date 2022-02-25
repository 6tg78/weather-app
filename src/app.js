const searchForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const timeOfDay = document.querySelector('img.time');

const updateUI = (data) => {
  const { cityInfo, weather } = data;

  details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3 text-info">At the moment: ${weather.WeatherText.toLowerCase()}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    `;

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

const updateCity = async (city) => {
  const cityInfo = await getCity(city);
  const weather = await getWeather(cityInfo.Key);

  return { cityInfo, weather };
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //getting the value from the form
  const city = searchForm.city.value.trim();
  searchForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
