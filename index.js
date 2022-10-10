
const express= require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));


app.post('/change-string', (req, res) => {
    let{ name, key} = req.body;
    key = parseInt(key);
    var encodecode = '';
        for (var i = 0; i < name.length; i++) {
    
            encodecode += String.fromCharCode(name.charCodeAt(i) + key);
    
 }

 return res.status(200).json({encodecode});

    

})

app.get('/', (req, res) => {

    res.status(200).json({
        message:" Hello World"
    })
})


app.listen( 3000, ()=>{
    console.log("listening on port 3000")
})

// The key is an integer from 1 to 25. This encoder rotates the letters of the alphabet (A to Z). The encoding replaces each letter with the 1st to 25th next letter in the alphabet (wrapping Z to A).


// Example input: 2, "HI", Expected output: "JK"
// Example input: 20, "HI", Expected output: "BC"

// +