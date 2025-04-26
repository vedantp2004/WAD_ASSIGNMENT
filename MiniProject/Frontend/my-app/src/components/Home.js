import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to right, #43cea2, #185a9d)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginTop: '300px',
      color: '#fff',
      fontSize: '32px',
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <h2 style={styles.heading}>Welcome to the Expense Management System</h2>
    </div>
  );
};

export default Home;
