/**
 * TERMINAL SIMULATOR — Interactive Developer CLI
 * Allows visitors to query Pranavanathan M's profile, skills, projects, and trigger resume download.
 */

const TERMINAL_COMMANDS = {
  help: `Available commands:
  • <span class="token-fn">about</span>       - Professional summary and background
  • <span class="token-fn">skills</span>      - Categorized technical and platform skills
  • <span class="token-fn">projects</span>    - Real engineering and AI capstone projects
  • <span class="token-fn">atlassian</span>   - Jira Cloud, JSM, Confluence, and ScriptRunner expertise
  • <span class="token-fn">ai</span>          - Machine learning exploration and anomaly detection
  • <span class="token-fn">resume</span>      - Download official resume PDF
  • <span class="token-fn">contact</span>     - View direct email, phone, and LinkedIn
  • <span class="token-fn">clear</span>       - Clear terminal screen`,

  about: `<span class="token-str">PRANAVANATHAN M</span>
Position: <span class="token-kw">AI Enthusiast | Software Developer | Atlassian Tools Administrator</span>
Location: Cuddalore, Tamil Nadu, India
Education: B.Tech in Computer Science & Engineering (2022-2026), Christ College of Engineering & Tech
Philosophy: "Technology is more than code. It's about making work smarter."`,

  skills: `<span class="token-str">[TECHNICAL STACK & CORE PROFICIENCIES]</span>
• Programming: Python, JavaScript (ES6+), Groovy, SQL (MySQL), Java fundamentals
• Atlassian: Jira Cloud, Jira Software, JSM, Confluence, ScriptRunner, Jira Automation
• Enterprise Apps: eazyBI, Big Picture, Zephyr Scale, Structure, Xray Test Management, Advanced JQL
• AI & ML: Anomaly Detection (+95% accuracy), Supervised/Unsupervised ML, Data Preprocessing, IBM AI Suite
• Databases: MySQL Relational Schema Design, ACID, Query Indexing, Advanced JQL
• Web/Tools: RESTful APIs, Webhooks, HTML5/CSS3, Atlassian Forge CLI, YouTrack, Git/GitHub`,

  projects: `<span class="token-str">[REAL PROJECTS FROM RESUME]</span>
1. <span class="token-fn">Real-Time Fraud Detection System using AI</span> (Final Year Capstone Project)
   - Increased fraud detection by 95% by engineering an automated anomaly detection pipeline in Python.
2. <span class="token-fn">Student Information & Academic Management System</span>
   - Full-stack web application with normalized 3NF MySQL relational database.
3. <span class="token-fn">Atlassian Forge Custom Extensions & UI Suite</span>
   - Custom Jira Cloud extension built with Forge CLI and REST APIs.
4. <span class="token-fn">Enterprise Cloud-to-Cloud Scheme Migration & Standardization</span>
   - HCL Syneos & ICICI Prudential: Migration, workflow standardization, and automated audit scripts.`,

  atlassian: `<span class="token-str">[ATLASSIAN PLATFORM ADMINISTRATION]</span>
• Software & Automation Engineer at Thrive Tech (reduced manual administrative tasks by 40%).
• Administered 4 core Atlassian platforms; provided L2/L3 support for configurations and workflows.
• Enterprise Engagements: HCL Syneos & ICICI Prudential (Jira Cloud migrations & Confluence administration).
• Built executive analytics using eazyBI and Advanced JQL to track velocity and SLA compliance.`,

  ai: `<span class="token-str">[AI & EMERGING TECHNOLOGY]</span>
• Capstone: Real-time fraud detection with isolation forest and anomaly scoring.
• Certifications: IBM SkillsBuild AI Fundamentals & AI Enablement for Customer Service.
• Exploration: Generative AI for developer velocity, automated ticket triage concepts.`,

  resume: `<span class="token-str">Downloading Pranavanathan_M_Resume.pdf...</span>
[STATUS: 200 OK] Resume download initiated.`,

  contact: `<span class="token-str">[COMMUNICATION CHANNELS]</span>
• Email:    <a href="mailto:pranavanathan2002004@gmail.com" style="color: #38BDF8;">pranavanathan2002004@gmail.com</a>
• Phone:    +91 7826957220
• LinkedIn: <a href="https://linkedin.com/in/pranavanathan-m-78a92a286" target="_blank" style="color: #38BDF8;">linkedin.com/in/pranavanathan-m-78a92a286</a>
• GitHub:   <a href="https://github.com/Pranav0120-arch" target="_blank" style="color: #38BDF8;">github.com/Pranav0120-arch</a>
• Location: Cuddalore, Tamil Nadu, India`
};

class TerminalEmulator {
  constructor(wrapperId) {
    this.wrapper = document.getElementById(wrapperId);
    if (!this.wrapper) return;

    this.history = this.wrapper.querySelector('.terminal-history');
    this.input = this.wrapper.querySelector('.terminal-input');

    this.init();
  }

  init() {
    if (!this.input) return;

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim().toLowerCase();
        this.executeCommand(cmd);
        this.input.value = '';
      }
    });

    // Keep terminal focused when clicking inside
    this.wrapper.addEventListener('click', () => {
      this.input.focus();
    });
  }

  executeCommand(cmd) {
    if (!this.history) return;

    // Append prompt line
    const promptLine = document.createElement('div');
    promptLine.className = 'terminal-line';
    promptLine.innerHTML = `<span class="terminal-prompt-prefix">pranav@portfolio:~$</span> ${cmd}`;
    this.history.appendChild(promptLine);

    if (cmd === '') return;

    if (cmd === 'clear') {
      this.history.innerHTML = '';
      return;
    }

    const response = document.createElement('div');
    response.className = 'terminal-line';

    if (TERMINAL_COMMANDS[cmd]) {
      response.innerHTML = TERMINAL_COMMANDS[cmd];

      // If resume command, trigger download
      if (cmd === 'resume') {
        const link = document.createElement('a');
        link.href = 'assets/Pranavanathan_M_Resume.pdf';
        link.download = 'Pranavanathan_M_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else {
      response.innerHTML = `<span style="color: #EF4444;">Command not recognized: "${cmd}". Type <span class="token-fn">help</span> to view all commands.</span>`;
    }

    this.history.appendChild(response);

    // Scroll to bottom
    const body = this.wrapper.querySelector('.terminal-body');
    if (body) {
      body.scrollTop = body.scrollHeight;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TerminalEmulator('interactive-terminal');
});
