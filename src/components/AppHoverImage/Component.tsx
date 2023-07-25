import React, { useState } from "react";

//styles
import "../../styles/index.scss"
import {
  Image,
} from "@fluentui/react-components";


export default function AppHoverImage({ src, alt, url }: {
  src: any;
  alt: any;
  url: string;
}) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank'); // Open the specified URL in a new tab
    }
  };

  return <>
    <Image
      alt={alt}
      src={hovered ? src.hovered : src.normal}
      height={50}
      width={50}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  </>;
}