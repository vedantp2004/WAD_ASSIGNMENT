import React, { useState } from 'react';
import axios from 'axios';

function DeleteExpense() {
  const [title, setTitle] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/expenses/title/${title}`);
      alert('Expense Deleted');
      setTitle('');
    } catch (error) {
      alert('Failed to delete expense. Make sure the title exists.');
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff8f8',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    },
    heading: {
      marginBottom: '20px',
      color: '#b30000'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Delete Expense</h2>
      <input
        placeholder="Enter Title to delete"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
        required
      />
      <button onClick={handleDelete} style={styles.button}>Delete</button>
    </div>
  );
}

export default DeleteExpense;
