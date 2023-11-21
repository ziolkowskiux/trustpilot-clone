// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarsIcon(props: BarsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 9.249h28a1.25 1.25 0 000-2.5H2a1.25 1.25 0 000 2.5zm28 5.501H2a1.25 1.25 0 000 2.5h28a1.25 1.25 0 000-2.5zm0 8H2a1.25 1.25 0 000 2.5h28a1.25 1.25 0 000-2.5z"
        }
      ></path>
    </svg>
  );
}

export default BarsIcon;
/* prettier-ignore-end */
