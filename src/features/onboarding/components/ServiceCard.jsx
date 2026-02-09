import React from 'react';
import cardPatternWhite from '../../../assets/images/card-pattern-white-bg.svg';
import cardPatternBlack from '../../../assets/images/card-pattern.svg';
import radioDefault from '../../../assets/images/Radio [1.0].svg';
import radioSelected from '../../../assets/images/Radio-selected [1.0].svg';

const ServiceCard = ({ id, icon, title, description, isSelected, onClick }) => {
  return (
    <div 
      className={`service_type_container ${isSelected ? 'is-selected' : ''}`}
      onClick={() => onClick(id)}
    >
      <div className="card_icon_title">
        <div className="service_card_icon">
          <img src={icon} alt={`${title} Icon`} />
        </div>

        <div className="card_title">
            <p className="card_title_text_md">{title}</p>
            <p className="card_title_text_sm">{description}</p>
        </div>
      </div>

      <div className="card_pattern">
        <img src={cardPatternWhite} alt="Pattern" className="card-pattern-white" />
        <img src={cardPatternBlack} alt="Pattern" className="card-pattern-black" />
      </div>

      <div className="card_check">
        <img src={radioDefault} alt="Card Check" className="checkbox-default" style={{ display: isSelected ? 'none' : 'block' }} />
        <img src={radioSelected} alt="Card Check Active" className="checkbox-active" style={{ display: isSelected ? 'block' : 'none' }} />
      </div>
    </div>
  );
};

export default ServiceCard;
