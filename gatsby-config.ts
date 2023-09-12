import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Niklas Buhl`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		// Projects
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/content/projects/`,
			},
		},
		// Writings
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `writings`,
				path: `${__dirname}/src/content/writings/`,
			},
		},
		// Pages
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		// Typefaces
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					selfHosted: [
						// XCharter
						{
							family: "XCharter",
							urls: {
								woff: `./src/typefaces/xcharter/XCharter-Roman.woff2`,
							},
							fontStyle: "normal",
							fontWeight: 400,
						},
						{
							family: "XCharter",
							urls: {
								woff: `./src/typefaces/xcharter/XCharter-Italic.woff2`,
							},
							fontStyle: "italic",
							fontWeight: 400,
						},
						{
							family: "XCharter",
							urls: {
								woff: `./src/typefaces/xcharter/XCharter-Bold.woff2`,
							},
							fontStyle: "normal",
							fontWeight: 700,
						},
						{
							family: "XCharter",
							urls: {
								woff: `./src/typefaces/xcharter/XCharter-BoldItalic.woff2`,
							},
							fontStyle: "italic",
							fontWeight: 700,
						},
						{
							family: "XCharter",
							urls: {
								woff: `./src/typefaces/xcharter/XCharter-Slanted.woff2`,
							},
							fontStyle: "oblique",
							fontWeight: 400,
						},
						{
							family: "XCharter",
							urls: {
								woff: `./src/typefaces/xcharter/XCharter-BoldSlanted.woff2`,
							},
							fontStyle: "oblique",
							fontWeight: 700,
						},
					],
				},
			},
		},
	],
}

export default config
