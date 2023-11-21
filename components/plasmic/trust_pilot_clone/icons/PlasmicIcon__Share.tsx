// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareIcon(props: ShareIconProps) {
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
          "M176 160a39.89 39.89 0 00-28.62 12.09l-46.1-29.63a39.8 39.8 0 000-28.92l46.1-29.63a40 40 0 10-8.66-13.45l-46.1 29.63a40 40 0 100 55.82l46.1 29.63A40 40 0 10176 160zm0-128a24 24 0 11-24 24 24 24 0 0124-24zM64 152a24 24 0 1124-24 24 24 0 01-24 24zm112 72a24 24 0 1124-24 24 24 0 01-24 24z"
        }
      ></path>
    </svg>
  );
}

export default ShareIcon;
/* prettier-ignore-end */
