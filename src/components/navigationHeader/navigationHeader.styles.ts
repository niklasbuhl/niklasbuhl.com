import { Link } from "gatsby"
import styled, { css } from "styled-components"

interface INav {
	hidden: boolean
	$showMobileMenu: boolean
}

export const Nav = styled.nav<INav>`
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 0;
	z-index: 1337;

	width: 100%;
	max-width: 100vw;

	height: ${(props) =>
		props.$showMobileMenu ? "100vh" : "var(--navigationheader-height)"};

	animation-timing-function: ease-in;
	transition: transform 0.2s, height 0.3s ease;
	background: white;

	${(props) => (props.hidden ? `transform: translateY(-96px);` : "")}
`

export const NavContentWrapper = styled.div`
	display: flex;
	width: 100%;
	height: var(--navigationheader-height);
	max-width: var(--page-width);
	margin: auto;
	margin-top: 0;
	margin-bottom: 0;
	justify-content: space-between;
`

export const NavLeftContent = styled.div`
	display: flex;
	height: 100%;
`

export const NavRightContent = styled.div`
	display: flex;
	height: 100%;
`

export const NavMobileMenu = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100% - var(--navigationheader-height));
`

export const NavLogo = styled(Link)`
	background-color: var(--neon-purple);
	width: 3rem;
	height: 3rem;
`

const navItemCss = css`
	--padding: var(--global-gutter);

	display: block;
	box-sizing: border-box;
	height: var(--navigationheader-height);
	padding: var(--padding);

	// Typography
	color: inherit;
	text-decoration: none;
	font-family: var(--font-tech);

	&:hover {
		/* color: var(--coral-orange); */
		font-weight: bold;
	}

	&.active-nav-link {
		color: var(--neon-purple);
		font-weight: bold;
	}

	/* This part is because, when the text is bold, it will require more space */
	/* Reference: https://stackoverflow.com/questions/5687035/css-bolding-some-text-without-changing-its-containers-size */
	&:after {
		display: block;
		content: attr(title);
		font-weight: bold;
		height: 1px;
		color: transparent;
		overflow: hidden;
		visibility: hidden;
	}
`

export const NavButton = styled.button`
	${navItemCss}

	border: none;
	background: none;
	/* box-sizing: content-box; */
`

export const NavLink = styled(Link)`
	${navItemCss}
`
