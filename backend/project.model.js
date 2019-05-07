const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
    name: {
        type: String
    },
    completed: {
        type: Boolean
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }]  
});

module.exports = mongoose.model('Project', Project);
