import { fromGlobalId } from 'graphql-relay';
import { intArg, list, nonNull, queryType, stringArg } from 'nexus';
import {
  getPokemonById,
  getPokemonByName,
  getPokemons
} from '../service/Pokemon';
import { PokemonType } from './PokemonType';

export const Query = queryType({
  description: 'Query any Pokémon by number or name',
  definition(t) {
    t.field('pokemons', {
      type: list(PokemonType),
      args: {
        first: nonNull(intArg())
      },
      resolve: (obj, args) => getPokemons(args)
    });
    t.field('pokemon', {
      type: PokemonType,
      args: {
        id: stringArg(),
        name: stringArg()
      },
      resolve: async (obj, { id, name }) => {
        if (id) {
          return getPokemonById(fromGlobalId(id).id);
        }

        if (name) {
          return getPokemonByName(name);
        }

        throw new Error(
          'You need to specify either the ID or name of the Pokémon'
        );
      }
    });
  }
});
