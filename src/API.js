import URLS from "./config";

const fetchingData = {
  Current: async (city) => {
    const endpoint = `${URLS.Site_URL}${URLS.Forecast}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=yes&days=3`;
    return await (await fetch(endpoint)).json();
  },
  Search: async (city) => {
    const endpoint = `${URLS.Site_URL}${URLS.Search_or_Autocomplete}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`;
    return await (await fetch(endpoint)).json();
  },
};

export default fetchingData;
