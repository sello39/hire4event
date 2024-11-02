import React from 'react';
import Card, { CardConfig } from '../Card';

const EquipmentSection = () => {
    const cardConfigurations: CardConfig[] = [
      {
        title: 'Tables',
        label: 'Tables',
        cubeText: { front: 'See available tables', top: 'view and hire' },
        accessTitle: 'SELLO',
        imageUrl: 'http://localhost:3000/static/media/beautiful-jungle-party-decorations.35d199953ea8a85bfd5e.jpg'
      },
      {
        title: 'Chairs',
        label: 'Chairs',
        cubeText: { front: 'Explore chair options', top: 'rent now' },
        accessTitle: 'RENTAL',
        imageUrl: 'https://tinypic.host/images/2024/10/31/IMG_6375.th.png'
    // https://tinypic.host/images/2024/11/02/Preview.th.jpg
      },
      {
        title: 'Lighting',
        label: 'Lighting',
        cubeText: { front: 'Discover lighting solutions', top: 'book instantly' },
        accessTitle: 'INSTANT',
        imageUrl: 'https://tinypic.host/images/2024/10/31/IMG_6375.th.png'
      }
    ];
  
    return (
      <div className="card-container">
        <div className='card-title'>Hire at your budget and tear down staff in minutes</div>
        <div className="card-grid">
          {cardConfigurations.map((config, index) => (
            <Card key={index} config={config} />
          ))}
        </div>
      </div>
    );
  };

  export default EquipmentSection;