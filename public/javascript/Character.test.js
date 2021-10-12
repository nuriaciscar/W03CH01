import Character from "./Character";

describe("Given a character class", () => {
  describe("When it receives a parent element, a class name and html tag", () => {
    test("Then it should render a 'li' element with 'character col' class", () => {
      //Arrange
      const parent = document.createElement("ul");
      const className = "characters";
      const tag = "li";

      //Act
      new Component(parent, className, tag);
      console.log(parent.querySelector("li.characters"));
      const result = parent.querySelector("li.characters");

      //Assert
      expect(result).not.toBeNull();
    });
  });
});
