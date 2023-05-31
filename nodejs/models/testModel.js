module.exports = (sequelize ,Sequelize) => {
    const Test = sequelize.define("test", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        kerdes: {
            type: Sequelize.STRING
        },
        v1: {
            type: Sequelize.STRING
        },
        v2: {
            type: Sequelize.STRING
        },
        v3: {
            type: Sequelize.STRING
        },
        v4: {
            type: Sequelize.STRING
        },
        helyes: {
            type: Sequelize.STRING,
            defaultValue: "v1"
        }
    })

    return Test
}