import { Link } from "gatsby"
import React from "react"

interface IWritingCard {
	title: string
	slug: string
	type: string
}

const WritingCard: React.FC<IWritingCard> = ({ title, slug, type }) => {
	return (
		<Link to={slug}>
			<p>
				{title} / {type}
			</p>
		</Link>
	)
}

export default WritingCard
