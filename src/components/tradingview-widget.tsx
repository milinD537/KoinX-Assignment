"use client"
import React, { useEffect, useRef, memo } from "react"

function TradingViewWidget() {
	const container = useRef<HTMLDivElement | null>(null)
	const hasMounted = useRef(false)

	useEffect(() => {
		if (!container.current) return
		if (hasMounted.current) return
		hasMounted.current = true
		const script = document.createElement("script")
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
		script.type = "text/javascript"
		script.async = true
		script.innerHTML = `
        {
          "autosize": true,
          "symbol": "COINBASE:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "gridColor": "rgba(40, 57, 35, 0.06)",
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`
		container.current.appendChild(script)

		return () => {
			if (container.current) {
				container.current.innerHTML = ""
			}
		}
	}, [])

	return (
		<div
			className="tradingview-widget-container"
			ref={container}
			style={{ height: "100%", width: "100%" }}
		>
			<div
				className="tradingview-widget-container__widget"
				style={{ height: "calc(100% - 32px)", width: "100%" }}
			></div>
			<div className="tradingview-widget-copyright">
				<a
					href="https://www.tradingview.com/"
					rel="noopener nofollow"
					target="_blank"
				>
					<span className="blue-text">
						Track all markets on TradingView
					</span>
				</a>
			</div>
		</div>
	)
}

export default memo(TradingViewWidget)
