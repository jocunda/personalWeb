import React, { useState } from "react";

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
import cx from 'classnames';

//assets
import myImage from "../../images/mypic.jpg"
import mail1 from "../../images/icons8-mail-100.png"
import mail2 from "../../images/icons8-mail-100other.png"
import link1 from "../../images/icons8-linkedin-100.png"
import link2 from "../../images/icons8-linkedin-100other.png"
import git1 from "../../images/icons8-github-100.png"
import git2 from "../../images/icons8-github-100other.png"

//JSON data
import cloudImages from '../../data/cloudImage'

import AppHoverImage from "../AppHoverImage/Component";
import AppProject from "../AppProject/Component";

const Apps24Icon = bundleIcon(Apps24Filled, Apps24Regular);

export default function AppBox(props: Partial<TooltipProps>) {


  //button Project
  const [showProject, setShowProject] = useState(false);

  const handleButtonClick = () => {
    setShowProject(!showProject);
  };

  return <>
    <div className={showProject ? cx(styles.boxContainer, styles.hidden) : styles.boxContainer}>
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

      <Button onClick={handleButtonClick} icon={<Apps24Icon />}>
        Project
      </Button>
    </div>

    <div className={showProject ? cx(styles.cloudContainer, styles.hidden) : styles.cloudContainer}>
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

    <div className={showProject ? styles.projectContainer : cx(styles.projectContainer, styles.hidden)}>
      <AppProject onClickStatus={handleButtonClick} />
    </div>

  </>;
}