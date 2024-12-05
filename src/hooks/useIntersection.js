import { useEffect, useState, useRef } from "react";

/**
 * userIntersection
 * @since 2024.10.10
 * @author 임석진
 */



const useIntersection = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isVisible];
};

export default useIntersection;
