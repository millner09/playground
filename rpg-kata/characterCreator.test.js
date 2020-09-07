const characterCreator = require("./character");

test("createCharacter: health defaults to 1000", () => {
  const character = characterCreator.createCharacter(1);
  expect(character.getCurrentHealth()).toBe(1000);
});

test("createCharacter: level defaults to 1", () => {
  const character = characterCreator.createCharacter(1);
  expect(character.getCurrentLevel()).toBe(1);
});

test("createCharacter: isAlive defaults to true", () => {
  const character = characterCreator.createCharacter(1);
  expect(character.isCharacterAlive()).toBe(true);
});

test("damage: Should subtract damage amount from health", () => {
  // Arrange
  const attacker = characterCreator.createCharacter(1);
  const defender = characterCreator.createCharacter(2);
  const damage = 10;
  const expectedHealth = defender.getCurrentHealth() - damage;

  // Act
  attacker.damageCharacter(defender, damage);

  //Assert
  expect(defender.getCurrentHealth()).toBe(expectedHealth);
});

test("damage: Health should be set to 0 and isAlive to false when damage equal to health", () => {
  // Arrange
  const attacker = characterCreator.createCharacter(1);
  const defender = characterCreator.createCharacter(2);
  const damage = defender.getCurrentHealth();

  // Act
  attacker.damageCharacter(defender, damage);

  // Assert
  expect(defender.getCurrentHealth()).toBe(0);
  expect(defender.isCharacterAlive()).toBe(false);
});

test("damage: Health should be set to 0 and isAlive to false when damage greater than health", () => {
  // Arrange
  const attacker = characterCreator.createCharacter(1);
  const defender = characterCreator.createCharacter(2);
  const damage = defender.getCurrentHealth() + 1;

  // Act
  attacker.damageCharacter(defender, damage);

  // Assert
  expect(defender.getCurrentHealth()).toBe(0);
  expect(defender.isCharacterAlive()).toBe(false);
});

test("heal: Dead characters cannot be healed", () => {
  // Arrange
  const attacker = characterCreator.createCharacter(1);
  const defender = characterCreator.createCharacter(2);
  const damage = defender.getCurrentHealth() + 1;
  attacker.damageCharacter(defender, damage);

  // Assert
  expect(() => {
    defender.heal(1);
  }).toThrow();
});

test("heal: cannot raise health above 1000", () => {
  // Arrange
  const character = characterCreator.createCharacter(1);

  // Act
  character.heal(2000);

  // Assert
  expect(character.getCurrentHealth()).toBe(1000);
});

test("damageCharacter: A character cannot Deal Damage to itself", () => {
  // Arrange
  const character = characterCreator.createCharacter(1);

  // Assert
  expect(() => {
    character.damageCharacter(character, 1);
  }).toThrow();
});
