const router = require('express').Router();
const { request } = require('express');
const { Child, Parent, User } = require('../../models');


// get parent details using the parent_id, assumed authentication done and user has access
router.get('/:id',  async (req, res) => {
  try {
    const childData = await Child.findByPk(req.params.id, {
      
    });

    if (!childData) {
      res.status(404).json({ message: 'No child record found with this id!' });
      return;
    }

    res.status(200).json(childData);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
