# todoapp-nodejs-mongodb

## 環境構築

### node の project を作成

`npm init -y`

### prettier を導入

1. `npm install --save-dev --save-exact prettier`
2. `.prettierrc` を作成
3. `.prettierignore` を作成

### express, nodemon を導入

1. `npm i express nodemon`
2. `package.json`に`"dev": "nodemon app.js"`を追記
3. `npm run dev`

### mongoose, dotenv を導入

1. `npm install mongoose`
2. `npm install dotenv`
