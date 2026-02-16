import { useState } from 'react';
import styles from '../Tickets.module.css';
import sidebarStyles from '../Support.module.css';
import svgPaths from '../../imports/svg-w724je3i78';
import imgImage from 'figma:asset/839477ecfb128fb97d3557cc29495137f428498f.png';
import LiveChatDrawer from './LiveChatDrawer';

// Sample ticket data
const tickets = [
  {
    id: 'TKT-1234',
    issue: 'API Authentication Issue',
    category: 'Technical',
    status: 'IN PROGRESS',
    statusType: 'inProgress',
    date: '24-01-2026',
    time: '2 hours ago',
  },
  {
    id: 'TKT-1198',
    issue: 'Batch Verification Pricing Question',
    category: 'Billing',
    status: 'RESOLVED',
    statusType: 'resolved',
    date: '24-01-2026',
    time: '2 hours ago',
  },
  {
    id: 'TKT-1234',
    issue: 'Webhook Not Triggering',
    category: 'Technical',
    status: 'RESOLVED',
    statusType: 'resolved',
    date: '24-01-2026',
    time: '2 hours ago',
  },
  {
    id: 'TKT-1234',
    issue: 'API Authentication Issue',
    category: 'Technical',
    status: 'IN PROGRESS',
    statusType: 'inProgress',
    date: '24-01-2026',
    time: '2 hours ago',
  },
  {
    id: 'TKT-1234',
    issue: 'API Authentication Issue',
    category: 'Technical',
    status: 'PENDING',
    statusType: 'pending',
    date: '24-01-2026',
    time: '2 hours ago',
  },
  {
    id: 'TKT-1234',
    issue: 'API Authentication Issue',
    category: 'Technical',
    status: 'PENDING',
    statusType: 'pending',
    date: '24-01-2026',
    time: '2 hours ago',
  },
];

export default function TicketsVanilla() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className={styles.ticketsPage}>
      {/* Sidebar Navigation - Same as Support page */}
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

          {/* Tickets Section */}
          <div className={styles.ticketsSection}>
            <div className={styles.ticketsHeader}>
              <div className={styles.ticketsTitle}>Your Support Tickets</div>
              <div className={styles.ticketsSubtitle}>Track and manage your support requests</div>
            </div>

            {/* Tab Menu */}
            <div className={styles.tabMenu}>
              <div className={styles.tabItem}>
                <div className={styles.tabItemText}>Submit Ticket</div>
              </div>
              <div className={`${styles.tabItem} ${styles.tabItemActive}`}>
                <div className={styles.tabItemText}>Tickets</div>
              </div>
              <div className={styles.tabItem}>
                <div className={styles.tabItemText}>Resources</div>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className={styles.searchBar}>
              <div className={styles.searchInput}>
                <div className={styles.searchIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p29536680} fill="#99A0AE" />
                  </svg>
                </div>
                <input type="text" placeholder="Search records..." />
              </div>
              <div className={styles.filterButton}>
                <div className={styles.searchIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p6e16d00} fill="#525866" />
                  </svg>
                </div>
                <span className={styles.filterButtonText}>Filter Records</span>
                <div className={styles.searchIcon}>
                  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p2c6f4a00} fill="#525866" />
                  </svg>
                </div>
              </div>
              <button className={styles.newTicketButton}>
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20" style={{ width: '20px', height: '20px' }}>
                  <path d={svgPaths.p3ef22780} fill="white" />
                </svg>
                <span className={styles.newTicketButtonText}>New Ticket</span>
              </button>
            </div>

            {/* Table */}
            <div className={styles.tableContainer}>
              <div className={styles.tableHeader}>
                <div className={styles.tableHeaderCell}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxBg} />
                    <div className={styles.checkboxBox} />
                  </div>
                </div>
                <div className={styles.tableHeaderCell}>Ticket ID</div>
                <div className={styles.tableHeaderCell}>Issue</div>
                <div className={styles.tableHeaderCell}>Category</div>
                <div className={styles.tableHeaderCell}>Status</div>
                <div className={styles.tableHeaderCell}>Date</div>
                <div className={styles.tableHeaderCell}>Time</div>
                <div className={styles.tableHeaderCell}>Action</div>
              </div>
              
              {tickets.map((ticket, index) => (
                <div key={index} className={styles.tableRow}>
                  <div className={styles.tableCell}>
                    <div className={styles.checkbox}>
                      <div className={styles.checkboxBg} />
                      <div className={styles.checkboxBox} />
                    </div>
                  </div>
                  <div className={styles.tableCell}>{ticket.id}</div>
                  <div className={`${styles.tableCell} ${styles.tableCellBold}`}>{ticket.issue}</div>
                  <div className={styles.tableCell}>{ticket.category}</div>
                  <div className={styles.tableCell}>
                    <span className={`${styles.badge} ${styles[`badge${ticket.statusType.charAt(0).toUpperCase() + ticket.statusType.slice(1)}`]}`}>
                      <div className={styles.badgeIcon}>
                        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <path d={svgPaths.p10d2d640} fill="currentColor" />
                        </svg>
                      </div>
                      {ticket.status}
                    </span>
                  </div>
                  <div className={styles.tableCell}>{ticket.date}</div>
                  <div className={styles.tableCell}>{ticket.time}</div>
                  <div className={`${styles.tableCell} ${styles.tableCellCenter}`}>
                    <button className={styles.actionButton}>
                      <div className={styles.actionIcon}>
                        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p24901500} fill="#525866" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
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
