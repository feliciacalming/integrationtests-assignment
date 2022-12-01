/**
 *@jest-environment jsdom
 */

import { getData } from "../ts/services/movieservice";
import { IMovie } from "./../ts/models/Movie";
import { expect, describe, test, jest, beforeEach } from "@jest/globals";
import axios from "axios";

// jest.mock("./../ts/services/movieservice.ts");

let mockData: IMovie[] = [
  {
    Title: "Film1",
    imdbID: "123",
    Type: "film",
    Poster: "imageURL",
    Year: "1991",
  },

  {
    Title: "Film2",
    imdbID: "1234",
    Type: "film",
    Poster: "imageURL",
    Year: "1992",
  },

  {
    Title: "Film3",
    imdbID: "1235",
    Type: "film",
    Poster: "imageURL",
    Year: "1993",
  },
];

jest.mock("axios", () => ({
  get: async (searchText: string) => {
    return new Promise(
      (resolve, reject) => {
        let queryString = searchText;
        let usp = new URLSearchParams(queryString);
        let s = usp.get("s");
        let newSearchText = `${s}`;

        if (newSearchText.length > 3) {
          resolve({ data: { Search: mockData } });
          console.log(searchText, "NUUUUUU");
        } else {
          reject({ data: [] });
        }
      }
      //vi härmar objektet som hämtas från axios
      //om jag sätter if searchtext.length === 1 går den över till reject
    );
  },
}));

describe("getData", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should get mock data", async () => {
    let searchText = "lord";

    //act
    let result: IMovie[] = await getData(searchText);
    console.log("hej ", result);

    //assert
    expect(result.length).toBe(3);
    expect(result[0].Title).toBe("Film1");
  });

  test("should not get mockdata", async () => {
    //arrange
    let searchText = "bu";

    //act
    let result: IMovie[] = await getData(searchText);

    //assert
    expect(result.length).toBe(0);
    // console.log(result);
  });
});
