import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  let scrollTriggers: ScrollTrigger[] = []

  const fadeInUp = (selector: string, options = {}) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            end: 'bottom 20%',
            // markers: true,
            toggleActions: 'play none none reverse',
            ...options,
          },
        },
      )
    })
  }

  const fadeIn = (selector: string, options = {}) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...options,
          },
        },
      )
    })
  }

  const slideInLeft = (selector: string, options = {}) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...options,
          },
        },
      )
    })
  }

  const slideInRight = (selector: string, options = {}) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...options,
          },
        },
      )
    })
  }

  const staggerFadeInUp = (selector: string, options = {}, maxStaggerIndex = 3) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: index <= maxStaggerIndex ? index * 0.1 : 0, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element, 
            start: 'top 100%',
            end: 'bottom 20%',
            markers: true,
            toggleActions: 'play none none reverse',
            ...options,
          },
        },
      )
    })
  }

  const cleanup = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    scrollTriggers = []
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    fadeInUp,
    fadeIn,
    slideInLeft,
    slideInRight,
    staggerFadeInUp,
    cleanup,
  }
}
