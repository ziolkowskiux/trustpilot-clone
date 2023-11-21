// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagIcon(props: FlagIconProps) {
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
          "M34.76 42A8 8 0 0032 48v168a8 8 0 0016 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41 16.4 8.11 34.06 16.85 53 16.85 13.93 0 28.54-4.75 43.82-18a8 8 0 002.76-6V48a8 8 0 00-13.27-6c-28 24.23-51.72 12.49-79.21-1.12C103.07 26.76 70.78 10.79 34.76 42zM208 164.25c-26.79 21.16-49.87 9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16 49.87-9.75 76.45 3.4 25 12.35 52.82 26.13 83.55 8.4z"
        }
      ></path>
    </svg>
  );
}

export default FlagIcon;
/* prettier-ignore-end */
