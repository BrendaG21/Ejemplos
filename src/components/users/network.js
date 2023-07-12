const express = require("express");
const Controller = require("./controller")

const router = express.Router();

function addUser(req, res){
    const { auth } = req;
    const {
        email,
        password,
        displayName
    } = req.body;

    Controller.addUsers({
        auth,
        email,
        password,
        displayName
    })
    .then((result)=> res.send(result))
    .catch((error)=> res.send(error))

}

function getUser(req, res){
    const { auth } = req;
    const { email } = req.body;

    Controller.getUser({
        auth,
        email
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

function updateUser(req, res){
    const { auth } = req;
    const {
        email,
        password,
        displayName
    } = req.body;

    Controller.updateUser({
        auth,
        email,
        password,
        displayName
    })
    .then((result)=> res.send(result))
    .catch((error)=> res.send(error))
}
//users post agregar
//users patch actualizar
//users delete eliminar
//users get ontener

router.post("/", addUser)
router.get("/get-user", getUser)
router.patch("/update-user", (req, res) => {updateUser()})

module.exports = router