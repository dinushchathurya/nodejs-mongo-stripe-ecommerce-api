const Cart = require('../models/Cart');

const CartController = {

    /* get all carts (only admin) */
    async get_carts(req, res) {
        try {
            const carts = await Cart.find();
            res.status(200).json({
                type: "success",
                carts
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* get user cart */
    async get_cart(req, res) {
        try {
            const cart = await Cart.findOne({ userId: req.params.userId});
            if (!cart) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                res.status(200).json({
                    type: "success",
                    cart
                })
            }
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* add product to cart */
    async create_cart(req, res) {
        const newCart = new Cart(req.body);
        try {
            const savedCart = await newCart.save();
            res.status(201).json({
                type: "success",
                message: "Product added successfully",
                savedCart
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* update product */
    async update_cart(req, res) {
        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true }
            );
            res.status(200).json({
                type: "success",
                message: "Cart updated successfully",
                updatedCart
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* delete cart */
    async delete_cart(req, res) {
        try {
            await Cart.findOneAndDelete(req.params.id);
            res.status(200).json({
                type: "success",
                message: "Product has been deleted successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    }
};

module.exports = CartController;