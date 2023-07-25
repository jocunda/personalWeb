declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.styl" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.png" {
  const path: string;
  export default path;
}
