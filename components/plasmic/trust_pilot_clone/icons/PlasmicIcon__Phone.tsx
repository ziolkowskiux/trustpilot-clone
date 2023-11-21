// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneIcon(props: PhoneIconProps) {
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
          "M222.37 158.46l-47.11-21.11-.13-.06a16 16 0 00-15.17 1.4 8.12 8.12 0 00-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 001.32-15.06v-.12L97.54 33.64a16 16 0 00-16.62-9.52A56.26 56.26 0 0032 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0055.88-48.92 16 16 0 00-9.51-16.62zM176 208A128.14 128.14 0 0148 80a40.2 40.2 0 0134.87-40 .61.61 0 000 .12l21 47-20.67 24.74a6.13 6.13 0 00-.57.77 16 16 0 00-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0015.75-1.14 8.44 8.44 0 00.74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 01176 208z"
        }
      ></path>
    </svg>
  );
}

export default PhoneIcon;
/* prettier-ignore-end */
