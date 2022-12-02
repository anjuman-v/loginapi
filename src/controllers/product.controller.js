const express = require('express');

const Product = require("../models/product.model")

const authenticate = require("../middlewares/authenticate")
const authorise = require("../middlewares/authorise")

const router = express.Router();

// router.post("", authenticate, authorise(["admin"]), async (req, res) => {
//     const {user} = req.user;
//     console.log(user)
//     const product = await Product.create({
//         name: req.body.name,
//         price: req.body.price,
//         lister: user._id
//     });

//     return res.status(201).send({product});
// })


router.post("",authenticate, authorise(["admin"]), async (req, res) => {
    try{
        const product = await Product.create(req.body)
        return res.status(200).send(product)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})


router.get("", authenticate, authorise(["admin", "VENDOR"]), async (req, res) => {
  
    try{
        const product = await Product.find().lean().exec();

        return res.status(200).send({product});
    } catch (error){
        return res.status(500).send({message :error.message})
    }
});
router.delete("/:id", authenticate, authorise(["admin", "VENDOR"]), async (req, res) => {
  
    try {
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
    
        res.status(200).send(product);
      } catch (error) {
        return res.status(500).send(error.message);
      }
});
router.get('/:id', authenticate, authorise(["admin", "VENDOR"]), async(req, res) => {
    try{
        const product = await Product.findById(req.params.id).lean().exec()
        return res.status(200).send(product)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})




module.exports = router;
