import svgPaths from "./svg-z2xyjp3gzg";
import imgImage from "figma:asset/5edcb1a861c65164d55f1755ec34448e7fe9524f.png";

function BottomStatus() {
  return (
    <div className="absolute inset-[60%_-10%_0_70%]" data-name="Bottom Status [1.0]">
      <div className="absolute inset-[0_-6.25%_-18.75%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
          <g filter="url(#filter0_d_3_20601)" id="Bottom Status [1.0]">
            <path d={svgPaths.p37e68b00} fill="var(--fill-0, white)" id="Stroke" />
            <path d={svgPaths.p117fbd80} fill="var(--fill-0, #1FC16B)" id="Ellipse" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_3_20601" width="24" x="-3" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_20601" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_20601" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#e1e4ea] relative rounded-[999px] shrink-0 size-[40px]" data-name="Avatar [1.0]">
      <div className="absolute inset-0 rounded-[999px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
          <img alt="" className="absolute left-[-12.5%] max-w-none size-[111.25%] top-[-0.63%]" src={imgImage} />
        </div>
      </div>
      <BottomStatus />
    </div>
  );
}

function TextComponent() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.176px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Admin
      </p>
    </div>
  );
}

function TextComponent1() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a0ae] text-[12px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        support@privyid.com
      </p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TextComponent />
      <TextComponent1 />
    </div>
  );
}

function Support() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="support">
      <Avatar />
      <Name />
    </div>
  );
}

function CloseLine() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[32px]" data-name="close-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="close-line">
          <path d={svgPaths.p1d10c200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function TopBar() {
  return (
    <div className="bg-[#0e121b] h-[94px] relative shrink-0 w-full" data-name="Top Bar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <div className="-translate-y-1/2 absolute h-[391px] right-[-83px] top-[calc(50%-0.5px)] w-[400px]" data-name="Pattern">
            <div className="absolute inset-[-1.02%_-1%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 399">
                <g filter="url(#filter0_f_3_20593)" id="Pattern" opacity="0.12">
                  <path clipRule="evenodd" d={svgPaths.p35482980} fill="var(--fill-0, #F5F7FA)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="399" id="filter0_f_3_20593" width="408" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_3_20593" stdDeviation="2" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Support />
          <CloseLine />
        </div>
      </div>
    </div>
  );
}

function TextComponent2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a0ae] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        Today
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] relative w-full">
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-0.25px_-0.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 0.5">
                <path d="M0.25 0.25H195.75" id="Line 8" stroke="var(--stroke-0, #E1E4EA)" strokeLinecap="round" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <TextComponent2 />
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-0.25px_-0.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 0.5">
                <path d="M0.25 0.25H195.75" id="Line 8" stroke="var(--stroke-0, #E1E4EA)" strokeLinecap="round" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextComponent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>{`Hi! 👋 I'm here to help with your Verification inquiries at PrivyID. This will only take a few minutes.`}</p>
    </div>
  );
}

function ReceivedMessageContainer() {
  return (
    <div className="bg-white relative rounded-bl-[1px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Received message container">
      <div className="content-stretch flex items-start px-[20px] py-[8px] relative w-full">
        <TextComponent3 />
      </div>
    </div>
  );
}

function TextComponent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text Component">
      <p className="flex-[1_0_0] font-['MADE_TOMMY:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>{`Let's start with a quick question about your experience. Ready?`}</p>
    </div>
  );
}

function ReceivedMessageContainer1() {
  return (
    <div className="bg-white relative rounded-bl-[1px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Received message container">
      <div className="content-stretch flex items-start px-[20px] py-[8px] relative w-full">
        <TextComponent4 />
      </div>
    </div>
  );
}

function TextComponent5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
      <p className="font-['MADE_TOMMY:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525866] text-[12px]" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        12:49 PM
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[290px]" data-name="Container">
      <ReceivedMessageContainer />
      <ReceivedMessageContainer1 />
      <TextComponent5 />
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Chat">
      <Container1 />
    </div>
  );
}

function TypingComponent() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[37px] items-center overflow-clip px-[20px] py-[8px] relative rounded-bl-[16px] rounded-br-[1px] rounded-tl-[16px] rounded-tr-[16px] shrink-0" data-name="Typing Component-4">
      <div className="relative shrink-0 size-[8px]" data-name="01">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #E1E4EA)" id="01" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]" data-name="02">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #717784)" id="02" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]" data-name="03">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #717784)" id="02" r="3" />
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <TypingComponent />
    </div>
  );
}

function ChatArea() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full" data-name="Chat Area">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-end p-[10px] relative size-full">
          <Container />
          <Chat />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function AddLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="add-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="add-line">
          <path d={svgPaths.p301d0e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SectionIcon() {
  return (
    <div className="bg-[#171b34] relative rounded-[10px] shrink-0" data-name="Section Icon">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
        <AddLine />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(73,94,138,0.14)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function MicLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mic-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mic-line">
          <path d={svgPaths.p2a701032} fill="var(--fill-0, #99A0AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Basic() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[10px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['MADE_TOMMY:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
            Type Your Message...
          </p>
          <MicLine />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text Input [1.0]">
      <Basic />
    </div>
  );
}

function ButtonAndInputField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Button and Input Field">
      <SectionIcon />
      <TextInput />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['MADE_TOMMY:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "\'calt\' 0, \'liga\' 0" }}>
        <p className="leading-[20px]">Send</p>
      </div>
    </div>
  );
}

function SendPlaneLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="send-plane-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="send-plane-line">
          <path d={svgPaths.p3a513c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#171b34] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0" data-name="Buttons [1.0]">
      <Text />
      <SendPlaneLine />
    </div>
  );
}

function ChatInput() {
  return (
    <div className="content-stretch flex gap-[10px] h-[37px] items-center relative shrink-0 w-full" data-name="Chat Input">
      <ButtonAndInputField />
      <Buttons />
    </div>
  );
}

function ScreeningChat() {
  return (
    <div className="h-[930px] relative shrink-0 w-full" data-name="Screening Chat">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-end p-[16px] relative size-full">
          <ChatArea />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default function LiveChatDrawer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Live Chat Drawer">
      <TopBar />
      <ScreeningChat />
    </div>
  );
}