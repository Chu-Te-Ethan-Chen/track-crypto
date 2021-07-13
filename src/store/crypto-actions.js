export const fetchCoinsList = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log("fetching coin list");
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/list"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data.");
      }
      const data = await response.json();

      return data;
    };

    try {
      const coinList = await fetchData();
      console.log(coinList);
    } catch (error) {
      console.log(error);
    }
  };
};
