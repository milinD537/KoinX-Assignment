"use client"

import { useState } from "react"

export default function Tabs() {
	const [active, setActive] = useState<number>(0)
	const tabs = [
		"Overview",
		"Fundamentals",
		"News Insights",
		"Sentiments",
		"Team",
		"Technicals",
		"Tokenomics",
	]
	return (
		<nav className="border-b border-[#D3E0E6] overflow-auto my-8">
			<ul className="flex items-center gap-8 w-max">
				{tabs.map((tab, idx) => (
					<button
						onClick={() => setActive(idx)}
						key={idx}
						className={`py-2 transition-[font-weight,color] relative | after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:transition-colors ${
							active === idx
								? "text-[#0141CF] font-semibold after:bg-[#0141CF]"
								: "text-[#3E424A] font-medium"
						}`}
					>
						{tab}
					</button>
				))}
			</ul>
		</nav>
	)
}
