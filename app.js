const express = require('express');
const app = express();
const taskRoute = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
app.use(express.json());

const port = 5001;

// ルーティング設計
app.use('/api/v1/tasks', taskRoute);

// データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`サーバーが起動しました on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
