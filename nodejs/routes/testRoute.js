const controller = require("../controllers/testController")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        )
        next()
      })
        
    app.get("/tesztek", controller.allTest)
    app.get("/tesztek/kategoria/:id", controller.kategoriaTest)
    app.get("/kategoria", controller.kategoria)
}