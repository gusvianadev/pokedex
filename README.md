# Pokédex

## Summary

This app was created using the create-react-app tool and the [PokeApi](https://pokeapi.co/).

It's a pokédex. You can search for a specific pokémon, or scroll down and pick whichever pokémon you want, and see all it's stats.

## Install and Run

1. Clone down this repository. You will need `node` and `npm` installed globally on your computer.
2. Run `npm install` to install all the dependencies.
3. Run `npm start` to start the app.
4. Or visit the website: [Pokédex](https://gusvianadev.github.io/pokedex/)

## What can this do?

You can:

1.  Search for a pokémon by name, variant/form or id: the searchbar is done in a way that can "fix" most of the user's common mistakes like:

    -   "Alolan" and "Galarian" are both turned into "Alola" and "Galar".
    -   If you type incomplete names, the app will "complete" them and search the best match (E.g.: if you type "pik ro" it will search for "pikachu-rock-star").
    -   It can even reverse what you typed, for example: "alolan raichu" will be turned into "raichu alola", or for instance, if you type "rock pikachu star" (yeah, someone might do that) it will instead search "pikachu rock star".

2.  Click on one of the cards to go to that specific pokemon, or keep scrolling to load more cards.

## Project Status

This project is now on it's MVP state.

It acts like a Pokédex from the series (without the text-to-speech feature, that I want to add later).

The next feature will be the pokémon advanced stats and abilities.

## Contact Me

-   [LinkedIn](https://www.linkedin.com/in/gus-viana-dev/)
-   [My Portfolio](https://gusvianadev.github.io/)
