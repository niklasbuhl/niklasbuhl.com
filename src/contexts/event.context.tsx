import React, { useContext, useEffect, useState } from "react"
import { WindowLocation } from "@reach/router" // These come from `@types/reach__router`
import { getCSSpx, setCSS } from "../utility/cssConversion"

export enum Orientation {
	Portrait = "portrait",
	Landscape = "landscape",
	Square = "square",
}

export enum ScreenType {
	Mobile = "mobile",
	Tablet = "tablet",
	Desktop = "desktop",
	Wide = "wide",
}

interface IEventContext {
	view: {
		height: number
		width: number
		scroll: number
		lastScroll: number
		screenType: ScreenType // mobile, tablet, desktop, wide (4k)
		orientation: Orientation
		breakpoints: {
			mobile: number
			tablet: number
			desktop: number
			wide: number
		}
	}
	mouse: {
		position: {
			x: number
			y: number
		}
	}
	touch: {
		touches: Touch[]
		lastTouches: Touch[]
	}
	location: WindowLocation | undefined
	setLocation: React.Dispatch<React.SetStateAction<WindowLocation | undefined>>
	lockScroll: (lockScroll: boolean) => void
}

const eventDefaultState = {
	//
	view: {
		height: 0,
		width: 0,
		scroll: 0,
		lastScroll: 0,
		screenType: ScreenType.Desktop,
		orientation: Orientation.Landscape,
		breakpoints: {
			mobile: 480,
			tablet: 720,
			desktop: 1024,
			wide: 2000,
		},
	},
	mouse: {
		position: {
			x: 0,
			y: 0,
		},
	},
	touch: {
		touches: [] as Touch[],
		lastTouches: [] as Touch[],
	},
	location: undefined,
	setLocation: () => {},
	lockScroll: () => {},
}

const EventContext = React.createContext<IEventContext>(eventDefaultState)

interface IEventProvider {
	children: React.ReactNode
}

export const EventProvider: React.FC<IEventProvider> = ({ children }) => {
	const [view, setView] = useState(eventDefaultState.view)
	const [mouse, setMouse] = useState(eventDefaultState.mouse)
	const [touch, setTouch] = useState(eventDefaultState.touch)
	const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
	const [location, setLocation] = useState<WindowLocation>()

	const setBreakpoints = () => {
		const mobileBreakpoint = getCSSpx("--mobile-breakpoint")
		const tabletBreakpoint = getCSSpx("--tablet-breakpoint")
		const desktopBreakpoint = getCSSpx("--desktop-breakpoint")
		const wideDesktopBreakpoint = getCSSpx("--wide-breakpoint")

		setView((prevState) => ({
			...prevState,
			breakpoints: {
				mobile: mobileBreakpoint,
				tablet: tabletBreakpoint,
				desktop: desktopBreakpoint,
				wide: wideDesktopBreakpoint,
			},
		}))
	}

	const handleMousePosition = (event: MouseEvent) => {
		let mouseX = event.clientX
		let mouseY = event.clientY

		setMouse({
			position: {
				y: mouseY,
				x: mouseX,
			},
		})
	}

	const lockScroll = (lockScroll: boolean) => {
		if (lockScroll) {
			setCSS("--disable-scroll", "hidden")
		} else {
			setCSS("--disable-scroll", "visible")
		}
	}

	const handleTouchStart = (event: TouchEvent) => {
		// handleLastTouchPosition(event)
		const newTouches = Array.from(event.touches)
		setTouch((prevState) => ({ ...prevState, touches: newTouches }))
	}

	const handleTouchMove = (event: TouchEvent) => {
		const newTouches = Array.from(event.touches)
		setTouch((prevState) => ({ ...prevState, touches: newTouches }))
	}

	const handleTouchEnd = (event: TouchEvent) => {
		const newTouches = Array.from(event.touches)
		setTouch((prevState) => ({ ...prevState, lastTouches: newTouches }))
	}

	const handleLastTouchPosition = (event: TouchEvent) => {
		let touchX = event.touches[0].clientX
		let touchY = event.touches[0].clientY

		setTouch((prevState) => ({
			...prevState,
			lastTouchPosition: { x: touchX, y: touchY },
		}))
	}

	const handleScroll = () => {
		let scroll = window.scrollY

		setView((prevState) => ({
			...prevState,
			scroll: scroll,
		}))
	}

	const handleResize = () => {
		let width = window.innerWidth
		let height = window.innerHeight

		// console.log(view)

		let screenType: ScreenType = ScreenType.Desktop

		switch (true) {
			case width < view.breakpoints.mobile:
				screenType = ScreenType.Mobile
				break
			case width < view.breakpoints.tablet:
				screenType = ScreenType.Tablet
				break
			case width < view.breakpoints.desktop:
				screenType = ScreenType.Desktop
				break
			case width < view.breakpoints.wide:
				screenType = ScreenType.Wide
				break
			default:
				screenType = ScreenType.Desktop
				break
		}

		let orientation: Orientation = Orientation.Landscape

		if (width > height) {
			orientation = Orientation.Landscape
		} else if (height > width) {
			orientation = Orientation.Portrait
		} else if (height == width) {
			orientation = Orientation.Square
		}

		setView((prevState) => ({
			...prevState,
			width: width,
			height: height,
			orientation: orientation,
			screenType: screenType,
		}))
	}

	useEffect(() => {
		let lastScroll = view.scroll - lastScrollPosition

		setLastScrollPosition(view.scroll)

		setView((prevState) => ({
			...prevState,
			lastScroll: lastScroll,
		}))
	}, [view.scroll])

	useEffect(() => {
		setBreakpoints()
		handleScroll()
		handleResize()

		try {
			window.addEventListener("resize", handleResize)
			window.addEventListener("scroll", handleScroll)
			window.addEventListener("mousemove", handleMousePosition)
			// Touch
			// https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW22
			window.addEventListener("touchstart", handleTouchStart)
			window.addEventListener("touchmove", handleTouchMove)
			window.addEventListener("touchend", handleTouchEnd)
		} catch (error) {
			console.log(error)
		}
		return () => {
			try {
				window.removeEventListener("resize", handleResize)
				window.removeEventListener("scroll", handleScroll)
				window.removeEventListener("mousemove", handleMousePosition)
				window.removeEventListener("touchstart", handleTouchStart)
			} catch (error) {
				console.log(error)
			}
		}
	}, [])

	return (
		<EventContext.Provider
			value={{
				view,
				mouse,
				touch,
				location,
				setLocation,
				lockScroll,
			}}
		>
			{children}
		</EventContext.Provider>
	)
}

// const useEvent = useContext(EventContext)

export default EventContext
