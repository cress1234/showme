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
  res.render('index',{result:null,error:null})
})

app.post('/', function (req, res) 
{
  let show = req.body.show.trim().replace(/ /g,'-');
  if ( show === "" )
  {
    res.render('index',{result:null,error: 'Enter the name of the show above.'});
    return;
  }
  let url = `https://www.episodate.com/api/search?q=${show}&page=1`
  //add buttons to html to select correct id 
  request(url, function (err, response, body) {
    if(err){
      res.render('index', {result: null, error: 'Error.'});
    } else {
      let details = JSON.parse(body)
      if(details.total === "0"){
        res.render('index', {result: null, error: 'No results.'});
      } else {
        // let ids = []
        // let names = []
        // let imgs = []
        // for(let i=0 ; i < details.length ; i++){
        //   ids.push(details.tv_shows[i].id)
        //   names.push(details.tv_shows[i].name)
        //   imgs.push(details.tv_shows[i].image_thumbnail.path)
        // };
        // let outputText = {};
        // for(let i=0 ; i < details.length ; i++){
        //   outputText.push("id":ids[i],"name":names[i],"img":imgs[i])
        // }
        let outputText = details.tv_shows;
        res.render('index', {result: outputText, error: null});
        //need to add selected TV show to stored set
      }
    }
  });
});

app.listen(3000, function () {
  console.log('ShowMe running on port 3000')
})
