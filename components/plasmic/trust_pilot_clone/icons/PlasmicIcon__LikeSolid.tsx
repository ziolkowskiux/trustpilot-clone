// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LikeSolidIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LikeSolidIcon(props: LikeSolidIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29.25 10.015A3 3 0 0027 9h-7V7a5 5 0 00-5-5 1 1 0 00-.895.553L9.382 12H4a2 2 0 00-2 2v11a2 2 0 002 2h21.5a3 3 0 002.977-2.625l1.5-12a3 3 0 00-.727-2.36z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LikeSolidIcon;
/* prettier-ignore-end */
