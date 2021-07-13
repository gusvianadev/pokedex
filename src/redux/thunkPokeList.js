import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

export const getPokeList = createAsyncThunk(
	"pokeList/getpokeList",
	async (currentUrl) => {
		const cache = setupCache({
			maxAge: 604800000,
		});

		const getData = axios.create({
			adapter: cache.adapter,
		});
		const res = (
			await getData({
				url: currentUrl,
				method: "get",
			})
		).data;

		const nextUrl = res.next;
		const pokesToFetch = res.results;

		const pokeList = [];
		for (const poke of pokesToFetch) {
			pokeList.push({
				pokeName: poke.name,
			});
		}

		return { nextUrl, pokeList };
	}
);
