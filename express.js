const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require(./request.js);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));
app.enable('trust proxy');

var port = process.env.PORT || 8080;

api(app);

app.listen(port, function(){
    console.log('listening on port ' + port);
    
})
