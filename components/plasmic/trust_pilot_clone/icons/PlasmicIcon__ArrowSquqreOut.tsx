// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowSquqreOutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowSquqreOutIcon(props: ArrowSquqreOutIconProps) {
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
          "M224 104a8 8 0 01-16 0V59.32l-66.33 66.34a8 8 0 01-11.32-11.32L196.68 48H152a8 8 0 010-16h64a8 8 0 018 8zm-40 24a8 8 0 00-8 8v72H48V80h72a8 8 0 000-16H48a16 16 0 00-16 16v128a16 16 0 0016 16h128a16 16 0 0016-16v-72a8 8 0 00-8-8z"
        }
      ></path>
    </svg>
  );
}

export default ArrowSquqreOutIcon;
/* prettier-ignore-end */
