import React from 'react';
import CustomTruncatedText from '../../../shared/components/custom-truncated-text/CustomTruncatedText';
import CustomChip from '../../../shared/components/custom-chip/CustomChip';
import LazyImage from '../../../shared/components/lazy-image/LazyImage';

const TimelineContent = ({ contentItem, yearTitle }) => {
  return (
    <div className="timeline__content">
      {contentItem.title && (
        <h3 className="timeline__content-title">{contentItem.title}</h3>
      )}
      
      <CustomTruncatedText
        text={contentItem.text}
        maxLength={150}
        htmlContent={true}
        variant="primary"
        className="timeline__text-container"
      />
      
      {contentItem.tags && contentItem.tags.length > 0 && (
        <div className="timeline__tags">
          {contentItem.tags.map((tag, tagIndex) => (
            <CustomChip 
              key={tagIndex} 
              label={tag} 
              color="primary" 
              size="sm" 
            />
          ))}
        </div>
      )}
      
      {contentItem.images && contentItem.images.length > 0 && (
        <div className="timeline__image-container">
          {contentItem.images.map((image, index) => (
            <LazyImage 
              key={index} 
              src={image} 
              alt={`${yearTitle} - ${contentItem.title || 'imagen'} ${index + 1}`}
              className="timeline__image"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelineContent; 