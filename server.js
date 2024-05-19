const experss = require('express')
const { resolve } = require("path")

const app = experss()

app.use('/', experss.static(resolve(__dirname, './dist')))

app.listen(process.env.PORT || 3000, (err) => {
    if(err){ return console.log(err)
    }

    console.log("Tudo Funcionando corretamente!")
})