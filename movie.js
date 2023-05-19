// 1
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

}
var movie1 = new Movie('Soorarai Pottru', '2D Production', 'PG');
console.log(movie1.title, movie1.studio, movie1.rating = 'PG');

//2
class Movie2 {
  constructor(title, studio, rating = 'PG') {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

}
var movie2 = new Movie2('Soorarai Pottru', '2D Production');
console.log(movie2.title, movie2.studio, movie2.rating);

//3

class Movie3 {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  rated() {
    for (var i = 0; i < this.rating.length; i++) {
      if (this.rating[i] == 'PG-13') {
        console.log(this.title[i], this.studio[i], this.rating[i]);
      }
    }

  }
}
let movie3 = new Movie3(['Soorarai Pottru', 'Kappan', 'Singam'], ['2d Entertainment', 'Lyca Production', 'Studio Green'], ['PG', 'PG-13', 'PG-14',])
movie3.rated();

//4

class Movie4 {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

}
var movie4 = new Movie4('Casino Royale', 'Eon Productions', 'PG-13');
console.log(movie4.title, movie4.studio, movie4.rating);