import { css } from "styled-components"

export const writingsTypographies = css`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--font-header);
		letter-spacing: -1px;
		margin: calc(var(--global-gutter) / 2);
	}

	h1 {
		font-size: 4rem;
		font-weight: 500;
		letter-spacing: -2px;
		margin-top: 4rem;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.8rem;
	}

	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 2rem;
	}

	p,
	pre,
	code {
		font-size: 1rem;
	}

	p,
	pre {
		margin: calc(var(--global-gutter) / 2);
		margin-top: 0;
	}

	p,
	ul,
	li {
		font-family: var(--font-paragraph);
	}

	code,
	pre {
		font-family: var(--font-code);
		letter-spacing: -1px;
	}

	// https://www.w3schools.com/tags/tag_pre.asp
	pre {
		background: lightgray;
		padding: 0.25rem;
	}

	li {
		margin-left: 1rem;
		margin-right: 1rem;
		margin-bottom: 0.25rem;
	}
`

export default writingsTypographies
