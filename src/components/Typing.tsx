import React from 'react';

type TypingProps = {
  text: string;
};

export const Typing: React.FC<TypingProps> = ({ text }) => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center h-64 min-w-full">
      <div className="typewriter">
        <h1 className="break-words">{text}</h1>
      </div>
    </div>
  );
};

export default Typing;
