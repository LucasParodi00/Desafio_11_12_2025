import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <div className="max-w-[1300px] m-auto py-10">{children}</div>;
};

export default Layout;
