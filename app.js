const express = require("express");
const app = express();
const morgan = require('morgan');
const data = require('./postBank');
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");

//middleware
// pass morgan to app.us
// to intercept all req and res
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

// const timeCal = (miliseconds) => {
//   let min = (miliseconds/6000);
//   let now =  Date.now();
//   let timeDiff = (now-min);
//   if (timeDiff < 1) {
//     return 'Just Now'
//   } else if (timeDiff => 1 && timeDiff < 60) {
//     return 'A Few minutes ago'
//   } else if (timeDiff => 60 && timeDiff < 1440 ) {
//     return 'An hour ago'
//   } else if (timeDiff => 1440 && timeDiff < 2880 ) {
//     return 'Yesterday'
//   } else {
//     return 'Few days ago'
//   }
// }
app.get('/', (req,res) => {
  const posts = data.list();
  res.send(postList(posts));
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = data.find(id);
  res.send(postDetails(post));
});
  

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})
