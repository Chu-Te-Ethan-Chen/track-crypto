import { useDispatch } from "react-redux";

import { Fragment, useEffect } from "react";
import SimpleInput from "./components/SimpleInput";
import CryptoCoinsTable from "./components/CryptoCoinsTable";
import { fetchCoinsList } from "./store/crypto-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinsList());
  }, [dispatch]);

  return (
    <div className="app">
      <Fragment>
        <SimpleInput />
        <CryptoCoinsTable />
      </Fragment>
    </div>
  );
}

export default App;
