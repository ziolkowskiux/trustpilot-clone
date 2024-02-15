// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: 829KtCjh8CIv

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

import { AntdBreadcrumb } from "@plasmicpkgs/antd5/skinny/registerBreadcrumb";
import { AntdBreadcrumbItem } from "@plasmicpkgs/antd5/skinny/registerBreadcrumb";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicPathBreadcrumb.module.css"; // plasmic-import: 829KtCjh8CIv/css

createPlasmicElementProxy;

export type PlasmicPathBreadcrumb__VariantMembers = {};
export type PlasmicPathBreadcrumb__VariantsArgs = {};
type VariantPropType = keyof PlasmicPathBreadcrumb__VariantsArgs;
export const PlasmicPathBreadcrumb__VariantProps = new Array<VariantPropType>();

export type PlasmicPathBreadcrumb__ArgsType = {};
type ArgPropType = keyof PlasmicPathBreadcrumb__ArgsType;
export const PlasmicPathBreadcrumb__ArgProps = new Array<ArgPropType>();

export type PlasmicPathBreadcrumb__OverridesType = {
  root?: Flex__<typeof AntdBreadcrumb>;
  breadcrumbItem?: Flex__<typeof AntdBreadcrumbItem>;
};

export interface DefaultPathBreadcrumbProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPathBreadcrumb__RenderFunc(props: {
  variants: PlasmicPathBreadcrumb__VariantsArgs;
  args: PlasmicPathBreadcrumb__ArgsType;
  overrides: PlasmicPathBreadcrumb__OverridesType;
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
    <AntdBreadcrumb
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      itemsRaw={(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
        (() => {
          try {
            return $ctx.pagePath.substring(1).split("/");
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return [];
            }
            throw e;
          }
        })()
      ).map((__plasmic_item_0, __plasmic_idx_0) => {
        const currentItem = __plasmic_item_0;
        const currentIndex = __plasmic_idx_0;
        return (
          <AntdBreadcrumbItem
            data-plasmic-name={"breadcrumbItem"}
            data-plasmic-override={overrides.breadcrumbItem}
            className={classNames("__wab_instance", sty.breadcrumbItem)}
            key={currentIndex}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xhifW
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return currentItem;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "First";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </AntdBreadcrumbItem>
        );
      })}
      separator={
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ppH41
          )}
        >
          {"/"}
        </div>
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "breadcrumbItem"],
  breadcrumbItem: ["breadcrumbItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof AntdBreadcrumb;
  breadcrumbItem: typeof AntdBreadcrumbItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPathBreadcrumb__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPathBreadcrumb__VariantsArgs;
    args?: PlasmicPathBreadcrumb__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPathBreadcrumb__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPathBreadcrumb__ArgsType,
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
          internalArgPropNames: PlasmicPathBreadcrumb__ArgProps,
          internalVariantPropNames: PlasmicPathBreadcrumb__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPathBreadcrumb__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPathBreadcrumb";
  } else {
    func.displayName = `PlasmicPathBreadcrumb.${nodeName}`;
  }
  return func;
}

export const PlasmicPathBreadcrumb = Object.assign(
  // Top-level PlasmicPathBreadcrumb renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    breadcrumbItem: makeNodeComponent("breadcrumbItem"),

    // Metadata about props expected for PlasmicPathBreadcrumb
    internalVariantProps: PlasmicPathBreadcrumb__VariantProps,
    internalArgProps: PlasmicPathBreadcrumb__ArgProps
  }
);

export default PlasmicPathBreadcrumb;
/* prettier-ignore-end */
