const router = require('express').Router();
const userController = require('../../controllers/user-controllers');

router.route('/')
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);

router.route('/:id')
  .get(userControllers.getUserById)
  .put(userControllers.updateUser)
  .delete(userControllers.deleteUser);

router.route('/:userId/friends/:friendId')
  .post(userControllers.addFriend)
  .delete(userControllers.removeFriend);

module.exports = router;

