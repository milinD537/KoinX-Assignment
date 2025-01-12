export type SimplePriceResponse = {
	bitcoin: {
		inr: number
		usd: number
		usd_24h_change: number
		inr_24h_change: number
	}
}

export type TrendingNewData = {
	id: string
	coin_id: number
	name: string
	symbol: string
	thumb: string
	data: {
		price: number
		price_change_usd: number
		price_change_percentage_24h?: {
			usd: number
		}
		sparkline: string
	}
}
