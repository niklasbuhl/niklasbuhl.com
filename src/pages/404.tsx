import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../layouts/page.layout"
import PageSection from "../components/pageSection/pageSection.component"
import PageArticle from "../components/pageArticle/pageArticle.component"

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<PageLayout>
			<PageSection fullPage>
				<PageArticle>
					<h1>4loh4</h1>
					<p>This is not the page you are looking for...</p>
				</PageArticle>
			</PageSection>
		</PageLayout>
	)
}

export default NotFoundPage

export const Head: HeadFC = () => <title>404</title>
