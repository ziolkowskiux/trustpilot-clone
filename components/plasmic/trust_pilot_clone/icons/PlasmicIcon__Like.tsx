// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LikeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LikeIcon(props: LikeIconProps) {
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
          "M234 80.12A24 24 0 00216 72h-56V56a40 40 0 00-40-40 8 8 0 00-7.16 4.42L75.06 96H32a16 16 0 00-16 16v88a16 16 0 0016 16h172a24 24 0 0023.82-21l12-96A24 24 0 00234 80.12zM32 112h40v88H32zm191.94-15l-12 96a8 8 0 01-7.94 7H88v-94.11l36.71-73.43A24 24 0 01144 56v24a8 8 0 008 8h64a8 8 0 017.94 9z"
        }
      ></path>
    </svg>
  );
}

export default LikeIcon;
/* prettier-ignore-end */
