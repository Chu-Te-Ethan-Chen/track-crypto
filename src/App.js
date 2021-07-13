import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import QueryForm from "./components/QueryForm";
import CryptoCoinsTable from "./components/CryptoCoinsTable";
import Notification from "./components/UI/Notification";
import { fetchCoinsList } from "./store/crypto-actions";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCoinsList());
  }, [dispatch]);

  return (
    <div className="app">
      <Fragment>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <QueryForm />
        <CryptoCoinsTable />
      </Fragment>
    </div>
  );
}

export default App;
