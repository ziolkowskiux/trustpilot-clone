// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: yhxgNC5CiG

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicNavDropdownItem.module.css"; // plasmic-import: yhxgNC5CiG/css

createPlasmicElementProxy;

export type PlasmicNavDropdownItem__VariantMembers = {};
export type PlasmicNavDropdownItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavDropdownItem__VariantsArgs;
export const PlasmicNavDropdownItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNavDropdownItem__ArgsType = {
  children?: React.ReactNode;
  onClick?: (event: any) => void;
};
type ArgPropType = keyof PlasmicNavDropdownItem__ArgsType;
export const PlasmicNavDropdownItem__ArgProps = new Array<ArgPropType>(
  "children",
  "onClick"
);

export type PlasmicNavDropdownItem__OverridesType = {
  navDropdownItem?: Flex__<"a"> & Partial<LinkProps>;
  freeBox?: Flex__<"div">;
};

export interface DefaultNavDropdownItemProps {
  children?: React.ReactNode;
  onClick?: (event: any) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavDropdownItem__RenderFunc(props: {
  variants: PlasmicNavDropdownItem__VariantsArgs;
  args: PlasmicNavDropdownItem__ArgsType;
  overrides: PlasmicNavDropdownItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <PlasmicLink__
      data-plasmic-name={"navDropdownItem"}
      data-plasmic-override={overrides.navDropdownItem}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.navDropdownItem
      )}
      component={Link}
      onClick={args.onClick}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: "Username",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </PlasmicLink__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  navDropdownItem: ["navDropdownItem", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  navDropdownItem: "a";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavDropdownItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavDropdownItem__VariantsArgs;
    args?: PlasmicNavDropdownItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavDropdownItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavDropdownItem__ArgsType,
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
          internalArgPropNames: PlasmicNavDropdownItem__ArgProps,
          internalVariantPropNames: PlasmicNavDropdownItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavDropdownItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "navDropdownItem") {
    func.displayName = "PlasmicNavDropdownItem";
  } else {
    func.displayName = `PlasmicNavDropdownItem.${nodeName}`;
  }
  return func;
}

export const PlasmicNavDropdownItem = Object.assign(
  // Top-level PlasmicNavDropdownItem renders the root element
  makeNodeComponent("navDropdownItem"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicNavDropdownItem
    internalVariantProps: PlasmicNavDropdownItem__VariantProps,
    internalArgProps: PlasmicNavDropdownItem__ArgProps
  }
);

export default PlasmicNavDropdownItem;
/* prettier-ignore-end */
