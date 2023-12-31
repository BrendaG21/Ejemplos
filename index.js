const express = require('express')   //instanciar la libreria express
const app = express()
const port = 3000  //declarar un puerto
const {db} = require("./src/services/firebase/database")
const {firebaseAuth} = require("./src/services/firebase/auth")
const routes = require("./src/routes")

app.use(db);
app.use(firebaseAuth);
app.use(express.json());

routes(app);

//crear una ruta

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})









//npm install --save-dev nodemon  (para instalar la libreria de nodemon)