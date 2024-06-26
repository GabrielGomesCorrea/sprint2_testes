var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar/:admin", function (req, res) {
    usuarioController.cadastrar(req, res);
})
// Rota de cadastrar a empresa
router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.get("/listarFazenda", function (req, res) {
    usuarioController.listarFazenda(req, res);
});

module.exports = router;