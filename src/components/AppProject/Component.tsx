import React from "react";

//styles
import "../../styles/index.scss"
import styles from './styles.module.scss';
import {
  Body1,
  Caption1,
  Button,
  Subtitle1,
} from "@fluentui/react-components";
import {
  MoreHorizontal20Filled,
  Open16Regular,
  Share16Regular,
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

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};

//project props
interface ProjectProps {
  onClickStatus: () => void;
}
const Person24Icon = bundleIcon(Person24Filled, Person24Regular);


export default function AppProject({ onClickStatus }: ProjectProps) {

  return <>
    <Button onClick={onClickStatus} icon={<Person24Icon />}>
      Profile
    </Button>

    <div className={styles.cardContainer}>
      <section>
        <Card className={styles.card}>
          <CardPreview>
            <img
              src={resolveAsset("sales_template.png")}
              alt="Sales Presentation Preview"
            />
          </CardPreview>

          <CardHeader
            image={
              <img
                src={resolveAsset("powerpoint_logo.svg")}
                alt="Microsoft PowerPoint logo"
              />
            }
            header={
              <Body1>
                <b>App Name</b>
              </Body1>
            }
            description={<Caption1>Developer</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Filled />}
                aria-label="More options"
              />
            }
          />

          <p className={styles.text}>
            Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
            Marshmallow pastry jujubes toffee sugar plum.
          </p>

          <CardFooter>
            <Button appearance="primary" icon={<Open16Regular />}>
              Open
            </Button>
            <Button icon={<Share16Regular />}>Share</Button>
          </CardFooter>
        </Card>
      </section>

    </div>
  </>;
}