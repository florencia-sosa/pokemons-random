import { compose } from './fp';
import { randomNumber, lbToKg } from './random-utils';

export const calculateWeight = (pokemon: any) => {
    const baseWeight = pokemon.weight;
    const minWeight = baseWeight * 0.5;
    const maxWeight = baseWeight * 1.5;
    const weight = Math.round(randomNumber(minWeight, maxWeight));
    return { ...pokemon, specimenWeight: weight };
};

export const pokemonWeightToKg = (pokemon: any) => ({ ...pokemon, weight: lbToKg(pokemon.weight) });

export const calculateShiniestyness = (pokemon: any) => {
    const fixedProbability = 5;
    const randomChance = Math.random() * 100;
    const isShiny = randomChance < fixedProbability;
    return { ...pokemon, isShiny };
};

export const calculateWeightType = (pokemon: any) => {
    const baseWeight = pokemon.weight;
    const specimenWeight = pokemon.specimenWeight;
    const maxSmallWeight = baseWeight * 0.75;
    const maxNormalWeight = baseWeight * 1.25;
    let specimenWeightType: 'S' | 'L' | 'XL' = 'L';
    if (specimenWeight <= maxSmallWeight) {
        specimenWeightType = 'S';
    } else if (specimenWeight >= maxNormalWeight) {
        specimenWeightType = 'XL'
    }
    return { ...pokemon, specimenWeightType }
}

export const setBackgroundColorByType = (pokemon: any) => ({
    ...pokemon,
    types: pokemon.types.map((type: any) => {
        return { ...type, backgroundColor: backgroundsForTypes.get(type.type.name) };
    }
    )
})

const backgroundsForTypes = new Map<string, string>(
    [
        ['normal', '#A8A878'],
        ['fighting', '#C03028'],
        ['flying', '#A890F0'],
        ['poison', '#A040A0'],
        ['ground', '#B8A038'],
        ['rock', '#B8B8D0'],
        ['bug', '#A8B820'],
        ['ghost', '#705898'],
        ['steel', '#B8B8D0'],
        ['fire', '#F08030'],
        ['water', '#6890F0'],
        ['grass', '#78C850'],
        ['electric', '#F8D030'],
        ['psychic', '#F85888'],
        ['ice', '#98D8D8'],
        ['dragon', '#E83000'],
        ['dark', '#705848'],
        ['fairy', '#E7A8B0'],
        ['unknown', '#cacaca'],
        ['shadow', '#A040A0'],
    ]
)


export const calculatePokemonWeightProps = compose(pokemonWeightToKg, calculateWeight, calculateWeightType);
export const calculatePokemonProps = compose(calculatePokemonWeightProps, calculateShiniestyness, setBackgroundColorByType);
