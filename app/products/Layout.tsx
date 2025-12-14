import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return <div className="py-20 max-w-[1200px] m-auto">{children}</div>;
};
