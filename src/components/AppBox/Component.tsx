import React from "react";

//styles
import "../../styles/index.scss"
import styles from './styles.module.scss';
import {
  Image,
  Title2,
  Text,
  Button,
  CardFooter,
  Tooltip,
  TooltipProps,
  Divider
} from "@fluentui/react-components";
import {
  bundleIcon,
  Apps24Regular,
  Apps24Filled

} from "@fluentui/react-icons";

//assets
import myImage from "../../images/mypic.jpg"
import mail1 from "../../images/icons8-mail-100.png"
import mail2 from "../../images/icons8-mail-100other.png"
import link1 from "../../images/icons8-linkedin-100.png"
import link2 from "../../images/icons8-linkedin-100other.png"
import git1 from "../../images/icons8-github-100.png"
import git2 from "../../images/icons8-github-100other.png"
import cloud1 from "../../images/cloud1.png"
import cloud2 from "../../images/cloud2.png"
import cloud3 from "../../images/cloud3.png"
import cloud4 from "../../images/cloud4.png"

//hooks
import AppHoverImage from "../AppHoverImage/Component";

const Apps24Icon = bundleIcon(Apps24Filled, Apps24Regular);

export default function AppBox(props: Partial<TooltipProps>) {
  const cloudImages = [
    { src: cloud1, height: 80, width: 150 },
    { src: cloud2, height: 200, width: 600 },
    { src: cloud3, height: 90, width: 140 },
    { src: cloud4, height: 100, width: 190 },
  ]

  return <>


    <div className={styles.boxContainer}>
      <Image
        alt="My avatar"
        shape="circular"
        src={myImage}
        height={150}
        width={150}
      />
      <Divider inset />
      <Title2 align="center" >Silvia Jocunda</Title2>
      <Text size={500} font="monospace">Engineer</Text>
      <Text
        className={styles.aboutText}
        align="start">Self-taught programming languages for HTML, CSS, Javascript and Typescript. I have a high interest in front-end web development and design.</Text>

      <Divider inset />

      <CardFooter>
        <Tooltip content="silviawanshan88@gmail.com" relationship="label" {...props}>
          <div>
            <AppHoverImage
              src={{ normal: mail1, hovered: mail2 }}
              url="mailto:silviawanshan88@gmail.com"
              alt="Mail icon" />
          </div>
        </Tooltip>
        <AppHoverImage
          src={{ normal: link1, hovered: link2 }}
          url="https://linkedin.com/in/silviajocunda"
          alt="Link icon" />
        <AppHoverImage
          src={{ normal: git1, hovered: git2 }}
          url="https://github.com/jocunda"
          alt="Github icon" />
      </CardFooter>

      <Button icon={<Apps24Icon />}>
        Project
      </Button>
    </div>

    <div className={styles.cloudContainer}>
      {cloudImages.map((cloud, index) => (
        <Image
          key={`cloud-${index}`}
          alt="Cloud"
          src={cloud.src}
          height={cloud.height}
          width={cloud.width}
          className={styles[`cloud${index + 1}`]}
        />
      ))}
    </div>
  </>;
}