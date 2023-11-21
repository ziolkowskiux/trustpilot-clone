// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeIcon(props: EnvelopeIconProps) {
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
          "M224 48H32a8 8 0 00-8 8v136a16 16 0 0016 16h176a16 16 0 0016-16V56a8 8 0 00-8-8zm-96 85.15L52.57 64h150.86zM98.71 128L40 181.81V74.19zm11.84 10.85l12 11.05a8 8 0 0010.82 0l12-11.05 58 53.15H52.57zM157.29 128L216 74.18v107.64z"
        }
      ></path>
    </svg>
  );
}

export default EnvelopeIcon;
/* prettier-ignore-end */
