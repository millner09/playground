const characterCreator = require("./character");

test("createCharacter: health defaults to 1000", () => {
  const character = characterCreator.createCharacter();
  expect(character.getCurrentHealth()).toBe(1000);
});

test("createCharacter: level defaults to 1", () => {
  const character = characterCreator.createCharacter();
  expect(character.getCurrentLevel()).toBe(1);
});

test("createCharacter: isAlive defaults to true", () => {
  const character = characterCreator.createCharacter();
  expect(character.isCharacterAlive()).toBe(true);
});

test("damage: Should subtract damage amount from health", () => {
  // Arrange
  const character = characterCreator.createCharacter();
  const damage = 10;
  const expectedHealth = character.getCurrentHealth() - damage;

  // Act
  character.damage(damage);

  //Assert
  expect(character.getCurrentHealth()).toBe(expectedHealth);
});

test("damage: Health should be set to 0 and isAlive to false when damage equal to health", () => {
  // Arrange
  const character = characterCreator.createCharacter();
  const damage = character.getCurrentHealth();

  // Act
  character.damage(damage);

  // Assert
  expect(character.getCurrentHealth()).toBe(0);
  expect(character.isCharacterAlive()).toBe(false);
});

test("damage: Health should be set to 0 and isAlive to false when damage greater than health", () => {
  // Arrange
  const character = characterCreator.createCharacter();
  const damage = character.getCurrentHealth() + 1;

  // Act
  character.damage(damage);

  // Assert
  expect(character.getCurrentHealth()).toBe(0);
  expect(character.isCharacterAlive()).toBe(false);
});

test("heal: Dead characters cannot be healed", () => {
  // Arrange
  const character = characterCreator.createCharacter();
  const damage = character.getCurrentHealth() + 1;
  character.damage(damage);

  // Assert
  expect(() => {
    character.heal(1);
  }).toThrow();
});
