exports.createCharacter = () => {
  let health = 1000;
  let level = 1;
  let isAlive = true;

  return {
    getCurrentHealth: () => {
      return health;
    },
    getCurrentLevel: () => {
      return level;
    },
    isCharacterAlive: () => {
      return isAlive;
    },
    damage: (damageAmount) => {
      if (damageAmount >= health) {
        health = 0;
        isAlive = false;
      } else {
        health -= damageAmount;
      }
    },
    heal: (healAmount) => {
      if (isAlive) {
        health += healAmount;
        if (health > 1000) health = 1000;
      } else {
        throw new CannotHealDeadCharacterError(
          "You cannot heal characters that are not alive"
        );
      }
    },
  };
};
