import { useState } from 'react';
import styles from '../Support.module.css';
import svgPaths from '../../imports/svg-3ish743wpj';
import imgImage from 'figma:asset/839477ecfb128fb97d3557cc29495137f428498f.png';
import LiveChatDrawer from './LiveChatDrawer';

export default function SupportVanilla() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className={styles.support}>
      {/* Sidebar Navigation */}
      <div className={styles.sidebar}>
        {/* Sidebar Header */}
        <div className={styles.sidebarHeader}>
          <div className={styles.headerCard}>
            <div className={styles.companyLogo}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 40 40" style={{ width: '100%', height: '100%' }}>
                <g clipPath="url(#clip0_1_16204)">
                  <rect fill="#E1E4EA" height="40" rx="20" width="40" />
                  <path d={svgPaths.p9ef6200} fill="white" opacity="0.48" />
                  <path d={svgPaths.p20630c00} fill="#E1E4EA" />
                  <path d={svgPaths.p1c62b800} fill="#E1E4EA" />
                  <path d={svgPaths.p337ba600} fill="#E1E4EA" />
                  <path d={svgPaths.p29270c80} fill="white" fillOpacity="0.8" />
                  <path d={svgPaths.p3fe06500} fill="#E1E4EA" />
                  <path d={svgPaths.p21461a00} fill="#E1E4EA" />
                  <path d={svgPaths.pcba7080} fill="#E1E4EA" />
                  <path d={svgPaths.p1b0974f0} fill="#E1E4EA" />
                  <path d={svgPaths.p2bad1c00} fill="#E1E4EA" />
                  <path d={svgPaths.p285a22f0} fill="#E1E4EA" />
                  <path d={svgPaths.p2f5f3f0} fill="#E1E4EA" />
                  <path d={svgPaths.p3e30cd00} fill="#E1E4EA" />
                </g>
                <defs>
                  <clipPath id="clip0_1_16204">
                    <rect fill="white" height="40" rx="20" width="40" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.companyText}>
              <div className={styles.companyName}>Company Name</div>
              <div className={styles.companySlogan}>Company Slogan</div>
            </div>
            <div className={styles.compactButton}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p1cb32180} fill="#525866" />
              </svg>
            </div>
          </div>
          <div className={styles.sidebarHeaderDivider} />
        </div>

        {/* Sidebar Content */}
        <div className={styles.sidebarContent}>
          <div className={styles.mainContent}>
            <div className={styles.textDivider}>
              <div className={styles.textDividerLabel}>MAIN</div>
            </div>
            <div className={styles.navigation}>
              <div className={styles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p27f362f0} fill="#525866" />
                </svg>
                <div className={styles.sidebarItemText}>Overview</div>
              </div>
              <div className={styles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3f5e3200} fill="#525866" />
                </svg>
                <div className={styles.sidebarItemText}>Single Verification</div>
              </div>
              <div className={styles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1eb5bc00} fill="#525866" />
                </svg>
                <div className={styles.sidebarItemText}>Batch Verification</div>
              </div>
              <div className={styles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1e2ab800} fill="#525866" />
                </svg>
                <div className={styles.sidebarItemText}>History</div>
              </div>
              <div className={styles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1cb32180} fill="#525866" />
                </svg>
                <div className={styles.sidebarItemText}>API & Developers</div>
              </div>
              <div className={styles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pde5c780} fill="#525866" />
                </svg>
                <div className={styles.sidebarItemText}>Tokens</div>
              </div>
            </div>
          </div>

          <div className={styles.sideContent}>
            <div className={styles.textDivider}>
              <div className={styles.textDividerLabel}>OTHERS</div>
            </div>
            <div className={styles.navigation}>
              <div className={styles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p37cb6600} fill="#525866" />
                </svg>
                <div className={styles.sidebarItemText}>Settings</div>
              </div>
              <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p19d58300} fill="#171B34" />
                </svg>
                <div className={styles.sidebarItemText}>Support</div>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2a044f00} fill="#525866" />
                </svg>
              </div>
            </div>
            <div className={styles.verContainer}>
              <div className={styles.verificationStatus}>
                <div className={styles.keyIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1a7c6c80} fill="#1FC16B" />
                  </svg>
                </div>
                <div className={styles.verifiedText}>Business Verified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className={styles.sidebarFooter}>
          <div className={styles.userProfileCard}>
            <div className={styles.avatar}>
              <img src={imgImage} alt="Emma Wright" />
            </div>
            <div className={styles.userText}>
              <div className={styles.userName}>
                <p>Emma Wright</p>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3e78a700} fill="#47C2FF" />
                </svg>
              </div>
              <div className={styles.userEmail}>emma@apex.com</div>
            </div>
            <div className={styles.compactButton}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2a044f00} fill="#525866" />
              </svg>
            </div>
          </div>
          <div className={styles.sidebarFooterDivider} />
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <div className={styles.pageTitle}>
              <div className={styles.pageTitleMain}>Support Center</div>
              <div className={styles.pageTitleSub}>Get help with your KYC & KYB integration and operations</div>
            </div>
            <div className={styles.notificationButton}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <path d={svgPaths.p6e01900} fill="white" />
                <path d={svgPaths.p310a9cb0} fill="#525866" />
                <circle cx="26" cy="14" fill="#FB3748" r="2" />
                <circle cx="26" cy="14" r="3" stroke="white" strokeWidth="2" />
              </svg>
              <div className={styles.notificationBadge} />
            </div>
          </div>

          {/* Support Cards */}
          <div className={styles.cardWrapper}>
            <div className={styles.supportCard}>
              <div className={styles.supportCardHeader}>
                <div className={styles.supportIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <path d={svgPaths.p37e5be80} fill="#1FC16B" />
                  </svg>
                </div>
                <div className={styles.supportCardText}>
                  <div className={styles.supportCardTitle}>Live Chat</div>
                  <div className={styles.supportCardSubtitle}>Online now</div>
                </div>
              </div>
              <div className={styles.supportCardButton} onClick={() => setIsChatOpen(true)}>
                <div className={styles.supportCardButtonText}>Start Chat</div>
              </div>
            </div>

            <div className={styles.supportCard}>
              <div className={styles.supportCardHeader}>
                <div className={styles.supportIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <path d={svgPaths.p2d8e3700} fill="#47C2FF" />
                  </svg>
                </div>
                <div className={styles.supportCardText}>
                  <div className={styles.supportCardTitle}>Email Support</div>
                  <div className={styles.supportCardSubtitle}>24-48h response</div>
                </div>
              </div>
              <div className={styles.supportCardButton}>
                <div className={styles.supportCardButtonText}>support@privyid.com</div>
              </div>
            </div>

            <div className={styles.supportCard}>
              <div className={styles.supportCardHeader}>
                <div className={styles.supportIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <path d={svgPaths.p1c02b000} fill="#7D52F4" />
                  </svg>
                </div>
                <div className={styles.supportCardText}>
                  <div className={styles.supportCardTitle}>Phone Support</div>
                  <div className={styles.supportCardSubtitle}>Mon-Fri 9AM-6PM</div>
                </div>
              </div>
              <div className={styles.supportCardButton}>
                <div className={styles.supportCardButtonText}>+234 902 123 4567</div>
              </div>
            </div>
          </div>

          {/* Title Container */}
          <div className={styles.container}>
            <div className={styles.titleSection}>
              <div className={styles.titleMain}>Create Support Ticket</div>
              <div className={styles.titleSub}>Our support team typically responds within 2-4 hours for technical issues</div>
            </div>
          </div>

          {/* Tab Menu */}
          <div className={styles.tabMenu}>
            <div className={`${styles.tabItem} ${styles.tabItemActive}`}>
              <div className={styles.tabItemText}>Submit Ticket</div>
            </div>
            <div className={styles.tabItem}>
              <div className={styles.tabItemText}>Tickets</div>
            </div>
            <div className={styles.tabItem}>
              <div className={styles.tabItemText}>Resources</div>
            </div>
          </div>

          {/* Main Frame */}
          <div className={styles.frame}>
            {/* Content Wrapper */}
            <div className={styles.contentWrapper}>
              {/* Priority Options */}
              <div className={styles.priorityOptions}>
                <div className={`${styles.radioLabel} ${styles.radioLow}`}>
                  <div className={styles.radio}>
                    <div className={styles.radioBg} />
                    <div className={styles.radioBox} />
                  </div>
                  <div className={styles.radioText}>Low</div>
                </div>
                <div className={`${styles.radioLabel} ${styles.radioMedium}`}>
                  <div className={styles.radio}>
                    <div className={styles.radioBg} />
                    <div className={styles.radioBox} />
                  </div>
                  <div className={styles.radioText}>Medium</div>
                </div>
                <div className={`${styles.radioLabel} ${styles.radioHigh}`}>
                  <div className={styles.radio}>
                    <div className={styles.radioBg} />
                    <div className={styles.radioBox} />
                  </div>
                  <div className={styles.radioText}>High</div>
                </div>
                <div className={`${styles.radioLabel} ${styles.radioUrgent}`}>
                  <div className={styles.radio}>
                    <div className={styles.radioBg} />
                    <div className={styles.radioBox} />
                  </div>
                  <div className={styles.radioText}>Urgent</div>
                </div>
              </div>

              {/* Form */}
              <div className={styles.form}>
                {/* Input Fields */}
                <div className={styles.inputFields}>
                  <div className={styles.textInput}>
                    <div className={styles.label}>
                      <span>Subject</span>
                      <span>*</span>
                    </div>
                    <div className={styles.inputBasic}>
                      <input type="text" placeholder="Brief Description of your issue" />
                    </div>
                  </div>
                  <div className={styles.dropdown}>
                    <div className={styles.label}>
                      <span>Category </span>
                      <span>*</span>
                    </div>
                    <div className={styles.dropdownDefault}>
                      <select>
                        <option>Technical Issue</option>
                        <option>Billing</option>
                        <option>General Inquiry</option>
                      </select>
                      <div className={styles.dropdownIcon}>
                        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p2c6f4a00} fill="#99A0AE" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className={styles.textArea}>
                  <div className={styles.label}>
                    <span>Description</span>
                    <span>*</span>
                  </div>
                  <div className={styles.textAreaBasic}>
                    <textarea placeholder="Please provide detailed information about your issue" />
                    <div className={styles.characterCounter}>
                      <p>0/200</p>
                      <div className={styles.resizeIcon}>
                        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <path d={svgPaths.p20c3d500} stroke="#99A0AE" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div className={styles.fileUploadArea}>
                  <div className={styles.uploadIcon}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p3fd340c0} fill="#525866" />
                    </svg>
                  </div>
                  <div className={styles.uploadText}>
                    <div className={styles.uploadTextMain}>Choose a file or drag & drop it here.</div>
                    <div className={styles.uploadTextSub}>JPEG, PNG, PDF, and MP4 formats, up to 50 MB.</div>
                  </div>
                  <div className={styles.browseButton}>
                    <div className={styles.browseButtonText}>Browse File</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className={styles.buttonWrapper}>
                  <button className={styles.draftButton}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p2c91a340} fill="#525866" />
                    </svg>
                    <span className={styles.draftButtonText}>Save as Draft</span>
                  </button>
                  <button className={styles.submitButton}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p3a513c00} fill="white" />
                    </svg>
                    <span className={styles.submitButtonText}>Submit Ticket</span>
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Wrapper */}
            <div className={styles.faqWrapper}>
              <div className={styles.faqTitle}>
                <div className={styles.faqIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p3d3f4c80} fill="#525866" />
                  </svg>
                </div>
                <div className={styles.faqTitleText}>Frequently Asked Questions</div>
              </div>
              <div className={styles.faqContainer}>
                <div className={styles.accordion}>
                  <div className={styles.accordionText}>How long does verification typically take?</div>
                  <div className={styles.accordionIcon}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p301d0e00} fill="#99A0AE" />
                    </svg>
                  </div>
                </div>
                <div className={styles.accordion}>
                  <div className={styles.accordionText}>What happens if a verification fails?</div>
                  <div className={styles.accordionIcon}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p301d0e00} fill="#99A0AE" />
                    </svg>
                  </div>
                </div>
                <div className={styles.accordion}>
                  <div className={styles.accordionText}>Can I test the API before going live?</div>
                  <div className={styles.accordionIcon}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p301d0e00} fill="#99A0AE" />
                    </svg>
                  </div>
                </div>
                <div className={styles.accordion}>
                  <div className={styles.accordionText}>How do I handle webhook failures?</div>
                  <div className={styles.accordionIcon}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p301d0e00} fill="#99A0AE" />
                    </svg>
                  </div>
                </div>
                <div className={styles.accordion}>
                  <div className={styles.accordionText}>Is my data secure?</div>
                  <div className={styles.accordionIcon}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p301d0e00} fill="#99A0AE" />
                    </svg>
                  </div>
                </div>
                <div className={styles.accordion}>
                  <div className={styles.accordionText}>Can I customize the verification flow?</div>
                  <div className={styles.accordionIcon}>
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p301d0e00} fill="#99A0AE" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Live Chat Drawer */}
    <LiveChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
  </>
  );
}
