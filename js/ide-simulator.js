/**
 * IDE SIMULATOR — Interactive Futuristic Code Editor
 * Showcases authentic engineering code written in Python, Groovy, JavaScript (Forge), and SQL.
 */

const CODE_FILES = {
  'fraud_detector.py': {
    name: 'fraud_detector.py',
    lang: 'Python • Machine Learning & Anomaly Detection',
    status: 'Inference Engine: Active',
    output: [
      '[INIT] Loading streaming transaction pipeline...',
      '[PREPROCESS] Normalizing z-score distributions & imputing outliers...',
      '[MODEL] Evaluating Isolation Forest & Decision Boundary (Threshold = 0.884)...',
      '[BENCHMARK] Processed 14,280 streaming packets | Mean latency: 3.8ms',
      '[RESULT] 18 Anomalies detected & flagged for automated verification (Precision: 98.4%)'
    ],
    code: `<span class="token-cm"># Real-Time Fraud & Anomaly Detection Engine</span>
<span class="token-cm"># Pranavanathan M — Final Year Capstone Project (Lead AI Developer)</span>

<span class="token-kw">import</span> <span class="token-var">numpy</span> <span class="token-kw">as</span> <span class="token-var">np</span>
<span class="token-kw">from</span> <span class="token-var">dataclasses</span> <span class="token-kw">import</span> <span class="token-fn">dataclass</span>
<span class="token-kw">from</span> <span class="token-var">typing</span> <span class="token-kw">import</span> <span class="token-var">List</span>, <span class="token-var">Dict</span>, <span class="token-var">Tuple</span>

<span class="token-kw">@dataclass</span>
<span class="token-kw">class</span> <span class="token-fn">TransactionRecord</span>:
    <span class="token-var">txn_id</span>: <span class="token-fn">str</span>
    <span class="token-var">amount</span>: <span class="token-fn">float</span>
    <span class="token-var">velocity_score</span>: <span class="token-fn">float</span>
    <span class="token-var">geo_distance_km</span>: <span class="token-fn">float</span>

<span class="token-kw">class</span> <span class="token-fn">RealTimeAnomalyPipeline</span>:
    <span class="token-kw">def</span> <span class="token-fn">__init__</span>(<span class="token-var">self</span>, <span class="token-var">decision_threshold</span>: <span class="token-fn">float</span> = <span class="token-num">0.884</span>):
        <span class="token-var">self</span>.<span class="token-var">threshold</span> = <span class="token-var">decision_threshold</span>
        <span class="token-var">self</span>.<span class="token-var">feature_weights</span> = <span class="token-var">np</span>.<span class="token-fn">array</span>([<span class="token-num">0.35</span>, <span class="token-num">0.40</span>, <span class="token-num">0.25</span>])

    <span class="token-kw">def</span> <span class="token-fn">preprocess_and_score</span>(<span class="token-var">self</span>, <span class="token-var">txn</span>: <span class="token-fn">TransactionRecord</span>) -> <span class="token-fn">Tuple</span>[<span class="token-fn">bool</span>, <span class="token-fn">float</span>]:
        <span class="token-cm"># Outlier normalization and vectorized feature extraction</span>
        <span class="token-var">raw_features</span> = <span class="token-var">np</span>.<span class="token-fn">array</span>([
            <span class="token-var">np</span>.<span class="token-fn">log1p</span>(<span class="token-var">txn</span>.<span class="token-var">amount</span>) / <span class="token-num">10.0</span>,
            <span class="token-var">txn</span>.<span class="token-var">velocity_score</span>,
            <span class="token-var">min</span>(<span class="token-var">txn</span>.<span class="token-var">geo_distance_km</span> / <span class="token-num">1000.0</span>, <span class="token-num">1.0</span>)
        ])
        <span class="token-var">risk_score</span> = <span class="token-fn">float</span>(<span class="token-var">np</span>.<span class="token-fn">dot</span>(<span class="token-var">raw_features</span>, <span class="token-var">self</span>.<span class="token-var">feature_weights</span>))
        <span class="token-var">is_fraud_flag</span> = <span class="token-var">risk_score</span> >= <span class="token-var">self</span>.<span class="token-var">threshold</span>
        <span class="token-kw">return</span> <span class="token-var">is_fraud_flag</span>, <span class="token-var">risk_score</span>`
  },

  'atlassian_listener.groovy': {
    name: 'atlassian_listener.groovy',
    lang: 'Groovy • ScriptRunner & Jira Automation',
    status: 'Event Listener: Registered',
    output: [
      '[LISTENER] Intercepted IssueUpdatedEvent: PROJ-1048',
      '[CONDITION] Priority: Critical | Component: Core-API | Status: In Progress',
      '[SYNC] Triggering bi-directional webhook to External Platform Service...',
      '[TRANSITION] Auto-assigning lead engineer & calculating SLA breach window',
      '[LOG] Execution finished in 18ms. Zero error status.'
    ],
    code: `<span class="token-cm">// ScriptRunner Event Listener & Jira Cloud Integration</span>
<span class="token-cm">// Author: Pranavanathan M (Software & Automation Engineer)</span>

<span class="token-kw">import</span> <span class="token-var">com.atlassian.jira.component.ComponentAccessor</span>
<span class="token-kw">import</span> <span class="token-var">com.atlassian.jira.issue.Issue</span>
<span class="token-kw">import</span> <span class="token-var">groovyx.net.http.RESTClient</span>

<span class="token-kw">def</span> <span class="token-var">issueManager</span> = <span class="token-var">ComponentAccessor</span>.<span class="token-fn">getIssueManager</span>()
<span class="token-kw">def</span> <span class="token-var">customFieldManager</span> = <span class="token-var">ComponentAccessor</span>.<span class="token-fn">getCustomFieldManager</span>()
<span class="token-kw">def</span> <span class="token-var">issue</span> = <span class="token-var">event</span>.<span class="token-var">issue</span> <span class="token-kw">as</span> <span class="token-var">Issue</span>

<span class="token-cm">// Validate issue priority and target enterprise scheme</span>
<span class="token-kw">if</span> (<span class="token-var">issue</span>.<span class="token-var">priorityObject</span>?.<span class="token-var">name</span> == <span class="token-str">"High"</span> || <span class="token-var">issue</span>.<span class="token-var">priorityObject</span>?.<span class="token-var">name</span> == <span class="token-str">"Highest"</span>) {
    <span class="token-kw">def</span> <span class="token-var">payload</span> = [
        <span class="token-var">issueKey</span>   : <span class="token-var">issue</span>.<span class="token-var">key</span>,
        <span class="token-var">summary</span>    : <span class="token-var">issue</span>.<span class="token-var">summary</span>,
        <span class="token-var">assignee</span>   : <span class="token-var">issue</span>.<span class="token-var">assignee</span>?.<span class="token-var">displayName</span> ?: <span class="token-str">"Unassigned"</span>,
        <span class="token-var">timestamp</span>  : <span class="token-kw">new</span> <span class="token-fn">Date</span>().<span class="token-fn">format</span>(<span class="token-str">"yyyy-MM-dd HH:mm:ss"</span>)
    ]
    
    <span class="token-cm">// Synchronize via RESTful webhook to incident tracking bridge</span>
    <span class="token-kw">def</span> <span class="token-var">client</span> = <span class="token-kw">new</span> <span class="token-fn">RESTClient</span>(<span class="token-str">"https://api.internal-mesh.net/v1/sync"</span>)
    <span class="token-kw">def</span> <span class="token-var">response</span> = <span class="token-var">client</span>.<span class="token-fn">post</span>(<span class="token-var">body</span>: <span class="token-var">payload</span>)
    <span class="token-var">log</span>.<span class="token-fn">info</span>(<span class="token-str">"Synchronized issue \${issue.key} with status \${response.status}"</span>)
}`
  },

  'forge_extension.js': {
    name: 'forge_extension.js',
    lang: 'JavaScript (ES6+) • Atlassian Forge CLI',
    status: 'Custom UI Module: Compiled',
    output: [
      '[FORGE] Resolving manifest UI extension: "jira:issuePanel"',
      '[API] Invoking requestJira REST endpoint /rest/api/3/issue/{key}/properties',
      '[DATA] Aggregating custom schemes & automation metrics payload',
      '[RENDER] React/Forge UI component hydrated in 42ms'
    ],
    code: `<span class="token-cm">// Atlassian Forge CLI Custom Extension Component</span>
<span class="token-cm">// Developed by Pranavanathan M @ Thrive Tech</span>

<span class="token-kw">import</span> <span class="token-var">Resolver</span> <span class="token-kw">from</span> <span class="token-str">'@forge/resolver'</span>;
<span class="token-kw">import</span> <span class="token-var">api</span>, { <span class="token-var">route</span> } <span class="token-kw">from</span> <span class="token-str">'@forge/api'</span>;

<span class="token-kw">const</span> <span class="token-var">resolver</span> = <span class="token-kw">new</span> <span class="token-fn">Resolver</span>();

<span class="token-var">resolver</span>.<span class="token-fn">define</span>(<span class="token-str">'fetchSprintVelocityMetrics'</span>, <span class="token-kw">async</span> ({ <span class="token-var">context</span>, <span class="token-var">payload</span> }) => {
  <span class="token-kw">const</span> { <span class="token-var">issueKey</span> } = <span class="token-var">context</span>.<span class="token-var">extension</span>;
  
  <span class="token-cm">// Query Jira Cloud REST API for sprint and custom metrics</span>
  <span class="token-kw">const</span> <span class="token-var">response</span> = <span class="token-kw">await</span> <span class="token-var">api</span>
    .<span class="token-fn">asApp</span>()
    .<span class="token-fn">requestJira</span>(<span class="token-fn">route</span><span class="token-str">\`/rest/api/3/issue/\${issueKey}?fields=customfield_10020,status,priority\`</span>);
    
  <span class="token-kw">const</span> <span class="token-var">issueData</span> = <span class="token-kw">await</span> <span class="token-var">response</span>.<span class="token-fn">json</span>();
  
  <span class="token-kw">return</span> {
    <span class="token-var">success</span>: <span class="token-kw">true</span>,
    <span class="token-var">key</span>: <span class="token-var">issueKey</span>,
    <span class="token-var">status</span>: <span class="token-var">issueData</span>.<span class="token-var">fields</span>.<span class="token-var">status</span>.<span class="token-var">name</span>,
    <span class="token-var">sprint</span>: <span class="token-var">issueData</span>.<span class="token-var">fields</span>.<span class="token-var">customfield_10020</span>?.[<span class="token-num">0</span>]?.<span class="token-var">name</span> || <span class="token-str">'Backlog'</span>
  };
});

<span class="token-kw">export</span> <span class="token-kw">const</span> <span class="token-var">handler</span> = <span class="token-var">resolver</span>.<span class="token-fn">getDefinitions</span>();`
  },

  'analytics_schema.sql': {
    name: 'analytics_schema.sql',
    lang: 'SQL • MySQL Relational Architecture & Advanced JQL',
    status: 'Query Optimizer: Indexed',
    output: [
      '[SQL] Creating normalized 3NF schema tables with foreign key constraints...',
      '[INDEX] B-Tree index created on (tenant_id, issue_status, sla_breach_timestamp)',
      '[QUERY EXPLAIN] Cost reduced from 1,240 to 14.8 using covering indexes',
      '[JQL] Executed filter: project in (CORE, ENG) AND resolution = Unresolved AND "SLA[Time to resolution]" < 2h'
    ],
    code: `<span class="token-cm">-- Normalized Relational Schema & Performance Indexes</span>
<span class="token-cm">-- Pranavanathan M (Database & Full-Stack Development)</span>

<span class="token-kw">CREATE TABLE IF NOT EXISTS</span> <span class="token-fn">student_academic_records</span> (
    <span class="token-var">record_id</span> <span class="token-kw">INT AUTO_INCREMENT PRIMARY KEY</span>,
    <span class="token-var">student_id</span> <span class="token-kw">VARCHAR</span>(<span class="token-num">32</span>) <span class="token-kw">NOT NULL</span>,
    <span class="token-var">course_code</span> <span class="token-kw">VARCHAR</span>(<span class="token-num">16</span>) <span class="token-kw">NOT NULL</span>,
    <span class="token-var">semester</span> <span class="token-kw">TINYINT UNSIGNED NOT NULL</span>,
    <span class="token-var">grade_point</span> <span class="token-kw">DECIMAL</span>(<span class="token-num">3</span>, <span class="token-num">2</span>) <span class="token-kw">CHECK</span> (<span class="token-var">grade_point</span> <span class="token-kw">BETWEEN</span> <span class="token-num">0.00</span> <span class="token-kw">AND</span> <span class="token-num">10.00</span>),
    <span class="token-var">attendance_pct</span> <span class="token-kw">DECIMAL</span>(<span class="token-num">5</span>, <span class="token-num">2</span>) <span class="token-kw">NOT NULL</span>,
    <span class="token-var">updated_at</span> <span class="token-kw">TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>,
    <span class="token-kw">INDEX</span> <span class="token-fn">idx_student_course</span> (<span class="token-var">student_id</span>, <span class="token-var">course_code</span>)
) <span class="token-kw">ENGINE</span>=<span class="token-fn">InnoDB DEFAULT CHARSET</span>=<span class="token-str">utf8mb4</span>;

<span class="token-cm">-- Advanced JQL Query for Real-Time SLA Compliance Engine</span>
<span class="token-cm">-- project = "ENG" AND statusCategory != Done AND "Time to Resolution" <= remaining("2h") ORDER BY priority DESC</span>`
  }
};

class IDESimulator {
  constructor(wrapperId) {
    this.wrapper = document.getElementById(wrapperId);
    if (!this.wrapper) return;

    this.tabsContainer = this.wrapper.querySelector('.ide-tabs');
    this.lineNumbers = this.wrapper.querySelector('.ide-line-numbers');
    this.codeContent = this.wrapper.querySelector('.ide-code-content');
    this.statusText = this.wrapper.querySelector('.ide-console-status span');
    this.logOutput = this.wrapper.querySelector('.ide-console-logs');
    this.runBtn = this.wrapper.querySelector('#ide-run-btn');
    this.copyBtn = this.wrapper.querySelector('#ide-copy-btn');

    this.currentFile = 'fraud_detector.py';
    this.init();
  }

  init() {
    this.renderTabs();
    this.loadFile(this.currentFile);
    this.bindEvents();
  }

  renderTabs() {
    if (!this.tabsContainer) return;
    this.tabsContainer.innerHTML = '';

    Object.keys(CODE_FILES).forEach((filename) => {
      const btn = document.createElement('button');
      btn.className = `ide-tab ${filename === this.currentFile ? 'active' : ''}`;
      btn.dataset.file = filename;
      btn.innerHTML = `<span>📄</span> ${filename}`;
      btn.addEventListener('click', () => {
        this.loadFile(filename);
      });
      this.tabsContainer.appendChild(btn);
    });
  }

  loadFile(filename) {
    this.currentFile = filename;
    const file = CODE_FILES[filename];
    if (!file) return;

    // Update active tab styling
    this.wrapper.querySelectorAll('.ide-tab').forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.file === filename);
    });

    // Update code content
    if (this.codeContent) {
      this.codeContent.innerHTML = file.code;
    }

    // Count lines and render line numbers
    const lines = file.code.split('\n').length;
    let numbersHtml = '';
    for (let i = 1; i <= lines; i++) {
      numbersHtml += `<div>${i}</div>`;
    }
    if (this.lineNumbers) {
      this.lineNumbers.innerHTML = numbersHtml;
    }

    // Update status
    if (this.statusText) {
      this.statusText.textContent = file.status;
    }

    // Reset console output
    if (this.logOutput) {
      this.logOutput.textContent = `Ready to execute ${filename} (${file.lang})`;
    }
  }

  bindEvents() {
    if (this.runBtn) {
      this.runBtn.addEventListener('click', () => {
        this.simulateExecution();
      });
    }

    if (this.copyBtn) {
      this.copyBtn.addEventListener('click', () => {
        this.copyCurrentCode();
      });
    }
  }

  simulateExecution() {
    const file = CODE_FILES[this.currentFile];
    if (!file || !this.logOutput) return;

    this.logOutput.textContent = `Running ${this.currentFile}...`;
    let i = 0;

    const interval = setInterval(() => {
      if (i < file.output.length) {
        this.logOutput.textContent = file.output[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 450);
  }

  copyCurrentCode() {
    const file = CODE_FILES[this.currentFile];
    if (!file) return;

    // Strip HTML tags for clean text copy
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = file.code;
    const rawText = tempDiv.textContent || tempDiv.innerText || '';

    navigator.clipboard.writeText(rawText).then(() => {
      if (window.showToastNotice) {
        window.showToastNotice(`Copied ${this.currentFile} to clipboard!`);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new IDESimulator('interactive-ide');
});
