import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../../layouts/page.layout"
import PageArticle from "../../components/pageArticle/pageArticle.component"
import PageSection from "../../components/pageSection/pageSection.component"
// import { useMediaQuery } from "react-responsive"

const DevelopPage: React.FC<PageProps> = () => {
	// const isDesktop = useMediaQuery({ query: "(max-width: 1024)" })
	// const isTablet = useMediaQuery({ query: "(max-width: 1224px)" })
	// const isMobile = useMediaQuery({ query: "(max-width: 480)" })
	// const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
	// const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })

	return (
		<PageLayout>
			<PageSection fullPage>
				<PageArticle>
					<h1>DevelopPage</h1>
					<ul>
						{/* <li>isPortrait: {isPortrait ? "portrait" : "landscape"}</li>
				<li>isRetina: {isRetina ? "retina" : "not retina"}</li>
				<li>isDesktop: {isDesktop ? "true" : "false"}</li>
				<li>isTablet: {isTablet ? "true" : "false"}</li>
				<li>isMobile: {isMobile ? "true" : "false"}</li> */}
					</ul>
					<a target="blank" href="http://localhost:8000/___graphql">
						___graphql
					</a>
				</PageArticle>
			</PageSection>
		</PageLayout>
	)
}

export default DevelopPage

export const Head: HeadFC = () => <title>Developing...</title>
