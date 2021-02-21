import { makeSchema } from 'nexus';
import { PokemonType } from './type/PokemonType';
import { Query } from './type/QueryType';

export const schema = makeSchema({
  types: [PokemonType, [], { Query }]
});
