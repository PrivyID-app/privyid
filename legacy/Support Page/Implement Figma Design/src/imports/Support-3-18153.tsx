import svgPaths from "./svg-ww4zbuz9ia";
import imgImage from "figma:asset/839477ecfb128fb97d3557cc29495137f428498f.png";

function Empty() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Empty">
          <g clipPath="url(#clip0_1_16204)">
            <rect fill="var(--fill-0, #E1E4EA)" height="40" rx="20" width="40" />
            <g id="BG">
              <rect fill="#E1E4EA" height="40" width="40" />
            </g>
            <path d={svgPaths.p9ef6200} data-figma-bg-blur-radius="3.99998" fill="var(--fill-0, white)" id="Building" opacity="0.48" />
            <path d={svgPaths.p20630c00} fill="var(--fill-0, #E1E4EA)" id="Square" />
            <path d={svgPaths.p1c62b800} fill="var(--fill-0, #E1E4EA)" id="Square_2" />
            <path d={svgPaths.p337ba600} fill="var(--fill-0, #E1E4EA)" id="Square_3" />
            <g data-figma-bg-blur-radius="8" filter="url(#filter1_i_1_16204)" id="Building_2">
              <path d={svgPaths.p29270c80} fill="var(--fill-0, white)" fillOpacity="0.8" />
            </g>
            <path d={svgPaths.p3fe06500} fill="var(--fill-0, #E1E4EA)" id="Square_4" />
            <path d={svgPaths.p21461a00} fill="var(--fill-0, #E1E4EA)" id="Square_5" />
            <path d={svgPaths.pcba7080} fill="var(--fill-0, #E1E4EA)" id="Square_6" />
            <path d={svgPaths.p1b0974f0} fill="var(--fill-0, #E1E4EA)" id="Square_7" />
            <path d={svgPaths.p2bad1c00} fill="var(--fill-0, #E1E4EA)" id="Square_8" />
            <path d={svgPaths.p285a22f0} fill="var(--fill-0, #E1E4EA)" id="Square_9" />
            <path d={svgPaths.p2f5f3f0} fill="var(--fill-0, #E1E4EA)" id="Square_10" />
            <path d={svgPaths.p3e30cd00} fill="var(--fill-0, #E1E4EA)" id="Square_11" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_1_1_16204_clip_path" transform="translate(-1.00002 -11.7858)">
            <path d={svgPaths.p9ef6200} />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55.0001" id="filter1_i_1_16204" width="34.9997" x="7" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_16204" />
          </filter>
          <clipPath id="bgblur_2_1_16204_clip_path" transform="translate(-7 0)">
            <path d={svgPaths.p29270c80} />
          </clipPath>
          <clipPath id="clip0_1_16204">
            <rect fill="white" height="40" rx="20" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Name">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Company Name
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[40px] items-start min-h-px min-w-px relative" data-name="Text">
      <Name />
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525866] text-[12px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Company Slogan
      </p>
    </div>
  );
}

function ExpandLeftRightLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="expand-left-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="expand-left-right-line">
          <path d={svgPaths.p1cb32180} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CompactButton() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0" data-name="Compact Button [1.0]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit]">
        <ExpandLeftRightLine />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function HeaderCardSidebar() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-[248px]" data-name="Header Card [Sidebar] [1.0]">
      <Empty />
      <Text />
      <CompactButton />
    </div>
  );
}

function SidebarHeaderSidebar() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[12px] relative shrink-0 w-[272px]" data-name="Sidebar Header [Sidebar] [1.0]">
      <HeaderCardSidebar />
      <div className="absolute bottom-0 h-0 left-[20px] right-[20px]" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E4EA)" x2="232" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextDivider() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Divider">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative w-full">
          <p className="flex-[1_0_0] font-['MADE_TOMMY:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[12px] tracking-[0.48px] uppercase whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
            Main
          </p>
        </div>
      </div>
    </div>
  );
}

function DashboardLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="dashboard-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="dashboard-line">
          <path d={svgPaths.p27f362f0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Overview
      </p>
    </div>
  );
}

function SidebarItemsSidebar() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <DashboardLine />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function File3Line() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-3-line">
          <path d={svgPaths.p3f5e3200} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Single Verification
      </p>
    </div>
  );
}

function SidebarItemsSidebar1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <File3Line />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function FileTextLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text-line">
          <path d={svgPaths.p1eb5bc00} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Batch Verification
      </p>
    </div>
  );
}

function SidebarItemsSidebar2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <FileTextLine />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function HistoryLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="history-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="history-line">
          <path d={svgPaths.p1e2ab800} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        History
      </p>
    </div>
  );
}

function SidebarItemsSidebar3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <HistoryLine />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function ExpandLeftRightLine1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="expand-left-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="expand-left-right-line">
          <path d={svgPaths.p1cb32180} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>{`API & Developers`}</p>
    </div>
  );
}

function SidebarItemsSidebar4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <ExpandLeftRightLine1 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Key2Line() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="key-2-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="key-2-line">
          <path d={svgPaths.pde5c780} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Tokens
      </p>
    </div>
  );
}

function SidebarItemsSidebar5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Key2Line />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Navigation">
      <SidebarItemsSidebar />
      <SidebarItemsSidebar1 />
      <SidebarItemsSidebar2 />
      <SidebarItemsSidebar3 />
      <SidebarItemsSidebar4 />
      <SidebarItemsSidebar5 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Main Content">
      <TextDivider />
      <Navigation />
    </div>
  );
}

function TextDivider1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Divider">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative w-full">
          <p className="flex-[1_0_0] font-['MADE_TOMMY:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[12px] tracking-[0.48px] uppercase whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
            others
          </p>
        </div>
      </div>
    </div>
  );
}

function Settings2Line() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="settings-2-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="settings-2-line">
          <path d={svgPaths.p37cb6600} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Settings
      </p>
    </div>
  );
}

function SidebarItemsSidebar6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Settings2Line />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function HeadphoneLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="headphone-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="headphone-line">
          <path d={svgPaths.p19d58300} fill="var(--fill-0, #171B34)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text">
      <p className="font-['MADE_TOMMY:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Support
      </p>
    </div>
  );
}

function ArrowRightSLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-s-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-s-line">
          <path d={svgPaths.p2a044f00} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarItemsSidebar7() {
  return (
    <div className="bg-[#f5f7fa] relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <HeadphoneLine />
          <Text8 />
          <ArrowRightSLine />
          <div className="absolute bg-[#171b34] h-[20px] left-[-20px] rounded-br-[4px] rounded-tr-[4px] top-[8px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Navigation">
      <SidebarItemsSidebar6 />
      <SidebarItemsSidebar7 />
    </div>
  );
}

function Timer2Line() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="timer-2-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="timer-2-line">
          <path d={svgPaths.p1a7c6c80} fill="var(--fill-0, #1FC16B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[40px]" data-name="Key Icons [1.0]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Timer2Line />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0faec] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function TextComponent() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Business Verified
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Container">
      <TextComponent />
    </div>
  );
}

function VerificationStatus() {
  return (
    <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Verification Status">
      <div aria-hidden="true" className="absolute border border-[#1fc16b] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <KeyIcons />
          <Container />
        </div>
      </div>
    </div>
  );
}

function VerContainer() {
  return (
    <div className="content-stretch flex flex-col items-start py-[24px] relative shrink-0 w-full" data-name="Ver Container">
      <VerificationStatus />
    </div>
  );
}

function SideContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Side Content">
      <TextDivider1 />
      <Navigation1 />
      <VerContainer />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[20px] px-[20px] relative size-full">
          <MainContent />
          <SideContent />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#c0eaff] relative rounded-[999px] shrink-0 size-[40px]" data-name="Avatar [1.0]">
      <div className="absolute inset-0 rounded-[999px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function VerifiedFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="verified-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="verified-fill">
          <path d={svgPaths.p3e78a700} fill="var(--fill-0, #47C2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Name">
      <p className="font-['MADE_TOMMY:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Emma Wright
      </p>
      <VerifiedFill />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[40px] items-start min-h-px min-w-px relative" data-name="Text">
      <Name1 />
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525866] text-[12px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        emma@apex.com
      </p>
    </div>
  );
}

function ArrowRightSLine1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-s-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-s-line">
          <path d={svgPaths.p2a044f00} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CompactButton1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[6px] shrink-0" data-name="Compact Button [1.0]">
      <ArrowRightSLine1 />
    </div>
  );
}

function UserProfileCardSidebar() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-[248px]" data-name="User Profile Card [Sidebar] [1.0]">
      <Avatar />
      <Text9 />
      <CompactButton1 />
    </div>
  );
}

function SidebarFooterSidebar() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative shrink-0 w-[272px]" data-name="Sidebar Footer [Sidebar] [1.0]">
      <UserProfileCardSidebar />
      <div className="absolute h-0 left-[20px] right-[20px] top-px" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E4EA)" x2="232" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[16px] shrink-0 w-[272px]" data-name="Sidebar [Navigation] [1.0]">
      <SidebarHeaderSidebar />
      <Content />
      <SidebarFooterSidebar />
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Name">
      <p className="font-['MADE_TOMMY:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#0e121b] text-[18px] tracking-[-0.27px] w-full" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Support Center
      </p>
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>{`Get help with your KYC & KYB integration and operations`}</p>
    </div>
  );
}

function TopbarItemButtonTopbar() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Topbar Item Button [Topbar] [1.0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Topbar Item Button [Topbar] [1.0]">
          <path d={svgPaths.p6e01900} fill="var(--fill-0, white)" />
          <g id="notification-3-line">
            <path d={svgPaths.p310a9cb0} fill="var(--fill-0, #525866)" id="Vector" />
          </g>
          <g filter="url(#filter0_d_3_16395)" id="Ellipse 1">
            <circle cx="26" cy="14" fill="var(--fill-0, #FB3748)" r="2" />
            <circle cx="26" cy="14" r="3" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter0_d_3_16395" width="12" x="20" y="9">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_16395" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_16395" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[4]" data-name="Page Header [1.0]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[10px] py-[20px] relative w-full">
          <Name2 />
          <TopbarItemButtonTopbar />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e1e4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Chat1Line() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="chat-1-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="chat-1-line">
          <path d={svgPaths.p37e5be80} fill="var(--fill-0, #1FC16B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Name">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Live Chat
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[40px] items-start min-h-px min-w-px relative" data-name="Text">
      <Name3 />
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525866] text-[12px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Online now
      </p>
    </div>
  );
}

function HeaderCardSidebar1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Header Card [Sidebar] [1.0]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Chat1Line />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function SidebarHeaderSidebar1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Sidebar Header [Sidebar] [1.0]">
      <HeaderCardSidebar1 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        <p className="leading-[20px]">Start Chat</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Buttons [1.0]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative w-full">
          <Text11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function SupportCard() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" data-name="Support Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <SidebarHeaderSidebar1 />
          <Buttons />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e1e4ea] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MailLine() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="mail-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="mail-line">
          <path d={svgPaths.p2d8e3700} fill="var(--fill-0, #47C2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Name">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Email Support
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[40px] items-start min-h-px min-w-px relative" data-name="Text">
      <Name4 />
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525866] text-[12px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        24-48h response
      </p>
    </div>
  );
}

function HeaderCardSidebar2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Header Card [Sidebar] [1.0]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <MailLine />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function SidebarHeaderSidebar2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Sidebar Header [Sidebar] [1.0]">
      <HeaderCardSidebar2 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        <p className="leading-[20px]">support@privyid.com</p>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Buttons [1.0]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative w-full">
          <Text13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function SupportCard1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" data-name="Support Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <SidebarHeaderSidebar2 />
          <Buttons1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e1e4ea] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PhoneLine() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="phone-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="phone-line">
          <path d={svgPaths.p1c02b000} fill="var(--fill-0, #7D52F4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Name">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Phone Support
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[40px] items-start min-h-px min-w-px relative" data-name="Text">
      <Name5 />
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525866] text-[12px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Mon-Fri 9AM-6PM
      </p>
    </div>
  );
}

function HeaderCardSidebar3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Header Card [Sidebar] [1.0]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <PhoneLine />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function SidebarHeaderSidebar3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Sidebar Header [Sidebar] [1.0]">
      <HeaderCardSidebar3 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        <p className="leading-[20px]">+234 902 123 4567</p>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Buttons [1.0]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative w-full">
          <Text15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function SupportCard2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" data-name="Support Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <SidebarHeaderSidebar3 />
          <Buttons2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e1e4ea] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CardWrapper() {
  return (
    <div className="content-stretch flex gap-[16px] h-[128px] items-start relative shrink-0 w-full z-[3]" data-name="Card Wrapper">
      <SupportCard />
      <SupportCard1 />
      <SupportCard2 />
    </div>
  );
}

function TextComponent1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0e121b] text-[16px] text-center tracking-[-0.176px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Support Resources
      </p>
    </div>
  );
}

function TextComponent2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Browse documentation, guides, and community resources
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[500px]" data-name="Title">
      <TextComponent1 />
      <TextComponent2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center py-[10px] relative shrink-0 w-full z-[2]" data-name="Container">
      <Title />
    </div>
  );
}

function TextComponent3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a0ae] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Submit Ticket
      </p>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <TextComponent3 />
    </div>
  );
}

function TabMenuHorizontalItems() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Tab Menu Horizontal Items [1.0]">
      <Text16 />
    </div>
  );
}

function TextComponent4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a0ae] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Tickets
      </p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <TextComponent4 />
    </div>
  );
}

function TabMenuHorizontalItems1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Tab Menu Horizontal Items [1.0]">
      <Text17 />
    </div>
  );
}

function TextComponent5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Resources
      </p>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <TextComponent5 />
    </div>
  );
}

function TabMenuHorizontalItems2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Tab Menu Horizontal Items [1.0]">
      <Text18 />
      <div className="absolute bottom-[-14px] h-0 left-0 right-0" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 2">
            <line id="Line" stroke="var(--stroke-0, #171B34)" strokeWidth="2" x2="65" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TabMenuHorizontal() {
  return (
    <div className="bg-white content-stretch flex gap-[24px] items-start py-[14px] relative shrink-0 w-full" data-name="Tab Menu Horizontal [1.0]">
      <div aria-hidden="true" className="absolute border-[#e1e4ea] border-b border-solid inset-0 pointer-events-none" />
      <TabMenuHorizontalItems />
      <TabMenuHorizontalItems1 />
      <TabMenuHorizontalItems2 />
    </div>
  );
}

function BookLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="book-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="book-line">
          <path d={svgPaths.pa135400} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextComponent6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#525866] text-[16px] text-center tracking-[-0.176px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>{`Documentation & Guides`}</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[500px]" data-name="Title">
      <BookLine />
      <TextComponent6 />
    </div>
  );
}

function CodeLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="code-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="code-line">
          <path d={svgPaths.p979ba00} fill="var(--fill-0, #47C2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <CodeLine />
      <ExternalLinkLine />
    </div>
  );
}

function TextComponent7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        API Documentation
      </p>
    </div>
  );
}

function TextComponent8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Complete API reference with code examples
      </p>
    </div>
  );
}

function TopContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top />
      <TextComponent7 />
      <TextComponent8 />
    </div>
  );
}

function ArrowRightLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Documentation
      </p>
      <ArrowRightLine />
    </div>
  );
}

function DocumentationCard() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer />
      <LinkButtons />
    </div>
  );
}

function BookLine1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="book-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="book-line">
          <path d={svgPaths.pa135400} fill="var(--fill-0, #1FC16B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <BookLine1 />
      <ExternalLinkLine1 />
    </div>
  );
}

function TextComponent9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Getting Started Guide
      </p>
    </div>
  );
}

function TextComponent10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Step-by-step integration tutorials
      </p>
    </div>
  );
}

function TopContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top1 />
      <TextComponent9 />
      <TextComponent10 />
    </div>
  );
}

function ArrowRightLine1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Documentation
      </p>
      <ArrowRightLine1 />
    </div>
  );
}

function DocumentationCard1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer1 />
      <LinkButtons1 />
    </div>
  );
}

function Vidicon2Line() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="vidicon-2-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="vidicon-2-line">
          <path d={svgPaths.p267ce80} fill="var(--fill-0, #7D52F4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <Vidicon2Line />
      <ExternalLinkLine2 />
    </div>
  );
}

function TextComponent11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Video Tutorials
      </p>
    </div>
  );
}

function TextComponent12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Watch how to integrate and use PrivyID
      </p>
    </div>
  );
}

function TopContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top2 />
      <TextComponent11 />
      <TextComponent12 />
    </div>
  );
}

function ArrowRightLine2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Learning
      </p>
      <ArrowRightLine2 />
    </div>
  );
}

function DocumentationCard2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer2 />
      <LinkButtons2 />
    </div>
  );
}

function GroupLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="group-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="group-line">
          <path d={svgPaths.p3ef78200} fill="var(--fill-0, #46539F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <GroupLine />
      <ExternalLinkLine3 />
    </div>
  );
}

function TextComponent13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Community Forum
      </p>
    </div>
  );
}

function TextComponent14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Connect with other developers and merchants
      </p>
    </div>
  );
}

function TopContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top3 />
      <TextComponent13 />
      <TextComponent14 />
    </div>
  );
}

function ArrowRightLine3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Community
      </p>
      <ArrowRightLine3 />
    </div>
  );
}

function DocumentationCard3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer3 />
      <LinkButtons3 />
    </div>
  );
}

function GlobalLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="global-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="global-line">
          <path d={svgPaths.p463340} fill="var(--fill-0, #7D52F4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <GlobalLine />
      <ExternalLinkLine4 />
    </div>
  );
}

function TextComponent15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Status Page
      </p>
    </div>
  );
}

function TextComponent16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Real-time platform status and uptime
      </p>
    </div>
  );
}

function TopContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top4 />
      <TextComponent15 />
      <TextComponent16 />
    </div>
  );
}

function ArrowRightLine4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Documentation
      </p>
      <ArrowRightLine4 />
    </div>
  );
}

function DocumentationCard4() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer4 />
      <LinkButtons4 />
    </div>
  );
}

function FileTextLine1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-text-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file-text-line">
          <path d={svgPaths.p1f69f380} fill="var(--fill-0, #124B68)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <FileTextLine1 />
      <ExternalLinkLine5 />
    </div>
  );
}

function TextComponent17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Changelog
      </p>
    </div>
  );
}

function TextComponent18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Latest features and updates
      </p>
    </div>
  );
}

function TopContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top5 />
      <TextComponent17 />
      <TextComponent18 />
    </div>
  );
}

function ArrowRightLine5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Update
      </p>
      <ArrowRightLine5 />
    </div>
  );
}

function DocumentationCard5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer5 />
      <LinkButtons5 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Wrapper">
      <DocumentationCard />
      <DocumentationCard1 />
      <DocumentationCard2 />
      <DocumentationCard3 />
      <DocumentationCard4 />
      <DocumentationCard5 />
    </div>
  );
}

function FileListLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-list-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file-list-line">
          <path d={svgPaths.p286ad600} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextComponent19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#525866] text-[16px] text-center tracking-[-0.176px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        KYC Resources
      </p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[500px]" data-name="Title">
      <FileListLine />
      <TextComponent19 />
    </div>
  );
}

function FileList3Line() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-list-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file-list-3-line">
          <path d={svgPaths.pe5b62f2} fill="var(--fill-0, #47C2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <FileList3Line />
      <ExternalLinkLine6 />
    </div>
  );
}

function TextComponent20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        KYC Best Practices
      </p>
    </div>
  );
}

function TextComponent21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Industry standards for identity verification
      </p>
    </div>
  );
}

function TopContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top6 />
      <TextComponent20 />
      <TextComponent21 />
    </div>
  );
}

function ArrowRightLine6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Learn More
      </p>
      <ArrowRightLine6 />
    </div>
  );
}

function DocumentationCard6() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer6 />
      <LinkButtons6 />
    </div>
  );
}

function BookLine2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="book-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="book-line">
          <path d={svgPaths.pa135400} fill="var(--fill-0, #1FC16B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <BookLine2 />
      <ExternalLinkLine7 />
    </div>
  );
}

function TextComponent22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Document Quality Guide
      </p>
    </div>
  );
}

function TextComponent23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Ensure high verification success rates
      </p>
    </div>
  );
}

function TopContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top7 />
      <TextComponent22 />
      <TextComponent23 />
    </div>
  );
}

function ArrowRightLine7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Learn More
      </p>
      <ArrowRightLine7 />
    </div>
  );
}

function DocumentationCard7() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer7 />
      <LinkButtons7 />
    </div>
  );
}

function QrScanLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="qr-scan-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="qr-scan-line">
          <path d={svgPaths.p13415b80} fill="var(--fill-0, #7D52F4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkLine8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link-line">
          <path d={svgPaths.p2889e9b0} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <QrScanLine />
      <ExternalLinkLine8 />
    </div>
  );
}

function TextComponent24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Liveness Detection Tips
      </p>
    </div>
  );
}

function TextComponent25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Optimize biometric verification
      </p>
    </div>
  );
}

function TopContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Top Container">
      <Top8 />
      <TextComponent24 />
      <TextComponent25 />
    </div>
  );
}

function ArrowRightLine8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-line">
          <path d={svgPaths.p37812000} fill="var(--fill-0, #1A5AEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkButtons8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link Buttons [1.0]">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a5aef] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Learning
      </p>
      <ArrowRightLine8 />
    </div>
  );
}

function DocumentationCard8() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[178px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Documentation Card">
      <TopContainer8 />
      <LinkButtons8 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Wrapper">
      <DocumentationCard6 />
      <DocumentationCard7 />
      <DocumentationCard8 />
    </div>
  );
}

function Download2Line() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="download-2-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="download-2-line">
          <path d={svgPaths.p10f00a00} fill="var(--fill-0, #525866)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextComponent26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#525866] text-[16px] text-center tracking-[-0.176px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Downloadable Resources
      </p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[500px]" data-name="Title">
      <Download2Line />
      <TextComponent26 />
    </div>
  );
}

function FileTextLine2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="file-text-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="file-text-line">
          <path d={svgPaths.p24b45f00} fill="var(--fill-0, #1DAF9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons1() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0" data-name="Key Icons [1.0]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[inherit]">
        <FileTextLine2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function TextComponent27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Integration Checklist
      </p>
    </div>
  );
}

function TextComponent28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        PDF • 2.5 MB
      </p>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Title">
      <TextComponent27 />
      <TextComponent28 />
    </div>
  );
}

function Top9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Top">
      <KeyIcons1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Title4 />
      </div>
    </div>
  );
}

function Radio() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Radio [1.0]">
      <div className="absolute bg-[#e1e4ea] inset-[10%] rounded-[999px]" data-name="bg" />
      <div className="absolute bg-white inset-[17.5%] rounded-[999px] shadow-[0px_2px_2px_0px_rgba(27,28,29,0.12)]" data-name="box" />
    </div>
  );
}

function ServiceType() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[40px] items-center overflow-clip p-[24px] relative rounded-[24px] shrink-0 w-[547px]" data-name="Service Type">
      <Top9 />
      <Radio />
      <div className="-translate-y-1/2 absolute h-[391px] right-[-57px] top-[calc(50%+15.5px)] w-[400px]" data-name="Pattern">
        <div className="absolute inset-[-1.02%_-1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 399">
            <g filter="url(#filter0_f_3_18160)" id="Pattern" opacity="0.12">
              <path clipRule="evenodd" d={svgPaths.p35482980} fill="var(--fill-0, #222530)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="399" id="filter0_f_3_18160" width="408" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_3_18160" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function FileTextLine3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="file-text-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="file-text-line">
          <path d={svgPaths.p24b45f00} fill="var(--fill-0, #1DAF9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons2() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0" data-name="Key Icons [1.0]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[inherit]">
        <FileTextLine3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function TextComponent29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Security Whitepaper
      </p>
    </div>
  );
}

function TextComponent30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        PDF • 5.2 MB
      </p>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Title">
      <TextComponent29 />
      <TextComponent30 />
    </div>
  );
}

function Top10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Top">
      <KeyIcons2 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Title5 />
      </div>
    </div>
  );
}

function Radio1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Radio [1.0]">
      <div className="absolute bg-[#e1e4ea] inset-[10%] rounded-[999px]" data-name="bg" />
      <div className="absolute bg-white inset-[17.5%] rounded-[999px] shadow-[0px_2px_2px_0px_rgba(27,28,29,0.12)]" data-name="box" />
    </div>
  );
}

function ServiceType1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[40px] items-center overflow-clip p-[24px] relative rounded-[24px] shrink-0 w-[547px]" data-name="Service Type">
      <Top10 />
      <Radio1 />
      <div className="-translate-y-1/2 absolute h-[391px] right-[-57px] top-[calc(50%+15.5px)] w-[400px]" data-name="Pattern">
        <div className="absolute inset-[-1.02%_-1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 399">
            <g filter="url(#filter0_f_3_18160)" id="Pattern" opacity="0.12">
              <path clipRule="evenodd" d={svgPaths.p35482980} fill="var(--fill-0, #222530)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="399" id="filter0_f_3_18160" width="408" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_3_18160" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CodeLine1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="code-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="code-line">
          <path d={svgPaths.p73ae080} fill="var(--fill-0, #1DAF9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons3() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0" data-name="Key Icons [1.0]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[inherit]">
        <CodeLine1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function TextComponent31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        SDK Examples
      </p>
    </div>
  );
}

function TextComponent32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        ZIP • 12 MB
      </p>
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Title">
      <TextComponent31 />
      <TextComponent32 />
    </div>
  );
}

function Top11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Top">
      <KeyIcons3 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Title6 />
      </div>
    </div>
  );
}

function Radio2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Radio [1.0]">
      <div className="absolute bg-[#e1e4ea] inset-[10%] rounded-[999px]" data-name="bg" />
      <div className="absolute bg-white inset-[17.5%] rounded-[999px] shadow-[0px_2px_2px_0px_rgba(27,28,29,0.12)]" data-name="box" />
    </div>
  );
}

function ServiceType2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[40px] items-center overflow-clip p-[24px] relative rounded-[24px] shrink-0 w-[547px]" data-name="Service Type">
      <Top11 />
      <Radio2 />
      <div className="-translate-y-1/2 absolute h-[391px] right-[-57px] top-[calc(50%+15.5px)] w-[400px]" data-name="Pattern">
        <div className="absolute inset-[-1.02%_-1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 399">
            <g filter="url(#filter0_f_3_18160)" id="Pattern" opacity="0.12">
              <path clipRule="evenodd" d={svgPaths.p35482980} fill="var(--fill-0, #222530)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="399" id="filter0_f_3_18160" width="408" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_3_18160" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function FileTextLine4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="file-text-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="file-text-line">
          <path d={svgPaths.p24b45f00} fill="var(--fill-0, #1DAF9C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function KeyIcons4() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0" data-name="Key Icons [1.0]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[inherit]">
        <FileTextLine4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function TextComponent33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Compliance Guide
      </p>
    </div>
  );
}

function TextComponent34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#525866] text-[16px] tracking-[-0.176px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        PDF • 3.8 MB
      </p>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Title">
      <TextComponent33 />
      <TextComponent34 />
    </div>
  );
}

function Top12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Top">
      <KeyIcons4 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Title7 />
      </div>
    </div>
  );
}

function Radio3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Radio [1.0]">
      <div className="absolute bg-[#e1e4ea] inset-[10%] rounded-[999px]" data-name="bg" />
      <div className="absolute bg-white inset-[17.5%] rounded-[999px] shadow-[0px_2px_2px_0px_rgba(27,28,29,0.12)]" data-name="box" />
    </div>
  );
}

function ServiceType3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[40px] items-center overflow-clip p-[24px] relative rounded-[24px] shrink-0 w-[547px]" data-name="Service Type">
      <Top12 />
      <Radio3 />
      <div className="-translate-y-1/2 absolute h-[391px] right-[-57px] top-[calc(50%+15.5px)] w-[400px]" data-name="Pattern">
        <div className="absolute inset-[-1.02%_-1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 399">
            <g filter="url(#filter0_f_3_18160)" id="Pattern" opacity="0.12">
              <path clipRule="evenodd" d={svgPaths.p35482980} fill="var(--fill-0, #222530)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="399" id="filter0_f_3_18160" width="408" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_3_18160" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Wrapper">
      <ServiceType />
      <ServiceType1 />
      <ServiceType2 />
      <ServiceType3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full" data-name="Container">
      <Title1 />
      <Wrapper />
      <Title2 />
      <Wrapper1 />
      <Title3 />
      <Wrapper2 />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px overflow-clip relative rounded-[16px] w-full z-[1]" data-name="Content Wrapper">
      <TabMenuHorizontal />
      <Container2 />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" data-name="Content Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] isolate items-center pb-[16px] px-[14px] relative size-full">
          <PageHeader />
          <CardWrapper />
          <Container1 />
          <ContentWrapper />
        </div>
      </div>
    </div>
  );
}

export default function Support() {
  return (
    <div className="bg-[#f5f7fa] content-stretch flex gap-[16px] items-start p-[6px] relative size-full" data-name="Support">
      <SidebarNavigation />
      <ContentSection />
    </div>
  );
}