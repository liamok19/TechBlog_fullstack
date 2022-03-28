const router = require('express').Router();
const { Child, Chores, Parent } = require('../../models');
const { beforeDestroy } = require('../../models/User');

// The `/api/chores` endpoint

router.get('/:id',  async (req, res) => {
    try {
      const choresData = await Chores.findByPk(req.params.id, {
        
      });
  
      if (!choresData) {
        res.status(404).json({ message: 'No chores found with this id!' });
        return;
      }
  
      res.status(200).json(choresData);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
