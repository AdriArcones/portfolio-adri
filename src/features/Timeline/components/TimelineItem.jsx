import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import CustomButton from '../../../shared/components/custom-button/CustomButton';
import CustomCard from '../../../shared/components/custom-card/CustomCard';
import TimelineContent from './TimelineContent';
import { Minus, Plus } from 'lucide-react';

const TimelineItem = ({ yearData, variant = "desktop", itemValue }) => {
  
  // Render del contenido común para ambas variantes
  const renderContent = () => (
    <div className="timeline__content-year">
      {yearData.content.map((contentItem, contentIndex) => (
        <TimelineContent 
          key={contentIndex}
          contentItem={contentItem}
          yearTitle={yearData.title}
        />
      ))}
    </div>
  );

  // Variante Desktop - Layout tradicional con línea de tiempo
  if (variant === "desktop") {
    return (
      <div className="timeline__item timeline__item--desktop">
        <div className="timeline__item-header">
          <div className="timeline__dot-container">
            <div className="timeline__dot" />
          </div>
          <h2 className="timeline__item-title timeline__item-title--desktop">
            {yearData.title}
          </h2>
        </div>
        
        <div className="timeline__item-content">
          {renderContent()}
        </div>
      </div>
    );
  }

  // Variante Mobile - Accordion Item dentro del Root común
  if (variant === "mobile") {
    return (
      <Accordion.Item 
        value={itemValue}
        className="timeline__accordion-item"
      >
        <div className="timeline__item timeline__item--mobile">
          <CustomCard 
            glass={true}
            className="timeline__accordion"
          >
            <Accordion.Header className="timeline__accordion-header">
              <Accordion.Trigger asChild>
                <div className="timeline__accordion-trigger">
                  <div className="timeline__accordion-info">
                    <h2 className="timeline__accordion-year">{yearData.title}</h2>
                  </div>
                  
                  <CustomButton
                    variant="text"
                    size="small"
                    className="timeline__accordion-toggle"
                    tabIndex={-1}
                  >
                    <Plus className="timeline__accordion-icon timeline__accordion-icon--plus" />
                    <Minus className="timeline__accordion-icon timeline__accordion-icon--minus" />
                  </CustomButton>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            
            <Accordion.Content className="timeline__accordion-content">
              <div className="timeline__accordion-inner">
                {renderContent()}
              </div>
            </Accordion.Content>
          </CustomCard>
        </div>
      </Accordion.Item>
    );
  }

  return null;
};

export default TimelineItem; 