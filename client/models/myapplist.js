const Mongoose = require("mongoose");

const applistSchema = new Mongoose.Schema({
  // eposta: { type: String, required: [true, 'E-posta alanı zorunludur.'] },
  // soyadi: { text: String, default: false },
  image: String,
  url: String,
  name: String,
  description: String
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = {
  Myapps: Mongoose.model("myapp", applistSchema),
};



// const Schema = mongoose.Schema;
// let kullaniciSchema = new Schema({
//   adi: String,
//   soyadi: { text: String, default: false },
//   yasi: Number,
//   eposta: { type: String, required: [true, 'E-posta alanı zorunludur.'] }
// });

// let Kullanici = mongoose.model('kullanici', kullaniciSchema);