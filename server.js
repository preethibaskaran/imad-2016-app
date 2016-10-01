var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles  = {
    'articleone': {
      title: 'Article One | Abilash R',
      heading: 'Artile One',
      date: 'Sept 5, 2016',
      content:  ` <p>
           Hello there, this is a short article about me, i am Abilash from chennai
           and i am a mechanical engineer and i have a deep interest in programming
           computers, technology, astrophotography, and i love to learn programming
           language like Javascript, python , PHP etc.
         </p>`},
    'articletwo': {
        title: 'About Me | Abilash R',
        heading: 'About Me',
        date: 'Sept 5, 2016',
        content:  ` <p>
             random text about me here   random text about me here   random text about me here   random text about me here
                random text about me here   random text about me here   random text about me here   random text about me here
                   random text about me here   random text about me here   random text about me here   random text about me here
           </p>
           <p>
                 random text about me here   random text about me here   random text about me here   random text about me here
                    random text about me here   random text about me here   random text about me here   random text about me here
                       random text about me here   random text about me here   random text about me here   random text about me here
            </p>
            <p>
                  random text about me here   random text about me here   random text about me here   random text about me here
                     random text about me here   random text about me here   random text about me here   random text about me here
                        random text about me here   random text about me here   random text about me here   random text about me here
             </p>`},
    'articlethree': {
      title: 'Work Experience| Abilash R',
      heading: 'Work Experience',
      date: 'Sept 5, 2016',
      content:  ` <p>
           Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
            Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
             Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
         </p>
         <p>
         Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
          Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
           Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
          </p>
          <p>
          Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
           Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
            Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me  Hire Me
           </p>`}
         };


function createTemplate (data) {
  var title = data.title;
  var date = data.date;
  var heading = data.heading;
  var content = data.content;

  var htmlTemplate = `
  <html>
  <head>
      <title>
      ${title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class = "content">
        <div>
          <a href="/">Home</a>     <a href= "/workexp">Work Experience</a>    <a href= "/aboutme">About  </a>     <a href= "https://www.facebook.com/imab26">Find me on Facebook </a>
        </div>
        <hr/>
        <h3>
          ${heading}
        </h3>
        <div>
          ${date}
        </div>
        <div>
            ${content}
           </div>
         </div>
         </body>

  </html>

  `;
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/:articlename', function (req, res){
  var articlename = req.params.articlename;
  res.send(createTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function(req, res){
    var name = req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
