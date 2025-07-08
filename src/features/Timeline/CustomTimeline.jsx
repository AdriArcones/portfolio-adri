import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import './Timeline.scss';
import TimelineItem from './components/TimelineItem';

export default function CustomTimeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div ref={ref} className="timeline-content">
        {data.map((yearData, index) => (
          <TimelineItem 
            key={index}
            yearData={yearData}
          />
        ))}
        
        <div 
          className="timeline-line"
          style={{ height: height + "px" }}
        >
          <div
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
}