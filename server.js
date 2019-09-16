const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./dist/ui-test'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/ui-test/index.html'));
});

app.listen(process.env.PORT || 8080);