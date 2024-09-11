const router = require('express').Router();
const thoughtControllers = require('../../controllers/thought-controllers');

router.route('/')
  .get(thoughtControllers.getAllThoughts)
  .post(thoughtControllers.createThought);

router.route('/:id')
  .get(thoughtControllers.getThoughtById)
  .put(thoughtControllers.updateThought)
  .delete(thoughtControllers.deleteThought);

router.route('/:thoughtId/reactions')
  .post(thoughtControllers.addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(thoughtControllers.removeReaction);

module.exports = router;

