const data = require('../jsonData/jsondata')

exports.authentication = async (req, res, next) => {
    let result = data.data.filter(itm => itm.email == req.body.email)
    if (result.length > 0) {
        if (result[0].token == req.headers['authorization']) {
            next()
        }
        else {
            res.send({ status: false, message: 'unauthrized' })
        }
    } else {
        res.send({ status: false, message: 'unauthrized' })
    }
}


