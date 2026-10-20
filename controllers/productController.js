
const productoModel = require("../models/productoModel");

module.exports = {
    // GET: Lista de productos
    productsList: (req, res) => {
        const productos = productoModel.read();

        res.render("productsList", {
            productos,
            title: "Productos"
        });
    },

    // GET: Detalle de un producto
    productDetail: (req, res) => {
        const productos = productoModel.read();
        const id = req.params.id;

        const producto = productos.find(
            producto => producto.id == id
        );

        res.render("productDetail", {
            title: "Detalle del producto",
            producto
        });
    },

    // GET: Formulario para crear un producto
    productForm: (req, res) => {
        res.render("productForm", {
            title: "Nuevo producto"
        });
    },

    // POST: Guardar un producto nuevo
    newProduct: (req, res) => {
        const productos = productoModel.read();

        const nuevoProducto = {
            id: Date.now(),
            nombre: req.body.nombre,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            precio: Number(req.body.precio),
            stock: Number(req.body.stock),
            disponible: req.body.disponible === "on"
        };

        productos.push(nuevoProducto);
        productoModel.write(productos);

        res.redirect("/products");
    },

    // GET: Formulario para modificar un producto
    productEditForm: (req, res) => {
        const productos = productoModel.read();
        const id = req.params.id;

        const producto = productos.find(
            producto => producto.id == id
        );

        res.render("productEdit", {
            title: "Modificar producto",
            producto
        });
    },

    // POST: Guardar los cambios del producto
    productEdit: (req, res) => {
        const productos = productoModel.read();
        const id = req.params.id;

        const producto = productos.find(
            producto => producto.id == id
        );

        if (producto) {
            producto.nombre = req.body.nombre;
            producto.categoria = req.body.categoria;
            producto.descripcion = req.body.descripcion;
            producto.precio = Number(req.body.precio);
            producto.stock = Number(req.body.stock);
            producto.disponible = req.body.disponible === "on";

            productoModel.write(productos);
        }

        res.redirect("/products");
    },

    // POST: Eliminar un producto
    productDelete: (req, res) => {
        const productos = productoModel.read();
        const id = req.params.id;

        const productosActualizados = productos.filter(
            producto => producto.id != id
        );

        productoModel.write(productosActualizados);

        res.redirect("/products");
    }
};
