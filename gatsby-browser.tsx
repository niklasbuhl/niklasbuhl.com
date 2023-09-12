import React from "react"
import { GlobalStyles } from "./src/styles/globalStyles"
import { EventProvider } from "./src/contexts/event.context"

export const wrapRootElement = ({ element }) => {
	return (
		<>
			<GlobalStyles />
			<EventProvider>{element}</EventProvider>
		</>
	)
}

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
	return false
}
