import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import WritingCard from "../writingCard/writingCard.component"

interface IWriting {
	id: string
	title: string
	slug: string
	type: string
}

const WritingsOverview: React.FC = () => {
	const [writings, setWritings] = useState<IWriting[]>()

	const data = useStaticQuery(graphql`
		query WritingsQuery {
			allMdx(
				filter: { internal: { contentFilePath: { regex: "/writings/" } } }
			) {
				nodes {
					id
					tableOfContents(maxDepth: 1)
					internal {
						contentFilePath
					}
				}
			}
		}
	`)

	useEffect(() => {
		const inputWritings: IWriting[] = []

		data.allMdx.nodes.forEach((writing: any) => {
			const id: string = writing.id
			const title: string = writing.tableOfContents.items[0].title
			const link: string = writing.internal.contentFilePath
			const slug = link
				.substring(link.indexOf("/writings/"))
				.replace("/index.mdx", "")
				.replace("/writings", "")

			const type = slug.split("/")[1].slice(0, -1)

			inputWritings.push({ id: id, title: title, slug: slug, type: type })
		})

		setWritings(inputWritings)
	}, [data])

	return (
		<>
			{writings?.map((writing) => {
				console.log(writing)

				return (
					<>
						<WritingCard
							key={writing.id}
							title={writing.title}
							slug={writing.slug}
							type={writing.type}
						/>
					</>
				)
			})}
		</>
	)
}

export default WritingsOverview
