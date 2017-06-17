import * as React from "react";
import { IndexLink, Link } from "react-router";

interface PageLayoutProps {
  children: React.ReactChildren;
}
export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="container text-center">
    <div className="page-layout__viewport">
      {children}
    </div>
  </div>
);

export default PageLayout;
