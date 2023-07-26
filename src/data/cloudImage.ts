import cloud1 from "../images/cloud1.png";
import cloud2 from "../images/cloud2.png";
import cloud3 from "../images/cloud3.png";
import cloud4 from "../images/cloud4.png";

type CloudImage = {
  src: string;
  height: number;
  width: number;
};

const cloudImages: CloudImage[] = [
  { src: cloud1, height: 80, width: 150 },
  { src: cloud2, height: 200, width: 600 },
  { src: cloud3, height: 90, width: 140 },
  { src: cloud4, height: 100, width: 190 },
];

export default cloudImages;
