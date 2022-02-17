const APIkey = 'DIfdvI7iXSz9SMOgmaLf0GE55P5exI0k';

//get current conditions information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${APIkey}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

// get city information
const getCity = async (city) => {
    const base =
        'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${APIkey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

getCity('warsaw')
    .then((data) => {
        return getWeather(data.Key);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err));
