import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
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

export const getData = async (searchText: string): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    if (searchText !== "") {
      if (searchText.length > 3) {
        resolve(mockData);
      } else {
        resolve([]);
      }
    } else {
      reject();
    }
  });
};
