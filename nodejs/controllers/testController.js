const db = require("../models")
const Test = db.test
const Kategoria = db.kategoria

exports.allTest = async (req, res) => {
    const tests = await Test.findAll()

    res.status(200).send(tests)
}

exports.kategoria = async (req, res) => {
    const kategoriak = await Kategoria.findAll()

    res.status(200).send(kategoriak)
}

exports.kategoriaTest = async (req, res) => {
    const tests = await Test.findAll({
        where: {
            kategoriumId: req.params.id
        }
    })

    res.status(200).send(tests)
}