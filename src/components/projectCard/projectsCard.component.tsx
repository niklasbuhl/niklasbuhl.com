import { Link } from "gatsby"
import React from "react"

interface IProjectCard {
	title: string
	slug: string
}

const ProjectCard: React.FC<IProjectCard> = ({ title, slug }) => {
	return (
		<Link to={slug}>
			<p>{title}</p>
		</Link>
	)
}

export default ProjectCard
