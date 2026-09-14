/**
 * ATLASSIAN COMMAND CENTER — Futuristic Enterprise Control Station
 * Interactive modules for Jira Cloud, JSM, Confluence, Automation & Reporting.
 * Strictly aligned with enterprise engineering & administration requirements.
 */

const COMMAND_MODULES = {
  'jira-cloud': {
    title: 'Jira Cloud Architecture',
    subtitle: 'Enterprise scheme governance, project types & workflow customization',
    status: 'Cloud Engine: Nominal',
    items: [
      {
        title: 'Projects',
        desc: 'Company-managed vs Team-managed project architectures with governance standards.',
        inspect: `PROJECT ARCHITECTURE & GOVERNANCE:
- Project Types: Software (Scrum/Kanban), Service Management, Business Workflows
- Architecture: Standardized Company-managed schemes for audit compliance
- Project Lead Segregation: Granular project administrator permissions without site-wide elevation
- Key Engagements: Led HCL Syneos Cloud architecture transition across 7 projects`
      },
      {
        title: 'Issues',
        desc: 'Issue type hierarchies, parent-child links, and custom issue properties.',
        inspect: `ISSUE HIERARCHY & TAXONOMY:
- Issue Levels: Initiative -> Epic -> Story / Task / Bug -> Sub-task
- Security Schemes: Issue-level security levels restricting confidential compliance tickets
- Linking Models: "Blocks", "Relates to", "Cloned by" with automated validation triggers
- Custom Metadata: JSON entity properties synced bi-directionally via Forge REST APIs`
      },
      {
        title: 'Workflows',
        desc: 'Multi-step transition loops, post-functions, validators, and conditional routing.',
        inspect: `WORKFLOW PIPELINE SPECIFICATION:
- [Backlog] -> (Validator: Story Points > 0 & FixVersion set) -> [Selected for Dev]
- [In Progress] -> (Post-Function: Set Assignee + Start SLA Timer) -> [In Review]
- [In Review] -> (Condition: Git PR Approved + Code Scan Passed) -> [QA Staging]
- [QA Staging] -> (Validator: QA Signoff Checkbox checked) -> [Done]
- Result: Enforces automated quality gates and zero status skipping`
      },
      {
        title: 'Screens',
        desc: 'Optimized screen schemes for Create, Edit, and View issue operations.',
        inspect: `SCREEN SCHEME CONFIGURATION:
- Create Screen: Minimal essential fields (Summary, Component, Priority, Description)
- Edit Screen: Contextual tabs (Technical Details, QA Verification, Environment)
- View Screen: Dynamic tab layout with embedded Atlassian Forge velocity widgets
- Screen Schemes: Mapped by Issue Type (e.g. Bug screen requires "Steps to Reproduce")`
      },
      {
        title: 'Fields',
        desc: 'Custom field configurations, contexts, required fields, and renderer mappings.',
        inspect: `FIELD CONFIGURATION TAXONOMY:
- SLA Breach Indicator (Calculated DateTime Smart Field)
- Target Environment (Select List: Dev, Staging, Production)
- Business Impact Score (Numerical 1-10 with threshold alerting)
- Automated Test Link (RESTful link synced from deployment pipeline)
- Context Isolation: Custom fields scoped specifically to relevant projects to avoid global schema bloat`
      },
      {
        title: 'Schemes',
        desc: 'Auditing 7 core schemes: Permission, Issue Type, Notification, Workflow, Screen, Field, Security.',
        inspect: `7 CORE SCHEME MIGRATION & AUDITING:
1. Permission Scheme: Role-based matrix (Admins, Dev Leads, Engineers, Viewers)
2. Issue Type Scheme: Standardized across cross-functional engineering pods
3. Notification Scheme: Event-driven alerts with webhook bypass to eliminate spam
4. Workflow Scheme: Unified transitions across all active sprints
5. Screen Scheme: Tailored field displays per issue type
6. Field Configuration Scheme: Required field enforcement & wiki style renderers
7. Issue Security Scheme: Confidential data protection for production incidents`
      }
    ]
  },

  'jsm': {
    title: 'Jira Service Management (JSM)',
    subtitle: 'High-velocity ITSM, customer portals, multi-tier queues, and SLA timers',
    status: 'ITSM Engine: Online',
    items: [
      {
        title: 'Request Types',
        desc: 'Customer-facing portals with dynamic fields, help center groups, and hidden mappings.',
        inspect: `REQUEST TYPE MAPPINGS:
- P1 Incident Escalation: Maps to "Incident" issue type, sets Priority = Highest
- System Access Request: Multi-level approval (Manager + Security Owner)
- Infrastructure Change: CAB review required before status transition
- Portal Grouping: Categorized by IT Services, Hardware, Software, and Access Provisioning`
      },
      {
        title: 'Queues',
        desc: 'Role-based queues sorted by urgency, SLA countdown, and engineer availability.',
        inspect: `TRIAGE QUEUE ARCHITECTURE:
- Queue 1: "Urgent P1/P2 Unassigned" (JQL: priority in (High, Highest) AND assignee is EMPTY)
- Queue 2: "SLA Warning < 60 mins" (JQL: "Time to resolution" <= remaining("60m") AND statusCategory != Done)
- Queue 3: "Waiting on Third-Party Support" (JQL: status = "Pending Vendor")
- Dynamic Sorting: Auto-ranked by closest SLA breach timestamp`
      },
      {
        title: 'SLAs',
        desc: 'Multi-calendar SLA timers with pause conditions and automated escalation alerts.',
        inspect: `SLA METRICS SPECIFICATION:
- Time to First Response: Target < 15 mins (Business hours: 9:00 AM - 6:00 PM IST)
- Time to Resolution: Target < 4 hours (P1: 24/7 calendar clock)
- Pause Conditions: Status = "Waiting for customer" OR "Waiting for vendor"
- Breach Prevention: Automated webhook alert to Slack war-room when SLA drops under 20% remaining`
      },
      {
        title: 'Workflows',
        desc: 'ITIL/ITSM-compliant request lifecycles from submission to validation and resolution.',
        inspect: `JSM WORKFLOW ENGINE:
[Submitted] -> (Automated Queue Routing) -> [Under Triage]
[Under Triage] -> (Assignee Claimed) -> [Work In Progress]
[Work In Progress] -> (Customer Input Required: SLA Clock Pauses) -> [Waiting for Customer]
[Work In Progress] -> (Fix Verified) -> [Resolved] -> (CSAT Triggered)`
      },
      {
        title: 'Customer Requests',
        desc: 'Self-service portal experience, automated confirmation emails, and customer feedback.',
        inspect: `CUSTOMER REQUEST LIFECYCLE:
- Portal Ingestion: Intuitive web form with dynamic cascading dropdowns
- Confluence KB Deflection: Displays relevant documentation articles as user types
- Feedback Loop: Automated 1-click CSAT survey upon ticket resolution (Target > 94.5%)
- Organization Mapping: Customer domain auto-associations for shared company tickets`
      }
    ]
  },

  'confluence': {
    title: 'Confluence Knowledge Hub',
    subtitle: 'Documentation architectures, blueprints, knowledge bases & team collaboration',
    status: 'Knowledge Base: Synchronized',
    items: [
      {
        title: 'Pages',
        desc: 'Structured page layouts, dynamic Jira macros, status macros, and interactive code blocks.',
        inspect: `CONFLUENCE PAGE ARCHITECTURE:
- Page Hierarchies: Modular nested page trees with parent summary tables
- Dynamic Macros: {jira:jqlQuery=project = 'ENG' AND fixVersion = 'v2.4'}
- Real-Time Status: Embedded live sprint burndowns and roadmap timeline gadgets
- Standardized Labels: Systematic tags enabling federated workspace searches`
      },
      {
        title: 'Spaces',
        desc: 'Global space governance for Engineering, ITSM operations, and executive documentation.',
        inspect: `SPACE TAXONOMY & GOVERNANCE:
- ENG-CORE: Technical design docs, REST API specifications & architecture diagrams
- IT-KB: Public customer self-help articles & troubleshooting runbooks
- OPS-INCIDENTS: Post-incident reviews (PIR) and disaster recovery runbooks
- Space Permissions: Fine-grained anonymous customer read vs internal engineering write permissions`
      },
      {
        title: 'Documentation',
        desc: 'Standard operating procedures (SOPs), system runbooks, and API specifications.',
        inspect: `SYSTEM RUNBOOK STANDARDIZATION:
- Disaster Recovery Runbooks: Step-by-step failover procedures with contact matrices
- API Reference Guides: Endpoint schemas, authorization headers, and sample payloads
- Environment Setup: Local developer onboarding guides with one-line shell commands`
      },
      {
        title: 'Knowledge Management',
        desc: 'Knowledge base integration with JSM for automated article deflection and search.',
        inspect: `KNOWLEDGE MANAGEMENT & DEFLECTION:
- Search Integration: Directly connected to Jira Service Management portal
- Article Deflection: Up to 35% reduction in repetitive IT tickets via smart article indexing
- Content Lifecycle: Automated review alerts for pages unmodified for > 180 days
- Knowledge Governance: Regular audit routines to retire superseded process documentation`
      }
    ]
  },

  'automation': {
    title: 'Atlassian Automation Engine',
    subtitle: 'Event-driven triggers, smart values, conditional branches, and ScriptRunner hooks',
    status: 'Rules Engine: Running',
    items: [
      {
        title: 'Triggers',
        desc: 'Issue created, field updated, scheduled cron timers, incoming webhooks, and ScriptRunner events.',
        inspect: `AUTOMATION TRIGGERS:
- Event: Issue Created / Field Value Changed (e.g. Priority changed to Highest)
- Scheduled: Cron expression (0 0 9 ? * MON-FRI) scanning for stalled in-progress items
- Webhook: Incoming payload trigger from GitHub PR merge or deployment pipeline
- ScriptRunner Hook: Custom Java/Groovy event interception with sub-millisecond execution`
      },
      {
        title: 'Conditions',
        desc: 'Smart value matching, JQL filters, user conditions, and compare field logic.',
        inspect: `CONDITIONAL LOGIC SPECIFICATION:
- Smart Value Condition: {{issue.description.contains("URGENT")}} == true
- JQL Condition: sprint in openSprints() AND "Story Points" is EMPTY
- User Condition: Initiator is in group "site-admins" OR "dev-leads"
- Advanced Branching: Evaluate condition across linked issues before parent state transition`
      },
      {
        title: 'Actions',
        desc: 'Edit field values, transition issue status, create sub-tasks, send webhooks, and log telemetry.',
        inspect: `ACTION EXECUTION SET:
- Status Transition: Move issue to "Ready for QA" when PR is merged
- Field Update: Copy parent Epic FixVersion and Component to all nested child stories
- Sub-task Generation: Auto-create QA verification and documentation sub-tasks
- Webhook Dispatch: Send authenticated POST payload to external analytics engine`
      },
      {
        title: 'Notifications',
        desc: 'Slack and Microsoft Teams webhooks, customized customer emails, and lead engineer alerts.',
        inspect: `NOTIFICATION MATRIX:
- P1 Outage Alert: Instant rich markdown card dispatched to #engineering-incident channel
- Daily Digest: Morning summary of approaching SLA breaches sent to engineering leads
- Custom Customer Email: Dynamic HTML email with personalized ticket summary and direct portal link
- Smart Value Templates: {{issue.summary}} | Reported by {{issue.reporter.displayName}}`
      }
    ]
  },

  'reporting': {
    title: 'Reporting, JQL & Analytics',
    subtitle: 'Advanced JQL queries, executive velocity dashboards, and SLA compliance metrics',
    status: 'Analytics Engine: Ready',
    items: [
      {
        title: 'JQL',
        desc: 'Complex multi-conditional queries, nested functions, historical changelogs, and smart dates.',
        inspect: `ADVANCED JQL SNIPPETS:
1. Active Sprint Blockers:
   project in (CORE, ENG) AND sprint in openSprints() AND priority in (High, Highest) AND statusCategory != Done ORDER BY rank ASC

2. Stalled Tickets:
   status changed to "In Progress" BEFORE -5d AND updated <= -3d AND statusCategory != Done

3. Cross-Project SLA Risk:
   "Time to resolution" <= remaining("2h") AND statusCategory != Done ORDER BY "Time to resolution" ASC`
      },
      {
        title: 'Filters',
        desc: 'Shared team filters, subscription dispatches, permissions, and gadget data feeds.',
        inspect: `ENTERPRISE FILTER TAXONOMY:
- FILTER_SQUAD_VELOCITY: Powers sprint planning board and committed points tracking
- FILTER_SLA_COMPLIANCE: Evaluates rolling 30-day resolution benchmarks
- Subscription Alerts: Scheduled daily 8:30 AM dispatch to team leads with due-today action items
- Governance: System filters maintained with strict ownership and descriptive documentation`
      },
      {
        title: 'Dashboards',
        desc: 'Executive telemetry dashboards with customized gadget layouts, burndowns, and cycle times.',
        inspect: `EXECUTIVE DASHBOARD ARCHITECTURE:
- Gadget 1: Sprint Health Burndown (Story points committed vs completed in real time)
- Gadget 2: Cumulative Flow Diagram (Identifies in-progress bottlenecks and cycle time drift)
- Gadget 3: Two-Dimensional Filter Matrix (Issue Types vs Assignees)
- Gadget 4: SLA Resolution Gauge (Visual target compliance vs 98% enterprise threshold)`
      },
      {
        title: 'Reports',
        desc: 'Velocity charts, burnup charts, version reports, and EazyBI advanced executive analytics.',
        inspect: `ANALYTICS & EXECUTIVE REPORTS:
- Velocity Report: Predictable commitment estimation across 6 consecutive sprints
- Version Workload Report: Readiness score for quarterly production releases
- EazyBI Custom Reports: Formulated multi-dimensional cubes tracking MTTR and engineer utilization
- Historical Trendlines: Delivered at HCL Syneos to measure cross-functional delivery speed`
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
      this.itemsGrid.querySelectorAll('.cc-item-card').forEach((c) => c.classList.remove('selected'));
      cardEl.classList.add('selected');
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
