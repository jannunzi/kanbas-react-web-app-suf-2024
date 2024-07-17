import { Navigate, Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import TOC from "./TOC";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div>
        <h1>Welcome to Web Dev</h1>
        <h2>Jose Annunziato</h2>
        <TOC />
        <hr />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="/Lab3/*" element={<Lab3 />} />
          <Route path="/Lab4/*" element={<Lab4 />} />
          <Route path="/Lab5/*" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
  );
}
