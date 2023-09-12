import React from "react"
import NavigationHeader from "../components/navigationHeader/navigationHeader.component"
import { MDXProvider } from "@mdx-js/react"
import { Link, graphql } from "gatsby"
import PageSection from "../components/pageSection/pageSection.component"
import PageArticle from "../components/pageArticle/pageArticle.component"

const shortcodes = { Link } // Provide common components here

interface IWriting {
	data: any // TODO
	children: React.ReactNode
}

const WritingLayout: React.FC<IWriting> = ({
	data,
	children,
	// PageProps,
	...props
}) => {
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

export default WritingLayout

// export const query = graphql`
// 	query ($id: String!) {
// 		mdx(id: { eq: $id }) {
// 			frontmatter {
// 				title
// 			}
// 		}
// 	}
// `
