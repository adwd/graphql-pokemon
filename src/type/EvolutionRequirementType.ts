import { objectType } from 'nexus';

export const PokemonEvolutionRequirement = objectType({
  name: 'PokemonEvolutionRequirement',
  description: "Represents a Pokémon's requirement to evolve",
  definition(t) {
    // t.implements(Node); // or t.implements("Node")
    t.int('amount', {
      description: 'The amount of candy to evolve',
      resolve: obj => obj.amount
    });
    t.string('name', {
      description: 'The name of the candy to evolve',
      resolve: obj => obj.name
    });
  }
});
