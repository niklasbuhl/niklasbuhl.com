import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../../layouts/page.layout"
import PageArticle from "../../components/pageArticle/pageArticle.component"
import PageSection from "../../components/pageSection/pageSection.component"
import ProjectsOverview from "../../components/projectsOverview/projectsOverview.component"

const ProjectsPage: React.FC<PageProps> = () => {
	return (
		<PageLayout>
			<PageSection fullPage>
				<PageArticle>
					<h1>Projects</h1>
					<ProjectsOverview />
				</PageArticle>
			</PageSection>
		</PageLayout>
	)
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Projects</title>
