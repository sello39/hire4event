import React from 'react';

// types.ts
interface CubeText {
  front: string;
  top: string;
}

export interface CardConfig {
  title: string;
  label: string;
  cubeText: CubeText;
  accessTitle: string;
  imageUrl: string; 
}


const Card = ({ config }: { config: CardConfig }) => {
  return (
    <div className="card">
      <div className="card_form" 
              style={{ backgroundImage: `url(${config.imageUrl})` }}
>
        <div className="card_span">{config.title}</div>
      </div>
      <div className="card_data">
        <div className="data">
          <div className="text">
            <label className="text_m">{config.label}</label>
            <div className="cube text_s">
              <label className="side front">{config.cubeText.front}</label>
              <label className="side top">{config.cubeText.top}</label>
            </div>
          </div>
        </div>
        <div className="card_span" title={config.accessTitle}>Access</div>
      </div>
    </div>
  );
};

export default Card;
