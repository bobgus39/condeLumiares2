import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [threshold])

  return { ref, isVisible }
}

export function useStaggeredAnimation(count, threshold = 0.1) {
  const ref = useRef(null)
  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Array.from({ length: count }, (_, i) => i).forEach((i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i])
            }, i * 120)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [count, threshold])

  return { ref, visibleItems }
}
