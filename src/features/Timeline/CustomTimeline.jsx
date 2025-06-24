import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useScroll, useTransform, motion } from "framer-motion";
import './Timeline.scss';

export default function CustomTimeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div ref={ref} className="timeline-content">
        {data.map((item, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__item-header">
              <div className="timeline__dot-container">
                <div className="timeline__dot" />
              </div>
              <h3 className="timeline__item-title timeline__item-title--desktop">
                {item.title}
              </h3>
            </div>
            
            <div className="timeline__item-content">
              <h3 className="timeline__item-title timeline__item-title--mobile">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        
        <div 
          className="timeline-line"
          style={{ height: height + "px" }}
        >
          <motion.div
            className="timeline-line-progress"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  );
};