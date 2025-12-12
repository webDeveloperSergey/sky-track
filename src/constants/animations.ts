import type { MotionProps } from 'motion/react'

export const ASIDE_SLIDE_RIGHT: MotionProps = {
	initial: { x: '100%', opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: { x: '100%', opacity: 0 },
	transition: { duration: 0.3, ease: 'easeInOut' },
}
