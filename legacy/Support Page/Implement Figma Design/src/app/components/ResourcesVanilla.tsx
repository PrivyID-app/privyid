import { useState } from 'react';
import styles from '../Resources.module.css';
import sidebarStyles from '../Support.module.css';
import svgPaths from '../../imports/svg-ww4zbuz9ia';
import imgImage from 'figma:asset/839477ecfb128fb97d3557cc29495137f428498f.png';
import LiveChatDrawer from './LiveChatDrawer';

// Resource data
const documentationResources = [
  {
    title: 'API Documentation',
    description: 'Complete API reference with code examples',
    link: 'Documentation',
    icon: 'code',
    iconColor: '#3578E5',
  },
  {
    title: 'Getting Started Guide',
    description: 'Step-by-step integration tutorials',
    link: 'Documentation',
    icon: 'book',
    iconColor: '#1FC16B',
  },
  {
    title: 'Video Tutorials',
    description: 'Watch how to integrate and use PrivyID',
    link: 'Learning',
    icon: 'video',
    iconColor: '#7D52F4',
  },
  {
    title: 'Community Forum',
    description: 'Connect with other developers and merchants',
    link: 'Community',
    icon: 'users',
    iconColor: '#FF8447',
  },
  {
    title: 'Status Page',
    description: 'Real-time platform status and uptime',
    link: 'Documentation',
    icon: 'globe',
    iconColor: '#47C2FF',
  },
  {
    title: 'Changelog',
    description: 'Latest features and updates',
    link: 'Update',
    icon: 'clipboard',
    iconColor: '#FB3748',
  },
];

const kycResources = [
  {
    title: 'KYC Best Practices',
    description: 'Industry standards for identity verification',
    link: 'Documentation',
    icon: 'fileText',
    iconColor: '#3578E5',
  },
  {
    title: 'Document Quality Guide',
    description: 'Ensure high verification success rates',
    link: 'Documentation',
    icon: 'book',
    iconColor: '#1FC16B',
  },
  {
    title: 'Liveness Detection Tips',
    description: 'Optimize biometric verification',
    link: 'Documentation',
    icon: 'scan',
    iconColor: '#7D52F4',
  },
];

export default function ResourcesVanilla() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className={styles.resourcesPage}>
      {/* Sidebar Navigation - Same as other pages */}
      <div className={sidebarStyles.sidebar}>
        {/* Sidebar Header */}
        <div className={sidebarStyles.sidebarHeader}>
          <div className={sidebarStyles.headerCard}>
            <div className={sidebarStyles.companyLogo}>
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
            <div className={sidebarStyles.companyText}>
              <div className={sidebarStyles.companyName}>Company Name</div>
              <div className={sidebarStyles.companySlogan}>Company Slogan</div>
            </div>
            <div className={sidebarStyles.compactButton}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p1cb32180} fill="#525866" />
              </svg>
            </div>
          </div>
          <div className={sidebarStyles.sidebarHeaderDivider} />
        </div>

        {/* Sidebar Content */}
        <div className={sidebarStyles.sidebarContent}>
          <div className={sidebarStyles.mainContent}>
            <div className={sidebarStyles.textDivider}>
              <div className={sidebarStyles.textDividerLabel}>MAIN</div>
            </div>
            <div className={sidebarStyles.navigation}>
              <div className={sidebarStyles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p27f362f0} fill="#525866" />
                </svg>
                <div className={sidebarStyles.sidebarItemText}>Overview</div>
              </div>
              <div className={sidebarStyles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3f5e3200} fill="#525866" />
                </svg>
                <div className={sidebarStyles.sidebarItemText}>Single Verification</div>
              </div>
              <div className={sidebarStyles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1eb5bc00} fill="#525866" />
                </svg>
                <div className={sidebarStyles.sidebarItemText}>Batch Verification</div>
              </div>
              <div className={sidebarStyles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1e2ab800} fill="#525866" />
                </svg>
                <div className={sidebarStyles.sidebarItemText}>History</div>
              </div>
              <div className={sidebarStyles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1cb32180} fill="#525866" />
                </svg>
                <div className={sidebarStyles.sidebarItemText}>API & Developers</div>
              </div>
              <div className={sidebarStyles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pde5c780} fill="#525866" />
                </svg>
                <div className={sidebarStyles.sidebarItemText}>Tokens</div>
              </div>
            </div>
          </div>

          <div className={sidebarStyles.sideContent}>
            <div className={sidebarStyles.textDivider}>
              <div className={sidebarStyles.textDividerLabel}>OTHERS</div>
            </div>
            <div className={sidebarStyles.navigation}>
              <div className={sidebarStyles.sidebarItem}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p37cb6600} fill="#525866" />
                </svg>
                <div className={sidebarStyles.sidebarItemText}>Settings</div>
              </div>
              <div className={`${sidebarStyles.sidebarItem} ${sidebarStyles.sidebarItemActive}`}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p19d58300} fill="#171B34" />
                </svg>
                <div className={sidebarStyles.sidebarItemText}>Support</div>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2a044f00} fill="#525866" />
                </svg>
              </div>
            </div>
            <div className={sidebarStyles.verContainer}>
              <div className={sidebarStyles.verificationStatus}>
                <div className={sidebarStyles.keyIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1a7c6c80} fill="#1FC16B" />
                  </svg>
                </div>
                <div className={sidebarStyles.verifiedText}>Business Verified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className={sidebarStyles.sidebarFooter}>
          <div className={sidebarStyles.userProfileCard}>
            <div className={sidebarStyles.avatar}>
              <img src={imgImage} alt="Emma Wright" />
            </div>
            <div className={sidebarStyles.userText}>
              <div className={sidebarStyles.userName}>
                <p>Emma Wright</p>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3e78a700} fill="#47C2FF" />
                </svg>
              </div>
              <div className={sidebarStyles.userEmail}>emma@apex.com</div>
            </div>
            <div className={sidebarStyles.compactButton}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2a044f00} fill="#525866" />
              </svg>
            </div>
          </div>
          <div className={sidebarStyles.sidebarFooterDivider} />
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

          {/* Resources Section */}
          <div className={styles.resourcesSection}>
            <div className={styles.resourcesHeader}>
              <div className={styles.resourcesTitle}>Support Resources</div>
              <div className={styles.resourcesSubtitle}>Browse documentation, guides, and community resources</div>
            </div>

            {/* Tab Menu */}
            <div className={styles.tabMenu}>
              <div className={styles.tabItem}>
                <div className={styles.tabItemText}>Submit Ticket</div>
              </div>
              <div className={styles.tabItem}>
                <div className={styles.tabItemText}>Tickets</div>
              </div>
              <div className={`${styles.tabItem} ${styles.tabItemActive}`}>
                <div className={styles.tabItemText}>Resources</div>
              </div>
            </div>

            {/* Documentation & Guides Category */}
            <div className={styles.resourceCategory}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p17f2d500} fill="#0E121B" />
                  </svg>
                </div>
                <div className={styles.categoryTitle}>Documentation & Guides</div>
              </div>

              <div className={styles.resourceCardsGrid}>
                {documentationResources.map((resource, index) => (
                  <div key={index} className={styles.resourceCard}>
                    <div className={styles.externalIcon}>
                      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p10cf6d80} fill="#525866" />
                      </svg>
                    </div>
                    <div className={styles.resourceCardHeader}>
                      <div className={styles.resourceCardIcon}>
                        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          {index === 0 && <path d={svgPaths.p10b6b600} fill={resource.iconColor} />}
                          {index === 1 && <path d={svgPaths.p1f1e7700} fill={resource.iconColor} />}
                          {index === 2 && <path d={svgPaths.p26f39780} fill={resource.iconColor} />}
                          {index === 3 && <path d={svgPaths.p1b32d700} fill={resource.iconColor} />}
                          {index === 4 && <path d={svgPaths.p2f9a0d00} fill={resource.iconColor} />}
                          {index === 5 && <path d={svgPaths.p1b4f7600} fill={resource.iconColor} />}
                        </svg>
                      </div>
                      <div className={styles.resourceCardContent}>
                        <div className={styles.resourceCardTitle}>{resource.title}</div>
                        <div className={styles.resourceCardDescription}>{resource.description}</div>
                        <div className={styles.resourceCardLink}>
                          <span className={styles.resourceCardLinkText}>{resource.link}</span>
                          <div className={styles.resourceCardLinkIcon}>
                            <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <path d={svgPaths.p1c6fe880} fill="#3578E5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KYC Resources Category */}
            <div className={styles.resourceCategory}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p17f2d500} fill="#0E121B" />
                  </svg>
                </div>
                <div className={styles.categoryTitle}>KYC Resources</div>
              </div>

              <div className={styles.resourceCardsGrid}>
                {kycResources.map((resource, index) => (
                  <div key={index} className={styles.resourceCard}>
                    <div className={styles.externalIcon}>
                      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p10cf6d80} fill="#525866" />
                      </svg>
                    </div>
                    <div className={styles.resourceCardHeader}>
                      <div className={styles.resourceCardIcon}>
                        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          {index === 0 && <path d={svgPaths.p32330700} fill={resource.iconColor} />}
                          {index === 1 && <path d={svgPaths.p1f1e7700} fill={resource.iconColor} />}
                          {index === 2 && <path d={svgPaths.pd7f0d00} fill={resource.iconColor} />}
                        </svg>
                      </div>
                      <div className={styles.resourceCardContent}>
                        <div className={styles.resourceCardTitle}>{resource.title}</div>
                        <div className={styles.resourceCardDescription}>{resource.description}</div>
                        <div className={styles.resourceCardLink}>
                          <span className={styles.resourceCardLinkText}>{resource.link}</span>
                          <div className={styles.resourceCardLinkIcon}>
                            <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <path d={svgPaths.p1c6fe880} fill="#3578E5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
