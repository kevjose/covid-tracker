import React from 'react';
import StatsContainer from '../components/StatsContainer';
import Typing from './Typing';

export const HomeLoader: React.FC = () => {
  return (
    <>
      <StatsContainer variant="4by2">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-stats rounded-lg cursor-default h-24"
          >
            <div className="PlaceholderLoader"></div>
          </div>
        ))}
      </StatsContainer>

      <Typing text="Loading stats." />
    </>
  );
};

export default HomeLoader;
