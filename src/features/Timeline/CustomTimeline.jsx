import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import * as Accordion from '@radix-ui/react-accordion';
import useMobile from '../../shared/hooks/useMobile';
import './Timeline.scss';
import TimelineItem from './components/TimelineItem';

export default function CustomTimeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const isMobile = useMobile();

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

  // Render para desktop - layout tradicional con línea de tiempo
  const renderDesktop = () => (
    <div className="timeline-container" ref={containerRef}>
      <div ref={ref} className="timeline-content">
        {data.map((yearData, index) => (
          <TimelineItem 
            key={index}
            yearData={yearData}
            variant="desktop"
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

  // Render para móvil - accordion unificado
  const renderMobile = () => (
    <div className="timeline-container timeline-container--mobile">
      <div className="timeline-content timeline-content--mobile">
        <Accordion.Root 
          type="single" 
          collapsible
          className="timeline__accordion-root"
        >
          {data.map((yearData, index) => (
            <TimelineItem 
              key={index}
              yearData={yearData}
              variant="mobile"
              itemValue={`item-${yearData.title}`}
            />
          ))}
        </Accordion.Root>
      </div>
    </div>
  );

  return isMobile ? renderMobile() : renderDesktop();
}