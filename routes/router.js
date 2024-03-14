const express = require('express');
const router = express.Router();
const fs = require('fs');

let movies = []; 

fs.readFile('movieData.json', (err, data) => {
    if (err) throw err;
    movies = JSON.parse(data);
});

function findMoviekById(id) {
    return movies.find(movie => movie.id.toString() === id);
}

router.get('/', (req, res) => {
    res.render('index', { movies: movies });
})

router.get('/movie/:id', (req, res) => {
    const { id } = req.params;
    const movie = findMoviekById(id);

    if (movie) {
        console.log("Movie found:", movie);
        res.render('movie', { movie });
    } else {
        console.log("Movie not found for ID:", id);
        res.status(404).send('Movie not found');
    }
});

router.delete('/movie/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = movies.findIndex(movie => movie.id.toString() === id);

    if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);

        fs.writeFile('movieData.json', JSON.stringify(movies, null, 2), err => {
            if (err) {
                console.error("Failed to delete the movie:", err);
                return res.status(500).send('Error deleting the movie.');
            }

            res.send('Movie deleted successfully.');
        });
    } else {
        res.status(404).send('Movie not found.');
    }
});

router.post('/add-movie', (req, res) => {

    const { name, description, text, poster, genre } = req.body;

    const newId = movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;

    const newMovie = {
        id: newId,
        name,
        description,
        text,
        poster,
        genre
    };

    movies.push(newMovie);

    fs.writeFile('movieData.json', JSON.stringify(movies, null, 2), err => {
        if (err) {
            console.error("Failed to add the movie:", err);
            return res.status(500).send('Error adding the movie.');
        }

        res.redirect('/');
    });
});

router.get('/add-movie', (req, res) => {
    res.render('newMovie');
})

router.post('/edit-movie/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, text, genre, poster } = req.body;

    const index = movies.findIndex(movie => movie.id.toString() === id);

    if (index !== -1) {
        movies[index] = {
            id: parseInt(id),
            name,
            description,
            text,
            genre,
            poster
        };

        fs.writeFile('movieData.json', JSON.stringify(movies, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Failed to update movie');
            } else {
                res.redirect(`/`);
            }
        });
    } else {
        res.status(404).send('Movie not found');
    }
});

router.get('/edit-movie/:id', (req, res) => {
    const { id } = req.params;
    const movie = findMoviekById(id);

    if (movie) {
        res.render('editMovie', { movie });
    } else {
        res.status(404).send('Movie not found');
    }
});

module.exports = router;
