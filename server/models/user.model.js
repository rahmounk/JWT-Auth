//* Dépendance mongoose pour réaliser le schéma.
const mongoose = require('mongoose');

//* Créer le schéma/la structure de nos données qui existeront dans la BDD
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type:String,
        unique: true,
        required: true
    },
    password: {
        type:String,
        required:true
    }
})


//* Exportation de notre schéma pour l'utiliser ensuite sur notre serveur.
module.exports = mongoose.model('User', userSchema)

//! Création des routes spécifiques liées au model user dans routes/user.routes.js

