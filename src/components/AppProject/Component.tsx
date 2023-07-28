import React from "react";

//styles
import "../../styles/index.scss"
import styles from './styles.module.scss';
import {
  Body1,
  Caption1,
  Button,
} from "@fluentui/react-components";
import {
  Code24Regular,
  Globe24Regular,
  bundleIcon,
  Person24Regular,
  Person24Filled
} from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

//JSON data
import workImages from '../../data/workImage'


//project props
interface ProjectProps {
  onClickStatus: () => void;
}
const Person24Icon = bundleIcon(Person24Filled, Person24Regular);


export default function AppProject({ onClickStatus }: ProjectProps) {


  const handleClick = (url: string) => {
    if (url) {
      window.open(url, '_blank'); // Open the specified URL in a new tab
    }
  };

  return <>
    <Button
      appearance="primary"
      size="large"
      className={styles.profileButton}
      onClick={onClickStatus}
      icon={<Person24Icon />}>
      Profile
    </Button>

    <div className={styles.cardContainer}>
      {workImages.map((work, index) => (
        <Card className={styles.card} key={`work-${index}`}>
          <CardPreview>
            <img
              src={work.image}
              alt="workImage"
            />
          </CardPreview>

          <CardHeader
            image={
              <>
                <img
                  src={work.logo}
                  alt="React"
                  height={30}
                />
                {work.secondLogo ? <img
                  src={work.secondLogo}
                  alt="React"
                  height={30}
                /> : ""}
              </>
            }
            header={
              <Body1>
                <b>{work.title}</b>
              </Body1>
            }
            description={<Caption1>{work.framework}</Caption1>}
          />

          <p className={styles.text}>
            {work.text}
          </p>

          <CardFooter>
            <Button onClick={() => handleClick(work.codeLink)} icon={<Code24Regular />}>
              Code
            </Button>
            {work.link ? <Button onClick={() => work.link ? handleClick(work.link) : null} icon={<Globe24Regular />}>Deploy</Button> : ""}
          </CardFooter>
        </Card>
      ))}
    </div>

  </>;
}