import { IMovie } from "../../models/Movie";
import { IOmdbResponse } from "../../models/IOmdbResponse";
import { resolveObjectURL } from "buffer";

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

// export const getData = async (searchText: string): Promise<IMovie[]> => {
//   return new Promise((resolve, reject) => {
//     if (searchText) resolve(mockData);
//     else reject();
//   });
// };

export const getData = async (searchText: string): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    if (searchText.length > 3) resolve(mockData);
    else reject();
  });
};
