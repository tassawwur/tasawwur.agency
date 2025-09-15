'use client'

import Lenis from 'lenis'

let lenis: Lenis | null = null

export function initSmoothScroll() {
  if (typeof window === 'undefined') return

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

  // RAF loop
  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Cleanup function
  return () => {
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToElement(selector: string, offset = 0) {
  if (typeof window === 'undefined' || !lenis) return

  const element = document.querySelector(selector) as HTMLElement
  if (element) {
    lenis.scrollTo(element, {
      offset,
      duration: 1.2,
    })
  }
}

export function scrollToTop() {
  if (typeof window === 'undefined' || !lenis) return

  lenis.scrollTo(0, {
    duration: 1.2,
  })
}
