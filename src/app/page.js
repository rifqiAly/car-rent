"use client";
import CarRentApp from "@/components/CarRentApp";
import { Provider } from "react-redux";
import store from "@/store";
export default function Home() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <CarRentApp />
        </header>
      </div>
    </Provider>
  );
}
