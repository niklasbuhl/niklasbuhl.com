import React, { useContext, useEffect, useState } from "react"
import {
	NavContentWrapper,
	NavLeftContent,
	Nav,
	NavLink,
	NavRightContent,
	NavLogo,
	NavButton,
	NavMobileMenu,
} from "./navigationHeader.styles"
import eventContext, { ScreenType } from "../../contexts/event.context"
import { getCSSpx } from "../../utility/cssConversion"
import { MoreVertical, X } from "lucide-react"

const NavigationHeader: React.FC = () => {
	const { view, lockScroll } = useContext(eventContext)

	const [hideNav, setHideNav] = useState<boolean>(false)
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	// Hide navigation bar
	useEffect(() => {
		if (
			// Only hide when scrolling down (lastScroll is positive)
			view.lastScroll > 0 &&
			// Enable HeroHeader
			// view.scroll > layout.getHeroHeaderHeightPixel() + 100 &&

			// Only hide on Mobile and Tablet
			(view.screenType == ScreenType.Mobile ||
				view.screenType == ScreenType.Tablet) &&
			// Only set to true when it's false
			!showMobileMenu
		) {
			setHideNav(true)
		} else {
			setHideNav(false)
		}
	}, [view.lastScroll])

	// Lock scroll
	useEffect(() => {
		// Lock scroll
		lockScroll(showMobileMenu)
	}, [showMobileMenu])

	const toggleMenu = () => {
		// Scroll to the top
		setTimeout(
			() =>
				window.scrollTo({
					top: getCSSpx("--top-position"),
					behavior: "smooth",
				}),
			10
		)

		// Toggle Show Menu
		setShowMobileMenu(!showMobileMenu)
	}

	const closeMenu = () => {
		// Scroll to the top
		setTimeout(
			() =>
				window.scrollTo({
					top: getCSSpx("--top-position"),
					behavior: "smooth",
				}),
			10
		)

		// Toggle Show Menu
		setShowMobileMenu(false)
	}

	const menu = (
		<>
			<NavLink
				activeClassName="active-nav-link"
				to="/projects"
				partiallyActive
				title="Projects"
				onClick={closeMenu}
			>
				Projects
			</NavLink>
			<NavLink
				activeClassName="active-nav-link"
				to="/writings"
				partiallyActive
				title="Writings"
				onClick={closeMenu}
			>
				Writings
			</NavLink>
			<NavLink
				activeClassName="active-nav-link"
				to="/about"
				partiallyActive
				title="About"
				onClick={closeMenu}
			>
				About
			</NavLink>
		</>
	)

	return (
		<Nav hidden={hideNav} $showMobileMenu={showMobileMenu}>
			<NavContentWrapper>
				<NavLeftContent>
					<NavLogo to="/" onClick={closeMenu} />
					{view.screenType !== ScreenType.Mobile && (
						<NavLink
							activeClassName="active-nav-link"
							to="/"
							title="NIKLAS BUHL"
							onClick={closeMenu}
						>
							NIKLAS BUHL
						</NavLink>
					)}
				</NavLeftContent>

				<NavRightContent>
					{view.screenType !== ScreenType.Mobile ? (
						<>{menu}</>
					) : (
						<NavButton onClick={toggleMenu}>
							{showMobileMenu ? <X size={20} /> : <MoreVertical size={20} />}
						</NavButton>
					)}
				</NavRightContent>
			</NavContentWrapper>
			{showMobileMenu && <NavMobileMenu>{menu}</NavMobileMenu>}
		</Nav>
	)
}

export default NavigationHeader
