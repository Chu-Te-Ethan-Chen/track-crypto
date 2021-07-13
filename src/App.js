import { Fragment } from "react";
import SimpleInput from "./components/SimpleInput";
import CryptoCoinsTable from "./components/CryptoCoinsTable";

function App() {
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
