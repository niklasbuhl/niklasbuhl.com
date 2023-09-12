// https://stackoverflow.com/questions/41725725/access-css-variable-from-javascript

export const getCSSpx = (property: string): number => {
	const result = getComputedStyle(document.body)
		.getPropertyValue(property)
		.replace(/\bpx\b/g, "")

	const number = parseInt(result)

	return number
}

export const setCSSpx = (property: string, px: number): void => {
	document.documentElement.style.setProperty(property, px + "px")
}

export const setCSS = (property: string, input: string): void => {
	document.documentElement.style.setProperty(property, input)
}
