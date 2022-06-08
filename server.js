const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/api', (req, res) => {
    try {
        // Arrays being hosted
        const arrayOfURLs = ['https://www.youtube.com/embed/dV9worye5g0', 'https://www.youtube.com/embed/3sK3wJAxGfs', 'https://www.youtube.com/embed/01CL029k7pU']
            
        // Randomizing the YouTube video being sent to the user
        let randomURL = arrayOfURLs[Math.floor(Math.random() * arrayOfURLs.length)]
        
        // Feeding out the YouTube video that was randomly selected
        const objToJson = {
        randomURL : randomURL
        }
        res.end(JSON.stringify(objToJson));
    }
    catch(error){
        console.error(error)
    } 
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})