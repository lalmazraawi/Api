const cats = require('../cats');
const models = require('../models')

const getAllCats = async (request, response) => {
    const cats = await models.cats.findAll()

    return response.send(cats);

};

const getCatsByOrigin = async (request, response) => {
    const { origin } = request.params
    
    const foundCats = await models.cats.findAll({where: {origin}})

    return response.send(foundCats);
}

const saveNewCats = async (request, response) => {
    const { origin, breed, hair, temperament } = request.body

    if (!origin || !breed || !hair || !temperament) {
        return response. status(400).send ('The following fields are required: origin, breed, hair, temperament')
    }

    const newCat =  await models.cats.create({ origin, breed, hair, temperament })

    cats.push(newCat)

    return response.status(201).send(newCat)
        
    

}

module.exports = {
    getAllCats,
    getCatsByOrigin,
    saveNewCats
};