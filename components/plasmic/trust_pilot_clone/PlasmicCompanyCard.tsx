// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: pRzZD4AnBwq

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import CompanyCardContactInfo from "../../CompanyCardContactInfo"; // plasmic-import: u5SO6SlWaMIn/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import ReviewCard from "../../ReviewCard"; // plasmic-import: rJiDAmiPUpjj/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicCompanyCard.module.css"; // plasmic-import: pRzZD4AnBwq/css

createPlasmicElementProxy;

export type PlasmicCompanyCard__VariantMembers = {
  reviewsVisible: "reviewsVisible";
};
export type PlasmicCompanyCard__VariantsArgs = {
  reviewsVisible?: SingleBooleanChoiceArg<"reviewsVisible">;
};
type VariantPropType = keyof PlasmicCompanyCard__VariantsArgs;
export const PlasmicCompanyCard__VariantProps = new Array<VariantPropType>(
  "reviewsVisible"
);

export type PlasmicCompanyCard__ArgsType = {
  companyLogo?: React.ComponentProps<typeof PlasmicImg__>["src"];
  companyName?: string;
  trustScore?: string;
  reviewsCount?: number;
  location?: string;
  companyWebsite?: string;
  companyEmail?: string;
  companyPhone?: string;
  companyId?: string;
  latestReviews?: any;
};
type ArgPropType = keyof PlasmicCompanyCard__ArgsType;
export const PlasmicCompanyCard__ArgProps = new Array<ArgPropType>(
  "companyLogo",
  "companyName",
  "trustScore",
  "reviewsCount",
  "location",
  "companyWebsite",
  "companyEmail",
  "companyPhone",
  "companyId",
  "latestReviews"
);

export type PlasmicCompanyCard__OverridesType = {
  companyCard?: Flex__<"div">;
  basicInformation?: Flex__<"a"> & Partial<LinkProps>;
  companyLogo?: Flex__<typeof PlasmicImg__>;
  companyName?: Flex__<"h5">;
  trustScore?: Flex__<"p">;
  reviewsCount?: Flex__<"p">;
  location?: Flex__<"p">;
  label?: Flex__<"label">;
  footer?: Flex__<"div">;
  companyCardContactInfo?: Flex__<typeof CompanyCardContactInfo>;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
  reviews?: Flex__<"div">;
  reviewCard?: Flex__<typeof ReviewCard>;
};

export interface DefaultCompanyCardProps {
  companyLogo?: React.ComponentProps<typeof PlasmicImg__>["src"];
  companyName?: string;
  trustScore?: string;
  reviewsCount?: number;
  location?: string;
  companyWebsite?: string;
  companyEmail?: string;
  companyPhone?: string;
  companyId?: string;
  latestReviews?: any;
  reviewsVisible?: SingleBooleanChoiceArg<"reviewsVisible">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCompanyCard__RenderFunc(props: {
  variants: PlasmicCompanyCard__VariantsArgs;
  args: PlasmicCompanyCard__ArgsType;
  overrides: PlasmicCompanyCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          companyName: "Company name",
          trustScore: "0.00",
          reviewsCount: 0,
          location: "2020 Happy Street, 99207 Spokane United States",
          companyWebsite: "https://www.google.pl",
          companyEmail: "testeruser@o2.pl",
          companyId: "3713b938-f7b8-4907-8af8-6eae6e498d2f",
          latestReviews: [
            {
              name: "Mary Doe",
              review: "I am super happy with the service",
              date: "Yesterday"
            },
            {
              name: "Mary Doe 2",
              review: "2 I am super happy with the service",
              date: "Yesterday"
            },
            {
              name: "Mary Doe 3",
              review: "3 I am super happy with the service",
              date: "Yesterday"
            },
            {
              name: "Mary Doe 4",
              review: "4 I am super happy with the service",
              date: "Yesterday"
            },
            {
              name: "Mary Doe 5",
              review: "5 I am super happy with the service",
              date: "Yesterday"
            }
          ]
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
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "reviewsVisible",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.reviewsVisible
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  return (
    <div
      data-plasmic-name={"companyCard"}
      data-plasmic-override={overrides.companyCard}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.companyCard
      )}
    >
      <Stack__
        as={PlasmicLink__}
        data-plasmic-name={"basicInformation"}
        data-plasmic-override={overrides.basicInformation}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.a,
          sty.basicInformation
        )}
        component={Link}
        onClick={async event => {
          const $steps = {};

          $steps["goToCompanyReviews"] = true
            ? (() => {
                const actionArgs = {
                  destination: `/review/${(() => {
                    try {
                      return $props.companyId;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}`
                };
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    __nextRouter?.push(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToCompanyReviews"] != null &&
            typeof $steps["goToCompanyReviews"] === "object" &&
            typeof $steps["goToCompanyReviews"].then === "function"
          ) {
            $steps["goToCompanyReviews"] = await $steps["goToCompanyReviews"];
          }
        }}
        platform={"nextjs"}
      >
        <PlasmicImg__
          data-plasmic-name={"companyLogo"}
          data-plasmic-override={overrides.companyLogo}
          alt={""}
          className={classNames(sty.companyLogo)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={args.companyLogo}
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zzX70, {
            [sty.freeBoxreviewsVisible__zzX70EOoyo]: hasVariant(
              $state,
              "reviewsVisible",
              "reviewsVisible"
            )
          })}
        >
          <h5
            data-plasmic-name={"companyName"}
            data-plasmic-override={overrides.companyName}
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.companyName
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.companyName;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Company name";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </h5>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__c2Gs)}
          >
            <p
              data-plasmic-name={"trustScore"}
              data-plasmic-override={overrides.trustScore}
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.trustScore
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return "TrustScore " + $props.trustScore;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "TrustScore";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </p>
            <p
              data-plasmic-name={"reviewsCount"}
              data-plasmic-override={overrides.reviewsCount}
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.reviewsCount
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.reviewsCount + " reviews";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Reviews count";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </p>
          </Stack__>
          <p
            data-plasmic-name={"location"}
            data-plasmic-override={overrides.location}
            className={classNames(
              projectcss.all,
              projectcss.p,
              projectcss.__wab_text,
              sty.location
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.location;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Location";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </p>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__dRgSp)}>
          <label
            data-plasmic-name={"label"}
            data-plasmic-override={overrides.label}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.label
            )}
          >
            {"tag name"}
          </label>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        hasGap={true}
        className={classNames(projectcss.all, sty.footer, {
          [sty.footerreviewsVisible]: hasVariant(
            $state,
            "reviewsVisible",
            "reviewsVisible"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__bfX, {
            [sty.freeBoxreviewsVisible__bfXeOoyo]: hasVariant(
              $state,
              "reviewsVisible",
              "reviewsVisible"
            )
          })}
        >
          <CompanyCardContactInfo
            data-plasmic-name={"companyCardContactInfo"}
            data-plasmic-override={overrides.companyCardContactInfo}
            className={classNames(
              "__wab_instance",
              sty.companyCardContactInfo,
              {
                [sty.companyCardContactInforeviewsVisible]: hasVariant(
                  $state,
                  "reviewsVisible",
                  "reviewsVisible"
                )
              }
            )}
            companyAddress={args.location}
            companyEmail={args.companyEmail}
            companyPhone={args.companyPhone}
            companyWebsite={args.companyWebsite}
          />

          <AntdButton
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button, {
              [sty.buttonreviewsVisible]: hasVariant(
                $state,
                "reviewsVisible",
                "reviewsVisible"
              )
            })}
            onClick={async () => {
              const $steps = {};

              $steps["updateReviewsVisible"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "reviewsVisible",
                      operation: 2,
                      value: "reviewsVisible"
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateReviewsVisible"] != null &&
                typeof $steps["updateReviewsVisible"] === "object" &&
                typeof $steps["updateReviewsVisible"].then === "function"
              ) {
                $steps["updateReviewsVisible"] = await $steps[
                  "updateReviewsVisible"
                ];
              }

              $steps["getLatestReviews"] =
                $state.reviewsVisible == false
                  ? (() => {
                      const actionArgs = {
                        dataOp: {
                          sourceId: "czoZTBwvV8zZJLNVxj78Sv",
                          opId: "d6807c17-a863-467e-8fa6-fafcbc99f46e",
                          userArgs: {
                            query: [$props.companyId]
                          },
                          cacheKey: null,
                          invalidatedKeys: null,
                          roleId: null
                        }
                      };
                      return (async ({ dataOp, continueOnError }) => {
                        try {
                          const response = await executePlasmicDataOp(dataOp, {
                            userAuthToken: dataSourcesCtx?.userAuthToken,
                            user: dataSourcesCtx?.user
                          });
                          await plasmicInvalidate(dataOp.invalidatedKeys);
                          return response;
                        } catch (e) {
                          if (!continueOnError) {
                            throw e;
                          }
                          return e;
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
              if (
                $steps["getLatestReviews"] != null &&
                typeof $steps["getLatestReviews"] === "object" &&
                typeof $steps["getLatestReviews"].then === "function"
              ) {
                $steps["getLatestReviews"] = await $steps["getLatestReviews"];
              }
            }}
            size={"small"}
            type={"text"}
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
              {"Latest Reviews"}
            </div>
          </AntdButton>
        </div>
        <Stack__
          as={"div"}
          data-plasmic-name={"reviews"}
          data-plasmic-override={overrides.reviews}
          hasGap={true}
          className={classNames(projectcss.all, sty.reviews, {
            [sty.reviewsreviewsVisible]: hasVariant(
              $state,
              "reviewsVisible",
              "reviewsVisible"
            )
          })}
        >
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $props.latestReviews;
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
              <ReviewCard
                data-plasmic-name={"reviewCard"}
                data-plasmic-override={overrides.reviewCard}
                className={classNames("__wab_instance", sty.reviewCard, {
                  [sty.reviewCardreviewsVisible]: hasVariant(
                    $state,
                    "reviewsVisible",
                    "reviewsVisible"
                  )
                })}
                key={currentIndex}
                reviewContent={(() => {
                  try {
                    return currentItem.review;
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
                reviewTitle={(() => {
                  try {
                    return undefined;
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
                small={true}
                username={(() => {
                  try {
                    return currentItem.name;
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
              />
            );
          })}
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  companyCard: [
    "companyCard",
    "basicInformation",
    "companyLogo",
    "companyName",
    "trustScore",
    "reviewsCount",
    "location",
    "label",
    "footer",
    "companyCardContactInfo",
    "button",
    "text",
    "reviews",
    "reviewCard"
  ],
  basicInformation: [
    "basicInformation",
    "companyLogo",
    "companyName",
    "trustScore",
    "reviewsCount",
    "location",
    "label"
  ],
  companyLogo: ["companyLogo"],
  companyName: ["companyName"],
  trustScore: ["trustScore"],
  reviewsCount: ["reviewsCount"],
  location: ["location"],
  label: ["label"],
  footer: [
    "footer",
    "companyCardContactInfo",
    "button",
    "text",
    "reviews",
    "reviewCard"
  ],
  companyCardContactInfo: ["companyCardContactInfo"],
  button: ["button", "text"],
  text: ["text"],
  reviews: ["reviews", "reviewCard"],
  reviewCard: ["reviewCard"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  companyCard: "div";
  basicInformation: "a";
  companyLogo: typeof PlasmicImg__;
  companyName: "h5";
  trustScore: "p";
  reviewsCount: "p";
  location: "p";
  label: "label";
  footer: "div";
  companyCardContactInfo: typeof CompanyCardContactInfo;
  button: typeof AntdButton;
  text: "div";
  reviews: "div";
  reviewCard: typeof ReviewCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompanyCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompanyCard__VariantsArgs;
    args?: PlasmicCompanyCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCompanyCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCompanyCard__ArgsType,
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
          internalArgPropNames: PlasmicCompanyCard__ArgProps,
          internalVariantPropNames: PlasmicCompanyCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCompanyCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "companyCard") {
    func.displayName = "PlasmicCompanyCard";
  } else {
    func.displayName = `PlasmicCompanyCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCompanyCard = Object.assign(
  // Top-level PlasmicCompanyCard renders the root element
  makeNodeComponent("companyCard"),
  {
    // Helper components rendering sub-elements
    basicInformation: makeNodeComponent("basicInformation"),
    companyLogo: makeNodeComponent("companyLogo"),
    companyName: makeNodeComponent("companyName"),
    trustScore: makeNodeComponent("trustScore"),
    reviewsCount: makeNodeComponent("reviewsCount"),
    location: makeNodeComponent("location"),
    label: makeNodeComponent("label"),
    footer: makeNodeComponent("footer"),
    companyCardContactInfo: makeNodeComponent("companyCardContactInfo"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    reviews: makeNodeComponent("reviews"),
    reviewCard: makeNodeComponent("reviewCard"),

    // Metadata about props expected for PlasmicCompanyCard
    internalVariantProps: PlasmicCompanyCard__VariantProps,
    internalArgProps: PlasmicCompanyCard__ArgProps
  }
);

export default PlasmicCompanyCard;
/* prettier-ignore-end */
