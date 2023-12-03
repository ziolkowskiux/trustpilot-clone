// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: HZaKTNznB8MJ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

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
import MainNavigation from "../../MainNavigation"; // plasmic-import: yAd4Bu3qCA/component
import WebsiteAddressCard from "../../WebsiteAddressCard"; // plasmic-import: hWfONOgVJn4L/component
import WriteAReview from "../../WriteAReview"; // plasmic-import: M5Xk5pdCttsu/component
import ReviewsSummary from "../../ReviewsSummary"; // plasmic-import: _WBWxb6k6npY/component
import ReviewCard from "../../ReviewCard"; // plasmic-import: rJiDAmiPUpjj/component
import Card from "../../Card"; // plasmic-import: I7kjAJ4INnHj/component
import CompanyActivityTags from "../../CompanyActivityTags"; // plasmic-import: 1RfhwdtRup_T/component
import Footer from "../../Footer"; // plasmic-import: F_FUewQemGz/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicCompanyReviews.module.css"; // plasmic-import: HZaKTNznB8MJ/css

createPlasmicElementProxy;

export type PlasmicCompanyReviews__VariantMembers = {};
export type PlasmicCompanyReviews__VariantsArgs = {};
type VariantPropType = keyof PlasmicCompanyReviews__VariantsArgs;
export const PlasmicCompanyReviews__VariantProps = new Array<VariantPropType>();

export type PlasmicCompanyReviews__ArgsType = {};
type ArgPropType = keyof PlasmicCompanyReviews__ArgsType;
export const PlasmicCompanyReviews__ArgProps = new Array<ArgPropType>();

export type PlasmicCompanyReviews__OverridesType = {
  root?: p.Flex<"div">;
  mainNavigation?: p.Flex<typeof MainNavigation>;
  content?: p.Flex<"div">;
  header?: p.Flex<"div">;
  breadcrumb?: p.Flex<"div">;
  basicInfo?: p.Flex<"div">;
  companyLogo?: p.Flex<typeof p.PlasmicImg>;
  companyName?: p.Flex<"div">;
  reviews?: p.Flex<"div">;
  reviews2?: p.Flex<"div">;
  averageRating?: p.Flex<"div">;
  trustScore?: p.Flex<"div">;
  websiteAddressCard?: p.Flex<typeof WebsiteAddressCard>;
  writeAReview?: p.Flex<typeof WriteAReview>;
  reviewsSummary?: p.Flex<typeof ReviewsSummary>;
  reviewsList?: p.Flex<"div">;
  reviewCard?: p.Flex<typeof ReviewCard>;
  companyActivity?: p.Flex<typeof Card>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  companyActivityTags?: p.Flex<typeof CompanyActivityTags>;
  companyInfo?: p.Flex<typeof Card>;
  trustpilotExperience?: p.Flex<typeof Card>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultCompanyReviewsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCompanyReviews__RenderFunc(props: {
  variants: PlasmicCompanyReviews__VariantsArgs;
  args: PlasmicCompanyReviews__ArgsType;
  overrides: PlasmicCompanyReviews__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    fetchReviews: usePlasmicDataOp(() => {
      return {
        sourceId: "czoZTBwvV8zZJLNVxj78Sv",
        opId: "96a75edc-43d2-4f8b-9fd2-37df4989f325",
        userArgs: {
          filters: [$ctx.params.company_id]
        },
        cacheKey: `plasmic.$.96a75edc-43d2-4f8b-9fd2-37df4989f325.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    fetchCompany: usePlasmicDataOp(() => {
      return {
        sourceId: "czoZTBwvV8zZJLNVxj78Sv",
        opId: "01dbb939-6ba7-4ada-b18d-fed02d430db0",
        userArgs: {
          keys: [$ctx.params.company_id]
        },
        cacheKey: `plasmic.$.01dbb939-6ba7-4ada-b18d-fed02d430db0.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicCompanyReviews.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicCompanyReviews.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicCompanyReviews.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
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
            sty.root
          )}
        >
          <MainNavigation
            data-plasmic-name={"mainNavigation"}
            data-plasmic-override={overrides.mainNavigation}
            className={classNames("__wab_instance", sty.mainNavigation)}
          />

          <div
            data-plasmic-name={"content"}
            data-plasmic-override={overrides.content}
            className={classNames(projectcss.all, sty.content)}
          >
            <div
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames(projectcss.all, sty.header)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__umnrs)}
              >
                <div
                  data-plasmic-name={"breadcrumb"}
                  data-plasmic-override={overrides.breadcrumb}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.breadcrumb
                  )}
                >
                  {"breadcrumb"}
                </div>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"basicInfo"}
                  data-plasmic-override={overrides.basicInfo}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.basicInfo)}
                >
                  <div
                    className={classNames(projectcss.all, sty.columns__mweP)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__aoNkV)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__d9OIg
                        )}
                      >
                        <p.PlasmicImg
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
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__g2HBy
                          )}
                        >
                          <div
                            data-plasmic-name={"companyName"}
                            data-plasmic-override={overrides.companyName}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.companyName
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $queries.fetchCompany.data[0].name;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "Company name";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__bzW85
                            )}
                          >
                            <div
                              data-plasmic-name={"reviews"}
                              data-plasmic-override={overrides.reviews}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.reviews
                              )}
                            >
                              {"reviews"}
                            </div>
                            <div
                              data-plasmic-name={"reviews2"}
                              data-plasmic-override={overrides.reviews2}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.reviews2
                              )}
                            >
                              {"\u2022"}
                            </div>
                            <div
                              data-plasmic-name={"averageRating"}
                              data-plasmic-override={overrides.averageRating}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.averageRating
                              )}
                            >
                              {"average rating"}
                            </div>
                          </p.Stack>
                          <div
                            data-plasmic-name={"trustScore"}
                            data-plasmic-override={overrides.trustScore}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.trustScore
                            )}
                          >
                            {"trustScore"}
                          </div>
                        </div>
                      </p.Stack>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__qmDeR)}
                    >
                      {(() => {
                        try {
                          return $queries.fetchCompany.data[0].website_url
                            ? true
                            : false;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return true;
                          }
                          throw e;
                        }
                      })() ? (
                        <WebsiteAddressCard
                          data-plasmic-name={"websiteAddressCard"}
                          data-plasmic-override={overrides.websiteAddressCard}
                          className={classNames(
                            "__wab_instance",
                            sty.websiteAddressCard
                          )}
                          companyWebsite={(() => {
                            try {
                              return $queries.fetchCompany.data[0].website_url;
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
                      ) : null}
                    </div>
                  </div>
                </p.Stack>
              </p.Stack>
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__eZj0D)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__g5NqW)}
              >
                {(() => {
                  try {
                    return (currentUser?.roleIds ?? []).includes(
                      "4d9b94b7-5067-41d5-bb18-b0b97eba2313"
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return false;
                    }
                    throw e;
                  }
                })() ? (
                  <WriteAReview
                    data-plasmic-name={"writeAReview"}
                    data-plasmic-override={overrides.writeAReview}
                    className={classNames("__wab_instance", sty.writeAReview)}
                    companyId={(() => {
                      try {
                        return $queries.fetchCompany.data[0].company_id;
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
                ) : null}
                <ReviewsSummary
                  data-plasmic-name={"reviewsSummary"}
                  data-plasmic-override={overrides.reviewsSummary}
                  className={classNames("__wab_instance", sty.reviewsSummary)}
                  overallRating={(() => {
                    try {
                      return $queries.fetchCompany.data[0].rating;
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

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"reviewsList"}
                  data-plasmic-override={overrides.reviewsList}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.reviewsList)}
                >
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $queries.fetchReviews.data;
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
                        className={classNames("__wab_instance", sty.reviewCard)}
                        dateOfExperience={(() => {
                          try {
                            return currentItem.created_at;
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
                            return currentItem.title;
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
                        username={(() => {
                          try {
                            return currentItem.user;
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
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__kctQ5)}
              >
                <Card
                  data-plasmic-name={"companyActivity"}
                  data-plasmic-override={overrides.companyActivity}
                  className={classNames("__wab_instance", sty.companyActivity)}
                  title={
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__glx7E)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__epiV7
                        )}
                      >
                        {"Company activity"}
                      </div>
                      <p.PlasmicLink
                        data-plasmic-name={"link"}
                        data-plasmic-override={overrides.link}
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link
                        )}
                        component={Link}
                        href={"https://www.plasmic.app/"}
                        platform={"nextjs"}
                      >
                        {"See all"}
                      </p.PlasmicLink>
                    </p.Stack>
                  }
                >
                  <CompanyActivityTags
                    data-plasmic-name={"companyActivityTags"}
                    data-plasmic-override={overrides.companyActivityTags}
                    className={classNames(
                      "__wab_instance",
                      sty.companyActivityTags
                    )}
                  />
                </Card>
                <Card
                  data-plasmic-name={"companyInfo"}
                  data-plasmic-override={overrides.companyInfo}
                  className={classNames("__wab_instance", sty.companyInfo)}
                  title={
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___4SENy
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tO6UZ
                        )}
                      >
                        {"About"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__xlZaf
                        )}
                      >
                        {"Information written by the company"}
                      </div>
                    </p.Stack>
                  }
                />

                <Card
                  data-plasmic-name={"trustpilotExperience"}
                  data-plasmic-override={overrides.trustpilotExperience}
                  className={classNames(
                    "__wab_instance",
                    sty.trustpilotExperience
                  )}
                  title={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bw4Vy
                      )}
                    >
                      {"The Trustpilot Experience"}
                    </div>
                  }
                />
              </p.Stack>
            </p.Stack>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "mainNavigation",
    "content",
    "header",
    "breadcrumb",
    "basicInfo",
    "companyLogo",
    "companyName",
    "reviews",
    "reviews2",
    "averageRating",
    "trustScore",
    "websiteAddressCard",
    "writeAReview",
    "reviewsSummary",
    "reviewsList",
    "reviewCard",
    "companyActivity",
    "link",
    "companyActivityTags",
    "companyInfo",
    "trustpilotExperience",
    "footer"
  ],
  mainNavigation: ["mainNavigation"],
  content: [
    "content",
    "header",
    "breadcrumb",
    "basicInfo",
    "companyLogo",
    "companyName",
    "reviews",
    "reviews2",
    "averageRating",
    "trustScore",
    "websiteAddressCard",
    "writeAReview",
    "reviewsSummary",
    "reviewsList",
    "reviewCard",
    "companyActivity",
    "link",
    "companyActivityTags",
    "companyInfo",
    "trustpilotExperience"
  ],
  header: [
    "header",
    "breadcrumb",
    "basicInfo",
    "companyLogo",
    "companyName",
    "reviews",
    "reviews2",
    "averageRating",
    "trustScore",
    "websiteAddressCard"
  ],
  breadcrumb: ["breadcrumb"],
  basicInfo: [
    "basicInfo",
    "companyLogo",
    "companyName",
    "reviews",
    "reviews2",
    "averageRating",
    "trustScore",
    "websiteAddressCard"
  ],
  companyLogo: ["companyLogo"],
  companyName: ["companyName"],
  reviews: ["reviews"],
  reviews2: ["reviews2"],
  averageRating: ["averageRating"],
  trustScore: ["trustScore"],
  websiteAddressCard: ["websiteAddressCard"],
  writeAReview: ["writeAReview"],
  reviewsSummary: ["reviewsSummary"],
  reviewsList: ["reviewsList", "reviewCard"],
  reviewCard: ["reviewCard"],
  companyActivity: ["companyActivity", "link", "companyActivityTags"],
  link: ["link"],
  companyActivityTags: ["companyActivityTags"],
  companyInfo: ["companyInfo"],
  trustpilotExperience: ["trustpilotExperience"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  mainNavigation: typeof MainNavigation;
  content: "div";
  header: "div";
  breadcrumb: "div";
  basicInfo: "div";
  companyLogo: typeof p.PlasmicImg;
  companyName: "div";
  reviews: "div";
  reviews2: "div";
  averageRating: "div";
  trustScore: "div";
  websiteAddressCard: typeof WebsiteAddressCard;
  writeAReview: typeof WriteAReview;
  reviewsSummary: typeof ReviewsSummary;
  reviewsList: "div";
  reviewCard: typeof ReviewCard;
  companyActivity: typeof Card;
  link: "a";
  companyActivityTags: typeof CompanyActivityTags;
  companyInfo: typeof Card;
  trustpilotExperience: typeof Card;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompanyReviews__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompanyReviews__VariantsArgs;
    args?: PlasmicCompanyReviews__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCompanyReviews__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCompanyReviews__ArgsType,
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
          internalArgPropNames: PlasmicCompanyReviews__ArgProps,
          internalVariantPropNames: PlasmicCompanyReviews__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCompanyReviews__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompanyReviews";
  } else {
    func.displayName = `PlasmicCompanyReviews.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"uzL7MLDrNkZiDQaUBve1wf"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "uzL7MLDrNkZiDQaUBve1wf"
    });

    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicCompanyReviews = Object.assign(
  // Top-level PlasmicCompanyReviews renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    mainNavigation: makeNodeComponent("mainNavigation"),
    content: makeNodeComponent("content"),
    header: makeNodeComponent("header"),
    breadcrumb: makeNodeComponent("breadcrumb"),
    basicInfo: makeNodeComponent("basicInfo"),
    companyLogo: makeNodeComponent("companyLogo"),
    companyName: makeNodeComponent("companyName"),
    reviews: makeNodeComponent("reviews"),
    reviews2: makeNodeComponent("reviews2"),
    averageRating: makeNodeComponent("averageRating"),
    trustScore: makeNodeComponent("trustScore"),
    websiteAddressCard: makeNodeComponent("websiteAddressCard"),
    writeAReview: makeNodeComponent("writeAReview"),
    reviewsSummary: makeNodeComponent("reviewsSummary"),
    reviewsList: makeNodeComponent("reviewsList"),
    reviewCard: makeNodeComponent("reviewCard"),
    companyActivity: makeNodeComponent("companyActivity"),
    link: makeNodeComponent("link"),
    companyActivityTags: makeNodeComponent("companyActivityTags"),
    companyInfo: makeNodeComponent("companyInfo"),
    trustpilotExperience: makeNodeComponent("trustpilotExperience"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicCompanyReviews
    internalVariantProps: PlasmicCompanyReviews__VariantProps,
    internalArgProps: PlasmicCompanyReviews__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Company Reviews",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCompanyReviews;
/* prettier-ignore-end */
