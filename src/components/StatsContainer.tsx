import React from 'react';

type Variant = '4by2' | '2by4';

type StatsContainerProps = {
  children: React.ReactNode;
  variant: Variant;
};
let classNames: string;
export const StatsContainer: React.FC<StatsContainerProps> = ({
  children,
  variant,
}) => {
  if (variant === '4by2') {
    classNames = 'mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4';
  } else if ((variant = '2by4')) {
    classNames = 'm-5 grid grid-cols-2 gap-5';
  }
  return <div className={classNames}>{children}</div>;
};

export default StatsContainer;
