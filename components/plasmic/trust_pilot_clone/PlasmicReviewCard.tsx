// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: rJiDAmiPUpjj

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
import ButtonUseful from "../../ButtonUseful"; // plasmic-import: ihmuDpsJi3Cb/component
import ButtonShare from "../../ButtonShare"; // plasmic-import: 7X73wCpmj9Ov/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicReviewCard.module.css"; // plasmic-import: rJiDAmiPUpjj/css

import MapPinIcon from "./icons/PlasmicIcon__MapPin"; // plasmic-import: RF5M_oAGWGQd/icon
import FlagIcon from "./icons/PlasmicIcon__Flag"; // plasmic-import: etOc_NOHPm1U/icon

createPlasmicElementProxy;

export type PlasmicReviewCard__VariantMembers = {
  small: "small";
};
export type PlasmicReviewCard__VariantsArgs = {
  small?: SingleBooleanChoiceArg<"small">;
};
type VariantPropType = keyof PlasmicReviewCard__VariantsArgs;
export const PlasmicReviewCard__VariantProps = new Array<VariantPropType>(
  "small"
);

export type PlasmicReviewCard__ArgsType = {
  username?: string;
  reviewTitle?: string;
  reviewContent?: string;
  dateOfExperience?: string;
};
type ArgPropType = keyof PlasmicReviewCard__ArgsType;
export const PlasmicReviewCard__ArgProps = new Array<ArgPropType>(
  "username",
  "reviewTitle",
  "reviewContent",
  "dateOfExperience"
);

export type PlasmicReviewCard__OverridesType = {
  reviewCard?: p.Flex<"div">;
  reviewCardHeader?: p.Flex<"div">;
  userAvatar?: p.Flex<typeof p.PlasmicImg>;
  freeBox?: p.Flex<"div">;
  username?: p.Flex<"div">;
  basicUserInformation?: p.Flex<"div">;
  numberOfReviews?: p.Flex<"div">;
  userLocation?: p.Flex<"div">;
  location?: p.Flex<"div">;
  reviewCardBody?: p.Flex<"div">;
  reviewTitle?: p.Flex<"div">;
  reviewContent?: p.Flex<"div">;
  rowDateOfExperience?: p.Flex<"div">;
  reviewDateOfExperience?: p.Flex<"div">;
  dateOfExperience?: p.Flex<"div">;
  reviewCardFooter?: p.Flex<"div">;
  tags?: p.Flex<"div">;
  markerUseful?: p.Flex<typeof ButtonUseful>;
  buttonShare?: p.Flex<typeof ButtonShare>;
};

export interface DefaultReviewCardProps {
  username?: string;
  reviewTitle?: string;
  reviewContent?: string;
  dateOfExperience?: string;
  small?: SingleBooleanChoiceArg<"small">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReviewCard__RenderFunc(props: {
  variants: PlasmicReviewCard__VariantsArgs;
  args: PlasmicReviewCard__ArgsType;
  overrides: PlasmicReviewCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          username: "John Doe",
          reviewTitle: "Review Title",
          reviewContent: "This is a review content",
          dateOfExperience: "11-12-1999"
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
        path: "small",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.small
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
      data-plasmic-name={"reviewCard"}
      data-plasmic-override={overrides.reviewCard}
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
        sty.reviewCard,
        { [sty.reviewCardsmall]: hasVariant($state, "small", "small") }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"reviewCardHeader"}
        data-plasmic-override={overrides.reviewCardHeader}
        hasGap={true}
        className={classNames(projectcss.all, sty.reviewCardHeader, {
          [sty.reviewCardHeadersmall]: hasVariant($state, "small", "small")
        })}
      >
        <p.PlasmicImg
          data-plasmic-name={"userAvatar"}
          data-plasmic-override={overrides.userAvatar}
          alt={""}
          className={classNames(sty.userAvatar, {
            [sty.userAvatarsmall]: hasVariant($state, "small", "small")
          })}
          displayHeight={hasVariant($state, "small", "small") ? "32px" : "auto"}
          displayMaxHeight={
            hasVariant($state, "small", "small") ? "32px" : "none"
          }
          displayMaxWidth={
            hasVariant($state, "small", "small") ? "32px" : "100%"
          }
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxsmall]: hasVariant($state, "small", "small")
          })}
        >
          <div
            data-plasmic-name={"username"}
            data-plasmic-override={overrides.username}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.username
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.username;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "username";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <p.Stack
            as={"div"}
            data-plasmic-name={"basicUserInformation"}
            data-plasmic-override={overrides.basicUserInformation}
            hasGap={true}
            className={classNames(projectcss.all, sty.basicUserInformation, {
              [sty.basicUserInformationsmall]: hasVariant(
                $state,
                "small",
                "small"
              )
            })}
          >
            <div
              data-plasmic-name={"numberOfReviews"}
              data-plasmic-override={overrides.numberOfReviews}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.numberOfReviews,
                {
                  [sty.numberOfReviewssmall]: hasVariant(
                    $state,
                    "small",
                    "small"
                  )
                }
              )}
            >
              {"number of reviews"}
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"userLocation"}
              data-plasmic-override={overrides.userLocation}
              hasGap={true}
              className={classNames(projectcss.all, sty.userLocation)}
            >
              <MapPinIcon
                className={classNames(projectcss.all, sty.svg___0LE8F)}
                role={"img"}
              />

              <div
                data-plasmic-name={"location"}
                data-plasmic-override={overrides.location}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.location
                )}
              >
                {"user location"}
              </div>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </p.Stack>
      <div
        data-plasmic-name={"reviewCardBody"}
        data-plasmic-override={overrides.reviewCardBody}
        className={classNames(projectcss.all, sty.reviewCardBody, {
          [sty.reviewCardBodysmall]: hasVariant($state, "small", "small")
        })}
      >
        <div
          data-plasmic-name={"reviewTitle"}
          data-plasmic-override={overrides.reviewTitle}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.reviewTitle,
            { [sty.reviewTitlesmall]: hasVariant($state, "small", "small") }
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.reviewTitle;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "review title";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          data-plasmic-name={"reviewContent"}
          data-plasmic-override={overrides.reviewContent}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.reviewContent,
            { [sty.reviewContentsmall]: hasVariant($state, "small", "small") }
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.reviewContent;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "review content";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <p.Stack
          as={"div"}
          data-plasmic-name={"rowDateOfExperience"}
          data-plasmic-override={overrides.rowDateOfExperience}
          hasGap={true}
          className={classNames(projectcss.all, sty.rowDateOfExperience, {
            [sty.rowDateOfExperiencesmall]: hasVariant($state, "small", "small")
          })}
        >
          <div
            data-plasmic-name={"reviewDateOfExperience"}
            data-plasmic-override={overrides.reviewDateOfExperience}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.reviewDateOfExperience
            )}
          >
            {"Date of experience:"}
          </div>
          <div
            data-plasmic-name={"dateOfExperience"}
            data-plasmic-override={overrides.dateOfExperience}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.dateOfExperience,
              {
                [sty.dateOfExperiencesmall]: hasVariant(
                  $state,
                  "small",
                  "small"
                )
              }
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.dateOfExperience.slice(0, 10);
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "review content";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </p.Stack>
      </div>
      <p.Stack
        as={"div"}
        data-plasmic-name={"reviewCardFooter"}
        data-plasmic-override={overrides.reviewCardFooter}
        hasGap={true}
        className={classNames(projectcss.all, sty.reviewCardFooter, {
          [sty.reviewCardFootersmall]: hasVariant($state, "small", "small")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"tags"}
          data-plasmic-override={overrides.tags}
          hasGap={true}
          className={classNames(projectcss.all, sty.tags)}
        >
          <ButtonUseful
            data-plasmic-name={"markerUseful"}
            data-plasmic-override={overrides.markerUseful}
            className={classNames("__wab_instance", sty.markerUseful)}
          />

          <ButtonShare
            data-plasmic-name={"buttonShare"}
            data-plasmic-override={overrides.buttonShare}
            className={classNames("__wab_instance", sty.buttonShare)}
          />
        </p.Stack>
        <FlagIcon
          className={classNames(projectcss.all, sty.svg__upTjy)}
          role={"img"}
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  reviewCard: [
    "reviewCard",
    "reviewCardHeader",
    "userAvatar",
    "freeBox",
    "username",
    "basicUserInformation",
    "numberOfReviews",
    "userLocation",
    "location",
    "reviewCardBody",
    "reviewTitle",
    "reviewContent",
    "rowDateOfExperience",
    "reviewDateOfExperience",
    "dateOfExperience",
    "reviewCardFooter",
    "tags",
    "markerUseful",
    "buttonShare"
  ],
  reviewCardHeader: [
    "reviewCardHeader",
    "userAvatar",
    "freeBox",
    "username",
    "basicUserInformation",
    "numberOfReviews",
    "userLocation",
    "location"
  ],
  userAvatar: ["userAvatar"],
  freeBox: [
    "freeBox",
    "username",
    "basicUserInformation",
    "numberOfReviews",
    "userLocation",
    "location"
  ],
  username: ["username"],
  basicUserInformation: [
    "basicUserInformation",
    "numberOfReviews",
    "userLocation",
    "location"
  ],
  numberOfReviews: ["numberOfReviews"],
  userLocation: ["userLocation", "location"],
  location: ["location"],
  reviewCardBody: [
    "reviewCardBody",
    "reviewTitle",
    "reviewContent",
    "rowDateOfExperience",
    "reviewDateOfExperience",
    "dateOfExperience"
  ],
  reviewTitle: ["reviewTitle"],
  reviewContent: ["reviewContent"],
  rowDateOfExperience: [
    "rowDateOfExperience",
    "reviewDateOfExperience",
    "dateOfExperience"
  ],
  reviewDateOfExperience: ["reviewDateOfExperience"],
  dateOfExperience: ["dateOfExperience"],
  reviewCardFooter: ["reviewCardFooter", "tags", "markerUseful", "buttonShare"],
  tags: ["tags", "markerUseful", "buttonShare"],
  markerUseful: ["markerUseful"],
  buttonShare: ["buttonShare"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  reviewCard: "div";
  reviewCardHeader: "div";
  userAvatar: typeof p.PlasmicImg;
  freeBox: "div";
  username: "div";
  basicUserInformation: "div";
  numberOfReviews: "div";
  userLocation: "div";
  location: "div";
  reviewCardBody: "div";
  reviewTitle: "div";
  reviewContent: "div";
  rowDateOfExperience: "div";
  reviewDateOfExperience: "div";
  dateOfExperience: "div";
  reviewCardFooter: "div";
  tags: "div";
  markerUseful: typeof ButtonUseful;
  buttonShare: typeof ButtonShare;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReviewCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReviewCard__VariantsArgs;
    args?: PlasmicReviewCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReviewCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReviewCard__ArgsType,
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
          internalArgPropNames: PlasmicReviewCard__ArgProps,
          internalVariantPropNames: PlasmicReviewCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReviewCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "reviewCard") {
    func.displayName = "PlasmicReviewCard";
  } else {
    func.displayName = `PlasmicReviewCard.${nodeName}`;
  }
  return func;
}

export const PlasmicReviewCard = Object.assign(
  // Top-level PlasmicReviewCard renders the root element
  makeNodeComponent("reviewCard"),
  {
    // Helper components rendering sub-elements
    reviewCardHeader: makeNodeComponent("reviewCardHeader"),
    userAvatar: makeNodeComponent("userAvatar"),
    freeBox: makeNodeComponent("freeBox"),
    username: makeNodeComponent("username"),
    basicUserInformation: makeNodeComponent("basicUserInformation"),
    numberOfReviews: makeNodeComponent("numberOfReviews"),
    userLocation: makeNodeComponent("userLocation"),
    location: makeNodeComponent("location"),
    reviewCardBody: makeNodeComponent("reviewCardBody"),
    reviewTitle: makeNodeComponent("reviewTitle"),
    reviewContent: makeNodeComponent("reviewContent"),
    rowDateOfExperience: makeNodeComponent("rowDateOfExperience"),
    reviewDateOfExperience: makeNodeComponent("reviewDateOfExperience"),
    dateOfExperience: makeNodeComponent("dateOfExperience"),
    reviewCardFooter: makeNodeComponent("reviewCardFooter"),
    tags: makeNodeComponent("tags"),
    markerUseful: makeNodeComponent("markerUseful"),
    buttonShare: makeNodeComponent("buttonShare"),

    // Metadata about props expected for PlasmicReviewCard
    internalVariantProps: PlasmicReviewCard__VariantProps,
    internalArgProps: PlasmicReviewCard__ArgProps
  }
);

export default PlasmicReviewCard;
/* prettier-ignore-end */
