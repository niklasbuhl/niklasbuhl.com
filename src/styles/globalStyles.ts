import { createGlobalStyle } from "styled-components"
import reset from "./reset"
import root from "./root"
import body from "./body"

// Fonts
import "@fontsource-variable/space-grotesk"

export const GlobalStyles = createGlobalStyle`
	
	// Reset CSS
	${reset}

	// Set variables
	${root}

	// Body CSS
	${body}
`
