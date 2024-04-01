import React from "react";
import Header from "./components/Header";
import "./TrekTally.css";
import InputContainer from "./components/InputContainer";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./store/AppStore";

function TrekTally() {
  return (
    <Provider store={appStore}>
      <div className="myAppContainer">
        <Header />
        <InputContainer />
        <ItemList />
        <Footer />
      </div>
    </Provider>
  );
}

export default TrekTally;
