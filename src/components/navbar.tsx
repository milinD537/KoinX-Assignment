import { Logo } from "@/assets/svgs"
import Link from "next/link"

export default function Navbar() {
	return (
		<div className="sticky top-0 z-[9999] bg-white py-4 px-2 border-b border-[#DEDFE2] shadow-[0_0_12px_hsl(217,64%,18%,6%)]">
			<div className="navWrapper | max-w-screen-2xl mx-auto flex items-center justify-between">
				<Logo />
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-8">
						<li>
							<Link
								href="/"
								className="font-semibold text-text/80 hover:text-text transition-colors"
							>
								Crypto Taxes
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="font-semibold text-text/80 hover:text-text transition-colors"
							>
								Free Tools
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="font-semibold text-text/80 hover:text-text transition-colors"
							>
								Resource Center
							</Link>
						</li>
						<li>
							<Link href="/" className="font-semibold">
								<button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] py-2 px-4 rounded-lg text-white">
									Get Started
								</button>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
