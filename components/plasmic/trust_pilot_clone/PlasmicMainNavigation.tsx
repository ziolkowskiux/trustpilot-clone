// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: yAd4Bu3qCA

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

import Logo from "../../Logo"; // plasmic-import: xGLYzs7veW/component
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import NavTab from "../../NavTab"; // plasmic-import: DjlqHaVj5E/component
import NavTabButton from "../../NavTabButton"; // plasmic-import: jyMP_1m1nW/component
import NavProfileDropdown from "../../NavProfileDropdown"; // plasmic-import: Q2OGBST8lp/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import { useScreenVariants as useScreenVariantsstcidH67POnn4E } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: StcidH67pONN4e/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicMainNavigation.module.css"; // plasmic-import: yAd4Bu3qCA/css

import MagnifyingGlassIcon from "./icons/PlasmicIcon__MagnifyingGlass"; // plasmic-import: k_4X76Kvfh/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: RHNGiP3mP8/icon
import XIcon from "./icons/PlasmicIcon__X"; // plasmic-import: GLcyIp_DFO/icon

createPlasmicElementProxy;

export type PlasmicMainNavigation__VariantMembers = {};
export type PlasmicMainNavigation__VariantsArgs = {};
type VariantPropType = keyof PlasmicMainNavigation__VariantsArgs;
export const PlasmicMainNavigation__VariantProps = new Array<VariantPropType>();

export type PlasmicMainNavigation__ArgsType = {};
type ArgPropType = keyof PlasmicMainNavigation__ArgsType;
export const PlasmicMainNavigation__ArgProps = new Array<ArgPropType>();

export type PlasmicMainNavigation__OverridesType = {
  nav?: Flex__<"nav">;
  content?: Flex__<"div">;
  mobile?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  logo?: Flex__<typeof Logo>;
  navMobile?: Flex__<"div">;
  buttonOpen?: Flex__<"button">;
  buttonClose?: Flex__<"button">;
  search?: Flex__<"div">;
  input?: Flex__<typeof AntdInput>;
  buttonClose2?: Flex__<"button">;
  desktop?: Flex__<"div">;
  links?: Flex__<"div">;
  navTabButton?: Flex__<typeof NavTabButton>;
  navProfileDropdown?: Flex__<typeof NavProfileDropdown>;
};

export interface DefaultMainNavigationProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMainNavigation__RenderFunc(props: {
  variants: PlasmicMainNavigation__VariantsArgs;
  args: PlasmicMainNavigation__ArgsType;
  overrides: PlasmicMainNavigation__OverridesType;
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
        path: "isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "searchOpened",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsstcidH67POnn4E()
  });

  return (
    <nav
      data-plasmic-name={"nav"}
      data-plasmic-override={overrides.nav}
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
        sty.nav
      )}
      style={(() => {
        try {
          return {
            backgroundColor: $state.searchOpened
              ? "white"
              : "var(--plasmic-token-primary-dark)"
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return { backgroundColor: "yellow" };
          }
          throw e;
        }
      })()}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        hasGap={true}
        className={classNames(projectcss.all, sty.content)}
      >
        <div
          data-plasmic-name={"mobile"}
          data-plasmic-override={overrides.mobile}
          className={classNames(projectcss.all, sty.mobile)}
        >
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <Logo
              data-plasmic-name={"logo"}
              data-plasmic-override={overrides.logo}
              className={classNames("__wab_instance", sty.logo)}
            />
          </PlasmicLink__>
          <div
            data-plasmic-name={"navMobile"}
            data-plasmic-override={overrides.navMobile}
            className={classNames(projectcss.all, sty.navMobile)}
          >
            <button
              className={classNames(
                projectcss.all,
                projectcss.button,
                sty.button__takK0
              )}
              onClick={async event => {
                const $steps = {};

                $steps["updateSearchOpened"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["searchOpened"]
                        },
                        operation: 4,
                        value: true
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = $stateGet(objRoot, variablePath);
                        $stateSet(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateSearchOpened"] != null &&
                  typeof $steps["updateSearchOpened"] === "object" &&
                  typeof $steps["updateSearchOpened"].then === "function"
                ) {
                  $steps["updateSearchOpened"] = await $steps[
                    "updateSearchOpened"
                  ];
                }
              }}
            >
              <MagnifyingGlassIcon
                className={classNames(projectcss.all, sty.svg__lExP6)}
                role={"img"}
              />
            </button>
            {(
              hasVariant(globalVariants, "screen", "mobile")
                ? (() => {
                    try {
                      return !$state.isOpen;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })()
                : true
            ) ? (
              <button
                data-plasmic-name={"buttonOpen"}
                data-plasmic-override={overrides.buttonOpen}
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  sty.buttonOpen
                )}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateIsOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["isOpen"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = $stateGet(objRoot, variablePath);
                          $stateSet(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateIsOpen"] != null &&
                    typeof $steps["updateIsOpen"] === "object" &&
                    typeof $steps["updateIsOpen"].then === "function"
                  ) {
                    $steps["updateIsOpen"] = await $steps["updateIsOpen"];
                  }
                }}
                ref={ref => {
                  $refs["buttonOpen"] = ref;
                }}
              >
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg__bJlWq)}
                  role={"img"}
                />
              </button>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobile")
                ? (() => {
                    try {
                      return $state.isOpen;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })()
                : true
            ) ? (
              <button
                data-plasmic-name={"buttonClose"}
                data-plasmic-override={overrides.buttonClose}
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  sty.buttonClose
                )}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateIsOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["isOpen"]
                          },
                          operation: 4
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          const oldValue = $stateGet(objRoot, variablePath);
                          $stateSet(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateIsOpen"] != null &&
                    typeof $steps["updateIsOpen"] === "object" &&
                    typeof $steps["updateIsOpen"].then === "function"
                  ) {
                    $steps["updateIsOpen"] = await $steps["updateIsOpen"];
                  }
                }}
                ref={ref => {
                  $refs["buttonClose"] = ref;
                }}
              >
                <XIcon
                  className={classNames(projectcss.all, sty.svg__fFcKt)}
                  role={"img"}
                />
              </button>
            ) : null}
          </div>
        </div>
        {(
          hasVariant(globalVariants, "screen", "mobile")
            ? (() => {
                try {
                  return $state.searchOpened;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })()
            : true
        ) ? (
          <Stack__
            as={"div"}
            data-plasmic-name={"search"}
            data-plasmic-override={overrides.search}
            hasGap={true}
            className={classNames(projectcss.all, sty.search)}
          >
            <MagnifyingGlassIcon
              className={classNames(projectcss.all, sty.svg__n1D1Y)}
              role={"img"}
            />

            {(() => {
              const child$Props = {
                bordered: hasVariant(globalVariants, "screen", "mobile")
                  ? false
                  : undefined,
                className: classNames("__wab_instance", sty.input),
                onChange: generateStateOnChangePropForCodeComponents(
                  $state,
                  "value",
                  ["input", "value"],
                  AntdInput_Helpers
                ),
                placeholder: "Search for a company or category",
                size: "large",
                value: generateStateValueProp($state, ["input", "value"])
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "value",
                    plasmicStateName: "input.value"
                  }
                ],
                [],
                AntdInput_Helpers ?? {},
                child$Props
              );

              return (
                <AntdInput
                  data-plasmic-name={"input"}
                  data-plasmic-override={overrides.input}
                  {...child$Props}
                />
              );
            })()}
            <button
              data-plasmic-name={"buttonClose2"}
              data-plasmic-override={overrides.buttonClose2}
              className={classNames(
                projectcss.all,
                projectcss.button,
                sty.buttonClose2
              )}
              onClick={async event => {
                const $steps = {};

                $steps["updateSearchOpened"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["searchOpened"]
                        },
                        operation: 4
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = $stateGet(objRoot, variablePath);
                        $stateSet(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateSearchOpened"] != null &&
                  typeof $steps["updateSearchOpened"] === "object" &&
                  typeof $steps["updateSearchOpened"].then === "function"
                ) {
                  $steps["updateSearchOpened"] = await $steps[
                    "updateSearchOpened"
                  ];
                }
              }}
              ref={ref => {
                $refs["buttonClose2"] = ref;
              }}
            >
              <XIcon
                className={classNames(projectcss.all, sty.svg__y6Uqu)}
                role={"img"}
              />
            </button>
          </Stack__>
        ) : null}
        {(
          hasVariant(globalVariants, "screen", "mobile")
            ? (() => {
                try {
                  return $state.isOpen;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })()
            : true
        ) ? (
          <Stack__
            as={"div"}
            data-plasmic-name={"desktop"}
            data-plasmic-override={overrides.desktop}
            hasGap={true}
            className={classNames(projectcss.all, sty.desktop)}
          >
            <div
              data-plasmic-name={"links"}
              data-plasmic-override={overrides.links}
              className={classNames(projectcss.all, sty.links)}
            >
              <NavTab
                className={classNames("__wab_instance", sty.navTab__jISy)}
                link={`/categories`}
              />

              <NavTab
                className={classNames("__wab_instance", sty.navTab__lz6K5)}
                name={"Blog"}
              />

              {(() => {
                try {
                  return currentUser.isLoggedIn == false;
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
                <NavTabButton
                  data-plasmic-name={"navTabButton"}
                  data-plasmic-override={overrides.navTabButton}
                  className={classNames("__wab_instance", sty.navTabButton)}
                  name={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sj6Mv
                      )}
                    >
                      {"Log In"}
                    </div>
                  }
                  onClick={async event => {
                    const $steps = {};

                    $steps["logIn"] = true
                      ? (() => {
                          const actionArgs = {};
                          return (async ({ continueTo }) => {
                            function uuidv4() {
                              return (
                                [1e7] +
                                -1e3 +
                                -4e3 +
                                -8e3 +
                                -1e11
                              ).replace(/[018]/g, c =>
                                (
                                  c ^
                                  (crypto.getRandomValues(
                                    new Uint8Array(1)
                                  )[0] &
                                    (15 >> (c / 4)))
                                ).toString(16)
                              );
                            }

                            async function sha256(text) {
                              const encoder = new TextEncoder();
                              const data = encoder.encode(text);
                              const hashBuffer = await crypto.subtle.digest(
                                "SHA-256",
                                data
                              );
                              const hashArray = Array.from(
                                new Uint8Array(hashBuffer)
                              );
                              const hashHex = hashArray
                                .map(b => b.toString(16).padStart(2, "0"))
                                .join("");
                              return hashHex;
                            }

                            const state = JSON.stringify({
                              continueTo: continueTo || window.location.href
                            });
                            const code_verifier = uuidv4();
                            localStorage.setItem(
                              "code_verifier",
                              code_verifier
                            );
                            const code_challenge = await sha256(code_verifier);

                            const params = new URLSearchParams();
                            params.set("client_id", "uzL7MLDrNkZiDQaUBve1wf");
                            params.set("state", state);
                            params.set("response_type", "code");
                            params.set("code_challenge", code_challenge);
                            params.set("code_challenge_method", "S256");
                            params.set("origin_host", window.location.host);

                            if (dataSourcesCtx?.authRedirectUri) {
                              params.set(
                                "redirect_uri",
                                dataSourcesCtx.authRedirectUri
                              );
                            }

                            if (window.__PLASMIC_AUTH_OVERRIDE) {
                              window.__PLASMIC_AUTH_OVERRIDE();
                            } else {
                              const url = `https://studio.plasmic.app/authorize?${params.toString()}`;
                              window.location.assign(url);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["logIn"] != null &&
                      typeof $steps["logIn"] === "object" &&
                      typeof $steps["logIn"].then === "function"
                    ) {
                      $steps["logIn"] = await $steps["logIn"];
                    }
                  }}
                />
              ) : null}
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
                <NavProfileDropdown
                  data-plasmic-name={"navProfileDropdown"}
                  data-plasmic-override={overrides.navProfileDropdown}
                  className={classNames(
                    "__wab_instance",
                    sty.navProfileDropdown
                  )}
                />
              ) : null}
            </div>
            <AntdButton
              className={classNames("__wab_instance", sty.button___9VwLd)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oYmT9
                )}
              >
                {"For business"}
              </div>
            </AntdButton>
          </Stack__>
        ) : null}
      </Stack__>
    </nav>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  nav: [
    "nav",
    "content",
    "mobile",
    "link",
    "logo",
    "navMobile",
    "buttonOpen",
    "buttonClose",
    "search",
    "input",
    "buttonClose2",
    "desktop",
    "links",
    "navTabButton",
    "navProfileDropdown"
  ],
  content: [
    "content",
    "mobile",
    "link",
    "logo",
    "navMobile",
    "buttonOpen",
    "buttonClose",
    "search",
    "input",
    "buttonClose2",
    "desktop",
    "links",
    "navTabButton",
    "navProfileDropdown"
  ],
  mobile: ["mobile", "link", "logo", "navMobile", "buttonOpen", "buttonClose"],
  link: ["link", "logo"],
  logo: ["logo"],
  navMobile: ["navMobile", "buttonOpen", "buttonClose"],
  buttonOpen: ["buttonOpen"],
  buttonClose: ["buttonClose"],
  search: ["search", "input", "buttonClose2"],
  input: ["input"],
  buttonClose2: ["buttonClose2"],
  desktop: ["desktop", "links", "navTabButton", "navProfileDropdown"],
  links: ["links", "navTabButton", "navProfileDropdown"],
  navTabButton: ["navTabButton"],
  navProfileDropdown: ["navProfileDropdown"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  nav: "nav";
  content: "div";
  mobile: "div";
  link: "a";
  logo: typeof Logo;
  navMobile: "div";
  buttonOpen: "button";
  buttonClose: "button";
  search: "div";
  input: typeof AntdInput;
  buttonClose2: "button";
  desktop: "div";
  links: "div";
  navTabButton: typeof NavTabButton;
  navProfileDropdown: typeof NavProfileDropdown;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainNavigation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMainNavigation__VariantsArgs;
    args?: PlasmicMainNavigation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMainNavigation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMainNavigation__ArgsType,
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
          internalArgPropNames: PlasmicMainNavigation__ArgProps,
          internalVariantPropNames: PlasmicMainNavigation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMainNavigation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "nav") {
    func.displayName = "PlasmicMainNavigation";
  } else {
    func.displayName = `PlasmicMainNavigation.${nodeName}`;
  }
  return func;
}

export const PlasmicMainNavigation = Object.assign(
  // Top-level PlasmicMainNavigation renders the root element
  makeNodeComponent("nav"),
  {
    // Helper components rendering sub-elements
    content: makeNodeComponent("content"),
    mobile: makeNodeComponent("mobile"),
    link: makeNodeComponent("link"),
    logo: makeNodeComponent("logo"),
    navMobile: makeNodeComponent("navMobile"),
    buttonOpen: makeNodeComponent("buttonOpen"),
    buttonClose: makeNodeComponent("buttonClose"),
    search: makeNodeComponent("search"),
    input: makeNodeComponent("input"),
    buttonClose2: makeNodeComponent("buttonClose2"),
    desktop: makeNodeComponent("desktop"),
    links: makeNodeComponent("links"),
    navTabButton: makeNodeComponent("navTabButton"),
    navProfileDropdown: makeNodeComponent("navProfileDropdown"),

    // Metadata about props expected for PlasmicMainNavigation
    internalVariantProps: PlasmicMainNavigation__VariantProps,
    internalArgProps: PlasmicMainNavigation__ArgProps
  }
);

export default PlasmicMainNavigation;
/* prettier-ignore-end */
