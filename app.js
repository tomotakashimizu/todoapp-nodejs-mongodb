const express = require('express');
const app = express();
const taskRoute = require('./routes/tasks');

const port = 5001;

app.use('/api/v1/tasks', taskRoute);

app.listen(port, () => {
  console.log(`サーバーが起動しました on port ${port}`);
});
