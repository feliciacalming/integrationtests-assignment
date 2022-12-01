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

  test("should sort list alphabetically", async () => {
    //arrange
    //act
    // console.log(movies);
    functions.movieSort(movies);
    // console.log(movies);

    //assert
    expect(movies[0].Title).toBe("Adams AW");
  });

  test("should change position [2] to position [3]", async () => {
    //arrange
    // console.log(movies);

    //act
    functions.movieSort(movies);
    // console.log(movies);

    //assert
    expect(movies[2].Title).toBe("Karlsson på loftet");
  });

  // test("should not change positions in list", () => {
  //   let movies: IMovie[] = [
  //     {
  //       Title: "Adams AW",
  //       imdbID: "1235",
  //       Type: "film",
  //       Poster: "imageURL",
  //       Year: "1993",
  //     },

  //     {
  //       Title: "Adams AW",
  //       imdbID: "1235",
  //       Type: "film",
  //       Poster: "imageURL",
  //       Year: "1993",
  //     },
  //     {
  //       Title: "Per reser till Åre",
  //       imdbID: "123",
  //       Type: "film",
  //       Poster: "imageURL",
  //       Year: "1991",
  //     },

  //     {
  //       Title: "Karlsson på loftet",
  //       imdbID: "1234",
  //       Type: "film",
  //       Poster: "imageURL",
  //       Year: "1992",
  //     },
  //   ];

  //   //act
  //   functions.movieSort(movies);

  //   //assert
  //   expect(movies[0].Title).toBe("Adams AW");
  // });

  test("should ", () => {});
});
