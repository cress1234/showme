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
  let url = `https://www.episodate.com/api/show-details?q=${show}`//change to search fn, add buttons to html to select correct id 
request(url, function (err, response, body) {
    if(err){
      res.render('index', {details: null, error: 'Error, please try again'});
    } else {
      let details = JSON.parse(body)
      if(details.tvShow == undefined)//needs changing
      {
        res.render('index', {details: null, error: 'Error, please try again'});
      } else {
        //it works..adds show to array,class structure? etc
        console.log(details.tvShow.name)
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')//need at all? can change to something else just so we know web page is up
})