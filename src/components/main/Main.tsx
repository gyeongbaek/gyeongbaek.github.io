import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Main: React.FC<Props> = ({ className, children }) => {
  return <main className={className}>main{children}</main>;
};

export default Main;
