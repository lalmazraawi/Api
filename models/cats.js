const cats = (connection, Sequelize) => {
    return connection.define('cats', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        origin: { type: Sequelize.STRING },
        breed: { type: Sequelize.STRING },
        hair: { type: Sequelize.STRING },
        temperament: {type: Sequelize.STRING},
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE }
      }, { paranoid: true })
    }
  
  
  module.exports = cats
  