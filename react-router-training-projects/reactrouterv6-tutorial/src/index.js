import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Invoices from "./Invoices";
import Expenses from "./Expenses";
import Cars from "./Cars";
import Tata from "./Tata";
import RollsRoyce from "./RollsRoyce";
import Invoice from "./Invoice";
import Expense from "./Expense";

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="invoices" element={<Invoices />} >
        <Route path=":invoiceId" element={<Invoice />}/>
      </Route>
      <Route path="expenses" element={<Expenses />} >
        <Route path=":expenseId" element={<Expense />} />
      </Route>
      <Route path="/cars" element={<Cars />} />
      <Route path="/tata" element={<Tata />} />
      <Route path="/rollsroyce" element={<RollsRoyce />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
