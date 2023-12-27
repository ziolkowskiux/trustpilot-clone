// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: _WBWxb6k6npY

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
import ReviewsSummaryPercentageBar from "../../ReviewsSummaryPercentageBar"; // plasmic-import: _vOq5FSptHrw/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicReviewsSummary.module.css"; // plasmic-import: _WBWxb6k6npY/css

import StarSolidIcon from "./icons/PlasmicIcon__StarSolid"; // plasmic-import: VAVaJQX6lOKe/icon

createPlasmicElementProxy;

export type PlasmicReviewsSummary__VariantMembers = {};
export type PlasmicReviewsSummary__VariantsArgs = {};
type VariantPropType = keyof PlasmicReviewsSummary__VariantsArgs;
export const PlasmicReviewsSummary__VariantProps = new Array<VariantPropType>();

export type PlasmicReviewsSummary__ArgsType = {
  on5StarCheckedChange?: (val: boolean) => void;
  on4StarCheckedChange?: (val: boolean) => void;
  on3StarCheckedChange?: (val: boolean) => void;
  on2StarCheckedChange?: (val: boolean) => void;
  on1StarCheckedChange?: (val: boolean) => void;
  overallRating?: string;
  reviews5Star?: number;
  reviewsTotal?: number;
  reviews4Star?: number;
  reviews3Star?: number;
  reviews2Star?: number;
  reviews1Star?: number;
  filterOnClick?: () => void;
};
type ArgPropType = keyof PlasmicReviewsSummary__ArgsType;
export const PlasmicReviewsSummary__ArgProps = new Array<ArgPropType>(
  "on5StarCheckedChange",
  "on4StarCheckedChange",
  "on3StarCheckedChange",
  "on2StarCheckedChange",
  "on1StarCheckedChange",
  "overallRating",
  "reviews5Star",
  "reviewsTotal",
  "reviews4Star",
  "reviews3Star",
  "reviews2Star",
  "reviews1Star",
  "filterOnClick"
);

export type PlasmicReviewsSummary__OverridesType = {
  reviewsSummary?: p.Flex<"div">;
  header?: p.Flex<"div">;
  calculatedScore?: p.Flex<"div">;
  title?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  headerScore?: p.Flex<"div">;
  reviewsCount?: p.Flex<"div">;
  reviewsBreakdown?: p.Flex<"div">;
  _5StarReviews?: p.Flex<typeof ReviewsSummaryPercentageBar>;
  _4StarReviews?: p.Flex<typeof ReviewsSummaryPercentageBar>;
  _3StarReviews?: p.Flex<typeof ReviewsSummaryPercentageBar>;
  _2StarReviews?: p.Flex<typeof ReviewsSummaryPercentageBar>;
  _1StarReviews?: p.Flex<typeof ReviewsSummaryPercentageBar>;
  footer?: p.Flex<"div">;
  buttonFilter?: p.Flex<typeof AntdButton>;
  buttonsRight?: p.Flex<"div">;
  buttonSort?: p.Flex<typeof AntdButton>;
};

export interface DefaultReviewsSummaryProps {
  on5StarCheckedChange?: (val: boolean) => void;
  on4StarCheckedChange?: (val: boolean) => void;
  on3StarCheckedChange?: (val: boolean) => void;
  on2StarCheckedChange?: (val: boolean) => void;
  on1StarCheckedChange?: (val: boolean) => void;
  overallRating?: string;
  reviews5Star?: number;
  reviewsTotal?: number;
  reviews4Star?: number;
  reviews3Star?: number;
  reviews2Star?: number;
  reviews1Star?: number;
  filterOnClick?: () => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReviewsSummary__RenderFunc(props: {
  variants: PlasmicReviewsSummary__VariantsArgs;
  args: PlasmicReviewsSummary__ArgsType;
  overrides: PlasmicReviewsSummary__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          overallRating: "0.0",
          reviews5Star: 10,
          reviewsTotal: 100,
          reviews4Star: 20,
          reviews3Star: 30,
          reviews2Star: 20,
          reviews1Star: 10
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "_5StarReviews.ratingBarChecked",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onChangeProp: "on5StarCheckedChange"
      },
      {
        path: "_4StarReviews.ratingBarChecked",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onChangeProp: "on4StarCheckedChange"
      },
      {
        path: "_3StarReviews.ratingBarChecked",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onChangeProp: "on3StarCheckedChange"
      },
      {
        path: "_2StarReviews.ratingBarChecked",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onChangeProp: "on2StarCheckedChange"
      },
      {
        path: "_1StarReviews.ratingBarChecked",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onChangeProp: "on1StarCheckedChange"
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"reviewsSummary"}
      data-plasmic-override={overrides.reviewsSummary}
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
        sty.reviewsSummary
      )}
    >
      <div
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames(projectcss.all, sty.header)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"calculatedScore"}
          data-plasmic-override={overrides.calculatedScore}
          hasGap={true}
          className={classNames(projectcss.all, sty.calculatedScore)}
        >
          <div
            data-plasmic-name={"title"}
            data-plasmic-override={overrides.title}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.title
            )}
          >
            {"Reviews"}
          </div>
          <StarSolidIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <div
            data-plasmic-name={"headerScore"}
            data-plasmic-override={overrides.headerScore}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.headerScore
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.overallRating;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "4.9";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </p.Stack>
        <div
          data-plasmic-name={"reviewsCount"}
          data-plasmic-override={overrides.reviewsCount}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.reviewsCount
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.reviewsTotal + " total";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "1000 total";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
      <p.Stack
        as={"div"}
        data-plasmic-name={"reviewsBreakdown"}
        data-plasmic-override={overrides.reviewsBreakdown}
        hasGap={true}
        className={classNames(projectcss.all, sty.reviewsBreakdown)}
      >
        <ReviewsSummaryPercentageBar
          data-plasmic-name={"_5StarReviews"}
          data-plasmic-override={overrides._5StarReviews}
          className={classNames("__wab_instance", sty._5StarReviews)}
          fillColor={"#27ae60"}
          label={"5-star"}
          onRatingBarCheckedChange={p.generateStateOnChangeProp($state, [
            "_5StarReviews",
            "ratingBarChecked"
          ])}
          value={(() => {
            try {
              return Math.floor(
                ($props.reviews5Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          valueNum={(() => {
            try {
              return Math.floor(
                ($props.reviews5Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 10;
              }
              throw e;
            }
          })()}
        />

        <ReviewsSummaryPercentageBar
          data-plasmic-name={"_4StarReviews"}
          data-plasmic-override={overrides._4StarReviews}
          className={classNames("__wab_instance", sty._4StarReviews)}
          label={"4-star"}
          onRatingBarCheckedChange={p.generateStateOnChangeProp($state, [
            "_4StarReviews",
            "ratingBarChecked"
          ])}
          value={(() => {
            try {
              return Math.floor(
                ($props.reviews4Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          valueNum={(() => {
            try {
              return Math.floor(
                ($props.reviews4Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 10;
              }
              throw e;
            }
          })()}
        />

        <ReviewsSummaryPercentageBar
          data-plasmic-name={"_3StarReviews"}
          data-plasmic-override={overrides._3StarReviews}
          className={classNames("__wab_instance", sty._3StarReviews)}
          label={"3-star"}
          onRatingBarCheckedChange={p.generateStateOnChangeProp($state, [
            "_3StarReviews",
            "ratingBarChecked"
          ])}
          value={(() => {
            try {
              return Math.floor(
                ($props.reviews3Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          valueNum={(() => {
            try {
              return Math.floor(
                ($props.reviews3Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 10;
              }
              throw e;
            }
          })()}
        />

        <ReviewsSummaryPercentageBar
          data-plasmic-name={"_2StarReviews"}
          data-plasmic-override={overrides._2StarReviews}
          className={classNames("__wab_instance", sty._2StarReviews)}
          label={"2-star"}
          onRatingBarCheckedChange={p.generateStateOnChangeProp($state, [
            "_2StarReviews",
            "ratingBarChecked"
          ])}
          value={(() => {
            try {
              return Math.floor(
                ($props.reviews2Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          valueNum={(() => {
            try {
              return Math.floor(
                ($props.reviews2Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 10;
              }
              throw e;
            }
          })()}
        />

        <ReviewsSummaryPercentageBar
          data-plasmic-name={"_1StarReviews"}
          data-plasmic-override={overrides._1StarReviews}
          className={classNames("__wab_instance", sty._1StarReviews)}
          label={"1-star"}
          onRatingBarCheckedChange={p.generateStateOnChangeProp($state, [
            "_1StarReviews",
            "ratingBarChecked"
          ])}
          value={(() => {
            try {
              return Math.floor(
                ($props.reviews1Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          valueNum={(() => {
            try {
              return Math.floor(
                ($props.reviews1Star / $props.reviewsTotal) * 100
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 10;
              }
              throw e;
            }
          })()}
        />
      </p.Stack>
      <div
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames(projectcss.all, sty.footer)}
      >
        <AntdButton
          data-plasmic-name={"buttonFilter"}
          data-plasmic-override={overrides.buttonFilter}
          className={classNames("__wab_instance", sty.buttonFilter)}
          ghost={false}
          onClick={args.filterOnClick}
          size={"large"}
          type={"default"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___4Ud
            )}
          >
            {"Filter"}
          </div>
        </AntdButton>
        <p.Stack
          as={"div"}
          data-plasmic-name={"buttonsRight"}
          data-plasmic-override={overrides.buttonsRight}
          hasGap={true}
          className={classNames(projectcss.all, sty.buttonsRight)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ciO9Z
            )}
          >
            {"Sort:"}
          </div>
          <AntdButton
            data-plasmic-name={"buttonSort"}
            data-plasmic-override={overrides.buttonSort}
            className={classNames("__wab_instance", sty.buttonSort)}
            size={"large"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__l0U4X
              )}
            >
              {"Most relevant"}
            </div>
          </AntdButton>
        </p.Stack>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  reviewsSummary: [
    "reviewsSummary",
    "header",
    "calculatedScore",
    "title",
    "svg",
    "headerScore",
    "reviewsCount",
    "reviewsBreakdown",
    "_5StarReviews",
    "_4StarReviews",
    "_3StarReviews",
    "_2StarReviews",
    "_1StarReviews",
    "footer",
    "buttonFilter",
    "buttonsRight",
    "buttonSort"
  ],
  header: [
    "header",
    "calculatedScore",
    "title",
    "svg",
    "headerScore",
    "reviewsCount"
  ],
  calculatedScore: ["calculatedScore", "title", "svg", "headerScore"],
  title: ["title"],
  svg: ["svg"],
  headerScore: ["headerScore"],
  reviewsCount: ["reviewsCount"],
  reviewsBreakdown: [
    "reviewsBreakdown",
    "_5StarReviews",
    "_4StarReviews",
    "_3StarReviews",
    "_2StarReviews",
    "_1StarReviews"
  ],
  _5StarReviews: ["_5StarReviews"],
  _4StarReviews: ["_4StarReviews"],
  _3StarReviews: ["_3StarReviews"],
  _2StarReviews: ["_2StarReviews"],
  _1StarReviews: ["_1StarReviews"],
  footer: ["footer", "buttonFilter", "buttonsRight", "buttonSort"],
  buttonFilter: ["buttonFilter"],
  buttonsRight: ["buttonsRight", "buttonSort"],
  buttonSort: ["buttonSort"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  reviewsSummary: "div";
  header: "div";
  calculatedScore: "div";
  title: "div";
  svg: "svg";
  headerScore: "div";
  reviewsCount: "div";
  reviewsBreakdown: "div";
  _5StarReviews: typeof ReviewsSummaryPercentageBar;
  _4StarReviews: typeof ReviewsSummaryPercentageBar;
  _3StarReviews: typeof ReviewsSummaryPercentageBar;
  _2StarReviews: typeof ReviewsSummaryPercentageBar;
  _1StarReviews: typeof ReviewsSummaryPercentageBar;
  footer: "div";
  buttonFilter: typeof AntdButton;
  buttonsRight: "div";
  buttonSort: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReviewsSummary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReviewsSummary__VariantsArgs;
    args?: PlasmicReviewsSummary__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReviewsSummary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReviewsSummary__ArgsType,
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
          internalArgPropNames: PlasmicReviewsSummary__ArgProps,
          internalVariantPropNames: PlasmicReviewsSummary__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReviewsSummary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "reviewsSummary") {
    func.displayName = "PlasmicReviewsSummary";
  } else {
    func.displayName = `PlasmicReviewsSummary.${nodeName}`;
  }
  return func;
}

export const PlasmicReviewsSummary = Object.assign(
  // Top-level PlasmicReviewsSummary renders the root element
  makeNodeComponent("reviewsSummary"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    calculatedScore: makeNodeComponent("calculatedScore"),
    title: makeNodeComponent("title"),
    svg: makeNodeComponent("svg"),
    headerScore: makeNodeComponent("headerScore"),
    reviewsCount: makeNodeComponent("reviewsCount"),
    reviewsBreakdown: makeNodeComponent("reviewsBreakdown"),
    _5StarReviews: makeNodeComponent("_5StarReviews"),
    _4StarReviews: makeNodeComponent("_4StarReviews"),
    _3StarReviews: makeNodeComponent("_3StarReviews"),
    _2StarReviews: makeNodeComponent("_2StarReviews"),
    _1StarReviews: makeNodeComponent("_1StarReviews"),
    footer: makeNodeComponent("footer"),
    buttonFilter: makeNodeComponent("buttonFilter"),
    buttonsRight: makeNodeComponent("buttonsRight"),
    buttonSort: makeNodeComponent("buttonSort"),

    // Metadata about props expected for PlasmicReviewsSummary
    internalVariantProps: PlasmicReviewsSummary__VariantProps,
    internalArgProps: PlasmicReviewsSummary__ArgProps
  }
);

export default PlasmicReviewsSummary;
/* prettier-ignore-end */
