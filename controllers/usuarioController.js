
const usuarioModel = require("../models/usuarioModel");

module.exports = {
    // GET: Lista de usuarios
    usersList: (req, res) => {
        const usuarios = usuarioModel.read();

        res.render("usersList", {
            usuarios,
            title: "Usuarios"
        });
    },

    // GET: Detalle de un usuario
    userDetail: (req, res) => {
        const usuarios = usuarioModel.read();
        const id = req.params.id;

        const usuario = usuarios.find(
            usuario => usuario.id == id
        );

        res.render("userDetail", {
            title: "Detalle del usuario",
            usuario
        });
    },

    // GET: Formulario para crear un usuario
    userForm: (req, res) => {
        res.render("userForm", {
            title: "Nuevo usuario"
        });
    },

    // POST: Guardar un usuario nuevo
    newUser: (req, res) => {
        const usuarios = usuarioModel.read();

        const nuevoUsuario = {
            id: Date.now(),
            nombre: req.body.nombre,
            email: req.body.email,
            edad: Number(req.body.edad)
        };

        usuarios.push(nuevoUsuario);
        usuarioModel.write(usuarios);

        res.redirect("/users");
    },

    // GET: Formulario para modificar un usuario
    userEditForm: (req, res) => {
        const usuarios = usuarioModel.read();
        const id = req.params.id;

        const usuario = usuarios.find(
            usuario => usuario.id == id
        );

        res.render("userEdit", {
            title: "Modificar usuario",
            usuario
        });
    },

    // POST: Guardar los cambios del usuario
    userEdit: (req, res) => {
        const usuarios = usuarioModel.read();
        const id = req.params.id;

        const usuario = usuarios.find(
            usuario => usuario.id == id
        );

        if (usuario) {
            usuario.nombre = req.body.nombre;
            usuario.email = req.body.email;
            usuario.edad = Number(req.body.edad);

            usuarioModel.write(usuarios);
        }

        res.redirect("/users");
    },

    // POST: Eliminar un usuario
    userDelete: (req, res) => {
        const usuarios = usuarioModel.read();
        const id = req.params.id;

        const usuariosActualizados = usuarios.filter(
            usuario => usuario.id != id
        );

        usuarioModel.write(usuariosActualizados);

        res.redirect("/users");
    }
};
