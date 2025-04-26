const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ExpenseTracker")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


// Mongoose model for expenses
const Expense = mongoose.model('Expense', new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  date: Date,
  notes: String
}));

// Routes
app.get('/', (req, res) => {
  res.send("Welcome to Expense Tracker System");
});

// GET all expenses
app.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses', details: err.message });
  }
});


// POST new expense
app.post('/expenses', async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create expense', details: err.message });
  }
});


// DELETE expense`                        
app.delete('/expenses/title/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const result = await Expense.findOneAndDelete({ title });

    if (!result) {
      return res.status(404).json({ message: `No expense found with title "${title}"` });
    }

    res.status(200).json({ message: 'Expense deleted successfully', deleted: result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete expense', details: err.message });
  }
});

app.put('/expenses/:title', async (req, res) => {
  try {
    const { title } = req.params;

    const updatedExpense = await Expense.findOneAndUpdate(
      { title },           
      req.body,         
      { new: true, runValidators: true } 
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: `No expense found with title "${title}"` });
    }

    res.status(200).json({ message: 'Expense updated successfully', expense: updatedExpense });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
