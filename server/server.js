const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/games', gc.create);
app.get('/api/games', gc.read);
app.put('/api/games', gc.update);
app.delete('/api/games', gc.delete);

const port = 4500;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
 })
