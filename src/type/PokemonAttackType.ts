import { list, objectType } from 'nexus';

export const AttackType = objectType({
  name: 'Attack',
  description: "Represents a Pokémon's attack types",
  definition(t) {
    t.string('name', {
      description: 'The name of this Pokémon attack',
      resolve: obj => obj.name
    });
    t.string('type', {
      description: 'The type of this Pokémon attack',
      resolve: obj => obj.type
    });
    t.int('damage', {
      description: 'The damage of this Pokémon attack',
      resolve: obj => obj.damage
    });
  }
});

export const PokemonAttack = objectType({
  name: 'PokemonAttack',
  description: "Represents a Pokémon's attack types",
  definition(t) {
    t.field('fast', {
      type: list(AttackType),
      description: 'The fast attacks of this Pokémon',
      resolve: obj => obj.fast
    });
    t.field('special', {
      type: list(AttackType),
      description: 'The special attacks of this Pokémon',
      resolve: obj => obj.special
    });
  }
});
