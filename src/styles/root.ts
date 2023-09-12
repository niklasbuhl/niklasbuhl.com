import { css } from "styled-components"

const root = css`
	:root {
		// Interaction
		--disable-scroll: visible; // hidden

		// Responsiveness
		--wide-breakpoint: 2000px;
		--desktop-breakpoint: 1024px;
		--tablet-breakpoint: 720px;
		--mobile-breakpoint: 480px;

		// Layout
		--page-width: 60rem; // 960px
		--global-gutter: 1rem;

		// Hero Header
		--heroheader-height: 0rem; // 192px
		/* --heroheader-height: 12rem; // 192px */

		// Navigation Header
		--navigationheader-height: 3rem; // 48px

		// Footer
		--navigationfooter-height: 3rem; // 48px

		// Postion
		--top-position: var(--heroheader-height);

		// Colors
		--neon-purple: rgb(83, 1, 255);
		--coral-orange: rgb(255, 96, 96);

		// Fonts
		--font-tech: "Space Grotesk Variable", sans-serif;
		--font-header: "Space Grotesk Variable", sans-serif; // Headers
		--font-paragraph: "XCharter", serif; //
		--font-code: "";
	}
`

export default root
