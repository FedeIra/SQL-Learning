const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

const uri = 'mongodb://localhost:27017/mywebstore';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

mongoose.connection.on('connected', () => {
  console.log('Database is connected to' + uri);
});

mongoose.connection.on('error', (err) => {
  console.log('Database error:' + err);
});

// Para escuchar el error una sola vez:
// mongoose.connection.once('error', (err) => {
//   console.log('Database error:' + err);
// });
