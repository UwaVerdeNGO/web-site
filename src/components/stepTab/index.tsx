import React, { Children, FC, ReactComponentElement, ReactNode } from 'react';

type StepTabItemProps = {
  title?: string;
  children: ReactNode;
};

type StepTabProps = {
  children: ReactComponentElement<FC<StepTabItemProps>>[];
  activeTab: number;
};

export const StepTabItem: FC<StepTabItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const StepTab: FC<StepTabProps> = ({ children, activeTab }) => {
  const StepTabItem = Children.toArray(children);

  return (
    <div>
      <div key={activeTab}>{StepTabItem[activeTab]}</div>
    </div>
  );
};
