// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarIcon(props: StarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M239.2 97.29a16 16 0 00-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 00-29.44 0L90.07 81.17l-59.46 5.15a16 16 0 00-9.11 28.06l45.11 39.42-13.52 58.54a16 16 0 0023.84 17.34l51-31 51.11 31a16 16 0 0023.84-17.34l-13.51-58.6 45.1-39.36a16 16 0 004.73-17.09zm-15.22 5l-45.1 39.36a16 16 0 00-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 00-16.54 0l-51 31 13.46-58.6a16 16 0 00-5.08-15.71L32 102.35a.37.37 0 010-.09l59.44-5.14a16 16 0 0013.35-9.75L128 32.08l23.2 55.29a16 16 0 0013.35 9.75l59.45 5.14v.07z"
        }
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
