const express = require('express');
const router = express.Router();
const knex = require('knex')
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

router.get("/", (req, res) => {
    db('cars')
    .select()
    .then(cars => res.status(200).json({data: cars}))
    .catch(err => res.status(500).json({message: "There was an issue with the DB", err: err}))
})

router.post("/", (req, res) => {
    db('cars')
    .insert(req.body)
    .then(update => res.status(201).json({data: update}))
    .catch(err => res.status(500).json({message: "There was an issue with the DB", err: err}))
    
})

module.exports = router;



