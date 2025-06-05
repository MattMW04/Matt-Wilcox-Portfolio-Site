"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true) // Element is in view, set visibility to true
                }
            },
            {
                threshold: 0.1, //  trigger when 10% of the element is visible
                rootMargin: "0px 0px -50px 0px",
            },
        )

        if (ref.current) {
            observer.observe(ref.current) // Start observing the element
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current) // Clean up the observer when the component unmounts
            }
        }
    }, [])

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                } ${className}`}
        >
            {children}
        </div>
    )
}