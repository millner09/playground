exports.createCharacter = (newCharacterId) => {
  const id = newCharacterId;
  let health = 1000;
  let level = 1;
  let isAlive = true;

  return {
    getId: () => {
      return id;
    },

    getCurrentHealth: () => {
      return health;
    },

    getCurrentLevel: () => {
      return level;
    },

    isCharacterAlive: () => {
      return isAlive;
    },

    // Using underscore to declare "private" for outside users
    // TODO: Research better way of handling this so that outside
    //      users of this object cannot directly call _damage()
    _damage: (damageAmount) => {
      if (damageAmount >= health) {
        health = 0;
        isAlive = false;
      } else {
        health -= damageAmount;
      }
    },
    damageCharacter: (characterToDamage, damageAmount) => {
      if (characterToDamage.getId() == id)
        throw new CannotDamageSelfError(
          "A character cannot deal damage to itself"
        );

      characterToDamage._damage(damageAmount);
    },

    heal: (healAmount) => {
      if (!isAlive)
        throw new CannotHealDeadCharacterError(
          "You cannot heal characters that is not alive"
        );

      health += healAmount;
      if (health > 1000) health = 1000;
    },
  };
};
