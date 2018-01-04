

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      socketIn=require('./socket-events/socketIn'),
      
      contractRoutes = require('./expressRoutes/contractRoutes').contractRoutes;

      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB).then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );
      const app = express();
      var server = require('http').createServer(app);  
      var io = require('socket.io')(server);
      require('./expressRoutes/contractRoutes').initialize(io);
      socketIn(io);
      app.use(express.static('public'));
      app.use(bodyParser.json());
      app.use(cors());
      app.use('/contracts', contractRoutes);

      const port = process.env.PORT || 4000;

        server.listen(port,'0.0.0.0', function(){
         console.log('Listening on port ' + port);
       });

