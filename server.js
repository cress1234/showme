const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res)
{
  res.render('index',{details:null,error:null})
})

app.post('/', function (req, res) 
{
  let show = req.body.show;
  let url = `https://www.episodate.com/api/show-details?q=${show}`
request(url, function (err, response, body) {
    if(err){
      res.render('index', {details: null, error: 'Error, please try again'});
    } else {
      let details = JSON.parse(body)
      if(details.tvShow.name == undefined){
        res.render('index', {details: null, error: 'Error, please try again'});
      } else {
        //it works
        outputText = details.tvShow.name + "<br>" + details.tvShow.description;
        res.render('index', {details: outputText, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
