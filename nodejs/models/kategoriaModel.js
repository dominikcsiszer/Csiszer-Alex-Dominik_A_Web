module.exports = (sequelize ,Sequelize) => {
    const Kategoria = sequelize.define("kategoria", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        kategorianev: {
            type: Sequelize.STRING
        }
    })

    return Kategoria
}