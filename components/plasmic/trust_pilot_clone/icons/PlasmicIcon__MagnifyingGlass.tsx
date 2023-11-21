// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MagnifyingGlassIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MagnifyingGlassIcon(props: MagnifyingGlassIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      data-name={"Layer 1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"9.14"}
        cy={"9.14"}
        r={"7.64"}
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      ></circle>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
        d={"M22.5 22.5l-8.11-8.11"}
      ></path>
    </svg>
  );
}

export default MagnifyingGlassIcon;
/* prettier-ignore-end */
