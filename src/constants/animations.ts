import type { MotionProps } from 'motion/react'

export const SLIDE_RIGHT_ANIMATION: MotionProps = {
	initial: { x: '100%', opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: { x: '100%', opacity: 0 },
	transition: { duration: 0.3, ease: 'easeInOut' },
}
