import React, { useState, useEffect, useRef } from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonialRef = useRef(null);
    const testimonialWidth = useRef(null);
    const testimonialCount = 5; // Number of testimonials

    useEffect(() => {
        if (testimonialRef.current && testimonialWidth.current) {
            testimonialRef.current.style.transition = 'transform 0.5s ease'; // Apply transition property

            const transitionHandler = () => {
                setActiveIndex(prevIndex => (prevIndex + 1) % testimonialCount);
            };

            testimonialRef.current.addEventListener('transitionend', transitionHandler);

            return () => {
                testimonialRef.current.removeEventListener('transitionend', transitionHandler);
            };
        }
    }, [activeIndex, testimonialCount]);

    useEffect(() => {
        if (testimonialRef.current && testimonialWidth.current) {
            const carouselWidth = testimonialWidth.current.offsetWidth * testimonialCount;
            testimonialRef.current.style.width = `${carouselWidth}px`;
        }
    }, []);

    return (
        <div className="testimonial-carousel-container">
            <div className="testimonial-carousel" ref={testimonialRef}>
                {[...Array(testimonialCount)].map((_, index) => (
                    <div
                        key={index}
                        className={`testimonial-carousel-item black shadow-md p-4 rounded-lg ${activeIndex === index && 'active'}`}
                    >
                        <p className="text-white m-auto">
                            It's amazing to witness seniors and juniors collaborating on successful events. The bonds
                            formed during these experiences last a lifetime. MES is a vivid memory with my peers,
                            enveloped in waves of entrepreneurship and excitement. This opportunity came my way because I
                            chose to join E-cell.
                        </p>
                        <p className="mt-2 mb-2 text-slate-400 text-center text-[18px]">-Jaydev Daga</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
