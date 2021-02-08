const Mask = require('../models/mask');

module.exports = {
  root: (req, res) => {
    Mask.find().exec((err, masks) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let klass of masks) {
        ret.push(klass.name);
      }
      res.json(ret);
    })
  },
  byMaskName: (req, res) => {
    const section = req.params.name;

    Mask.findOne().bySection(section).exec((err, klass) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!klass) {
        res.status(404);
        res.json({'err': 'mask not found'});
        return;
      }
      console.log('sending mask: ' + klass)
      res.json(klass);
    })
  }
}
