import { expect, describe, test, jest, beforeEach } from "@jest/globals";
import { IMovie } from "../ts/models/Movie";
import * as functions from "./../ts/functions";
import * as movieserviceFunctions from "./../ts/services/movieservice";

describe("movieSort", () => {
  let movies: IMovie[] = [
    {
      Title: "Per reser till Åre",
      imdbID: "123",
      Type: "film",
      Poster: "imageURL",
      Year: "1991",
    },

    {
      Title: "Karlsson på loftet",
      imdbID: "1234",
      Type: "film",
      Poster: "imageURL",
      Year: "1992",
    },

    {
      Title: "Adams AW",
      imdbID: "1235",
      Type: "film",
      Poster: "imageURL",
      Year: "1993",
    },

    {
      Title: "Felles psykbryt",
      imdbID: "1235",
      Type: "film",
      Poster: "imageURL",
      Year: "1993",
    },
  ];

  test("should sort list alphabetically from a-z", async () => {
    //arrange
    //act
    functions.movieSort(movies);

    //assert
    expect(movies[0].Title).toBe("Adams AW");
    expect(movies[1].Title).toBe("Felles psykbryt");
    expect(movies[2].Title).toBe("Karlsson på loftet");
    expect(movies[3].Title).toBe("Per reser till Åre");
  });

  test("should return 0", () => {
    let movies: IMovie[] = [
      {
        Title: "Adams AW",
        imdbID: "1235",
        Type: "film",
        Poster: "imageURL",
        Year: "1993",
      },

      {
        Title: "Karlsson på loftet",
        imdbID: "1234",
        Type: "film",
        Poster: "imageURL",
        Year: "1992",
      },

      {
        Title: "Karlsson på loftet",
        imdbID: "1234",
        Type: "film",
        Poster: "imageURL",
        Year: "1992",
      },

      {
        Title: "Per reser till Åre",
        imdbID: "123",
        Type: "film",
        Poster: "imageURL",
        Year: "1991",
      },
    ];

    //act
    functions.movieSort(movies);

    //assert
    expect(movies[0].Title).toBe("Adams AW");
    expect(movies[1].Title).toBe("Karlsson på loftet");
    expect(movies[2].Title).toBe("Karlsson på loftet");
    expect(movies[3].Title).toBe("Per reser till Åre");
  });

  test("should sort list in reverse order from z-a", () => {
    let movies: IMovie[] = [
      {
        Title: "Per reser till Åre",
        imdbID: "123",
        Type: "film",
        Poster: "imageURL",
        Year: "1991",
      },

      {
        Title: "Adams AW",
        imdbID: "1235",
        Type: "film",
        Poster: "imageURL",
        Year: "1993",
      },

      {
        Title: "Karlsson på loftet",
        imdbID: "1234",
        Type: "film",
        Poster: "imageURL",
        Year: "1992",
      },

      {
        Title: "Felles psykbryt",
        imdbID: "1235",
        Type: "film",
        Poster: "imageURL",
        Year: "1993",
      },
    ];
    //arrange
    let desc: boolean = false;

    //act
    functions.movieSort(movies, desc);

    //assert
    expect(movies[0].Title).toBe("Per reser till Åre");
    expect(movies[1].Title).toBe("Karlsson på loftet");
    expect(movies[2].Title).toBe("Felles psykbryt");
    expect(movies[3].Title).toBe("Adams AW");
  });

  test("should return 0", () => {
    let movies: IMovie[] = [
      {
        Title: "Per reser till Åre",
        imdbID: "123",
        Type: "film",
        Poster: "imageURL",
        Year: "1991",
      },

      {
        Title: "Adams AW",
        imdbID: "1235",
        Type: "film",
        Poster: "imageURL",
        Year: "1993",
      },

      {
        Title: "Adams AW",
        imdbID: "1235",
        Type: "film",
        Poster: "imageURL",
        Year: "1993",
      },
    ];
    //arrange
    let desc: boolean = false;

    //act
    functions.movieSort(movies, desc);

    //assert
    expect(movies[0].Title).toBe("Per reser till Åre");
    expect(movies[1].Title).toBe("Adams AW");
    expect(movies[2].Title).toBe("Adams AW");
  });
});
