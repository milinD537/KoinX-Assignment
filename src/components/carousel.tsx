"use client"
import { TrendingNewData } from "@/lib/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

function CarouselCard(item: TrendingNewData) {
	const isPositive = item.data.price_change_usd >= 0
	return (
		<div
			key={item.coin_id}
			className="p-4 rounded-xl border border-[#E3E3E3] space-y-4"
		>
			<div className="flex gap-2 items-center">
				<img
					src={item.thumb}
					alt="Coin Icon"
					className="size-7 rounded-full"
				/>
				<p>{item.symbol}</p>

				<p
					className={`text-xs flex items-center gap-1 p-2 rounded bg-[#14B079]/10 text-[#14B079] ${
						isPositive
							? "bg-[#14B079]/10 text-[#14B079]"
							: "bg-[#f7324c]/10 text-[#f7324c]"
					}`}
				>
					{item.data.price_change_usd.toFixed(2)}%
				</p>
			</div>
			<p className="text-xl font-medium">${item.data.price.toFixed(4)}</p>
			<img
				src={item.data.sparkline}
				alt="trend-sparkline"
				className="w-full"
			/>
		</div>
	)
}

export default function Carousel({ data }: { data: TrendingNewData[] }) {
	const scrollRef = useRef<HTMLDivElement | null>(null)

	function handleScroll(direction: "left" | "right") {
		if (scrollRef.current) {
			const scrollDistance = 256 + 32
			scrollRef.current.scrollBy({
				left: direction === "left" ? -scrollDistance : scrollDistance,
				behavior: "smooth",
			})
		}
	}
	return (
		<div className="w-full relative">
			<div
				ref={scrollRef}
				className="noScrollbar | mt-4 px-6 grid grid-flow-col auto-cols-[256px] items-center gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden"
			>
				{data.map(CarouselCard)}
				<button
					onClick={() => handleScroll("left")}
					className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-white p-2 shadow-[0_0_8px_hsl(0,0%,0%,18%)]"
				>
					<ChevronLeft />
				</button>
				<button
					onClick={() => handleScroll("right")}
					className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-white p-2 shadow-[0_0_8px_hsl(0,0%,0%,18%)]"
				>
					<ChevronRight />
				</button>
			</div>
		</div>
	)
}
