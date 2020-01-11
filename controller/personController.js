const data = require('../jsonData/jsondata')

exports.fetchPersonProfile = async (req, res) => {
    let result = data.data.filter(itm => itm.email == req.body.email)

    let response = {
        status: true,
        data: {
            name: result[0].name,
            email: result[0].email,
            course: result[0].course
        }
    }
    res.send(response);

}