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

// jest.mock("axios", () => ({
//   get: async (searchText: string) => {
//     return new Promise(
//       (resolve, reject) => {
//         if (searchText.length > 2) {
//           resolve({ data: { Search: mockData } });
//         } else {
//           reject();
//         }
//       }
//       //vi härmar objektet som hämtas från axios
//     );
//   },
// }));

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => resolve({ data: { Search: mockData } }));
  },
}));

describe("getData", () => {
  test("should get mock data", async () => {
    let searchText = "lord";
    //act
    let result: IMovie[] = await getData(searchText);
    console.log("hej ", result);

    //assert
    expect(result.length).toBe(3);
    expect(result[0].Title).toBe("Film1");
  });

  //   test("should not get mockdata", async () => {
  //   jest.mock("axios", () => ({
  //   get: async (searchText: string) => {
  //     return new Promise(
  //       (resolve, reject) => {
  //         if (searchText.length > 2) {
  //           resolve({ data: { Search: mockData } });
  //         } else {
  //           reject();
  //         }
  //       }
  //       //vi härmar objektet som hämtas från axios
  //     );
  //   },
  // }));
  //     //arrange
  //     let searchText = "he";

  //     //act
  //     let result: IMovie[] = await getData(searchText);

  //     //assert
  //     expect(result.length).toBe(3);
  //   });
});
