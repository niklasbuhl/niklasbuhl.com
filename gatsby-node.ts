import type { GatsbyNode } from "gatsby"

const path = require("path")

interface INode {
	id: string
	frontmatter: {
		title: string
		slug: string
		type: string
	}
	internal: {
		contentFilePath: string
	}
}

// interface IData {
// 	data: {
// 		allMdx: {
// 			nodes: [INode]
// 		}
// 	}
// }

export const createPages: GatsbyNode["createPages"] = async ({
	actions,
	graphql,
	reporter,
}) => {
	// exports.createPages = async ({ graphql, actions, reporter }) => {
	// Destructure the createPage function from the actions object
	const { createPage } = actions

	// TODO Typescript this
	const result: any = await graphql(`
		query ContentQuery {
			allMdx {
				nodes {
					id
					internal {
						contentFilePath
					}
				}
			}
		}
	`)
	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
	}
	// Create blog post pages.
	const contents = result.data.allMdx.nodes
	// you'll call `createPage` for each result
	// console.log("Projects")
	console.log(contents)

	const projectPageLayoutPath = path.resolve(`./src/layouts/project.layout.tsx`)

	const writingPageLayoutPath = path.resolve(`./src/layouts/writing.layout.tsx`)

	const cwd = process.cwd()

	console.log(cwd)

	/* Example Slugs

	[ 'projects', 'text-project-a', 'sub-test-project-a', 'index.mdx' ]
	[ 'projects', 'text-project-a', 'index.mdx' ]
	[ 'writings', 'guides', 'thy', 'index.mdx' ]
	[ 'writings', 'articles', 'interstellar-travel', 'index.mdx' ]

	*/

	contents.forEach((node: INode) => {
		const slug = node.internal.contentFilePath
			.replace(cwd + "/src/content/", "")
			.split("/")

		console.log(slug)

		if (slug[0] == "writings") {
			// Any writing
			createPage({
				path: `/${slug[1]}/${slug[2]}`,
				component: `${writingPageLayoutPath}?__contentFilePath=${node.internal.contentFilePath}`,
				context: { id: node.id },
			})
		} else if ((slug[0] = "projects")) {
			// A main project
			if (slug.length == 3) {
				createPage({
					path: `/projects/${slug[1]}`,
					component: `${projectPageLayoutPath}?__contentFilePath=${node.internal.contentFilePath}`,
					context: { id: node.id },
				})

				// Sub project
			} else if (slug.length == 4) {
				createPage({
					path: `/projects/${slug[1]}/${slug[2]}`,
					component: `${projectPageLayoutPath}?__contentFilePath=${node.internal.contentFilePath}`,
					context: { id: node.id },
				})
			}
		}
	})
}
