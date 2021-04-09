// Create our first route " / "
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const cors = require("cors"); // require le fichier de la route
const cookieParser = require ("cookie-parser");

//? DB Connection
//TODO : Ajouter la connection dans un fichier séparé qui servira de module de connexion.
mongoose.connect("mongodb://localhost/jwt_auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
	console.log("Connected to MongoDB");
});

// ? Instanciation de mon serveur & middlewares
// TODO : Créer un fichier .env qui contient les variables d'environnement comme l'URL de connexion à la BDD, le port d'écoute.
const app = express();
app.use(cookieParser()); //cookie parser use permet de traduire le contenu des cookies
app.use(cors({
    credentials:true,
    origin: ["http://localhost:8000" , "http://localhost:3000" , "http://localhost:4200" , "http://localhost:8080" ]
}));

app.use(express.json());

//? Routes
app.use("/api/user" , userRoutes); //* Utilisation du fichier route ici

app.listen(8080);
