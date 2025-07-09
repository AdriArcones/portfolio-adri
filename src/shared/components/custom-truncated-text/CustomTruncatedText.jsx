import React, { useState } from 'react';
import useMobile from '../../hooks/useMobile';
import CustomButton from '../custom-button/CustomButton';
import './CustomTruncatedText.scss';

const CustomTruncatedText = ({
  text,
  maxLength = 150,
  expandText = 'Ver más',
  collapseText = 'Ver menos',
  className = '',
  variant = 'primary',
  enableMobile = true,
  htmlContent = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMobile();

  // Determinar si debe truncar el texto
  const shouldTruncate = enableMobile ? isMobile && text.length > maxLength : text.length > maxLength;
  const displayText = shouldTruncate && !isExpanded 
    ? text.substring(0, maxLength) + '...' 
    : text;

  return (
    <div className={`custom-truncated-text ${variant} ${className}`}>
      {htmlContent ? (
        <p 
          className="custom-truncated-text__content"
          dangerouslySetInnerHTML={{ __html: displayText }}
        />
      ) : (
        <p className="custom-truncated-text__content">
          {displayText}
        </p>
      )}
      
      {shouldTruncate && (
        <CustomButton
          variant="text"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
          className="custom-truncated-text__toggle"
        >
          {isExpanded ? collapseText : expandText}
        </CustomButton>
      )}
    </div>
  );
};



export default CustomTruncatedText; 