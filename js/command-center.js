/**
 * ATLASSIAN COMMAND CENTER — Futuristic Enterprise Control Station
 * Interactive modules for Jira Cloud, JSM, Confluence, Automation & Reporting.
 */

const COMMAND_MODULES = {
  'jira-cloud': {
    title: 'Jira Cloud Architecture',
    subtitle: 'Enterprise scheme governance, project types & workflow customization',
    status: 'Cloud Engine: Nominal',
    items: [
      {
        title: 'Projects & Schemes',
        desc: 'Company-managed vs Team-managed project architectures with standardized scheme hierarchies.',
        inspect: `SCHEME MAPPING ARCHITECTURE:
- Permission Schemes: Role-based matrix (Admins, Leads, Developers, Viewers)
- Issue Type Schemes: Epic -> Story / Task / Bug -> Sub-task hierarchy
- Notification Schemes: Event-driven alerts with webhook bypass to reduce inbox noise
- Field Configuration: Required fields, custom validation guards & hidden fields`
      },
      {
        title: 'Workflows & Statuses',
        desc: 'Multi-step transition loops, post-functions, validators, and conditional routing.',
        inspect: `WORKFLOW PIPELINE SPECIFICATION:
[Backlog] -> (Validator: Story Points > 0) -> [Selected for Dev]
[In Progress] -> (Post-Function: Set Assignee + Start Timer) -> [In Review]
[In Review] -> (Condition: PR Approved) -> [Done] -> (Resolution: Done)`
      },
      {
        title: 'Screens & Custom Fields',
        desc: 'Optimized screen schemes for Create, Edit, and View issue operations.',
        inspect: `CUSTOM FIELD TAXONOMY:
- SLA Breach Indicator (Calculated DateTime)
- Target Environment (Select List: Staging, Production)
- Business Impact Score (Numerical 1-10 with threshold alerting)
- Automated Test Link (Forge REST sync link)`
      },
      {
        title: 'Cloud-to-Cloud Migration',
        desc: '7-scheme structural migration from Team-managed to Company-managed platforms.',
        inspect: `MIGRATION AUDIT CHECKS:
1. Verified 100% user account mapping across Atlassian Access
2. Retained custom field IDs and historical change-logs
3. Validated active REST API webhooks and ScriptRunner listeners
4. Zero downtime cutover with post-migration automated integrity audits`
      },
      {
        title: 'Issue Types & Hierarchies',
        desc: 'Structured parent-child dependencies and cross-project release portfolios.',
        inspect: `HIERARCHY CONFIGURATION:
Initiative (Cross-dept) -> Epic (Deliverable) -> Story (Feature) -> Sub-task (Atomic Unit)
Enforced via JQL constraints and automated parent status rollup.`
      },
      {
        title: 'Global Security & Access',
        desc: 'Atlassian Guard (Access) single sign-on, 2FA enforcement, and SCIM directory sync.',
        inspect: `SECURITY PROTOCOLS:
- SCIM synchronization with enterprise IdP
- IP allowlisting for administrative endpoints
- Granular project admin vs site admin segregation of duties`
      }
    ]
  },

  'jsm': {
    title: 'Jira Service Management (JSM)',
    subtitle: 'High-velocity ITSM, customer portals, multi-tier queues, and SLA timers',
    status: 'ITSM Engine: Online',
    items: [
      {
        title: 'Request Types & Portals',
        desc: 'Intuitive customer service portals with dynamic cascading fields.',
        inspect: `PORTAL DESIGN:
- Incident Report (Automated severity triage + P1 escalation)
- Hardware / Software Request (Approval workflow with manager signoff)
- Access Request (Auto-provisioning via webhook integration)`
      },
      {
        title: 'Queues & Triage',
        desc: 'Role-based queues sorted by urgency, SLA countdown, and expertise.',
        inspect: `QUEUE JQL LOGIC:
Queue: "Urgent P1/P2 Unassigned"
JQL: project = "ITSM" AND priority in (High, Highest) AND assignee is EMPTY ORDER BY created ASC`
      },
      {
        title: 'SLA Calculations',
        desc: 'Multi-calendar SLA timers with pause conditions and automated warning alerts.',
        inspect: `SLA METRICS CONFIGURATION:
- Time to first response: Target < 15 mins (Business hours: 9AM - 6PM IST)
- Time to resolution: Target < 4 hours (P1: 24/7 calendar clock)
- Pause condition: Status = "Waiting for customer" or "Waiting for vendor"`
      },
      {
        title: 'ITSM Incident Management',
        desc: 'Major incident response command with automated Slack/Teams bridge.',
        inspect: `INCIDENT WORKFLOW:
Investigation -> Major Incident Declared -> War Room Bridge Initialized -> Mitigation -> Post-Incident Review (PIR in Confluence)`
      },
      {
        title: 'Change Enablement',
        desc: 'Risk assessment scoring models and CAB approval workflows.',
        inspect: `CHANGE ADVISORY BOARD (CAB):
Automated risk scoring based on impacted services, rollback strategy availability, and maintenance window scheduling.`
      },
      {
        title: 'Customer Satisfaction (CSAT)',
        desc: 'Post-resolution automated surveys and trending satisfaction dashboards.',
        inspect: `CSAT BENCHMARK:
Automated 1-click survey trigger on issue resolution. Target CSAT > 94.5% with mandatory follow-up on ratings <= 2.`
      }
    ]
  },

  'confluence': {
    title: 'Confluence Knowledge Hub',
    subtitle: 'Documentation architectures, blueprints, knowledge bases & team collaboration',
    status: 'Knowledge Base: Synchronized',
    items: [
      {
        title: 'Space Architectures',
        desc: 'Structured global spaces for Engineering, ITSM, and Executive Operations.',
        inspect: `SPACE TAXONOMY:
- ENG-CORE: Engineering design docs, API specs & architecture diagrams
- IT-KB: Public customer self-help articles & troubleshooting runbooks
- OPS-RUNBOOKS: L2/L3 infrastructure recovery procedures`
      },
      {
        title: 'Knowledge Base & Self-Service',
        desc: 'AI-assisted customer search integration linking JSM portal with Confluence articles.',
        inspect: `SELF-SERVICE DEFLECTION:
Articles tagged with smart keywords deflect up to 35% of incoming support requests before ticket creation.`
      },
      {
        title: 'Standardized Blueprints',
        desc: 'Custom page templates with variables for retrospectives, sprint planning, and post-mortems.',
        inspect: `TEMPLATE BLUEPRINTS:
- Post-Mortem Incident Template (Root Cause, Timeline, Preventative Actions)
- Architecture Decision Record (ADR) (Context, Options, Decision, Consequences)`
      },
      {
        title: 'Jira Integration Macros',
        desc: 'Dynamic Jira issue filters, sprint status charts, and roadmaps embedded directly in pages.',
        inspect: `EMBEDDED MACROS:
{jira:jqlQuery=project = 'ENG' AND fixVersion = 'v2.4' | columns=key,summary,status,assignee}`
      },
      {
        title: 'Permissions & Space Schemes',
        desc: 'Granular view/edit permissions, anonymous customer portal access, and page restrictions.',
        inspect: `GOVERNANCE SCHEMES:
Strict restriction models preventing accidental public exposure of confidential internal APIs and customer data.`
      },
      {
        title: 'Audit & Content Lifecycle',
        desc: 'Automated archival of outdated documentation and periodic review verification.',
        inspect: `LIFECYCLE AUDITING:
Pages unmodified for > 180 days automatically trigger a Slack reminder to the page owner for content verification.`
      }
    ]
  },

  'automation': {
    title: 'Atlassian Automation Engine',
    subtitle: 'Event-driven triggers, smart values, conditional branches, and ScriptRunner hooks',
    status: 'Rules Engine: Running',
    items: [
      {
        title: 'Triggers & Event Handlers',
        desc: 'Issue created, field updated, scheduled cron timers, and incoming webhook triggers.',
        inspect: `TRIGGER EVENT:
WHEN: Issue Created
IN: Project = 'Software Delivery'
TYPE: Bug`
      },
      {
        title: 'Smart Values & Conditions',
        desc: 'Advanced logic parsing using {{issue.summary}}, {{now.plusDays(7)}}, and regex matches.',
        inspect: `SMART VALUE TRANSFORMATION:
{{#issue.comments.last}}Author: {{author.displayName}} - {{body}}{{/issue.comments.last}}
CONDITION: {{issue.description.contains("URGENT")}} == true`
      },
      {
        title: 'Branching & Sub-tasks',
        desc: 'Iterating over linked issues, sub-tasks, and parent epics for synchronized status updates.',
        inspect: `BRANCH EXECUTION:
BRANCH: For All Sub-tasks
IF: All sub-tasks are in status "Done"
THEN: Transition Parent Issue to "Ready for Release"`
      },
      {
        title: 'ScriptRunner Groovy Listeners',
        desc: 'Deep programmatic extensions overcoming native automation boundary limits.',
        inspect: `SCRIPTRUNNER HOOK:
Custom event listener calculating dynamic business risk formulas and executing secure external API calls.`
      },
      {
        title: 'Automated Incident Triage',
        desc: 'Auto-detecting outage keywords and assigning on-call emergency response squads.',
        inspect: `TRIAGE RULE:
Matches keyword "P0 / Outage" in title -> Sets Priority to Highest -> Pings Slack #war-room -> Pages lead engineer.`
      },
      {
        title: 'Scheduled Audit Jobs',
        desc: 'Weekly hygiene bots flagging stale issues and verifying sprint burndown health.',
        inspect: `CRON AUDIT BOT:
Cron: 0 0 9 ? * MON
JQL: updated < -14d AND statusCategory != Done
ACTION: Add comment "Stale issue reminder" and ping Assignee.`
      }
    ]
  },

  'reporting': {
    title: 'Reporting, JQL & Analytics',
    subtitle: 'Advanced JQL queries, executive velocity dashboards, and SLA compliance metrics',
    status: 'Analytics Engine: Ready',
    items: [
      {
        title: 'Advanced JQL Logic',
        desc: 'Complex multi-conditional queries utilizing nested functions and date calculations.',
        inspect: `ADVANCED JQL SNIPPET:
project = "CORE" AND status changed to "In Progress" AFTER -7d AND assignee was in (currentUser()) ORDER BY rank ASC`
      },
      {
        title: 'Executive Dashboards',
        desc: 'High-level real-time KPI monitors for leadership, team leads, and product owners.',
        inspect: `DASHBOARD GADGETS:
1. Sprint Velocity Chart (Committed vs Delivered Story Points)
2. Cumulative Flow Diagram (CFD identifying workflow bottlenecks)
3. SLA Compliance Meter (Target > 98.5%)`
      },
      {
        title: 'Sprint Velocity Tracking',
        desc: 'Historical delivery metrics measuring predictability and team bandwidth.',
        inspect: `VELOCITY FORMULA:
Velocity = Sum(Story Points of Resolved Issues within Sprint Timebox)
Rolling 5-sprint average used for predictive sprint capacity planning.`
      },
      {
        title: 'SLA Compliance Reports',
        desc: 'Auditing time-to-first-response and time-to-resolution breaches by service tier.',
        inspect: `SLA TELEMETRY:
Breach Rate: 1.2% (Well within 98% target)
Mean Time to Resolution (MTTR): 2.4 hours for high-priority incidents.`
      },
      {
        title: 'Workload & Capacity Maps',
        desc: 'Balancing developer ticket loads to prevent burnout and ensure smooth throughput.',
        inspect: `CAPACITY ALLOCATION:
Visualizes unassigned work and individual developer point caps across active sprints.`
      },
      {
        title: 'Filter Subscriptions & Alerts',
        desc: 'Automated email and webhook dispatches of critical business queries on a schedule.',
        inspect: `SUBSCRIPTION LOGIC:
Daily 8:30 AM digest dispatching all tickets due within 24 hours directly to engineering leads.`
      }
    ]
  }
};

class CommandCenter {
  constructor(wrapperId) {
    this.wrapper = document.getElementById(wrapperId);
    if (!this.wrapper) return;

    this.sidebar = this.wrapper.querySelector('.cc-sidebar');
    this.panelTitle = this.wrapper.querySelector('.cc-panel-title');
    this.statusBadge = this.wrapper.querySelector('.cc-badge-live');
    this.itemsGrid = this.wrapper.querySelector('.cc-grid-items');
    this.inspectorCode = this.wrapper.querySelector('.cc-inspector-code');
    this.inspectorHeader = this.wrapper.querySelector('.cc-inspector-header');

    this.currentModule = 'jira-cloud';
    this.init();
  }

  init() {
    this.renderSidebar();
    this.loadModule(this.currentModule);
  }

  renderSidebar() {
    if (!this.sidebar) return;
    this.sidebar.innerHTML = '';

    const moduleIcons = {
      'jira-cloud': '⚡',
      'jsm': '🎫',
      'confluence': '📄',
      'automation': '⚙️',
      'reporting': '📊'
    };

    Object.keys(COMMAND_MODULES).forEach((key) => {
      const mod = COMMAND_MODULES[key];
      const btn = document.createElement('button');
      btn.className = `cc-module-btn ${key === this.currentModule ? 'active' : ''}`;
      btn.dataset.module = key;
      btn.innerHTML = `
        <span class="cc-module-icon">${moduleIcons[key]}</span>
        <span>${mod.title.split(' ')[0]} ${mod.title.split(' ')[1] || ''}</span>
      `;
      btn.addEventListener('click', () => {
        this.loadModule(key);
      });
      this.sidebar.appendChild(btn);
    });
  }

  loadModule(key) {
    this.currentModule = key;
    const mod = COMMAND_MODULES[key];
    if (!mod) return;

    // Update active button
    this.sidebar.querySelectorAll('.cc-module-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.module === key);
    });

    // Update titles
    if (this.panelTitle) {
      this.panelTitle.innerHTML = `<span>${mod.title}</span>`;
    }
    if (this.statusBadge) {
      this.statusBadge.textContent = mod.status;
    }

    // Render items
    if (this.itemsGrid) {
      this.itemsGrid.innerHTML = '';
      mod.items.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = `cc-item-card ${idx === 0 ? 'selected' : ''}`;
        card.innerHTML = `
          <h4 class="cc-item-title">${item.title}</h4>
          <p class="cc-item-desc">${item.desc}</p>
        `;
        card.addEventListener('click', () => {
          this.inspectItem(item, card);
        });
        this.itemsGrid.appendChild(card);
      });
    }

    // Load first item in inspector
    if (mod.items.length > 0) {
      this.inspectItem(mod.items[0]);
    }
  }

  inspectItem(item, cardEl = null) {
    if (cardEl) {
      this.itemsGrid.querySelectorAll('.cc-item-card').forEach((c) => c.style.borderColor = '');
      cardEl.style.borderColor = 'var(--accent-cyan)';
    }

    if (this.inspectorHeader) {
      this.inspectorHeader.textContent = `CONFIG INSPECTOR: [${item.title.toUpperCase()}]`;
    }
    if (this.inspectorCode) {
      this.inspectorCode.textContent = item.inspect;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CommandCenter('command-center-console');
});
