const db = require("../models")

const Test = db.test
const Kategoria = db.kategoria

exports.testData = () => {
    Kategoria.create({
        id: 1,
        kategorianev: "Programozás"
    }).then(() => {
        Test.create({
            id: 1,
            kerdes: "Mit jelent a HTML?",
            v1: "HyperText Markup Language",
            v2: "HyperText Make Language",
            v3: "Hyper Markup Language",
            v4: "HyperText Markup Langu",
            kategoriumId: 1
        })
        Test.create({
            id: 2,
            kerdes: "Mit jelent a CSS?",
            v1: "Cascador Style Sheets",
            v2: "Cascading Style Sheep",
            v3: "Nincs",
            v4: "Cascading Style Sheets",
            helyes: "v4",
            kategoriumId: 1
        })
    })
    Kategoria.create({
        id: 2,
        kategorianev: "Természetvédelem"
    }).then(() => {
        Test.create({
            id: 3,
            kerdes: "A papírt milyen szinű szelektív kukába gyűjtjük?",
            v1: "Kék",
            v2: "Piros",
            v3: "Sárga",
            v4: "Zöld",
            kategoriumId: 2
        })
        Test.create({
            id: 4,
            kerdes: "Melyek komposztálhatóak?",
            v1: "Nagy ágak",
            v2: "Ruhanemű",
            v3: "Zöldség - gyümölcs maradék, tojáshéj",
            v4: "Fém, műanyag",
            helyes: "v3",
            kategoriumId: 2
        })
    })
}