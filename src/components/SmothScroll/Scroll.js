import React, { useRef, useEffect } from 'react';

export default function useScroll(parentRef, childRef, callback) {

  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0.5
    };
    observer.current = new IntersectionObserver(([target]) => {
if(target.isIntersecting) {
  console.log("inter");
  callback();
}
    }, options)
    observer.current.observe(childRef.current);

    return function() {
      observer.current.unobserve(childRef.current);  
    }
  }, [callback]);
  return (
    <div>
      
    </div>
  )
};

