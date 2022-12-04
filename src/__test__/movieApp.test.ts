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
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

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
});

describe("handleSubmit", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should call on function createHtml", async () => {
    //arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" value="star" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>`;
    let spy = jest.spyOn(movieAppFunctions, "createHtml").mockReturnValue();

    //act
    await movieAppFunctions.handleSubmit();

    //assert
    expect(spy).toHaveBeenCalledTimes(1);
    document.body.innerHTML = "";
  });

  test("should call on function displayNoResult in else", async () => {
    //arrange

    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" value="st" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>`;
    let spy = jest
      .spyOn(movieAppFunctions, "displayNoResult")
      .mockReturnValue();

    //act
    await movieAppFunctions.handleSubmit();

    //assert
    expect(spy).toHaveBeenCalledTimes(1);
    document.body.innerHTML = "";
  });

  test("should catch error and call function displayNoResult", async () => {
    //arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" value="" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>`;
    let spy = jest
      .spyOn(movieAppFunctions, "displayNoResult")
      .mockReturnValue();

    //act
    await movieAppFunctions.handleSubmit();

    //assert
    expect(spy).toHaveBeenCalledTimes(1);
    document.body.innerHTML = "";
  });
});

describe("createHtml", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should create html for list of mockData-movies", async () => {
    //arrange
    let searchText = "Neverending";
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
    expect(document.querySelectorAll("h3").length).toBe(4);
    expect(document.querySelectorAll("div.movie").length).toBe(4);
    document.body.innerHTML = "";
  });
});

describe("displayNoResult", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should create and append p-tag to div and display error message", () => {
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
