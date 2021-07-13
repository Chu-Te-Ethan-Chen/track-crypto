import { uiActions } from "./ui-slice";

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
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Fetching",
          message: "Fetching coins list.",
        })
      );
      const coinList = await fetchData();
      console.log(coinList);
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetch coins list successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching coins list failed.",
        })
      );
    }
  };
};
