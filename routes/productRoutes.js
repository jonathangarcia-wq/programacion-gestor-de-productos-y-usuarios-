
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// GET: Lista de productos
router.get("/", productController.productsList);

// GET: Formulario de creación
router.get("/newProduct", productController.productForm);

// POST: Crear producto
router.post("/newProduct", productController.newProduct);

// GET: Detalle del producto
router.get("/detail/:id", productController.productDetail);

// GET formulario de modificación
router.get("/edit/:id", productController.productEditForm);

// POST guardar modificación
router.post("/edit/:id", productController.productEdit);

// POST: Eliminar producto
router.post("/delete/:id", productController.productDelete);

module.exports = router;
