import { list, objectType } from 'nexus';
import { getPokemonByEvolutions } from '../service/Pokemon';
import { PokemonEvolutionRequirement } from './EvolutionRequirementType';
import { PokemonAttack } from './PokemonAttackType';
import { PokemonDimension } from './PokemonDimensionType';

async function digestMessage(message: string): Promise<string> {
  const buff = Buffer.from(message);
  const hashHex = buff.toString('base64');
  return message;
}

export const PokemonType = objectType({
  name: 'Pokemon',
  description: 'Represents a Pokémon',
  definition(t) {
    t.id('id', {
      resolve: obj => obj.id
    });
    t.string('number', {
      description: 'The identifier of this Pokémon',
      resolve: obj => `00${obj.id}`.slice(-3)
    });
    t.string('name', {
      description: 'The name of this Pokémon',
      resolve: obj => obj.name
    });
    t.field('weight', {
      type: PokemonDimension,
      description: 'The minimum and maximum weight of this Pokémon',
      resolve: obj => obj.weight
    });
    t.field('height', {
      type: PokemonDimension,
      description: 'The minimum and maximum weight of this Pokémon',
      resolve: obj => obj.height
    });
    t.string('classification', {
      description: 'The classification of this Pokémon',
      resolve: obj => obj.classification
    });
    t.field('types', {
      type: list('String'),
      description: 'The type(s) of this Pokémon',
      resolve: obj => obj.types
    });
    t.field('resistant', {
      type: list('String'),
      description: 'The type(s) of Pokémons that this Pokémon is resistant to',
      resolve: obj => obj.resistant
    });
    t.field('attacks', {
      type: PokemonAttack,
      description: 'The attacks of this Pokémon',
      resolve: obj => obj.attacks
    });
    t.field('weaknesses', {
      type: list('String'),
      description: 'The type(s) of Pokémons that this Pokémon weak to',
      resolve: obj => obj.weaknesses
    });
    t.float('fleeRate', {
      resolve: obj => obj.fleeRate
    });
    t.int('maxCP', {
      description: 'The maximum CP of this Pokémon',
      resolve: obj => obj.maxCP
    });
    t.field('evolutions', {
      type: list(PokemonType),
      description: 'The evolutions of this Pokémon',
      resolve: obj => getPokemonByEvolutions(obj.evolutions)
    });
    t.field('evolutionRequirements', {
      type: PokemonEvolutionRequirement,
      description: 'The evolution requirements of this Pokémon',
      resolve: obj => obj.evolutionRequirements
    });
    t.int('maxHP', {
      description: 'The maximum HP of this Pokémon',
      resolve: obj => obj.maxHP
    });
    t.string('image', {
      resolve: obj =>
        `https://img.pokemondb.net/artwork/${obj.name
          .toLowerCase()
          .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')
          .replace(' ', '-')}.jpg`
    });
  }
});
