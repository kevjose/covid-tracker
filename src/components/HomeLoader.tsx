import React from 'react';
import StatsContainer from '../components/StatsContainer';

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
      <div className="mt-20 flex flex-col justify-center items-center h-64 min-w-full">
        <div className="typewriter">
          <h1>Loading stats.</h1>
        </div>
      </div>
      ;
    </>
  );
};

export default HomeLoader;
