import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import ProjectCard from "../projectCard/projectsCard.component"

interface IProject {
	id: string
	title: string
	slug: string
}

const ProjectsOverview: React.FC = () => {
	const [projects, setProjects] = useState<IProject[]>()

	const data = useStaticQuery(graphql`
		query ProjectsQuery {
			allMdx(
				filter: { internal: { contentFilePath: { regex: "/projects/" } } }
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
		const inputProjects: IProject[] = []

		data.allMdx.nodes.forEach((project: any) => {
			const id: string = project.id
			const title: string = project.tableOfContents.items[0].title
			const link: string = project.internal.contentFilePath
			const slug = link
				.substring(link.indexOf("/projects/"))
				.replace("/index.mdx", "")

			if (slug.split("/").length == 3) {
				inputProjects.push({ id: id, title: title, slug: slug })
			}
		})

		setProjects(inputProjects)
	}, [data])

	return (
		<>
			{projects?.map((project) => {
				console.log(project)

				return (
					<>
						<ProjectCard
							key={project.id}
							title={project.title}
							slug={project.slug}
						/>
					</>
				)
			})}
		</>
	)
}

export default ProjectsOverview
