//see:castnow
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
  let show = req.body.show.trim().replace(/ /g,'-');
  console.log(show);
  if ( show === "" )
  {
    res.render('index',{details:null,error: 'Enter the name of the show above.'});
    return;
  }
  let url = `https://www.episodate.com/api/show-details?q=${show}`
  //change to search fn, add buttons to html to select correct id 
  request(url, function (err, response, body) {
    if(err){
      res.render('index', {details: null, error: 'Show not found.'});
    } else {
      let details = JSON.parse(body)
      if(details.tvShow.name == undefined){
        res.render('index', {details: null, error: 'Show not found.'});
      } else {
        outputText = details.tvShow.name + "<br>" + details.tvShow.description;
        res.render('index', {details: outputText, error: null});
        //need to add selected TV show to stored set
      }
    }
  });
})

app.listen(3000, function () {
  console.log('ShowMe running on port 3000')
})
