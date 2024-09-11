const { Thought } = require('../models');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then(thoughts => res.json(thoughts))
      .catch(err => res.status(500).json({error: err.message }));
  },

  getThoughtById(req, res) {
    Thought.findById(req.params.thoughtId)
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json({error: err.message }));
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json({error: err.message }));
  },

  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true })
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json({error: err.mesage}));
  },

  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.thoughtId)
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch(err => res.status(500).json({error: err.message}));
  },

  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
    .then(thought => res.json(thought))
    .catch(err => res.status(500).json({error: err.message}));
  },

  removeReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
    .then(thought => res.json(thought))
    .catch(err => res.status(500).json({error: err.message}));
  }
};
