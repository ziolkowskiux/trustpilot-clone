// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uzL7MLDrNkZiDQaUBve1wf
// Component: F_FUewQemGz

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
import Button2 from "../../Button2"; // plasmic-import: UXSIw5rr6ki/component

import { useScreenVariants as useScreenVariantsstcidH67POnn4E } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: StcidH67pONN4e/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_trust_pilot_clone.module.css"; // plasmic-import: uzL7MLDrNkZiDQaUBve1wf/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: F_FUewQemGz/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: SNFlT3n2xO_R/icon
import GithubIcon from "./icons/PlasmicIcon__Github"; // plasmic-import: aXhcSG1tRcrv/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: NHK46kgtezBW/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: -OYr8taNvSY/icon
import ArrowRightIcon from "./icons/PlasmicIcon__ArrowRight"; // plasmic-import: 8fXDFb6NDoN/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  footer?: p.Flex<"div">;
  columns?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsstcidH67POnn4E()
  });

  return (
    <div
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
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
        sty.footer
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__wT00X)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yOjN)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___6ZcBk)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__w3BYz
                )}
              >
                {"Connect with us"}
              </div>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__c0ITh)}
              >
                <TwitterIcon
                  className={classNames(projectcss.all, sty.svg__oUfGt)}
                  role={"img"}
                />

                <GithubIcon
                  className={classNames(projectcss.all, sty.svg__efKAm)}
                  role={"img"}
                />

                <LinkedinIcon
                  className={classNames(projectcss.all, sty.svg___55C0Z)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>
        <div className={classNames(projectcss.all, sty.column__e4UkH)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vvOYy)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___32Yw
              )}
            >
              {"Product"}
            </div>
            <Button2
              className={classNames("__wab_instance", sty.button2__cs5B3)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__lnXv)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__oPdSe)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cVl8A
                )}
              >
                {"Pricing"}
              </div>
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2__wd202)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__qfpw5)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__pu3W)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__urVx6
                )}
              >
                {"Log in"}
              </div>
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2__t7Xev)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__oeMq5)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__rL2F)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___675Ql
                )}
              >
                {"Integrations"}
              </div>
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2__vaqpa)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__yDeYn)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__jdfAw)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hhUjj
                )}
              >
                {"Insights"}
              </div>
            </Button2>
          </p.Stack>
        </div>
        <div className={classNames(projectcss.all, sty.column__v1Awn)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___11NWt)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nUc7Z
              )}
            >
              {"Support"}
            </div>
            <Button2
              className={classNames("__wab_instance", sty.button2__xZkvB)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__r4P05)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__eqG8G)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jPO
                )}
              >
                {"Documentation"}
              </div>
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2___5YBw)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__kQ8Km)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__eScoN)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2XsRx
                )}
              >
                {"FAQs"}
              </div>
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2___1SWq)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__fbJca)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg___60UPy)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fpKK
                )}
              >
                {"Status"}
              </div>
            </Button2>
          </p.Stack>
        </div>
        <div className={classNames(projectcss.all, sty.column__ve6R4)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___01Ppw)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lo2Nv
              )}
            >
              {"Company"}
            </div>
            <Button2
              className={classNames("__wab_instance", sty.button2__tYa3U)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__rJl9M)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__lv1Kd)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__o8RGa
                )}
              >
                {"About"}
              </div>
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2__puTsO)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__o9MtM)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg___1PAW)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vRqlE
                )}
              >
                {"Contact us"}
              </div>
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2__wDsTq)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__dtRg4)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__quh9U)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cE13
                )}
              >
                {"Careers"}
              </div>
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2__peVU)}
              color={"clear"}
              endIcon={
                <ArrowRightIcon
                  className={classNames(projectcss.all, sty.svg__iVl1M)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg___1LnQr)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yn87G
                )}
              >
                {"Media"}
              </div>
            </Button2>
          </p.Stack>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footer: ["footer", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  footer: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
