const router = require('express').Router();
const {
    allThoughts,
    thoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/').get(allThoughts);

router.route('/:thoughtId').get(thoughtById);

router.route('/:userId').post(addThought);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought)
    .put(updateThought);

router
    .route('/:userId/:thoughtId/reactions')
    .post(addReaction);

router
    .route('/:userId/:thoughtId/:reactionId')
    .post(removeReaction);

module.exports = router;