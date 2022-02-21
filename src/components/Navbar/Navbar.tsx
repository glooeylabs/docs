import React from "react";
import "./navbar.css";

export interface NavbarProps  {
  /**
   * Is this the principal call to action on the page?
   */
  isSticky?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  
  textLogo: string;
  
};

/**
 * Primary UI component for user interaction
 */
const Navbar = ({
  backgroundColor,
  isSticky = true,
  textLogo,
}: NavbarProps) => {
  const sticky = isSticky
    ? "sticky-top"
    : "navbar-static-top";
  return (
    <nav
      className={["nav", isSticky].join(
        " "
      )}
      style={backgroundColor ? { backgroundColor }: {}}
    >
      <a 
        className={["nav", "btn", "btn-ghost", "normal-case", "text-xl"].join(" ")}>
          {textLogo}
        </a>
    </nav>
  );
};

export default Navbar;
