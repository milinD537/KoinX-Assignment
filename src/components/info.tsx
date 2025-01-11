import { InfoIcon } from "lucide-react"

export default function Info({ info }: { info: string }) {
	return (
		<h3 className="mt-6 text-lg font-semibold flex items-center gap-1">
			{info}{" "}
			<InfoIcon className="fill-[#ABB9BF] text-white hover:cursor-pointer" />
		</h3>
	)
}
