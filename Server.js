const express = require('express')
const app = express()
const port = 3000

let user = {
    id: '1',
    username: 'Lorenczo'
}


app.get('/manistra', (req, res) => {
    res.json(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  