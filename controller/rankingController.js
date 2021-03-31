const axios = require('axios').default;

const base_url = "http://localhost:3000"

module.exports.findAll = async function (req, res) {

    var ranking
    await axios({
        method: 'get',
        url: `http://localhost:3000/ranking`
    })
    .then((retorno) => {
        res.status(200);
        ranking = retorno.data
    })
    .catch((error) => {
        console.log(error)
        ranking = []
    })
    return ranking
}

module.exports.store = async function (req, res) {
    var ranking
    await axios({
        method: 'post',
        url: `http://localhost:3000/win`,
        data: req.body
    })
    .then((retorno) => {
        res.status(200);
        ranking = retorno.data
    })
    .catch((error) => {
        ranking = ""
    })
    return ranking
}