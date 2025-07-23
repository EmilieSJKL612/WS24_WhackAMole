
// RQ1
import React from 'react';

const Hole = ({ index, hasMole, onMoleClick }) => {
  return (
    <div className="hole" data-hole={index}>
      {hasMole && (
        <div 
          className="mole" 
          // RQ8
          onClick={onMoleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onMoleClick();
            }
          }}
        >
          🦫
        </div>
      )}
    </div>
  );
};

export default Hole;

