import classes from "./logo.module.css";
export default function Logo({ as: Component, href }) {
  return (
    <Component className={classes.logo} href={href}>
      Max' Next Blog
    </Component>
  );
}
