const express = require("express")
const mongoose = require('mongoose');
var cors = require('cors');
const app = express()
const PORT = process.env.PORT || 3000
let conn;
app.use(express.json())
app.use(cors());
const { Myapps } = require("./models/myapplist");

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })


const path = require('path')    // <-- added
app.use(express.static(path.join(__dirname, 'dist')))

app.get("/getir", (req, res) => {
  Myapps.find({}, (err, myapps) => {
    // if (err) throw err;
    console.log(myapps);
    res.end(JSON.stringify(myapps, null, 2))
  });
})

app.get("/cardInfo/:id", (req, res) => {
  console.log(req.params.id);

  Myapps.find({ _id: req.params.id }, (err, myapps) => {
    // if (err) throw err;
    console.log(myapps);
    res.end(JSON.stringify(myapps, null, 2))
  });
})


app.put("/cardInfo", (req, res) => {
  console.log(req.body._id);
  Myapps.findOneAndUpdate({ _id: req.body._id }, req.body, (err, result) => {
    if (err) throw err;
    console.log(result);
    let response = {
      status: true,
      message: 'Kayıt güncellendi'
    }
    res.end(JSON.stringify(response))
  });
})


app.post("/addApp", (req, res, next) => {
  Myapps.create(req.body, (err, result) => {
    if (err) throw err;
    console.log(result);

    let response = {
      status: true,
      message: 'Kayıt eklendi',
      data: req.body
    }
    res.end(JSON.stringify(response))
  });
});

app.post('/sil', function (req, res) {
  console.log(req.body);
  Myapps.deleteOne({ _id: req.body._id }, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  let response = {
    status: true,
    message: 'Veri silindi',
    data: req.body
  }
  res.end(JSON.stringify(response))
})




app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);

  await mongoose.connect('mongodb://root:example@mongodb:27017/app_db?authSource=admin&readPreference=primary&appname=NetvarDashboard&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
  });

  // await mongoose.connect('mongodb://root:example@localhost:27017/app_db');
  // console.log('Mongo DB Bağlandı');

})

mongoose.connection
  .on("open", () => console.log("Bağlantı başarıyla sağlanmıştır..."))
  .on("error", (error) => console.log("Bağlantı oluşturulamadı.", error.message));