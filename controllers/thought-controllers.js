const { Thought } = require('../models');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then(thoughts => res.json(thoughts))
      .catch(err => res.status(500).json(err));
  },

  getThoughtById(req, res) {
    Thought.findById(req.params.id)
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },

  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },

  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.id)
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch(err => res.status(500).json(err));
  },

  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
    .then(thought => res.json(thought))
    .catch(err => res.status(500).json(err));
  },

  removeReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
    .then(thought => res.json(thought))
    .catch(err => res.status(500).json(err));
  }
};
