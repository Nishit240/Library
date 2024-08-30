const express = require('express');
const router = express.Router();
const Books=require("../Model/books")

router.get('/', async (req, res) => {
    var books=Books.find();
    res.json(books);
});

router.get('/:id', async (req, res) => {
    var books=Books.find({_id: req.params,id});
    res.json(books);
});

router.delete('/:id', async (req, res) => {
    var books= await Books.deleteOne({_id: req.params,id});
    res.json(books);
});

router.put('/:id', async (req, res) => {
    var result = await books.updateOne({_id: req.params,id});
    res.json(result);
});

router.post('/', async (req, res) => {
    var books= new Books(req.body);
    var result = await books.save();
    res.json(result);
});

module.exports = router;