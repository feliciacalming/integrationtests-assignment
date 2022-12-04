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
];

jest.mock("axios", () => ({
  get: async (searchText: string) => {
    return new Promise((resolve, reject) => {
      let queryString = searchText;
      let usp = new URLSearchParams(queryString);
      let s = usp.get("s");
      let newSearchText = `${s}`; //nu är newSearchText värdet för s=, dvs endast själva sökordet och inte hela URL:en.

      if (newSearchText.length > 3) {
        resolve({ data: { Search: mockData } });
      } else {
        reject({ data: [] });
      }
    });
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
    // console.log("Listans innehåll: ", result);

    //assert
    expect(result.length).toBe(3);
    expect(result[0].Title).toBe("Per reser till Åre");
  });

  test("should not get mockdata", async () => {
    //arrange
    let searchText = "bu";

    //act
    let result: IMovie[] = await getData(searchText);
    // console.log("Listan ska vara tom!", result);

    //assert
    expect(result.length).toBe(0);
  });
});
