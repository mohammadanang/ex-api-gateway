const express = require("express")
const router = express.Router()
const apiAdapter = require("../helpers/api-adapter")
const BASE_URL = process.env.AUTH_SERVICE_URL
const api = apiAdapter(BASE_URL)

router.post("/auth/register", (req, res) => {
    api.post(req.path).then(resp => {
        console.log(`register ${JSON.parse(resp)}`)
        res.send({resp})
    }).catch(err => {
        res.send({ msg: err.message})
    })
})

router.post("/auth/login", async (req, res) => {
    let { email, password } = req.body

    try {
        let result = await api.post(req.path, {
            email, password
        })

        return res.send({
            code: 200,
            status: "success",
            data: result.data
        })
    } catch(err) {
        return res.send({
            code: 400,
            message: err.message
        })
    }
})

module.exports = router
