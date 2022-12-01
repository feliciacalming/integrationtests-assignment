/**
 *@jest-environment jsdom
 */

import * as movieAppFunctions from "./../ts/movieApp";
import { expect, describe, test, jest, beforeEach } from "@jest/globals";
// import * as movieserviceFunctions from "./../ts/services/movieservice";
import * as movieserviceFunctions from "./../ts/services/movieservice";
import { IMovie } from "../ts/models/Movie";

jest.mock("./../ts/services/movieservice");

describe("init", () => {
  test("should call function handleSubmit on click", () => {
    //arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>`;
    let spy = jest.spyOn(movieAppFunctions, "handleSubmit").mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve();
        })
    );

    //act
    movieAppFunctions.init();
    document.getElementById("search")?.click();

    //assert
    expect(spy).toHaveBeenCalled();
    document.body.innerHTML = "";
  });
  document.body.innerHTML = "";
});

describe("createHtml", () => {
  test("should create html", async () => {
    //arrange
    let searchText = "moooo";
    let movies: IMovie[] = await movieserviceFunctions.getData(searchText);

    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    //act
    movieserviceFunctions.getData(searchText);
    movieAppFunctions.createHtml(movies, container);

    //expect
    expect(document.querySelectorAll("h3")[0].innerHTML).toContain("Per");
    expect(document.querySelectorAll("h3").length).toBe(3);
    expect(document.querySelectorAll("div.movie").length).toBe(3);
    document.body.innerHTML = "";
  });
});

// describe("handleSubmit", () => {
//   test("should blabla", () => {
//     //arrange
//     document.body.innerHTML = `<form id="searchForm">
//     <input type="text" id="searchText" placeholder="Skriv titel här" />
//     <button type="submit" id="search">Sök</button>
//   </form><div id="movie-container"></div>`;
//     let searchText = "";
//     let movies: IMovie[];

//     //act
//     movieserviceFunctions.getData(searchText);
//     movieAppFunctions.handleSubmit();

//     //arrange
//     expect(movi)
//   });
// });

describe("displayNoResult", () => {
  // test("should add innerhtml to p-tag", () => {
  //   //arrange
  //   document.body.innerHTML = `<div><p></p></div>`;
  //   let container: HTMLDivElement = document.querySelector(
  //     "div"
  //   ) as HTMLDivElement;

  //   //act
  //   movieAppFunctions.displayNoResult(container);

  //   //assert
  //   expect(
  //     (document.querySelector("p") as HTMLParagraphElement).innerHTML
  //   ).toBe("Inga sökresultat att visa!!");
  // });

  test("should append p-tag to div", () => {
    //arrange
    document.body.innerHTML = `<div></div>`;
    let container: HTMLDivElement = document.querySelector(
      "div"
    ) as HTMLDivElement;

    //act
    movieAppFunctions.displayNoResult(container);

    //assert
    expect(container.innerHTML).toBe("<p>Inga sökresultat att visa</p>");
    expect(document.querySelector("p")?.innerHTML).toBe(
      "Inga sökresultat att visa"
    );
    document.body.innerHTML = "";
  });
});

describe("handleSubmit", () => {
  test("", () => {
    //arrange
    let spy = jest.spyOn(movieAppFunctions, "createHtml");
  });
});
