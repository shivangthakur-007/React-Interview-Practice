import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [currentCity, setCurrentCity] = useState({
    name: "LONDON",
    temperature: "31",
    humidity: "60",
    wind: "4",
    weatherCondition: "clear",
  });

  const [search, setSearch] = useState("");
  const [error, setError]= useState(null);

  async function fetchData() {
    try {
      const result = await fetch("/db.json").then((res) => res.json());
      setData(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleClick() {
    setError(null)
    const foundCity = data.find(
      (city) => city.name.toLowerCase() === search.toLowerCase()
    );
    if (foundCity) {
      setCurrentCity({
        name: foundCity.name,
        temperature: foundCity.main?.temp,
        humidity: foundCity.main?.humidity,
        wind: foundCity.wind?.speed,
        weatherCondition: foundCity.weathercondition,
      });
    }else{
      setError('City Not found')
    }
    setSearch("");
  }

  let citySrc = "/assets/brightSun.png";
  switch (currentCity?.weatherCondition) {
    case "clear":
      citySrc = "/assets/brightsun.png";
      break;
    case "mist":
      citySrc = "/assets/mist.jpg";
      break;
    case "drizzle":
      citySrc = "/assets/drizzle.jpg";
      break;
    case "cloud":
      citySrc = "/assets/cloud.jpg";
      break;
    case "rain":
      citySrc = "/assets/rain.jpg";
      break;

    default:
      break;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative h-screen">
      <div className="w-[450px] max-h-[600px] min-h-[400px] bgContainer text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl py-2 overflow-y-hidden flex flex-col items-center border-transparent hover:border-white border-1">
        <div className="flex justify-between py-2 w-[85%] items-center">
          <input
            type="search"
            placeholder="Enter City Name"
            className="w-[85%] h-[50px] border-[1px] rounded-2xl px-3 outline-none text-xl font-medium uppercase py-1 hover:border-pink-200 bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="rounded-2xl cursor-pointer bg-white ml-auto p-1 hover:bg-pink-100 w-[50px] h-[50px] outline-none"
            type="button"
            onClick={() => handleClick()}
          >
            <img
              src="/assets/search.png"
              alt="city Search"
              width="40px"
              height="40px"
              className="invert-30"
            />
          </button>
        </div>
        {error ? (
          <p className="text-red-800 mt-4 text-4xl font-bold">{error}</p>
        ) : (
          <div className="flex flex-col items-center w-[80%] gap-5 mb-10">
            <div className="flex flex-col items-center min-h-50">
              <img
                src={`${citySrc}` || "/assets/brightsun.png"}
                alt="weather"
                title="weather"
                width="180px"
                className="rounded-xl"
              />
              <h3 className="text-2xl font-medium mt-2">
                {currentCity?.temperature} ℃
              </h3>
              <h3 className="uppercase text-2xl font-medium">
                {currentCity?.name}
              </h3>
            </div>
            <div className="flex w-[100%] justify-between">
              <div className="flex flex-col items-center">
                <img
                  src="/assets/humidity.png"
                  alt="humidity"
                  title="humidity"
                  width="75px"
                  className="invert-15"
                />
                <p className="text-xl font-medium text-gray-800">
                  {currentCity?.humidity}%
                </p>
                <p className="text-xl font-medium text-gray-800">Humidity</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/wind.png"
                  alt="speed"
                  title="speed"
                  width="75px"
                  className="invert-15"
                />
                <p className="text-xl font-medium text-gray-800">
                  {currentCity?.wind} Km/hr
                </p>
                <p className="text-xl font-medium text-gray-800">Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Fetch;
