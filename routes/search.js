const router = require("express").Router();
const db = require('../db/connection');
const searchQueries = require('../db/queries/searchQueries');

router.get('/:term',(req, res) => {

    searchQueries.getSearchResult(req.params.term)
    .then(searchResult => {
      res.json({ searchResult });
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  
module.exports = router;