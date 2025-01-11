"use server"

type SimplePriceResponse = {
	bitcoin: {
		inr: number
		usd: number
		usd_24h_change: number
		inr_24h_change: number
	}
}

export async function getSimplePriceData() {
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY
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
