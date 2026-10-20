
const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

// GET: Lista de usuarios
router.get("/", usuarioController.usersList);

// GET: Formulario para crear un usuario
router.get("/newUser", usuarioController.userForm);

// POST: Crear usuario
router.post("/newUser", usuarioController.newUser);

// GET: Detalle de un usuario
router.get("/detail/:id", usuarioController.userDetail);

// GET: Formulario de modificación
router.get("/edit/:id", usuarioController.userEditForm);

// POST: Guardar modificación
router.post("/edit/:id", usuarioController.userEdit);

// POST: Eliminar usuario
router.post("/delete/:id", usuarioController.userDelete);

module.exports = router;
