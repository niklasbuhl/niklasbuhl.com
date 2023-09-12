import React from "react"
import styled from "styled-components"

interface IPageSectionWrapper {
	$fullPage?: boolean
}

const PageSectionWrapper = styled.div<IPageSectionWrapper>`
	display: flex;
	flex-direction: column;

	width: 100%;
	${(props) => (props.$fullPage ? "min-height: 100vh;" : null)}

	margin-top: calc(0px - var(--navigationheader-height));
`

interface IPageSection {
	children: React.ReactNode
	fullPage?: boolean
}

const PageSection: React.FC<IPageSection> = ({ children, fullPage }) => {
	return (
		<PageSectionWrapper $fullPage={fullPage || false}>
			{children}
		</PageSectionWrapper>
	)
}

export default PageSection
