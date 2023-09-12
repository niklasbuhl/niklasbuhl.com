import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../../layouts/page.layout"
import PageArticle from "../../components/pageArticle/pageArticle.component"
import PageSection from "../../components/pageSection/pageSection.component"

const AboutPage: React.FC<PageProps> = () => {
	return (
		<PageLayout>
			<PageSection fullPage>
				<PageArticle>
					<h1>About</h1>
				</PageArticle>
			</PageSection>
			<PageSection fullPage>
				<PageArticle>
					<h1>Now</h1>
				</PageArticle>
			</PageSection>
			<PageSection fullPage>
				<PageArticle>
					<h1>CV</h1>
				</PageArticle>
			</PageSection>
		</PageLayout>
	)
}

export default AboutPage

export const Head: HeadFC = () => <title>About</title>
