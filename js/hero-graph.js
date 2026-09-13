/**
 * HERO GRAPH — Interactive AI & Atlassian Connected Node Topology
 * Central node: PRANAVANATHAN
 * Connected orbiting nodes: AI, CODE, AUTOMATION, JIRA, JSM, CONFLUENCE, API, DATA, WORKFLOW
 */

const NODE_DEFINITIONS = [
  {
    id: 'ai',
    label: 'AI',
    icon: '⚡',
    badge: 'Intelligence',
    description: 'Exploring AI tools and intelligent ways to improve productivity and automation.',
    targetSection: '#ai-tech'
  },
  {
    id: 'code',
    label: 'CODE',
    icon: '{ }',
    badge: 'Engineering',
    description: 'Building practical software, full-stack web applications, and technical solutions.',
    targetSection: '#engineering'
  },
  {
    id: 'automation',
    label: 'AUTOMATION',
    icon: '⚙️',
    badge: 'Efficiency',
    description: 'Reducing repetitive work through backend scripting, event listeners, and scheduled jobs.',
    targetSection: '#solutions'
  },
  {
    id: 'jira',
    label: 'JIRA',
    icon: '🎯',
    badge: 'Enterprise Platform',
    description: 'Administering and optimizing Jira environments, workflows, custom fields, and schemes.',
    targetSection: '#atlassian-command'
  },
  {
    id: 'jsm',
    label: 'JSM',
    icon: '🎫',
    badge: 'Service Desk',
    description: 'Configuring queues, request types, and SLAs for enterprise service management.',
    targetSection: '#atlassian-command'
  },
  {
    id: 'confluence',
    label: 'CONFLUENCE',
    icon: '📄',
    badge: 'Knowledge Hub',
    description: 'Structuring spaces, knowledge bases, and team documentation hierarchies.',
    targetSection: '#atlassian-command'
  },
  {
    id: 'api',
    label: 'API',
    icon: '🔌',
    badge: 'Integration',
    description: 'Connecting systems, webhooks, and enabling bi-directional RESTful integrations.',
    targetSection: '#engineering'
  },
  {
    id: 'data',
    label: 'DATA',
    icon: '📊',
    badge: 'Schema & Logic',
    description: 'Designing normalized schemas, query optimization, and advanced JQL analytics.',
    targetSection: '#engineering'
  },
  {
    id: 'workflow',
    label: 'WORKFLOW',
    icon: '🔄',
    badge: 'Process Architecture',
    description: 'Designing agile delivery pipelines, issue lifecycles, and transition validations.',
    targetSection: '#ai-atlassian'
  }
];

class HeroGraph {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.svg = this.container.querySelector('.topology-svg-canvas');
    this.centerNode = this.container.querySelector('.center-node');
    this.tooltip = document.getElementById('node-tooltip-card');
    this.orbitNodes = [];
    this.lines = [];
    this.activeNodeIndex = null;
    this.autoCycleTimer = null;

    this.init();
  }

  init() {
    this.renderNodes();
    this.renderConnections();
    this.bindEvents();
    this.startAutoCycle();
  }

  renderNodes() {
    const total = NODE_DEFINITIONS.length;
    const radius = 175; // Distance from center
    const centerX = 260; // 520 / 2
    const centerY = 260;

    NODE_DEFINITIONS.forEach((node, i) => {
      // Calculate angle offset so it distributes harmoniously
      const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle) - 34; // 68px width / 2
      const y = centerY + radius * Math.sin(angle) - 34;

      const nodeEl = document.createElement('div');
      nodeEl.className = 'orbit-node';
      nodeEl.id = `orbit-node-${node.id}`;
      nodeEl.style.left = `${x}px`;
      nodeEl.style.top = `${y}px`;
      nodeEl.innerHTML = `
        <span class="orbit-node-icon">${node.icon}</span>
        <span>${node.label}</span>
      `;

      nodeEl.dataset.index = i;
      this.container.appendChild(nodeEl);
      this.orbitNodes.push(nodeEl);
    });
  }

  renderConnections() {
    if (!this.svg) return;
    const total = NODE_DEFINITIONS.length;
    const radius = 175;
    const centerX = 260;
    const centerY = 260;

    let svgContent = `
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
    `;

    NODE_DEFINITIONS.forEach((node, i) => {
      const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      svgContent += `
        <line id="conn-${node.id}" 
              x1="${centerX}" y1="${centerY}" 
              x2="${x}" y2="${y}" 
              stroke="url(#lineGrad)" 
              stroke-width="1.5" 
              class="data-flow-line" />
      `;
    });

    this.svg.innerHTML = svgContent;
  }

  bindEvents() {
    this.orbitNodes.forEach((nodeEl) => {
      const index = parseInt(nodeEl.dataset.index, 10);
      const data = NODE_DEFINITIONS[index];

      nodeEl.addEventListener('mouseenter', () => {
        this.stopAutoCycle();
        this.activateNode(index);
      });

      nodeEl.addEventListener('mouseleave', () => {
        this.deactivateNode(index);
        this.startAutoCycle();
      });

      nodeEl.addEventListener('click', () => {
        const target = document.querySelector(data.targetSection);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Center node hover
    if (this.centerNode) {
      this.centerNode.addEventListener('mouseenter', () => {
        this.showTooltip({
          title: 'PRANAVANATHAN M',
          badge: 'Core Identity',
          description: 'Software Engineer, AI Explorer & Atlassian Administrator orchestrating smart enterprise systems.'
        });
      });

      this.centerNode.addEventListener('mouseleave', () => {
        this.hideTooltip();
      });
    }
  }

  activateNode(index) {
    const data = NODE_DEFINITIONS[index];
    this.orbitNodes.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });

    // Highlight SVG line
    NODE_DEFINITIONS.forEach((n, i) => {
      const line = document.getElementById(`conn-${n.id}`);
      if (line) {
        if (i === index) {
          line.setAttribute('stroke', '#00E5FF');
          line.setAttribute('stroke-width', '2.5');
        } else {
          line.setAttribute('stroke', 'url(#lineGrad)');
          line.setAttribute('stroke-width', '1.2');
        }
      }
    });

    this.showTooltip(data);
  }

  deactivateNode(index) {
    if (this.orbitNodes[index]) {
      this.orbitNodes[index].classList.remove('active');
    }
    const line = document.getElementById(`conn-${NODE_DEFINITIONS[index].id}`);
    if (line) {
      line.setAttribute('stroke', 'url(#lineGrad)');
      line.setAttribute('stroke-width', '1.5');
    }
    this.hideTooltip();
  }

  showTooltip(data) {
    if (!this.tooltip) return;
    const titleEl = this.tooltip.querySelector('.tooltip-title');
    const badgeEl = this.tooltip.querySelector('.tooltip-badge');
    const bodyEl = this.tooltip.querySelector('.tooltip-body');

    if (titleEl) titleEl.textContent = data.label || data.title;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (bodyEl) bodyEl.textContent = data.description;

    this.tooltip.classList.add('visible');
  }

  hideTooltip() {
    if (!this.tooltip) return;
    this.tooltip.classList.remove('visible');
  }

  startAutoCycle() {
    this.stopAutoCycle();
    let current = 0;
    this.autoCycleTimer = setInterval(() => {
      this.activateNode(current);
      setTimeout(() => {
        if (this.autoCycleTimer) this.deactivateNode(current);
      }, 2500);
      current = (current + 1) % NODE_DEFINITIONS.length;
    }, 4000);
  }

  stopAutoCycle() {
    if (this.autoCycleTimer) {
      clearInterval(this.autoCycleTimer);
      this.autoCycleTimer = null;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new HeroGraph('hero-topology');
});
