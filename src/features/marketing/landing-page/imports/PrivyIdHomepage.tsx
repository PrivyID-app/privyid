import svgPaths from "./svg-kebuqsc4nb";
import imgLogo1 from "../../../../assets/images/c1c20eae9ce7a905bc3e3f80a198f87dfc6dc8c3.png";
import imgImage from "../../../../assets/images/0d2f66eb8e8e6701d3a89564b0b6f219eb1b5d77.png";
import imgOverlay from "../../../../assets/images/06feed9f5f4b5c11f150f713aa4ec3ffb7289cec.png";
import imgLogo3 from "../../../../assets/images/12c254da7cfdeaaa62d206c9af101e1b0d4309f6.png";

function Logo() {
  return (
    <div className="h-[33px] relative shrink-0 w-[95px]" data-name="Logo 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-[185.34%] left-[-14.36%] max-w-none top-[-40.23%] w-[127.2%]"
          src={imgLogo1}
        />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Products</p>
      </div>
    </div>
  );
}

function ArrowDownSLine() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="arrow-down-s-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-down-s-line">
          <path
            d={svgPaths.p2c6f4a00}
            fill="var(--fill-0, #99A0AE)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemsLanding() {
  return (
    <div
      className="content-stretch flex items-center px-[8px] py-[6px] relative rounded-[10px] shrink-0"
      data-name="Navigation Items / Landing"
    >
      <Text />
      <ArrowDownSLine />
    </div>
  );
}

function Text1() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Developers</p>
      </div>
    </div>
  );
}

function ArrowDownSLine1() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="arrow-down-s-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-down-s-line">
          <path
            d={svgPaths.p2c6f4a00}
            fill="var(--fill-0, #99A0AE)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemsLanding1() {
  return (
    <div
      className="content-stretch flex items-center px-[8px] py-[6px] relative rounded-[10px] shrink-0"
      data-name="Navigation Items / Landing"
    >
      <Text1 />
      <ArrowDownSLine1 />
    </div>
  );
}

function Text2() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Pricing</p>
      </div>
    </div>
  );
}

function NavigationItemsLanding2() {
  return (
    <div
      className="bg-[#f7f7f7] content-stretch flex items-center px-[8px] py-[6px] relative rounded-[10px] shrink-0"
      data-name="Navigation Items / Landing"
    >
      <Text2 />
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Navigation"
    >
      <NavigationItemsLanding />
      <NavigationItemsLanding1 />
      <NavigationItemsLanding2 />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Sign in</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[10px] shrink-0"
      data-name="Buttons [1.1]"
    >
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Get API Keys</p>
      </div>
    </div>
  );
}

function FancyButtons() {
  return (
    <div
      className="relative rounded-[10px] shrink-0"
      data-name="Fancy Buttons [1.0]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(14, 18, 27) 0%, rgb(14, 18, 27) 100%)",
      }}
    >
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
        <Text4 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(27,28,29,0.48),0px_0px_0px_1px_#242628]"
      />
    </div>
  );
}

function Actions() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-end min-h-px min-w-px relative"
      data-name="Actions"
    >
      <Buttons />
      <FancyButtons />
    </div>
  );
}

function SectionContainer() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[32px] items-center min-h-px min-w-px relative"
      data-name="Section_container"
    >
      <Logo />
      <Navigation />
      <Actions />
    </div>
  );
}

function WebNav() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Web Nav">
      <div
        aria-hidden="true"
        className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[100px] py-[20px] relative w-full">
          <SectionContainer />
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div
      className="bg-[#f7f7f7] content-stretch flex items-center justify-center overflow-clip px-[5px] py-[2px] relative rounded-[5px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.04),0px_1px_1px_-0.5px_rgba(23,23,23,0.04)] shrink-0"
      data-name="Badge"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[12px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px]">NEW</p>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Arrow icon">
          <path
            d={svgPaths.p2eb81200}
            fill="var(--fill-0, #99A0AE)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Seamless identity verification via API</p>
      </div>
      <ArrowIcon />
    </div>
  );
}

function HeroBadgeLanding() {
  return (
    <div
      className="bg-white content-stretch flex gap-[8px] items-center overflow-clip pl-[6px] pr-[10px] py-[4px] relative rounded-[10px] shrink-0"
      data-name="Hero Badge / Landing"
    >
      <Badge />
      <Text5 />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0"
      data-name="Title"
    >
      <HeroBadgeLanding />
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[56px] not-italic relative shrink-0 text-[#0e121b] text-[48px] text-center tracking-[-0.48px] whitespace-nowrap"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="mb-0">{`Identity infrastructure `}</p>
        <p>without data custody</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0"
      data-name="Content"
    >
      <Title1 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[16px] text-center tracking-[-0.176px] w-[600px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Verify users and businesses via API. PrivyID handles identity
          documents and compliance — your product only receives a verification
          token.
        </p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Get started free</p>
      </div>
    </div>
  );
}

function ArrowRightUpLongLine() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="arrow-right-up-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-right-up-long-line" opacity="0.64">
          <path
            d={svgPaths.p2e949600}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function FancyButtons1() {
  return (
    <div
      className="relative rounded-[12px] shrink-0"
      data-name="Fancy Buttons [1.1]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(23, 23, 23) 0%, rgb(23, 23, 23) 100%)",
      }}
    >
      <div className="content-stretch flex gap-[2px] items-center justify-center overflow-clip pl-[16px] pr-[14px] py-[10px] relative rounded-[inherit]">
        <Text6 />
        <ArrowRightUpLongLine />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(27,28,29,0.48),0px_0px_0px_1px_#242628]"
      />
    </div>
  );
}

function MajorBrandLogos() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Major Brand Logos [1.1]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Major Brand Logos [1.1]">
          <path
            d={svgPaths.p30d7c800}
            fill="var(--fill-0, #4285F4)"
            id="Vector"
          />
          <path
            d={svgPaths.p84821f2}
            fill="var(--fill-0, #FBBC05)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p4c67b80}
            fill="var(--fill-0, #EA4335)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p7defa00}
            fill="var(--fill-0, #34A853)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function SocialButtons() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0"
      data-name="Social Buttons [1.1]"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
        <MajorBrandLogos />
        <div
          className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-nowrap"
          style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
        >
          <p>
            <span className="leading-[20px] text-[#99a0ae]">Sign in with</span>
            <span className="leading-[20px]">{` Google`}</span>
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#cacfd8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
      />
    </div>
  );
}

function Actions1() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0"
      data-name="Actions"
    >
      <FancyButtons1 />
      <SocialButtons />
    </div>
  );
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Title"
    >
      <Content />
      <Actions1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Icon">
          <g id="Shape">
            <path
              d="M11 1.65H20.35V11L11 1.65Z"
              fill="var(--fill-0, #99A0AE)"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3697b600}
              fill="var(--fill-0, #99A0AE)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BrandItemsAtomic() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0"
      data-name="Brand Items [Atomic]"
    >
      <Icon />
      <div
        className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a0ae] text-[18px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p>
          <span className="leading-[24px]">Synergy</span>
          <span className="leading-[24px] text-[#99a0ae]">™</span>
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.pe0c6100} fill="var(--fill-0, #99A0AE)" />
            <path d={svgPaths.p3c15280} fill="var(--fill-0, #99A0AE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BrandItemsAtomic1() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0"
      data-name="Brand Items [Atomic]"
    >
      <Icon1 />
      <div
        className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a0ae] text-[18px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p>
          <span className="leading-[24px]">Horizon</span>
          <span className="leading-[24px] text-[#99a0ae]">™</span>
        </p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p1d0c5f80}
            fill="var(--fill-0, #99A0AE)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function BrandItemsAtomic2() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0"
      data-name="Brand Items [Atomic]"
    >
      <Icon2 />
      <div
        className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a0ae] text-[18px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p>
          <span className="leading-[24px]">Catalyst</span>
          <span className="leading-[24px] text-[#99a0ae]">™</span>
        </p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.p192c7a00} fill="var(--fill-0, #99A0AE)" />
            <path d={svgPaths.pd63bb80} fill="var(--fill-0, #99A0AE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BrandItemsAtomic3() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0"
      data-name="Brand Items [Atomic]"
    >
      <Icon3 />
      <div
        className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a0ae] text-[18px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p>
          <span className="leading-[24px]">Phoenix</span>
          <span className="leading-[24px] text-[#99a0ae]">™</span>
        </p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.p3ba3bb80} fill="var(--fill-0, #99A0AE)" />
            <path d={svgPaths.p32ca0d80} fill="var(--fill-0, #99A0AE)" />
            <path d={svgPaths.p2e464000} fill="var(--fill-0, #99A0AE)" />
            <path d={svgPaths.p11b81e00} fill="var(--fill-0, #99A0AE)" />
            <path d={svgPaths.p12fa1680} fill="var(--fill-0, #99A0AE)" />
            <path d={svgPaths.p3aec6d00} fill="var(--fill-0, #99A0AE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BrandItemsAtomic4() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0"
      data-name="Brand Items [Atomic]"
    >
      <Icon4 />
      <div
        className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99a0ae] text-[18px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p>
          <span className="leading-[24px]">Solaris</span>
          <span className="leading-[24px] text-[#99a0ae]">™</span>
        </p>
      </div>
    </div>
  );
}

function Logos() {
  return (
    <div
      className="content-stretch flex gap-[64px] items-start relative shrink-0"
      data-name="Logos"
    >
      <BrandItemsAtomic />
      <BrandItemsAtomic1 />
      <BrandItemsAtomic2 />
      <BrandItemsAtomic3 />
      <BrandItemsAtomic4 />
    </div>
  );
}

function Brands() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full"
      data-name="Brands"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#99a0ae] text-[14px] text-center tracking-[-0.084px] w-[min-content]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">
          Trusted by 500+ companies worldwide
        </p>
      </div>
      <Logos />
    </div>
  );
}

function Head() {
  return (
    <div
      className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full"
      data-name="Head"
    >
      <Title />
      <Brands />
    </div>
  );
}

function CodeLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="code-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="code-line">
          <path
            d={svgPaths.p16967380}
            fill="var(--fill-0, #525866)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0"
      data-name="Key Icons [1.1]"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <CodeLine />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#0e121b] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
      />
    </div>
  );
}

function Text7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-center justify-end leading-[0] not-italic relative shrink-0 text-center w-[204px]"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">API Verification</p>
      </div>
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#99a0ae] text-[12px] text-ellipsis w-full whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px] overflow-hidden">
          Verify directly in your app
        </p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-center justify-center min-h-px min-w-px relative"
      data-name="Item"
    >
      <KeyIcons />
      <Text7 />
      <div
        className="-translate-x-1/2 absolute h-0 left-[calc(50%+0.25px)] top-[-31px] w-[36px]"
        data-name="Active"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 36 1"
          >
            <line
              id="Active"
              stroke="var(--stroke-0, #0E121B)"
              x2="36"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function User6Line() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="user-6-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="user-6-line">
          <path
            d={svgPaths.p18368000}
            fill="var(--fill-0, #525866)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons1() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0"
      data-name="Key Icons [1.1]"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <User6Line />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#cacfd8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
      />
    </div>
  );
}

function Text8() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[4px] items-center justify-end leading-[0] not-italic relative shrink-0 text-center w-[204px]"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">
          Single Verification
        </p>
      </div>
      <div
        className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#99a0ae] text-[12px] text-ellipsis w-full whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px] overflow-hidden">
          Verify one user instantly
        </p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-center justify-center min-h-px min-w-px relative"
      data-name="Item"
    >
      <KeyIcons1 />
      <Text8 />
    </div>
  );
}

function FileTextLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="file-text-line">
          <path
            d={svgPaths.p1eb5bc00}
            fill="var(--fill-0, #525866)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons2() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0"
      data-name="Key Icons [1.1]"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <FileTextLine />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#cacfd8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
      />
    </div>
  );
}

function Text9() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[4px] items-center justify-end leading-[0] not-italic relative shrink-0 text-center w-[204px]"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">Batch Verification</p>
      </div>
      <div
        className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#99a0ae] text-[12px] text-ellipsis w-full whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px] overflow-hidden">Verify users in bulk</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-center justify-center min-h-px min-w-px relative"
      data-name="Item"
    >
      <KeyIcons2 />
      <Text9 />
    </div>
  );
}

function Key2Line() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="key-2-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="key-2-line">
          <path
            d={svgPaths.pde5c780}
            fill="var(--fill-0, #525866)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons3() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0"
      data-name="Key Icons [1.1]"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <Key2Line />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#cacfd8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
      />
    </div>
  );
}

function Text10() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[4px] items-center justify-end leading-[0] not-italic relative shrink-0 text-center w-[204px]"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">Token-Based Access</p>
      </div>
      <div
        className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#99a0ae] text-[12px] text-ellipsis w-full whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px] overflow-hidden">
          Proof without identity data
        </p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-center justify-center min-h-px min-w-px relative"
      data-name="Item"
    >
      <KeyIcons3 />
      <Text10 />
    </div>
  );
}

function FeaturesTabs() {
  return (
    <div
      className="content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full"
      data-name="Features Tabs"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#cacfd8] border-solid border-t inset-0 pointer-events-none"
      />
      <Item />
      <div className="flex flex-row items-center self-stretch">
        <div
          className="flex h-0 items-center justify-center relative self-center shrink-0 w-0"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[90px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 90 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #CACFD8)"
                    x2="90"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Item1 />
      <div className="flex flex-row items-center self-stretch">
        <div
          className="flex h-0 items-center justify-center relative self-center shrink-0 w-0"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[90px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 90 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #CACFD8)"
                    x2="90"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Item2 />
      <div className="flex flex-row items-center self-stretch">
        <div
          className="flex h-0 items-center justify-center relative self-center shrink-0 w-0"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[90px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 90 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #CACFD8)"
                    x2="90"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Item3 />
    </div>
  );
}

function Dots() {
  return (
    <div className="h-[10px] relative shrink-0 w-[84px]" data-name="dots">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 84 10"
      >
        <g id="dots">
          <circle cx="5" cy="5" fill="var(--fill-0, #FB3748)" id="red" r="5" />
          <circle
            cx="23"
            cy="5"
            fill="var(--fill-0, #F6B51E)"
            id="yellow"
            r="5"
          />
          <circle
            cx="41"
            cy="5"
            fill="var(--fill-0, #1FC16B)"
            id="green"
            r="5"
          />
        </g>
      </svg>
    </div>
  );
}

function LockIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lock-icon">
      <div
        className="absolute border border-[#99a0ae] border-solid inset-[29.17%_37.5%_41.67%_37.5%] rounded-[3px]"
        data-name="Lock shape"
      />
      <div
        className="absolute bg-[#99a0ae] bottom-1/4 left-[33.33%] right-[33.33%] rounded-[1px] top-[45.83%]"
        data-name="Lock shape"
      />
    </div>
  );
}

function Text11() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0"
      data-name="text"
    >
      <LockIcon />
      <p
        className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a0ae] text-[12px]"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        privyid.com
      </p>
    </div>
  );
}

function SearchInput() {
  return (
    <div
      className="bg-white content-stretch flex gap-[8px] items-start overflow-clip p-[4px] relative rounded-[8px] shrink-0"
      data-name="search-input"
    >
      <Text11 />
    </div>
  );
}

function Search() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative"
      data-name="search"
    >
      <SearchInput />
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="download">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="download">
          <path
            d={svgPaths.p3f606a00}
            fill="var(--fill-0, #99A0AE)"
            id="Download"
          />
        </g>
      </svg>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="plus">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="plus">
          <path
            d={svgPaths.p2218cc00}
            fill="var(--fill-0, #99A0AE)"
            id="Newtab"
          />
        </g>
      </svg>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="copy">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="copy">
          <path
            d={svgPaths.p29b01b00}
            fill="var(--fill-0, #99A0AE)"
            id="Pages"
          />
        </g>
      </svg>
    </div>
  );
}

function Right() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-start relative shrink-0"
      data-name="right"
    >
      <Download />
      <Plus />
      <Copy />
    </div>
  );
}

function BrowserBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Browser Bar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[40px] py-[12px] relative w-full">
          <Dots />
          <Search />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div
      className="aspect-[696/434.5084533691406] bg-white relative shrink-0 w-full"
      data-name="Img"
    >
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div
          className="font-['DM_Mono:Regular','Noto_Sans:Regular',sans-serif] leading-[0] relative shrink-0 text-[#99a0ae] text-[12px] w-full whitespace-pre-wrap"
          style={{
            fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400",
            fontFeatureSettings: "\'calt\' 0, \'liga\' 0",
          }}
        >
          <p className="leading-[20px] mb-0">{`// 1. Initialize PrivyID                         ║   `}</p>
          <p className="mb-0">
            <span className="leading-[20px]">{`│ ║ `}</span>
            <span className="leading-[20px] text-[#fb4ba3]">const</span>
            <span className="leading-[20px]">{` PrivyID `}</span>
            <span className="leading-[20px] text-[#335cff]">=</span>
            <span className="leading-[20px]">{` `}</span>
            <span className="leading-[20px] text-[#335cff]">require</span>
            <span className="leading-[20px]">(</span>
            <span className="leading-[20px] text-[#1fc16b]">{`'@privyid/sdk'`}</span>
            <span className="leading-[20px]">{`);         ║   │   `}</span>
          </p>
          <p className="mb-0">
            <span className="leading-[20px]">{`│ ║ `}</span>
            <span className="leading-[20px] text-[#fb4ba3]">const</span>
            <span className="leading-[20px]">{` client `}</span>
            <span className="leading-[20px] text-[#335cff]">=</span>
            <span className="leading-[20px]">{` new `}</span>
            <span className="leading-[20px] text-[#fa7319]">PrivyID</span>
            <span className="leading-[20px]">(</span>
            <span className="leading-[20px] text-[#1fc16b]">{`'your_api_key_here'`}</span>
            <span className="leading-[20px]">{`); ║   │`}</span>
          </p>
          <p className="leading-[20px] mb-0">{`│ ║                                                  ║   │`}</p>
          <p className="leading-[20px] mb-0">{`// 2. Initiate verification                      ║   │`}</p>
          <p className="mb-0">
            <span className="leading-[20px]">{`│ ║ `}</span>
            <span className="leading-[20px] text-[#fb4ba3]">const</span>
            <span className="leading-[20px]">{` verification = `}</span>
            <span className="leading-[20px] text-[#fb4ba3]">await</span>
            <span className="leading-[20px]">{` client.kyc.`}</span>
            <span className="leading-[20px] text-[#335cff]">initiate</span>
            <span className="leading-[20px]">{`({ ║   │`}</span>
          </p>
          <p className="mb-0">
            <span className="leading-[20px]">{`│ ║   `}</span>
            <span className="leading-[20px] text-[#fb3748]">userId</span>
            <span className="leading-[20px]">{`: `}</span>
            <span className="leading-[20px] text-[#1fc16b]">{`'user_123'`}</span>
            <span className="leading-[20px]">{`,                            ║   │`}</span>
          </p>
          <p className="mb-0">
            <span className="leading-[20px]">{`│ ║   `}</span>
            <span className="leading-[20px] text-[#fb3748]">webhookUrl</span>
            <span className="leading-[20px]">{`: `}</span>
            <span className="leading-[20px] text-[#1fc16b]">{`'https://yourapp.com/webhook' `}</span>
            <span className="leading-[20px]">{`     ║   │`}</span>
          </p>
          <p>
            <span className="leading-[20px]">{`│ ║ `}</span>
            <span className="leading-[20px] text-[#99a0ae]">{`});`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div
      className="aspect-[708/442] bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[22px] shadow-[0px_20px_20px_-10px_rgba(23,23,23,0.04),0px_10px_10px_-5px_rgba(23,23,23,0.04),0px_6px_6px_-3px_rgba(23,23,23,0.04),0px_3px_3px_-1.5px_rgba(23,23,23,0.04),0px_1px_1px_-0.5px_rgba(23,23,23,0.04),0px_0px_0px_1px_rgba(23,23,23,0.04)] shrink-0 w-full"
      data-name="Dashboard"
    >
      <Img />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="bg-[#f7f7f7] relative rounded-[32px] shrink-0 w-full"
      data-name="Content"
    >
      <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
        <Dashboard />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div
      className="h-[804px] relative rounded-[40px] shrink-0 w-full"
      data-name="Image"
    >
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Content2 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div
      className="bg-white h-[479px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full"
      data-name="Image"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <BrowserBar />
        <Image1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ebebeb] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]"
      />
    </div>
  );
}

function CodeSSlashLine() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="code-s-slash-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="code-s-slash-line">
          <path
            d={svgPaths.p22218f00}
            fill="var(--fill-0, #0E121B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons4() {
  return (
    <div
      className="bg-white relative rounded-[999px] shrink-0"
      data-name="Key Icons [1.1]"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
        <CodeSSlashLine />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#cacfd8] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
      />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]"
      />
      <KeyIcons4 />
    </div>
  );
}

function Text12() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Try live editor</p>
      </div>
      <div
        className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#99a0ae] text-[12px] text-ellipsis"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px] overflow-hidden">
          Click on the button to use the code editor
        </p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Try live</p>
      </div>
    </div>
  );
}

function ArrowRightSLine() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="arrow-right-s-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-right-s-line">
          <path
            d={svgPaths.p2a044f00}
            fill="var(--fill-0, #99A0AE)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div
      className="bg-[#222530] content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[10px] shrink-0"
      data-name="Buttons [1.1]"
    >
      <Text13 />
      <ArrowRightSLine />
    </div>
  );
}

function Item4() {
  return (
    <div
      className="-translate-x-1/2 absolute bottom-[64px] content-stretch flex flex-col gap-[14px] items-center justify-center left-[calc(50%-0.5px)]"
      data-name="Item"
    >
      <Container />
      <Text12 />
      <Buttons1 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative rounded-[24px] shrink-0 w-full"
      data-name="Content"
    >
      <Image />
      <div
        className="absolute aspect-[1126/479] bottom-0 left-0 right-0"
        data-name="Overlay"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1126 479"
        >
          <path
            d="M0 0H1126V479H0V0Z"
            fill="url(#paint0_linear_1_10382)"
            id="Overlay"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_10382"
              x1="563"
              x2="563"
              y1="0"
              y2="479"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Item4 />
    </div>
  );
}

function Bottom() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start pt-[64px] relative shrink-0 w-full"
      data-name="Bottom"
    >
      <FeaturesTabs />
      <Content1 />
    </div>
  );
}

function Hero() {
  return (
    <div
      className="bg-gradient-to-b from-[#f7f7f7] relative shrink-0 to-white w-full"
      data-name="Hero"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[96px] items-center pb-[32px] pt-[72px] px-[120px] relative w-full">
          <div
            className="-translate-x-1/2 absolute h-[632px] left-[calc(50%+5px)] mix-blend-overlay top-[-56px] w-[1366px]"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.14%_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1367.74 633.745"
              >
                <g id="Vector" style={{ mixBlendMode: "overlay" }}>
                  <path
                    d={svgPaths.p25bb4b00}
                    stroke="url(#paint0_radial_1_10405)"
                    strokeOpacity="0.6"
                    strokeWidth="1.74474"
                  />
                </g>
                <defs>
                  <radialGradient
                    cx="0"
                    cy="0"
                    gradientTransform="translate(683.872 316.872) rotate(90) scale(316 551.534)"
                    gradientUnits="userSpaceOnUse"
                    id="paint0_radial_1_10405"
                    r="1"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#0E121B" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <Head />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Header section"
    >
      <WebNav />
      <Hero />
    </div>
  );
}

function BrandItemsAtomic5() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Brand Items [Atomic]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Brand Items [Atomic]">
          <g id="Shape">
            <path d={svgPaths.p354dfa00} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p1f33ed80} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p39a36200} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p3fdbb600} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p3b43a400} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p2188cdf0} fill="var(--fill-0, #D1D1D1)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DividerLanding() {
  return (
    <div
      className="bg-white content-stretch flex gap-[24px] items-center relative shrink-0 w-full"
      data-name="Divider [Landing]"
    >
      <div
        className="flex-[1_0_0] h-0 min-h-px min-w-px relative"
        data-name="Left"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 649 1"
          >
            <line
              id="Left"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="649"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <BrandItemsAtomic5 />
      <div
        className="flex-[1_0_0] h-0 min-h-px min-w-px relative"
        data-name="Right"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 649 1"
          >
            <line
              id="Left"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="649"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StairsFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="stairs-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="stairs-fill">
          <path
            d={svgPaths.p209a0800}
            fill="var(--fill-0, #99A0AE)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function BadgeLanding() {
  return (
    <div
      className="bg-white content-stretch flex gap-[6px] items-center overflow-clip pl-[8px] pr-[10px] py-[4px] relative rounded-[9px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.04),0px_1px_1px_-0.5px_rgba(23,23,23,0.04),0px_0px_0px_1px_#ebebeb] shrink-0"
      data-name="Badge [Landing]"
    >
      <StairsFill />
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Performance data</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0"
      data-name="Title"
    >
      <BadgeLanding />
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[40px] text-center tracking-[-0.4px] whitespace-nowrap"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="leading-[48px]">
          Identity verification at infrastructure scale
        </p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="Content"
    >
      <Title2 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[16px] text-center tracking-[-0.176px] w-[528px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Reduce compliance overhead and breach risk so your team can focus on
          shipping product, not managing sensitive documents.
        </p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[808px]"
      data-name="Content"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[56px] tracking-[-0.56px] w-[164px]"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="leading-[64px] whitespace-pre-wrap">12M+</p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div
          className="flex h-0 items-center justify-center relative self-center shrink-0 w-0"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[64px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 64 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #EBEBEB)"
                    x2="64"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-[1_0_0] flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[20px] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px] whitespace-pre-wrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="mb-0">Verifications processed</p>
        <p>in the last year.</p>
      </div>
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[16px] tracking-[-0.176px] w-[288px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Powering compliant onboarding across fintech, and platforms.
        </p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[808px]"
      data-name="Content"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[56px] tracking-[-0.56px] w-[164px]"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="leading-[64px] whitespace-pre-wrap">{`<30s`}</p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div
          className="flex h-0 items-center justify-center relative self-center shrink-0 w-0"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[64px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 64 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #EBEBEB)"
                    x2="64"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-[1_0_0] flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">
          Average verification time.
        </p>
      </div>
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[16px] tracking-[-0.176px] w-[288px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Fast user onboarding without compromising security or compliance.
        </p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[808px]"
      data-name="Content"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[56px] tracking-[-0.56px] w-[164px]"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="leading-[64px] whitespace-pre-wrap">0</p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div
          className="flex h-0 items-center justify-center relative self-center shrink-0 w-0"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[64px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 64 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #EBEBEB)"
                    x2="64"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-[1_0_0] flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">
          Identity documents stored by clients.
        </p>
      </div>
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[16px] tracking-[-0.176px] w-[288px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          All sensitive data remains within PrivyID’s secure infrastructure.
        </p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[808px]"
      data-name="Content"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[56px] tracking-[-0.56px] w-[164px]"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="leading-[64px] whitespace-pre-wrap">40+</p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div
          className="flex h-0 items-center justify-center relative self-center shrink-0 w-0"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[64px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 64 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #EBEBEB)"
                    x2="64"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-[1_0_0] flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">
          Countries supported.
        </p>
      </div>
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[16px] tracking-[-0.176px] w-[288px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Verifying users globally with local compliance standards built in.
        </p>
      </div>
    </div>
  );
}

function ArrowRightUpLongLine1() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="arrow-right-up-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="arrow-right-up-long-line">
          <path
            d={svgPaths.p2eb81200}
            fill="var(--fill-0, #0E121B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div
      className="content-stretch flex gap-[5px] items-center relative shrink-0"
      data-name="Link"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Get API Keys</p>
      </div>
      <ArrowRightUpLongLine1 />
    </div>
  );
}

function Action() {
  return (
    <div
      className="bg-[#f7f7f7] content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[10px] relative rounded-[10px] shrink-0 w-[808px]"
      data-name="Action"
    >
      <div
        className="flex flex-[1_0_0] flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">
          Verify users without data custody
        </p>
      </div>
      <Link />
    </div>
  );
}

function Stats() {
  return (
    <div
      className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0"
      data-name="Stats"
    >
      <div className="h-0 relative shrink-0 w-[808px]" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 808 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="808"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Content4 />
      <div className="h-0 relative shrink-0 w-[808px]" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 808 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="808"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Content5 />
      <div className="h-0 relative shrink-0 w-[808px]" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 808 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="808"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Content6 />
      <div className="h-0 relative shrink-0 w-[808px]" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 808 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="808"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Content7 />
      <Action />
    </div>
  );
}

function StatsSection() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Stats section"
    >
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[120px] py-[96px] relative w-full">
          <Content3 />
          <Stats />
        </div>
      </div>
    </div>
  );
}

function BrandItemsAtomic6() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Brand Items [Atomic]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Brand Items [Atomic]">
          <g id="Shape">
            <path d={svgPaths.p354dfa00} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p1f33ed80} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p39a36200} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p3fdbb600} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p3b43a400} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p2188cdf0} fill="var(--fill-0, #D1D1D1)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DividerLanding1() {
  return (
    <div
      className="bg-white content-stretch flex gap-[24px] items-center relative shrink-0 w-full"
      data-name="Divider [Landing]"
    >
      <div
        className="flex-[1_0_0] h-0 min-h-px min-w-px relative"
        data-name="Left"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 649 1"
          >
            <line
              id="Left"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="649"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <BrandItemsAtomic6 />
      <div
        className="flex-[1_0_0] h-0 min-h-px min-w-px relative"
        data-name="Right"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 649 1"
          >
            <line
              id="Left"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="649"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ShieldStarFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="shield-star-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="shield-star-fill">
          <path
            d={svgPaths.p15713200}
            fill="var(--fill-0, #A4A4A4)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function BadgeLanding1() {
  return (
    <div
      className="bg-white content-stretch flex gap-[6px] items-center overflow-clip pl-[8px] pr-[10px] py-[4px] relative rounded-[9px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.04),0px_1px_1px_-0.5px_rgba(23,23,23,0.04),0px_0px_0px_1px_#ebebeb] shrink-0"
      data-name="Badge [Landing]"
    >
      <ShieldStarFill />
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Built for modern privacy</p>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full"
      data-name="Title"
    >
      <BadgeLanding1 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[48px] min-w-full not-italic relative shrink-0 text-[#0e121b] text-[40px] text-center tracking-[-0.4px] w-[min-content] whitespace-pre-wrap"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="mb-0">{`Remove risk. Ship faster. `}</p>
        <p>Stay compliant.</p>
      </div>
    </div>
  );
}

function FlashlightLine() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="flashlight-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="flashlight-line">
          <path
            d={svgPaths.p5cab4f0}
            fill="var(--fill-0, #FA7319)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="bg-white content-stretch flex items-center overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.06),0px_1px_1px_-0.5px_rgba(23,23,23,0.06),0px_0px_0px_1px_rgba(23,23,23,0.02)] shrink-0"
      data-name="Icon"
    >
      <FlashlightLine />
    </div>
  );
}

function Text14() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 text-[16px] tracking-[-0.176px] w-full"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#0e121b] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">30-minute setup</p>
      </div>
      <div
        className="flex flex-col justify-center leading-[24px] relative shrink-0 text-[#99a0ae] text-[0px] w-full whitespace-pre-wrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p
          className="mb-0"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          4 lines of code to go live.
        </p>
        <p
          className="text-[#525866]"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          Pre-built SDKs.
        </p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div
      className="bg-[#f7f7f7] h-[248px] relative rounded-[24px] shrink-0 w-full"
      data-name="Card"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
          <Icon5 />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function CheckDoubleLine() {
  return (
    <div
      className="relative shrink-0 size-[28px]"
      data-name="check-double-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="check-double-line">
          <path
            d={svgPaths.p7ee0e80}
            fill="var(--fill-0, #1FC16B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="bg-white content-stretch flex items-center overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.06),0px_1px_1px_-0.5px_rgba(23,23,23,0.06),0px_0px_0px_1px_rgba(23,23,23,0.02)] shrink-0"
      data-name="Icon"
    >
      <CheckDoubleLine />
    </div>
  );
}

function Text15() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 text-[16px] tracking-[-0.176px] w-full"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#0e121b] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">Always compliant</p>
      </div>
      <div
        className="flex flex-col justify-center leading-[24px] relative shrink-0 text-[#99a0ae] text-[0px] w-full whitespace-pre-wrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p
          className="mb-0"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          Regulations handled by default.
        </p>
        <p
          className="text-[#525866]"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          Auto-updates as laws change.
        </p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div
      className="bg-[#f7f7f7] relative rounded-[24px] shrink-0 w-full"
      data-name="Card"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
          <Icon6 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative"
      data-name="Left"
    >
      <Card />
      <Card1 />
    </div>
  );
}

function LockLine() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="lock-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="lock-line">
          <path
            d={svgPaths.pd09b00}
            fill="var(--fill-0, #335CFF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="bg-white content-stretch flex items-center overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.06),0px_1px_1px_-0.5px_rgba(23,23,23,0.06),0px_0px_0px_1px_rgba(23,23,23,0.02)] shrink-0"
      data-name="Icon"
    >
      <LockLine />
    </div>
  );
}

function Text16() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 text-[16px] tracking-[-0.176px] w-full"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#0e121b] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">Zero custody</p>
      </div>
      <div
        className="flex flex-col justify-center leading-[24px] relative shrink-0 text-[#a3a3a3] text-[0px] w-full whitespace-pre-wrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p
          className="mb-0 text-[#99a0ae]"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          You never store identity documents.
        </p>
        <p
          className="text-[#525866]"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          Zero breach liability.
        </p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div
      className="bg-[#f7f7f7] flex-[1_0_0] h-[504px] min-h-px min-w-px relative rounded-[24px]"
      data-name="Card"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
          <Icon7 />
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function RocketLine() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="rocket-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="rocket-line">
          <path
            d={svgPaths.p1ba00100}
            fill="var(--fill-0, #7D52F4)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="bg-white content-stretch flex items-center overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.06),0px_1px_1px_-0.5px_rgba(23,23,23,0.06),0px_0px_0px_1px_rgba(23,23,23,0.02)] shrink-0"
      data-name="Icon"
    >
      <RocketLine />
    </div>
  );
}

function Text17() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 text-[16px] tracking-[-0.176px] w-full"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#0e121b] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">60s verification</p>
      </div>
      <div
        className="flex flex-col justify-center leading-[24px] relative shrink-0 text-[#99a0ae] text-[0px] w-full whitespace-pre-wrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p
          className="mb-0"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          Real-time verification results.
        </p>
        <p
          className="text-[#525866]"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          Delivered via webhooks.
        </p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div
      className="bg-[#f7f7f7] h-[248px] relative rounded-[24px] shrink-0 w-full"
      data-name="Card"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
          <Icon8 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function ShieldUserLine() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="shield-user-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="shield-user-line">
          <path
            d={svgPaths.p25a61af0}
            fill="var(--fill-0, #FB4BA3)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="bg-white content-stretch flex items-center overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.06),0px_1px_1px_-0.5px_rgba(23,23,23,0.06),0px_0px_0px_1px_rgba(23,23,23,0.02)] shrink-0"
      data-name="Icon"
    >
      <ShieldUserLine />
    </div>
  );
}

function Text18() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 text-[16px] tracking-[-0.176px] w-full"
      data-name="Text"
    >
      <div
        className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#0e121b] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">Reduced legal risk</p>
      </div>
      <div
        className="flex flex-col justify-center leading-[24px] relative shrink-0 text-[#99a0ae] text-[0px] w-full whitespace-pre-wrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p
          className="mb-0"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          Minimize audit and breach exposure.
        </p>
        <p
          className="text-[#525866]"
          style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
        >
          No sensitive data on your servers.
        </p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div
      className="bg-[#f7f7f7] relative rounded-[24px] shrink-0 w-full"
      data-name="Card"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
          <Icon9 />
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative"
      data-name="Right"
    >
      <Card3 />
      <Card4 />
    </div>
  );
}

function Content8() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
      data-name="Content"
    >
      <Left />
      <Card2 />
      <Right1 />
    </div>
  );
}

function FeaturesSectionsLandingPage() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Features Sections [Landing Page]"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start px-[120px] py-[80px] relative w-full">
          <Title3 />
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function BrandItemsAtomic7() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Brand Items [Atomic]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Brand Items [Atomic]">
          <g id="Shape">
            <path d={svgPaths.p354dfa00} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p1f33ed80} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p39a36200} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p3fdbb600} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p3b43a400} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p2188cdf0} fill="var(--fill-0, #D1D1D1)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DividerLanding2() {
  return (
    <div
      className="bg-white content-stretch flex gap-[24px] items-center relative shrink-0 w-full"
      data-name="Divider [Landing]"
    >
      <div
        className="flex-[1_0_0] h-0 min-h-px min-w-px relative"
        data-name="Left"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 649 1"
          >
            <line
              id="Left"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="649"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <BrandItemsAtomic7 />
      <div
        className="flex-[1_0_0] h-0 min-h-px min-w-px relative"
        data-name="Right"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 649 1"
          >
            <line
              id="Left"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="649"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpeedMiniFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="speed-mini-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="speed-mini-fill">
          <path
            d={svgPaths.p18fe900}
            fill="var(--fill-0, #A4A4A4)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function BadgeLanding2() {
  return (
    <div
      className="bg-white content-stretch flex gap-[6px] items-center overflow-clip pl-[8px] pr-[10px] py-[4px] relative rounded-[9px] shadow-[0px_3px_3px_-1.5px_rgba(23,23,23,0.04),0px_1px_1px_-0.5px_rgba(23,23,23,0.04),0px_0px_0px_1px_#ebebeb] shrink-0"
      data-name="Badge [Landing]"
    >
      <SpeedMiniFill />
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">How it works?</p>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full"
      data-name="Title"
    >
      <BadgeLanding2 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0e121b] text-[40px] text-center tracking-[-0.4px] w-[min-content]"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="leading-[48px] whitespace-pre-wrap">
          How identity verification should work
        </p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[734px]"
      data-name="Content"
    >
      <Title4 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[16px] text-center tracking-[-0.176px] w-[528px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          PrivyID manages verification end-to-end, so your team gets trusted
          proof—without storing documents or managing compliance.
        </p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['Inter_Variable:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#0e121b] text-[20px] tracking-[-0.12px] w-[min-content]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[28px] whitespace-pre-wrap">User verifies</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#99a0ae] text-[16px] tracking-[-0.176px] w-[328px]"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Uploads ID and selfie securely
        </p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative"
      data-name="Item"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ebebeb] border-r border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic p-[40px] relative text-center w-full">
          <div
            className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center relative shrink-0 text-[#335cff] text-[20px] whitespace-nowrap"
            style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
          >
            <p className="leading-[28px]">01</p>
          </div>
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['Inter_Variable:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#0e121b] text-[20px] tracking-[-0.12px] w-[min-content]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[28px] whitespace-pre-wrap">PrivyID verifies</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#99a0ae] text-[16px] tracking-[-0.176px] w-[328px]"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Checks, encrypts, and stores data
        </p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative"
      data-name="Item"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ebebeb] border-r border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic p-[40px] relative text-center w-full">
          <div
            className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center relative shrink-0 text-[#1fc16b] text-[20px] whitespace-nowrap"
            style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
          >
            <p className="leading-[28px]">02</p>
          </div>
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['Inter_Variable:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[#0e121b] text-[20px] tracking-[-0.12px] w-[min-content]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[28px] whitespace-pre-wrap">You Get Token</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#99a0ae] text-[16px] tracking-[-0.176px] w-[328px]"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Receive proof—no documents
        </p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative"
      data-name="Item"
    >
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic p-[40px] relative text-center w-full">
          <div
            className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center relative shrink-0 text-[#7d52f4] text-[20px] whitespace-nowrap"
            style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
          >
            <p className="leading-[28px]">03</p>
          </div>
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function HowItWork() {
  return (
    <div
      className="bg-white relative rounded-[40px] shrink-0 w-full"
      data-name="How it work"
    >
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Item5 />
        <Item6 />
        <Item7 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
      />
    </div>
  );
}

function HowItWorksSectionsLandingPage() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="How It Works Sections [Landing Page]"
    >
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[120px] py-[80px] relative w-full">
          <Content9 />
          <HowItWork />
        </div>
      </div>
    </div>
  );
}

function BrandItemsAtomic8() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Brand Items [Atomic]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Brand Items [Atomic]">
          <g id="Shape">
            <path d={svgPaths.p354dfa00} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p1f33ed80} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p39a36200} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p3fdbb600} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p3b43a400} fill="var(--fill-0, #D1D1D1)" />
            <path d={svgPaths.p2188cdf0} fill="var(--fill-0, #D1D1D1)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DividerLanding3() {
  return (
    <div
      className="bg-white content-stretch flex gap-[24px] items-center relative shrink-0 w-full"
      data-name="Divider [Landing]"
    >
      <div
        className="flex-[1_0_0] h-0 min-h-px min-w-px relative"
        data-name="Left"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 649 1"
          >
            <line
              id="Left"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="649"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <BrandItemsAtomic8 />
      <div
        className="flex-[1_0_0] h-0 min-h-px min-w-px relative"
        data-name="Right"
      >
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 649 1"
          >
            <line
              id="Left"
              stroke="var(--stroke-0, #EBEBEB)"
              x2="649"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChatCheckFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chat-check-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="chat-check-fill">
          <path
            d={svgPaths.p253da270}
            fill="var(--fill-0, #A4A4A4)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function BadgeLanding3() {
  return (
    <div
      className="bg-[#f7f7f7] content-stretch flex gap-[6px] items-center overflow-clip pl-[8px] pr-[10px] py-[4px] relative rounded-[9px] shrink-0"
      data-name="Badge [Landing]"
    >
      <ChatCheckFill />
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Fast teams without risk</p>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full"
      data-name="Title"
    >
      <BadgeLanding3 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[40px] text-center tracking-[-0.4px] whitespace-nowrap"
        style={{
          fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
        }}
      >
        <p className="leading-[48px]">Real results from teams using PrivyID</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[734px]"
      data-name="Content"
    >
      <Title5 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[16px] text-center tracking-[-0.176px] w-[528px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          See how fintechs and platforms verified users faster, reduced
          compliance overhead, and eliminated identity data custody.
        </p>
      </div>
    </div>
  );
}

function ArrowLeftLongLine() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="arrow-left-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-left-long-line">
          <path
            d={svgPaths.p12c56280}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ButtonsCustom() {
  return (
    <div
      className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.16)] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[2px] relative rounded-[96px] shrink-0"
      data-name="Buttons (Custom)"
    >
      <ArrowLeftLongLine />
    </div>
  );
}

function ArrowRightLongLine() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="arrow-right-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-right-long-line">
          <path d={svgPaths.pb896380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsCustom1() {
  return (
    <div
      className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.16)] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[2px] relative rounded-[96px] shrink-0"
      data-name="Buttons (Custom)"
    >
      <ArrowRightLongLine />
    </div>
  );
}

function Change() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 top-[324px]"
      data-name="Change"
    >
      <ButtonsCustom />
      <ButtonsCustom1 />
    </div>
  );
}

function Image2() {
  return (
    <div
      className="bg-[#f7f7f7] h-[372px] overflow-clip relative rounded-[28px] shadow-[0px_40px_40px_-20px_rgba(23,23,23,0.06),0px_10px_10px_-5px_rgba(23,23,23,0.06),0px_6px_6px_-3px_rgba(23,23,23,0.04),0px_3px_3px_-1.5px_rgba(23,23,23,0.04),0px_1px_1px_-0.5px_rgba(23,23,23,0.04)] shrink-0 w-[288px]"
      data-name="Image"
    >
      <div
        className="-translate-x-1/2 absolute aspect-[288/372] bottom-0 left-1/2 top-0"
        data-name="Image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage}
        />
      </div>
      <div
        className="absolute bottom-0 h-[120px] left-0 right-0"
        data-name="Overlay"
      >
        <img
          alt=""
          className="absolute backdrop-blur-[2px] inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgOverlay}
        />
      </div>
      <Change />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_6px_0px_rgba(255,255,255,0.24)]" />
    </div>
  );
}

function Name1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[4px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative"
      data-name="Name"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#0e121b] text-[16px] tracking-[-0.176px] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">Daniel Okoye</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.084px] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px] whitespace-pre-wrap">Co-founder</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p2da04380}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function BrandItemsAtomic9() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0"
      data-name="Brand Items [Atomic]"
    >
      <Icon10 />
      <div
        className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p>
          <span className="leading-[24px]">Aurora</span>
          <span className="leading-[24px] text-black">™</span>
        </p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div
      className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full"
      data-name="Name"
    >
      <Name1 />
      <BrandItemsAtomic9 />
    </div>
  );
}

function Testimonial() {
  return (
    <div
      className="bg-[#f7f7f7] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[28px]"
      data-name="Testimonial"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
          <Name />
          <div
            className="flex flex-col font-['Inter_Variable:Medium',sans-serif] justify-center leading-[40px] not-italic relative shrink-0 text-[#525866] text-[32px] tracking-[-0.16px] w-full whitespace-pre-wrap"
            style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
          >
            <p className="mb-0">{`Everything we needed was already built in—verification, compliance, and token delivery. `}</p>
            <p className="text-[#0e121b]">It just worked out of the box</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stats2() {
  return (
    <div
      className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[28px] w-full"
      data-name="Stats"
    >
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] not-italic pb-[28px] pt-[32px] px-[32px] relative size-full">
          <div
            className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center relative shrink-0 text-[#525866] text-[16px] tracking-[-0.176px] w-full"
            style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
          >
            <p className="leading-[24px] whitespace-pre-wrap">Time to verify</p>
          </div>
          <div
            className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center relative shrink-0 text-[#0e121b] text-[40px] tracking-[-0.4px] w-full"
            style={{
              fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
            }}
          >
            <p className="leading-[48px] whitespace-pre-wrap">42s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stats3() {
  return (
    <div
      className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[28px] w-full"
      data-name="Stats"
    >
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] not-italic pb-[28px] pt-[32px] px-[32px] relative size-full">
          <div
            className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center relative shrink-0 text-[#525866] text-[16px] tracking-[-0.176px] w-full"
            style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
          >
            <p className="leading-[24px] whitespace-pre-wrap">
              Onboarding completion
            </p>
          </div>
          <div
            className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center relative shrink-0 text-[#0e121b] text-[40px] tracking-[-0.4px] w-full"
            style={{
              fontFeatureSettings: "\'cv09\', \'ss11\', \'calt\' 0, \'liga\' 0",
            }}
          >
            <p className="leading-[48px] whitespace-pre-wrap">+37%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stats1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0 w-[242px]"
      data-name="Stats"
    >
      <Stats2 />
      <Stats3 />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
      data-name="Content"
    >
      <Image2 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Testimonial />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Stats1 />
      </div>
    </div>
  );
}

function TestimonialsSectionsLandingPage() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Testimonials Sections [Landing Page]"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center px-[120px] py-[96px] relative w-full">
          <Content10 />
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Title6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Title"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[24px] text-center tracking-[-0.36px] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[32px] whitespace-pre-wrap">
          Ready to integrate?
        </p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <Title6 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-center tracking-[-0.176px] w-full"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[24px] whitespace-pre-wrap">
          Start by generating your API keys below
        </p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Generate API keys</p>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div
      className="bg-[#222530] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0"
      data-name="Buttons [1.1]"
    >
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5c5c] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">View documentation</p>
      </div>
    </div>
  );
}

function ArrowRightLongLine1() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="arrow-right-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-right-long-line">
          <path
            d={svgPaths.pb896380}
            fill="var(--fill-0, #A4A4A4)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Buttons3() {
  return (
    <div
      className="bg-white relative rounded-[10px] shrink-0"
      data-name="Buttons [1.1]"
    >
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
        <Text24 />
        <ArrowRightLongLine1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
      />
    </div>
  );
}

function Actions2() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0"
      data-name="Actions"
    >
      <Buttons2 />
      <Buttons3 />
    </div>
  );
}

function Cta() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center py-[80px] relative shrink-0 w-full"
      data-name="CTA"
    >
      <Text22 />
      <Actions2 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[32.094px] relative shrink-0 w-[85px]" data-name="Logo 3">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-[176.02%] left-[-7.92%] max-w-none top-[-38.42%] w-[118%]"
          src={imgLogo3}
        />
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full"
      data-name="Left"
    >
      <Logo1 />
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7b7b7b] text-[0px] tracking-[-0.176px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="text-[16px]">
          <span
            className="leading-[24px]"
            style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
          >
            Privacy-first identity verification for modern platforms.
            <br aria-hidden="true" />
          </span>
          <span
            className="leading-[24px] text-[#a3a3a3]"
            style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
          >
            All rights reserved.
          </span>
        </p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
      data-name="Text"
    >
      <div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'ss11\', \'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Get started free</p>
      </div>
    </div>
  );
}

function ArrowRightUpLongLine2() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="arrow-right-up-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-right-up-long-line" opacity="0.64">
          <path
            d={svgPaths.p2e949600}
            fill="var(--fill-0, #171717)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function FancyButtons2() {
  return (
    <div
      className="relative rounded-[12px] shrink-0"
      data-name="Fancy Buttons [1.1]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="content-stretch flex gap-[2px] items-center justify-center overflow-clip pl-[16px] pr-[14px] py-[10px] relative rounded-[inherit]">
        <Text26 />
        <ArrowRightUpLongLine2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(27,28,29,0.48),0px_0px_0px_1px_#242628]"
      />
    </div>
  );
}

function Text25() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative"
      data-name="Text"
    >
      <Left1 />
      <FancyButtons2 />
    </div>
  );
}

function Item8() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap"
      data-name="Item"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#7b7b7b] text-[12px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px]">Product</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Features</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Pricing</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Security</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div
      className="content-stretch flex flex-col font-['MADE_TOMMY:Regular',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap"
      data-name="Item"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#7b7b7b] text-[12px] text-center"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px]">Developers</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#a3a3a3] text-[14px] text-center tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Documentation</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#a3a3a3] text-[14px] text-center tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">API Ref</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.084px]"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Status</p>
      </div>
    </div>
  );
}

function ArrowRightUpLongLine3() {
  return (
    <div
      className="relative shrink-0 size-[12px]"
      data-name="arrow-right-up-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="arrow-right-up-long-line">
          <path
            d={svgPaths.p1a4a5f00}
            fill="var(--fill-0, #7B7B7B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Item11() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center relative shrink-0"
      data-name="Item"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Twitter</p>
      </div>
      <ArrowRightUpLongLine3 />
    </div>
  );
}

function ArrowRightUpLongLine4() {
  return (
    <div
      className="relative shrink-0 size-[12px]"
      data-name="arrow-right-up-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="arrow-right-up-long-line">
          <path
            d={svgPaths.p1a4a5f00}
            fill="var(--fill-0, #7B7B7B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Item12() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center relative shrink-0"
      data-name="Item"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Github</p>
      </div>
      <ArrowRightUpLongLine4 />
    </div>
  );
}

function ArrowRightUpLongLine5() {
  return (
    <div
      className="relative shrink-0 size-[12px]"
      data-name="arrow-right-up-long-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="arrow-right-up-long-line">
          <path
            d={svgPaths.p1a4a5f00}
            fill="var(--fill-0, #7B7B7B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Item13() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center relative shrink-0"
      data-name="Item"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] tracking-[-0.084px] whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[20px]">Linkedin</p>
      </div>
      <ArrowRightUpLongLine5 />
    </div>
  );
}

function Item10() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
      data-name="Item"
    >
      <div
        className="flex flex-col font-['MADE_TOMMY:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7b7b7b] text-[12px] text-center whitespace-nowrap"
        style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}
      >
        <p className="leading-[16px]">Social Media</p>
      </div>
      <Item11 />
      <Item12 />
      <Item13 />
    </div>
  );
}

function FooterSectionsLanding() {
  return (
    <div
      className="bg-[#0e121b] relative shrink-0 w-full"
      data-name="Footer Sections [Landing]"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[80px] items-start px-[120px] py-[80px] relative w-full">
          <Text25 />
          <Item8 />
          <Item9 />
          <Item10 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div
      className="bg-[#f7f7f7] content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Body"
    >
      <HeaderSection />
      <DividerLanding />
      <StatsSection />
      <DividerLanding1 />
      <FeaturesSectionsLandingPage />
      <DividerLanding2 />
      <HowItWorksSectionsLandingPage />
      <DividerLanding3 />
      <TestimonialsSectionsLandingPage />
      <Cta />
      <FooterSectionsLanding />
    </div>
  );
}

export default function PrivyIdHomepage() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="Privy ID Homepage"
    >
      <Body />
    </div>
  );
}
