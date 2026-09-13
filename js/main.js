/**
 * MAIN APP CONTROLLER — PRANAVANATHAN M PORTFOLIO
 * Coordinates navigation, animations, project filtering, modals, and toasts.
 */

// Toast notification helper
window.showToastNotice = function (message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation on Scroll
  const nav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (nav) {
      nav.classList.toggle('scrolled', scrollY > 40);
    }

    // Scroll spy
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-links');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '72px';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = 'rgba(5, 7, 14, 0.96)';
      navMenu.style.padding = '1.5rem';
      navMenu.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    });

    // Close on link click
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }

  // 2. Dynamic Typing Animation in Hero Subtitle
  const typewriterTarget = document.querySelector('.typewriter-text');
  if (typewriterTarget) {
    const phrases = [
      'AI × Code × Automation × Atlassian',
      'Intelligent Workflows & Machine Learning',
      'Scalable Full-Stack Engineering & Python',
      'Enterprise Jira Cloud & JSM Administration'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typewriterTarget.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        typewriterTarget.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 80;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2200; // Pause at end of phrase
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }

  // 3. Brand Statement Sequential Pipeline Animation
  const pipelineSteps = document.querySelectorAll('.pipeline-step');
  if (pipelineSteps.length > 0) {
    let activeStep = 0;
    setInterval(() => {
      pipelineSteps.forEach((step, idx) => {
        step.classList.toggle('active', idx === activeStep);
      });
      activeStep = (activeStep + 1) % pipelineSteps.length;
    }, 1800);
  }

  // 4. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Skill Matrix Category Tabs
  const matrixTabs = document.querySelectorAll('.matrix-tab-btn');
  const skillCards = document.querySelectorAll('.skill-bar-card');

  matrixTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      matrixTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.dataset.category;
      skillCards.forEach((card) => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Project Details Modal
  const modal = document.getElementById('project-modal');
  const modalClose = document.querySelector('.modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalBody = document.getElementById('modal-body');

  document.querySelectorAll('.open-modal-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.project-card');
      if (!card || !modal) return;

      const title = card.querySelector('.project-title')?.textContent || 'Project Details';
      const badge = card.querySelector('.project-type-badge')?.textContent || '';
      const specs = card.querySelector('.project-spec-box')?.innerHTML || '';
      const desc = card.querySelector('.project-desc')?.textContent || '';
      const pills = card.querySelector('.project-tech-pills')?.innerHTML || '';

      if (modalTitle) modalTitle.textContent = title;
      if (modalBadge) modalBadge.textContent = badge;
      if (modalBody) {
        modalBody.innerHTML = `
          <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${desc}</p>
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
            ${specs}
          </div>
          <div>
            <h5 style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan); margin-bottom: 0.6rem;">TECHNOLOGY ENGINES:</h5>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">${pills}</div>
          </div>
        `;
      }

      modal.classList.add('active');
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // 7. Contact Form Simulation & Email Copy
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = contactForm.querySelector('input[name="name"]');
      const emailInput = contactForm.querySelector('input[name="email"]');
      const messageInput = contactForm.querySelector('textarea[name="message"]');

      if (!nameInput.value || !emailInput.value) {
        window.showToastNotice('Please provide your name and email.');
        return;
      }

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>⚡ Transmitting message...</span>';
      btn.disabled = true;

      setTimeout(() => {
        window.showToastNotice(`Thank you ${nameInput.value}! Message received.`);
        btn.innerHTML = '<span>✓ Message Transmitted</span>';
        btn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';

        setTimeout(() => {
          contactForm.reset();
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  // One-click copy email button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('pranavanathan2002004@gmail.com').then(() => {
        window.showToastNotice('Email copied: pranavanathan2002004@gmail.com');
      });
    });
  }
});
