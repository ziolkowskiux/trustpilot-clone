// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: M5Xk5pdCttsu

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

import StarRating from "../../StarRating"; // plasmic-import: a7ppcDbGWwYt/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicWriteAReview.module.css"; // plasmic-import: M5Xk5pdCttsu/css

createPlasmicElementProxy;

export type PlasmicWriteAReview__VariantMembers = {};
export type PlasmicWriteAReview__VariantsArgs = {};
type VariantPropType = keyof PlasmicWriteAReview__VariantsArgs;
export const PlasmicWriteAReview__VariantProps = new Array<VariantPropType>();

export type PlasmicWriteAReview__ArgsType = {
  companyId?: string;
};
type ArgPropType = keyof PlasmicWriteAReview__ArgsType;
export const PlasmicWriteAReview__ArgProps = new Array<ArgPropType>(
  "companyId"
);

export type PlasmicWriteAReview__OverridesType = {
  writeAReview?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  usersAvatar?: Flex__<typeof PlasmicImg__>;
  userNameAndLink?: Flex__<"div">;
  text?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  starRating?: Flex__<typeof StarRating>;
};

export interface DefaultWriteAReviewProps {
  companyId?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicWriteAReview__RenderFunc(props: {
  variants: PlasmicWriteAReview__VariantsArgs;
  args: PlasmicWriteAReview__ArgsType;
  overrides: PlasmicWriteAReview__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "starRating.trustScore",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"writeAReview"}
      data-plasmic-override={overrides.writeAReview}
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
        sty.writeAReview
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          data-plasmic-name={"usersAvatar"}
          data-plasmic-override={overrides.usersAvatar}
          alt={""}
          className={classNames(sty.usersAvatar)}
          displayHeight={"40px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"40px"}
          loading={"lazy"}
        />

        <div
          data-plasmic-name={"userNameAndLink"}
          data-plasmic-override={overrides.userNameAndLink}
          className={classNames(projectcss.all, sty.userNameAndLink)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return (
                    currentUser.properties.firstName +
                    " " +
                    currentUser.properties.lastName
                  );
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "User name";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            component={Link}
            href={`/evaluate/${$props["companyId"]}`}
            platform={"nextjs"}
          >
            {"Write a review"}
          </PlasmicLink__>
        </div>
      </Stack__>
      <StarRating
        data-plasmic-name={"starRating"}
        data-plasmic-override={overrides.starRating}
        className={classNames("__wab_instance", sty.starRating)}
        onTrustScoreChange={generateStateOnChangeProp($state, [
          "starRating",
          "trustScore"
        ])}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  writeAReview: [
    "writeAReview",
    "freeBox",
    "usersAvatar",
    "userNameAndLink",
    "text",
    "link",
    "starRating"
  ],
  freeBox: ["freeBox", "usersAvatar", "userNameAndLink", "text", "link"],
  usersAvatar: ["usersAvatar"],
  userNameAndLink: ["userNameAndLink", "text", "link"],
  text: ["text"],
  link: ["link"],
  starRating: ["starRating"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  writeAReview: "div";
  freeBox: "div";
  usersAvatar: typeof PlasmicImg__;
  userNameAndLink: "div";
  text: "div";
  link: "a";
  starRating: typeof StarRating;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWriteAReview__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWriteAReview__VariantsArgs;
    args?: PlasmicWriteAReview__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWriteAReview__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWriteAReview__ArgsType,
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
          internalArgPropNames: PlasmicWriteAReview__ArgProps,
          internalVariantPropNames: PlasmicWriteAReview__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWriteAReview__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "writeAReview") {
    func.displayName = "PlasmicWriteAReview";
  } else {
    func.displayName = `PlasmicWriteAReview.${nodeName}`;
  }
  return func;
}

export const PlasmicWriteAReview = Object.assign(
  // Top-level PlasmicWriteAReview renders the root element
  makeNodeComponent("writeAReview"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    usersAvatar: makeNodeComponent("usersAvatar"),
    userNameAndLink: makeNodeComponent("userNameAndLink"),
    text: makeNodeComponent("text"),
    link: makeNodeComponent("link"),
    starRating: makeNodeComponent("starRating"),

    // Metadata about props expected for PlasmicWriteAReview
    internalVariantProps: PlasmicWriteAReview__VariantProps,
    internalArgProps: PlasmicWriteAReview__ArgProps
  }
);

export default PlasmicWriteAReview;
/* prettier-ignore-end */
