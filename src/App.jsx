import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";
import Store from "./Data/Store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </Store>
  );
}

export default App;
