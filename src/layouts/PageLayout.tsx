import React from "react";
import MobilePageLayout from "./MobilePageLayout";
import DesktopPageLayout from "./DesktopPageLayout";

interface PageLayoutProps {
  children: JSX.Element;
}
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      {/* mobile page layout */}
      <MobilePageLayout>{children}</MobilePageLayout>
      {/* desktop page layout */}
      <DesktopPageLayout>{children}</DesktopPageLayout>
    </>
  );
};

export default PageLayout;
