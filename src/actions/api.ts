"use server"

import { SimplePriceResponse, TrendingNewData } from "@/lib/types"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export async function getSimplePriceData() {
	const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true&x_cg_demo_api_key=${API_KEY}`
	const options = { method: "GET", headers: { accept: "application/json" } }

	try {
		const response = await fetch(url, options)
		const data: SimplePriceResponse | undefined = await response.json()
		return data
	} catch (error) {
		return console.log({ error })
	}
}

export async function getTrendingData() {
	const url = `https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${API_KEY}`
	const options = { method: "GET", headers: { accept: "application/json" } }

	try {
		const response = await fetch(url, options)
		const data = (await response.json()) as {
			coins: { item: TrendingNewData }[]
		}

		const newData: TrendingNewData[] | undefined = data.coins.map(
			(coin) => ({
				id: coin.item.id,
				coin_id: coin.item.coin_id,
				name: coin.item.name,
				symbol: coin.item.symbol,
				thumb: coin.item.thumb,
				data: {
					price: coin.item.data.price,
					price_change_usd:
						coin.item.data.price_change_percentage_24h?.usd || 0,
					sparkline: coin.item.data.sparkline,
				},
			})
		)

		return newData
	} catch (error) {
		console.log({ error: error })
		return null
	}
}
