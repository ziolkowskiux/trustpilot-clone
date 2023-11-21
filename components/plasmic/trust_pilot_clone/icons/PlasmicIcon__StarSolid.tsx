// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarSolidIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarSolidIcon(props: StarSolidIconProps) {
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
          "M29.9 12.161a2 2 0 00-1.726-1.375l-7.424-.64-2.91-6.92a1.993 1.993 0 00-3.68 0l-2.9 6.92-7.433.644a2 2 0 00-1.14 3.508l5.64 4.927-1.69 7.317a2 2 0 002.98 2.168l6.375-3.875 6.388 3.875a2 2 0 002.98-2.168l-1.688-7.325 5.637-4.92a2 2 0 00.591-2.136z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarSolidIcon;
/* prettier-ignore-end */
