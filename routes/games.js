const gamesRouter = require('express').Router();
const {createGame, findAllGames, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe,
checkIsGameExists, checkIsVoteRequest} = require('../middlewares/games')
const {sendGameCreated, sendAllGames, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted); 

module.exports = gamesRouter;