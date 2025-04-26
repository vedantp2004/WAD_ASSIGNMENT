import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/expenses', formData);
      alert('Expense added successfully!');
      setFormData({ title: '', amount: '', category: '', date: '', notes: '' });
    } catch (error) {
      alert('Failed to add expense');
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      marginBottom: '15px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Expense</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} style={styles.input} required />
        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} style={styles.input} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} style={styles.input} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} style={styles.input} required />
        <input type="text" name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
