const cats = require('../cats');

const getAllCats = (request, response) => {
    return response.send(cats);

};

const getCatsByOrigin = (request, response) => {
    const { origin } = request.params;
    const foundOrigin = cats.filter ((cats) => cats.origin === origin);
    return response.send(foundOrigin);
}

const saveNewCats = (request, response) => {
    console.log(request);

}

module.exports = {
    getAllCats,
    getCatsByOrigin,
    saveNewCats
};