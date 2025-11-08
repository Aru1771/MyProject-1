const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let employees = [
  { name: 'Aravind' },
  { name: 'Kiran' },
];

app.get('/api/employees', (req, res) => {
  res.json(employees);
});

app.post('/api/employees', (req, res) => {
  const newEmp = req.body;
  employees.push(newEmp);
  res.json(newEmp);
});

app.listen(5000, () => console.log('Backend running on port 5000'));

