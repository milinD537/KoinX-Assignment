import { Illustration } from "@/assets/svgs"
import Info from "@/components/info"
import Tabs from "@/components/tabs"
import TradingviewWidget from "@/components/tradingview-widget"
import { ChevronRight, MoveRight, Triangle } from "lucide-react"
import CalcProfitImg from "../../public/calc-profit.avif"
import CalcTaxImg from "../../public/calc-tax-liability.avif"
import { getSimplePriceData, getTrendingData } from "@/actions/api"

type Team = {
	name: string
	role: string
	desc: string
	pfp: string
}
const defaultTeamDetails = {
	role: "Designation here",
	desc: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
}

export default async function Home() {
	const simplePricedata = await getSimplePriceData()
	const trendingData = await getTrendingData()
	if (!(simplePricedata && trendingData)) return <div>Loading...</div>

	const team: Team[] = [
		{
			...defaultTeamDetails,
			name: "John Smith",
			pfp: "/team-1.png",
		},
		{
			...defaultTeamDetails,
			name: "Elina Williams",
			pfp: "/team-2.png",
		},
		{
			...defaultTeamDetails,
			name: "John Smith",
			pfp: "/team-3.png",
		},
	]
	return (
		<main>
			<div className="mainWrapper | px-3 pb-3 max-w-screen-2xl mx-auto xl:grid grid-cols-[1fr_auto] gap-5 gap-y-0">
				<p className="col-span-full text-sm text-[#3E5765] flex items-center py-4">
					Cryptocurrencies{" "}
					<span className="w-fit grid grid-cols-[auto_10px_auto]">
						<ChevronRight className="row-start-1 col-start-1 col-span-2 size-4" />
						<ChevronRight className="row-start-1 col-start-2 col-span-2 size-4" />
					</span>{" "}
					<span className="font-medium text-text">Bitcoin</span>
				</p>
				<div className="">
					<section className="lg:bg-white p-0 lg:px-6 lg:p-6 rounded-lg">
						<div className="flex items-center gap-3">
							{/* bitcoin icon */}
							<div className="size-9 rounded-full bg-stone-300">
								<img src="/btc-logo.png" alt="" />
							</div>
							<h2 className="text-xl lg:text-2xl font-semibold">
								Bitcoin
							</h2>
							<span className="text-sm lg:text-base text-[#5D667B] font-semibold">
								BTC
							</span>
							<span className="mx-4 text-sm bg-[#768396] text-white border border-[#808A9D] rounded-lg font-medium p-2">
								Rank #1
							</span>
						</div>
						<div className="lg:contents mt-4 bg-white p-4 border border-[#DEE1E6] rounded-lg">
							<div className="lg:mt-8">
								<div className="flex items-center gap-3">
									<p className="text-[1.75rem] font-semibold">
										$
										{simplePricedata.bitcoin.usd.toLocaleString(
											"en-US"
										)}
									</p>
									<span
										className={`font-medium flex items-center gap-1 p-2 rounded ${
											simplePricedata.bitcoin
												.usd_24h_change >= 0
												? "bg-[#14B079]/10 text-[#14B079]"
												: "bg-[#f7324c]/10 text-[#f7324c]"
										}`}
									>
										<Triangle
											className={`size-4 ${
												simplePricedata.bitcoin
													.usd_24h_change >= 0
													? "fill-[#14B079]"
													: "fill-[#f7324c] rotate-180"
											} stroke-none`}
										/>
										{Math.round(
											simplePricedata.bitcoin
												.usd_24h_change * 100
										) / 100}
										%
									</span>
									<span className="text-sm font-medium text-[#768396]">
										(24H)
									</span>
								</div>
								<p className="font-medium">
									₹{" "}
									{simplePricedata.bitcoin.inr.toLocaleString(
										"en-IN"
									)}
								</p>
							</div>
							<hr className="my-6 border-[#DEE1E6] border-t-2" />
							<div className="w-full aspect-[1/2] lg:aspect-video">
								<TradingviewWidget />
							</div>
						</div>
					</section>
					<Tabs />
					<section className="mt-8">
						<div className="mt-4 bg-white p-6 rounded-lg">
							<h2 className="text-2xl font-semibold">
								Performance
							</h2>
							<div className="mt-6 text-[#44475B] grid grid-cols-[auto_1fr_auto] gap-4 place-items-center">
								<div>
									<p className="text-sm">Today&apos;s Low</p>
									<p className="font-medium">46,930.22</p>
								</div>
								<div className="w-full h-1 rounded-full bg-[linear-gradient(to_right,#FF4949,#FF4E11,#FC870A,#FFAF11,#C2CB21,#11EB68)]"></div>
								<div className="text-end">
									<p className="text-sm">Today&apos;s High</p>
									<p className="font-medium">49,343.83</p>
								</div>
							</div>
							<div className="mt-6 text-[#44475B] grid grid-cols-[auto_1fr_auto] gap-4 place-items-center">
								<div>
									<p className="text-sm">52W Low</p>
									<p className="font-medium">16,930.22</p>
								</div>
								<div className="w-full h-1 rounded-full bg-[linear-gradient(to_right,#FF4949,#FF4E11,#FC870A,#FFAF11,#C2CB21,#11EB68)]"></div>
								<div className="text-end">
									<p className="text-sm">52W High</p>
									<p className="font-medium">49,743.83</p>
								</div>
							</div>
							<Info info="Fundamentals" />
						</div>
					</section>
					<section className="mt-8 bg-white p-6 rounded-lg">
						<h2 className="text-2xl font-semibold">Sentiment</h2>
						<Info info="Key Events" />
						<Info info="Analyst Estimates" />
						<div className="mt-3 flex items-center gap-6">
							<div className="size-28 rounded-full text-[#0FBA83] bg-[#0FBA83]/20 grid place-items-center">
								<p className="font-medium">
									<span className="text-4xl">76</span>%
								</p>
							</div>
							<div className="grow grid grid-cols-[auto_1fr] gap-3 items-center">
								<p>Buy</p>
								<div className="w-[76%] grid gap-2 grid-cols-[1fr_auto] items-center">
									<span className="h-2 rounded-sm bg-[#0FBA83]"></span>
									<span>76%</span>
								</div>
								<p>Hold</p>
								<div className="w-[8%] grid gap-2 grid-cols-[1fr_auto] items-center">
									<span className="h-2 rounded-sm bg-[#C7C8CE]"></span>
									<span>8%</span>
								</div>
								<p>Sell</p>
								<div className="w-[16%] grid gap-2 grid-cols-[1fr_auto] items-center">
									<span className="h-2 rounded-sm bg-[#F7324C]"></span>
									<span>16%</span>
								</div>
							</div>
						</div>
					</section>
					<section className="mt-8 bg-white p-6 rounded-lg">
						<h2 className="text-2xl font-semibold">
							About Bitcoin
						</h2>
						<h3 className="mt-6 text-lg font-bold">
							What is Bitcoin?
						</h3>
						<p className="mt-4 font-medium text-[#3E424A]">
							Bitcoin&apos;s price today is US$16,951.82, with a
							24-hour trading volume of $19.14 B. BTC is +0.36% in
							the last 24 hours. It is currently -7.70% from its
							7-day all-time high of $18,366.66, and 3.40% from
							its 7-day all-time low of $16,394.75. BTC has a
							circulating supply of 19.24 M BTC and a max supply
							of 21 M BTC.
						</p>
						<hr className="my-4" />
						<h3 className="text-lg font-bold">
							Lorem ipsum dolor sit amet
						</h3>
						<p className="mt-4 font-medium text-[#3E424A]">
							Lorem ipsum dolor sit amet consectetur. Aliquam
							placerat sit lobortis tristique pharetra. Diam id et
							lectus urna et tellus aliquam dictum at. Viverra
							diam suspendisse enim facilisi diam ut sed. Quam
							scelerisque fermentum sapien morbi sodales odio sed
							rhoncus. Ultricies urna volutpat pendisse enim
							facilisi diam ut sed. Quam scelerisque fermentum
							sapien morbi sodales odio sed rhoncus.
						</p>
						<p className="mt-4 font-medium text-[#3E424A]">
							Diam praesent massa dapibus magna aliquam a dictumst
							volutpat. Egestas vitae pellentesque auctor amet.
							Nunc sagittis libero adipiscing cursus felis
							pellentesque interdum. Odio cursus phasellus velit
							in senectus enim dui. Turpis tristique placerat
							interdum sed volutpat. Id imperdiet magna eget eros
							donec cursus nunc. Mauris faucibus diam mi nunc
							praesent massa turpis a. Integer dignissim augue
							viverra nulla et quis lobortis phasellus. Integer
							pellentesque enim convallis ultricies at.
						</p>
						<p className="mt-4 font-medium text-[#3E424A]">
							Fermentum hendrerit imperdiet nulla viverra
							faucibus. Sit aliquam massa vel convallis duis ac.
							Mi adipiscing semper scelerisque porttitor pulvinar
							nunc risus. Fermentum potenti iaculis lacinia congue
							ipsum fames amet dui. Purus ultrices tincidunt
							volutpat in eget. Ullamcorper dui
						</p>
						<hr className="my-4" />
						<h2 className="text-2xl font-semibold">
							Already Holding Bitcoin?
						</h2>
						<div className="mt-6 grid lg:grid-cols-2 gap-8">
							<div className="grid grid-cols-[auto_1fr] items-center gap-4 lg:gap-8 rounded-xl p-3 bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD]">
								<div
									style={{
										backgroundImage: `url(${CalcProfitImg.src})`,
									}}
									className="h-full min-h-24 rounded-xl aspect-square bg-cover bg-right"
								></div>
								<div>
									<h4 className="text-white font-bold text-lg lg:text-xl">
										Calculate your Profits
									</h4>
									<button className="mt-2 lg:mt-6 bg-white rounded-lg flex items-center gap-3 hover:gap-2 transition-[gap] text-sm font-semibold p-2">
										Check Now{" "}
										<MoveRight className="size-4 lg:size-5" />
									</button>
								</div>
							</div>
							<div className="grid grid-cols-[auto_1fr] items-center gap-4 lg:gap-8 rounded-xl p-3 bg-gradient-to-br from-[#FF9865] to-[#EF3031]">
								<div
									style={{
										backgroundImage: `url(${CalcTaxImg.src})`,
									}}
									className="h-full min-h-24 rounded-xl aspect-square bg-cover bg-right"
								></div>
								<div>
									<h4 className="text-white font-bold text-lg lg:text-xl">
										Calculate your Profits
									</h4>
									<button className="mt-2 lg:mt-6 bg-white rounded-lg flex items-center gap-3 hover:gap-2 transition-[gap] text-sm font-semibold p-2">
										Check Now{" "}
										<MoveRight className="size-4 lg:size-5" />
									</button>
								</div>
							</div>
						</div>
						<hr className="my-4" />
						<p className="mt-4 font-medium text-[#3E424A]">
							Fermentum hendrerit imperdiet nulla viverra
							faucibus. Sit aliquam massa vel convallis duis ac.
							Mi adipiscing semper scelerisque porttitor pulvinar
							nunc risus. Fermentum potenti iaculis lacinia congue
							ipsum fames amet dui. Purus ultrices tincidunt
							volutpat in eget. Ullamcorper dui
						</p>
					</section>
					<section className="hidden lg:block mt-8 bg-white p-6 rounded-lg">
						<h2 className="text-2xl font-semibold">Tokenomics</h2>
						<Info info="Initial Distribution" />
						<div className="mt-4 flex items-center gap-6">
							<div className="size-44 rounded-full bg-[conic-gradient(#0082FF_80%,#FAA002_80%)] p-8">
								<div className="bg-white size-full rounded-full"></div>
							</div>
							<div>
								<p className="flex items-center gap-2 before:size-3 before:rounded-full before:bg-[#0082FF]">
									Crowdsale investors: 80%
								</p>
								<p className="flex items-center gap-2 before:size-3 before:rounded-full before:bg-[#FAA002]">
									Foundation: 20%
								</p>
							</div>
						</div>
						<p className="text-[#3E424A] mt-4 font-medium">
							Lorem ipsum dolor sit amet consectetur. Cras aliquet
							tristique ornare vestibulum nunc dignissim vel
							consequat. Leo etiam nascetur bibendum amet enim sit
							eget leo amet. At metus orci augue fusce eleifend
							lectus eu fusce adipiscing. Volutpat ultrices nibh
							sodales massa habitasse urna felis augue. Gravida
							aliquam fermentum augue eu. Imperdiet bibendum amet
							aliquam donec. Eget justo dui metus odio rutrum. Vel
							ipsum eget in at curabitur sem posuere facilisis
							vitae. Sed lorem sit mauris id eget arcu ut.
							Vulputate ipsum aliquet odio nisi eu ac risus.
						</p>
					</section>
					<section className="mt-8 bg-white p-6 rounded-lg">
						<h2 className="text-2xl font-semibold">Team</h2>
						<p className="text-[#3E424A] mt-4 font-medium">
							Lorem ipsum dolor sit amet consectetur. Id consequat
							adipiscing arcu nibh. Eget mattis in mi integer sit
							egestas. Proin tempor id pretium quam. Facilisis
							purus convallis quam augue.
						</p>
						<div>
							{team.map((item, idx) => (
								<div
									key={idx}
									className="grid items-center lg:grid-cols-[auto_1fr] gap-4 mt-6 p-3 rounded-lg bg-[#E8F4FD]"
								>
									<div className="text-center justify-self-center">
										<img
											src={item.pfp}
											alt={`Team Profile Photo`}
											className="rounded-md"
										/>
										<p className="font-semibold">
											{item.name}
										</p>
										<p className="text-xs font-medium text-[#788F9B]">
											{item.role}
										</p>
									</div>
									<p className="text-[#0F1629] text-sm">
										{item.desc}
									</p>
								</div>
							))}
						</div>
					</section>
				</div>
				<div className="relative">
					<div className="2xl:sticky top-20 space-y-5">
						<div className="text-white text-center | bg-[#0052FE] p-8 rounded-2xl space-y-5 shadow-[0_0_16px_hsl(203,54%,21%,10%)]">
							<h4 className="text-xl lg:text-2xl font-bold">
								Get Started with KoinX <br /> for FREE
							</h4>
							<p>
								With our range of features that you can equip
								for <br />
								free, KoinX allows you to be more educated and{" "}
								<br /> aware of your tax reports.
							</p>
							<Illustration className="mx-auto" />
							<button className="mx-auto flex items-center gap-3 bg-white text-text font-semibold py-2 px-6 rounded-lg hover:gap-2 transition-[gap]">
								Get Started for FREE <MoveRight />
							</button>
						</div>
						<div className="bg-white p-6 rounded-2xl">
							<h4 className="text-xl lg:text-2xl font-bold">
								Trending Coins (24h)
							</h4>
							{/* API, Top 3 Coins */}
							<div className="mt-6 space-y-5">
								{trendingData.slice(0, 3).map((data) => (
									<div
										key={data.id}
										className="flex items-center justify-between gap-2"
									>
										<div className="flex items-center gap-2">
											<div className="size-6 rounded-full overflow-clip bg-stone-200">
												<img
													src={data.thumb}
													alt="Symbol"
													className="size-full object-cover"
												/>
											</div>
											<p className="text-base font-medium">
												{data.name} ({data.symbol})
											</p>
										</div>
										<span
											className={`text-base font-medium flex items-center gap-1 p-2 rounded bg-[#14B079]/10 text-[#14B079] ${
												data.data.price_change_usd >= 0
													? "bg-[#14B079]/10 text-[#14B079]"
													: "bg-[#f7324c]/10 text-[#f7324c]"
											}`}
										>
											<Triangle
												className={`size-4 ${
													data.data
														.price_change_usd >= 0
														? "fill-[#14B079]"
														: "fill-[#f7324c] rotate-180"
												} stroke-none`}
											/>
											{Math.round(
												simplePricedata.bitcoin
													.usd_24h_change * 1000
											) / 1000}
											%
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* footer */}
			<div className="bg-white p-8"></div>
		</main>
	)
}
