import React from "react"
import NavigationHeader from "../components/navigationHeader/navigationHeader.component"
import PageSection from "../components/pageSection/pageSection.component"
import PageArticle from "../components/pageArticle/pageArticle.component"
import { MDXProvider } from "@mdx-js/react"
import { Link, graphql } from "gatsby"

const shortcodes = { Link } // Provide common components here

interface IProject {
	children: React.ReactNode
}

const ProjectLayout: React.FC<IProject> = ({ children }) => {
	return (
		<>
			<NavigationHeader />
			<PageSection fullPage>
				<PageArticle>
					<MDXProvider components={shortcodes}>{children}</MDXProvider>
				</PageArticle>
			</PageSection>
		</>
	)
}

export default ProjectLayout

// export const query = graphql`
// 	query ($id: String!) {
// 		mdx(id: { eq: $id }) {
// 			frontmatter {
// 				title
// 			}
// 		}
// 	}
// `
