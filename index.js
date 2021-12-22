const express = require('express');
const app = express(); 

app.get('/', (req, res) => { 
    res.send('Hosted on GCP App Engine!');
}); 

const PORT = process.env.PORT || 8080; 

app.listen(PORT, () => { 
    console.log(`Server started successfully on port ${PORT}`);
});