import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../../layouts/page.layout"
import PageArticle from "../../components/pageArticle/pageArticle.component"
import PageSection from "../../components/pageSection/pageSection.component"
import WritingsOverview from "../../components/writingsOverview/writingsOverview.component"

const ArticlesPage: React.FC<PageProps> = () => {
	return (
		<PageLayout>
			<PageSection fullPage>
				<PageArticle>
					<h1>Writings</h1>
					<p>Articles, Guides, Instruction, Notes ...</p>
					<WritingsOverview />
				</PageArticle>
			</PageSection>
		</PageLayout>
	)
}

export default ArticlesPage

export const Head: HeadFC = () => <title>Articles</title>
