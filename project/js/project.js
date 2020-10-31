"use strict"

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    generes: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt("How many films have you already seen?");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        }
        personalMovieDB.count = prompt("How many films have you already seen?");
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of your last watching films', ''),
                b = prompt('Your grade', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("not enough");
        } else if (personalMovieDB.count < 30) {
            console.log("classical");
        } else if (personalMovieDB.count > 30) {
            console.log("master");
        } else {
            console.log("error occured")
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = personalMovieDB.privat === false;
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let res = "";
            res = prompt(`Your favorite genre number ${i}`);
            if (res == null || res.trim() === "") {
                i--;
            } else {
                personalMovieDB.generes[i - 1] = res;
            }
        }
        personalMovieDB.generes.forEach((item, i) => {
           console.log(`Favorite genre #${i} - is ${item}`);
        })
    }
};

// console.log(personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB()));