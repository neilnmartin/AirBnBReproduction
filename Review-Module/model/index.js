const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost/capStoneUsers';
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  firstName: {
    type: String
  },
  img: {type: String},
  review: {
      type: String
    },
    date: {type: Date}

})

const users = mongoose.model('users', userSchema);

module.exports = {users};

//Create users

// for (let i = 0; i < 33; i++) {
//   users.create({firstName: faker.name.firstName(), review: faker.lorem.sentences(4), img: faker.image.avatar(), date: faker.date.between("2017-03-17", "2018-07-25")},
//   (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data);
//     }
//   })
// }

// console.log(faker.name.firstName());
// console.log(faker.lorem.sentences(2));
// console.log(faker.image.avatar());
// console.log(moment(faker.date.between("03-17-2017", "07-25-2018")).format("MMMM D YYYY"));