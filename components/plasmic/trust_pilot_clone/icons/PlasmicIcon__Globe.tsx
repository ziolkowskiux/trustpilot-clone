// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlobeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlobeIcon(props: GlobeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm-26.37 144h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89zM98 152a145.72 145.72 0 010-48h60a145.72 145.72 0 010 48zm-58-24a87.61 87.61 0 013.33-24h38.46a161.79 161.79 0 000 48H43.33A87.61 87.61 0 0140 128zm114.37-40h-52.74C107 69.66 116 53.13 128 40.11c12 13.02 21 29.55 26.37 47.89zm19.84 16h38.46a88.15 88.15 0 010 48h-38.46a161.79 161.79 0 000-48zm32.16-16h-35.43a142.39 142.39 0 00-20.26-45 88.37 88.37 0 0155.69 45zM105.32 43a142.39 142.39 0 00-20.26 45H49.63a88.37 88.37 0 0155.69-45zM49.63 168h35.43a142.39 142.39 0 0020.26 45 88.37 88.37 0 01-55.69-45zm101.05 45a142.39 142.39 0 0020.26-45h35.43a88.37 88.37 0 01-55.69 45z"
        }
      ></path>
    </svg>
  );
}

export default GlobeIcon;
/* prettier-ignore-end */
