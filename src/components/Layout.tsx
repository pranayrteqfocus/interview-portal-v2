import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

function Layout(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <ParallaxProvider>
      <div>{props.children}</div>
    </ParallaxProvider>
  );
}

export default Layout;
