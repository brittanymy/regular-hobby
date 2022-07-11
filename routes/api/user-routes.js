const router = require('express').Router();
const {
    getUser,
    userById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router 
    .route('/')
    .get(getUser)
    .post(createUser);

router 
    .route('/:id')
    .get(userById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;