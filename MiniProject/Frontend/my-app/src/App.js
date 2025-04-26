import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import DeleteExpense from './components/DeleteExpense';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit" element={<EditExpense />} />
        <Route path="/delete" element={<DeleteExpense />} />
      </Routes>
    </Router>
  );
};

export default App;
