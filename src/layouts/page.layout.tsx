import React from "react"
import NavigationHeader from "../components/navigationHeader/navigationHeader.component"

interface IPage {
	children: React.ReactNode
}

const PageLayout: React.FC<IPage> = ({ children }) => {
	return (
		<>
			<NavigationHeader />
			{children}
		</>
	)
}

export default PageLayout
