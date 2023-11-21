// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: 1RfhwdtRup_T

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicCompanyActivityTags.module.css"; // plasmic-import: 1RfhwdtRup_T/css

createPlasmicElementProxy;

export type PlasmicCompanyActivityTags__VariantMembers = {};
export type PlasmicCompanyActivityTags__VariantsArgs = {};
type VariantPropType = keyof PlasmicCompanyActivityTags__VariantsArgs;
export const PlasmicCompanyActivityTags__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCompanyActivityTags__ArgsType = {
  activityIcon?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  activityLabel?: string;
};
type ArgPropType = keyof PlasmicCompanyActivityTags__ArgsType;
export const PlasmicCompanyActivityTags__ArgProps = new Array<ArgPropType>(
  "activityIcon",
  "activityLabel"
);

export type PlasmicCompanyActivityTags__OverridesType = {
  companyActivityRow?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  label?: p.Flex<"div">;
};

export interface DefaultCompanyActivityTagsProps {
  activityIcon?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  activityLabel?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCompanyActivityTags__RenderFunc(props: {
  variants: PlasmicCompanyActivityTags__VariantsArgs;
  args: PlasmicCompanyActivityTags__ArgsType;
  overrides: PlasmicCompanyActivityTags__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          activityLabel: "Company activity label"
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"companyActivityRow"}
      data-plasmic-override={overrides.companyActivityRow}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.companyActivityRow
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"24px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"24px"}
        loading={"lazy"}
        src={args.activityIcon}
      />

      <div
        data-plasmic-name={"label"}
        data-plasmic-override={overrides.label}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.label)}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.activityLabel;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "something here";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  companyActivityRow: ["companyActivityRow", "img", "label"],
  img: ["img"],
  label: ["label"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  companyActivityRow: "div";
  img: typeof p.PlasmicImg;
  label: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompanyActivityTags__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompanyActivityTags__VariantsArgs;
    args?: PlasmicCompanyActivityTags__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCompanyActivityTags__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCompanyActivityTags__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCompanyActivityTags__ArgProps,
          internalVariantPropNames: PlasmicCompanyActivityTags__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCompanyActivityTags__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "companyActivityRow") {
    func.displayName = "PlasmicCompanyActivityTags";
  } else {
    func.displayName = `PlasmicCompanyActivityTags.${nodeName}`;
  }
  return func;
}

export const PlasmicCompanyActivityTags = Object.assign(
  // Top-level PlasmicCompanyActivityTags renders the root element
  makeNodeComponent("companyActivityRow"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    label: makeNodeComponent("label"),

    // Metadata about props expected for PlasmicCompanyActivityTags
    internalVariantProps: PlasmicCompanyActivityTags__VariantProps,
    internalArgProps: PlasmicCompanyActivityTags__ArgProps
  }
);

export default PlasmicCompanyActivityTags;
/* prettier-ignore-end */
