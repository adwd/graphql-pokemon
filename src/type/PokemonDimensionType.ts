import { objectType } from 'nexus';

export const PokemonDimension = objectType({
  name: 'PokemonDimension',
  description: "Represents a Pokémon's dimensions",
  definition(t) {
    t.string('minimum', {
      description: 'The minimum value of this dimension',
      resolve: obj => obj.minimum
    });
    t.string('maximum', {
      description: 'The maximum value of this dimension',
      resolve: obj => obj.maximum
    });
  }
});
