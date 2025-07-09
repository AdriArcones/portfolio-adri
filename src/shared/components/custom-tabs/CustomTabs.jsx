import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "../lazy-image/LazyImage";
import "./CustomTabs.scss";

// Componente auxiliar para las tarjetas de tabs
const TabCard = ({ children, className }) => {
  return <div className={`tab-card ${className}`}>{children}</div>;
};

// Componente auxiliar para el header de tabs
const TabHeader = ({ tabs, activeTab, onTabChange, autoChange, isMobile }) => {
  const handleTabClick = (tabIndex) => {
    // En móviles, siempre permitir cambio manual
    if (!autoChange || isMobile) {
      onTabChange(tabIndex);
    }
  };

  return (
    <TabCard className="custom-tabs__header">
      {tabs.map((tab, index) => (
        <motion.div
          key={tab.id}
          className={`custom-tabs__header-item ${
            activeTab === index ? "active" : ""
          }`}
          onClick={() => handleTabClick(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {tab.title}
        </motion.div>
      ))}
    </TabCard>
  );
};

// Componente auxiliar para el contenido de tabs
const TabContent = ({ tabs, activeTab, isMobile }) => {
  return (
    <TabCard className="custom-tabs__tab">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="custom-tabs__tab-item"
          initial={{ x: isMobile ? 0 : 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: isMobile ? 0 : -300, opacity: 0 }}
          transition={{
            duration: isMobile ? 0.2 : 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="custom-tabs__tab-content">
            {tabs[activeTab].content.map((item, index) => (
              <div key={index} className="custom-tabs__tab-content-item">
                <LazyImage
                  className="custom-tabs__tab-content-item-image inline"
                  src={item.image}
                  alt={`Skill ${index}`}
                  title={item.title}
                />
                <p className="custom-tabs__tab-content-item-title">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </TabCard>
  );
};

const CustomTabs = ({ scrollProgress = 0, autoChange = false, tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Función auxiliar para calcular el índice de tab basado en el progreso de scroll
  const calculateTabIndexFromScroll = (progress, totalTabs) => {
    const tabIndex = Math.floor(progress * totalTabs);
    return Math.max(0, Math.min(tabIndex, totalTabs - 1));
  };

  // Efecto para cambio automático de tabs basado en scroll (solo en desktop)
  useEffect(() => {
    if (autoChange && scrollProgress !== undefined && !isMobile) {
      const newTabIndex = calculateTabIndexFromScroll(
        scrollProgress,
        tabs.length
      );
      setActiveTab(newTabIndex);
    }
  }, [scrollProgress, autoChange, tabs.length, isMobile]);

  return (
    <div className="custom-tabs">
      <TabHeader
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        autoChange={autoChange}
        isMobile={isMobile}
      />
      <TabContent tabs={tabs} activeTab={activeTab} isMobile={isMobile} />
    </div>
  );
};

export default CustomTabs;
