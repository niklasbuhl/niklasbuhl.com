import React from "react"
import styled from "styled-components"
import writingsTypographies from "../../styles/writingTypographies"

const PageArticleWrapper = styled.article`
	display: flex;
	flex-direction: column;
	width: calc(100% - var(--global-gutter));
	max-width: calc(var(--page-width) - var(--global-gutter));

	padding-top: var(--navigationheader-height);
	padding-bottom: var(--navigationfooter-height);
	padding-left: calc(var(--global-gutter) / 2);
	padding-right: calc(var(--global-gutter) / 2);

	margin: auto;
	margin-top: 0;
	margin-bottom: 0;

	${writingsTypographies}
`

interface IPageArticle {
	children: React.ReactNode
}

const PageArticle: React.FC<IPageArticle> = ({ children }) => {
	return <PageArticleWrapper>{children}</PageArticleWrapper>
}

export default PageArticle
