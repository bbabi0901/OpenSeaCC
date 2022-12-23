import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Mint from "./pages/Mint";
import MyPage from "./pages/MyPage";
import Market from "./pages/Market";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Header />
          <section className="features">
            <Routes>
              <Route path="/market" element={<Market />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mint" element={<Mint />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <main>
//         <Header />
//       </main>
//     </div>
//   );
// }

export default App;
