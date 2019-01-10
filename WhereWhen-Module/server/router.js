const router = require('express').Router();
const { whereController, whenController } = require('./controllers');

router.route('/where')
  .get(whereController.get)
  .post(whereController.post)
  .put(whereController.put)
  .delete(whereController.delete);

router.route('/when')
  .get(whenController.get)
  .post(whenController.post)
  .put(whenController.put)
  .delete(whenController.delete);

module.exports = {
  router
}