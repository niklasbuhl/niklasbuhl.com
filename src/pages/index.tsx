import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../layouts/page.layout"
import PageSection from "../components/pageSection/pageSection.component"
import PageArticle from "../components/pageArticle/pageArticle.component"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<PageLayout>
			<PageSection fullPage>
				<PageArticle>
					<h1>Hello, World!</h1>
					<p>My name is Niklas Buhl.</p>
				</PageArticle>
			</PageSection>
			<PageSection fullPage>
				<PageArticle>
					<h1>Full-stack at IBM Client Innovation Center by day.</h1>
					<h1>Creative coder by night.</h1>
				</PageArticle>
			</PageSection>
			<PageSection fullPage>
				<PageArticle>
					<h1>Projects</h1>
				</PageArticle>
			</PageSection>
		</PageLayout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
