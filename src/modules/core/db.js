const mongoose = require('mongoose');

function dbConnect() {
  //mongodb://localhost/express
  mongoose.connect(
    'mongodb+srv://admin:d8FOnQltm32GM6zR@cluster0.9inzv.mongodb.net/kanban?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  );

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('CONNECTED MONGO DB');
  });
}

module.exports = dbConnect;

//d8FOnQltm32GM6zR
//mongodb+srv://admin:d8FOnQltm32GM6zR@cluster0.9inzv.mongodb.net/kanban?retryWrites=true&w=majority
