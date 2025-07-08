import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import useMobile from '../../../shared/hooks/useMobile';
import CustomButton from '../../../shared/components/custom-button/CustomButton';
import CustomCard from '../../../shared/components/custom-card/CustomCard';
import TimelineContent from './TimelineContent';
import { Minus, Plus } from 'lucide-react';

const TimelineItem = ({ yearData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  // En desktop, mostrar siempre el contenido con layout original
  if (!isMobile) {
    return (
      <div className="timeline__item">
        <div className="timeline__item-header">
          <div className="timeline__dot-container">
            <div className="timeline__dot" />
          </div>
          <h2 className="timeline__item-title timeline__item-title--desktop">
            {yearData.title}
          </h2>
        </div>
        
        <div className="timeline__item-content">
          <div className="timeline__content-year">
            {yearData.content.map((contentItem, contentIndex) => (
              <TimelineContent 
                key={contentIndex}
                contentItem={contentItem}
                yearTitle={yearData.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // En móvil, usar acordeón con CustomCard y glassmorphism
  return (
    <div className="timeline__item">
      <CustomCard 
        glass={true}
        glow={isOpen}
        className="timeline__accordion"
      >
        <div className="timeline__accordion-header">
          <div className="timeline__accordion-info">
            <h2 className="timeline__accordion-year">{yearData.title}</h2>
          </div>
          
          <CustomButton
            variant="text"
            size="small"
            onClick={() => setIsOpen(!isOpen)}
            className="timeline__accordion-toggle"
            aria-expanded={isOpen}
          >
            {isOpen ? <Minus /> : <Plus />}
          </CustomButton>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="timeline__accordion-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="timeline__accordion-inner">
                <div className="timeline__content-year">
                  {yearData.content.map((contentItem, contentIndex) => (
                    <TimelineContent 
                      key={contentIndex}
                      contentItem={contentItem}
                      yearTitle={yearData.title}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CustomCard>
    </div>
  );
};

export default TimelineItem; 