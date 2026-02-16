import styles from '../LiveChatDrawer.module.css';
import svgPaths from '../../imports/svg-z2xyjp3gzg';
import imgImage from 'figma:asset/5edcb1a861c65164d55f1755ec34448e7fe9524f.png';

interface LiveChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveChatDrawer({ isOpen, onClose }: LiveChatDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`${styles.drawerOverlay} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <div className={styles.topBarContent}>
            {/* Pattern Background */}
            <div className={styles.pattern}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 408 399" style={{ width: '100%', height: '100%' }}>
                <g filter="url(#filter0_f_3_20593)" opacity="0.12">
                  <path clipRule="evenodd" d={svgPaths.p35482980} fill="#F5F7FA" fillRule="evenodd" />
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

            {/* Support Info */}
            <div className={styles.support}>
              <div className={styles.avatar}>
                <img src={imgImage} alt="Admin" />
                <div className={styles.bottomStatus}>
                  <svg className={styles.statusIndicator} fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
                    <g filter="url(#filter0_d_3_20601)">
                      <path d={svgPaths.p37e68b00} fill="white" />
                      <path d={svgPaths.p117fbd80} fill="#1FC16B" />
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
              <div className={styles.name}>
                <div className={styles.adminName}>Admin</div>
                <div className={styles.adminEmail}>support@privyid.com</div>
              </div>
            </div>

            {/* Close Button */}
            <button className={styles.closeButton} onClick={onClose}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 32 32" style={{ width: '100%', height: '100%' }}>
                <path d={svgPaths.p1d10c200} fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Screen */}
        <div className={styles.screeningChat}>
          <div className={styles.chatContainer}>
            {/* Chat Area */}
            <div className={styles.chatArea}>
              <div className={styles.chatMessages}>
                {/* Date Divider */}
                <div className={styles.dateDivider}>
                  <div className={styles.dividerLine} />
                  <div className={styles.dividerText}>Today</div>
                  <div className={styles.dividerLine} />
                </div>

                {/* Chat Messages */}
                <div className={styles.chat}>
                  <div className={styles.messageContainer}>
                    <div className={styles.receivedMessage}>
                      <div className={styles.messageText}>
                        Hi! 👋 I'm here to help with your Verification inquiries at PrivyID. This will only take a few minutes.
                      </div>
                    </div>
                    <div className={styles.receivedMessage}>
                      <div className={styles.messageText}>
                        Let's start with a quick question about your experience. Ready?
                      </div>
                    </div>
                    <div className={styles.timestamp}>12:49 PM</div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className={styles.typingContainer}>
                  <div className={styles.typing}>
                    <div className={styles.typingDot} />
                    <div className={styles.typingDot} />
                    <div className={styles.typingDot} />
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className={styles.chatInput}>
              <div className={styles.buttonAndInputField}>
                <div className={styles.sectionIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20" style={{ width: '20px', height: '20px' }}>
                    <path d={svgPaths.p301d0e00} fill="white" />
                  </svg>
                </div>
                <div className={styles.textInput}>
                  <div className={styles.inputBasic}>
                    <input type="text" placeholder="Type Your Message..." />
                    <div className={styles.micIcon}>
                      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20" style={{ width: '100%', height: '100%' }}>
                        <path d={svgPaths.p2a701032} fill="#99A0AE" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.sendButton}>
                <span className={styles.sendButtonText}>Send</span>
                <div className={styles.sendIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20" style={{ width: '100%', height: '100%' }}>
                    <path d={svgPaths.p3a513c00} fill="white" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
