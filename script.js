// script.js - Application logic for Pkbehera OS

// Global App Configuration & Icons (Clean inline SVGs for premium rendering)
const appIcons = {
    about: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#about-grad)"/><circle cx="12" cy="8" r="4" fill="white"/><path d="M6 19C6 15.6863 8.68629 13 12 13C15.3137 13 18 15.6863 18 19" stroke="white" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="about-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#4facfe"/><stop offset="1" stop-color="#00f2fe"/></linearGradient></defs></svg>`,
    skills: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#skills-grad)"/><path d="M12 6V18M6 12H18M16.5 7.5L7.5 16.5M7.5 7.5L16.5 16.5" stroke="white" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="skills-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#ff9a9e"/><stop offset="1" stop-color="#fecfef"/></linearGradient></defs></svg>`,
    projects: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#projects-grad)"/><path d="M4 6C4 4.89543 4.89543 4 6 4H10L12 6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="white"/><path d="M10 11H14M12 9V13" stroke="#f5576c" stroke-width="1.5" stroke-linecap="round"/><defs><linearGradient id="projects-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#f093fb"/><stop offset="1" stop-color="#f5576c"/></linearGradient></defs></svg>`,
    education: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#edu-grad)"/><path d="M12 5L4 9L12 13L20 9L12 5Z" fill="white"/><path d="M6 11V15C6 16.5 8.5 18 12 18C15.5 18 18 16.5 18 15V11" stroke="white" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="edu-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#5ff7a6"/><stop offset="1" stop-color="#22b968"/></linearGradient></defs></svg>`,
    resume: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#res-grad)"/><path d="M7 6C7 4.89543 7.89543 4 9 4H15L18 7V18C18 19.1046 17.1046 20 16 20H9C7.89543 20 7 19.1046 7 18V6Z" fill="white"/><path d="M10 9H14M10 13H14M10 16H12" stroke="#f6d365" stroke-width="1.5" stroke-linecap="round"/><defs><linearGradient id="res-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#f6d365"/><stop offset="1" stop-color="#fda085"/></linearGradient></defs></svg>`,
    contact: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#contact-grad)"/><path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V6Z" fill="white"/><path d="M5 6.5L12 11.5L19 6.5" stroke="#4a00e0" stroke-width="1.5" stroke-linecap="round"/><defs><linearGradient id="contact-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#8e2de2"/><stop offset="1" stop-color="#4a00e0"/></linearGradient></defs></svg>`,
    terminal: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#term-grad)"/><path d="M6 8L10 12L6 16" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16H18" stroke="white" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="term-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#3a6073"/><stop offset="1" stop-color="#3a7bd5"/></linearGradient></defs></svg>`
};

// System Apps Metadata
const systemApps = [
    { id: 'about', title: 'About', icon: appIcons.about },
    { id: 'projects', title: 'Projects', icon: appIcons.projects },
    { id: 'skills', title: 'Skills', icon: appIcons.skills },
    { id: 'education', title: 'Education', icon: appIcons.education },
    { id: 'resume', title: 'Resume', icon: appIcons.resume },
    { id: 'contact', title: 'Contact', icon: appIcons.contact },
    { id: 'terminal', title: 'Terminal', icon: appIcons.terminal }
];

// Open Window Cache
const activeApps = {};
let zIndexCounter = 100;

// Dynamic Search & Notification UI States
let activeSearchItem = -1;

// --- 1. BOOT PROCESS ---
document.addEventListener("DOMContentLoaded", () => {
    const bootProgress = document.getElementById("boot-progress");
    const bootScreen = document.getElementById("boot-screen");
    const osContainer = document.getElementById("os-container");

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                bootScreen.style.opacity = "0";
                setTimeout(() => {
                    bootScreen.classList.add("hidden");
                    osContainer.classList.remove("hidden");
                    initSystem();
                }, 500);
            }, 600);
        }
        bootProgress.style.width = `${progress}%`;
    }, 120);
});

// --- 2. SYSTEM INITIALIZATION ---
function initSystem() {
    detectDevice();
    updateClock();
    setInterval(updateClock, 1000);
    renderApps();
    initSpotlightSearch();
    initNotifications();

    window.addEventListener("resize", detectDevice);
    
    // Desktop Notification Trigger (welcome msg)
    const badge = document.querySelector("#notif-trigger .badge");
    if (badge) badge.style.display = "block";
}

// --- 3. DEVICE DETECTION & DOCK ADAPTER ---
function detectDevice() {
    const width = window.innerWidth;
    const badge = document.getElementById("device-mode-badge");
    
    const wasMobile = document.body.classList.contains("mobile-mode");
    const wasTablet = document.body.classList.contains("tablet-mode");
    const wasDesktop = document.body.classList.contains("desktop-mode");

    if (width > 1024) {
        badge.textContent = "Desktop Mode";
        document.body.classList.remove("mobile-mode", "tablet-mode");
        document.body.classList.add("desktop-mode");
    } else if (width >= 768 && width <= 1024) {
        badge.textContent = "Tablet Mode";
        document.body.classList.remove("desktop-mode", "mobile-mode");
        document.body.classList.add("tablet-mode");
    } else {
        badge.textContent = "Mobile Mode";
        document.body.classList.remove("desktop-mode", "tablet-mode");
        document.body.classList.add("mobile-mode");
        adjustWindowsForMobile();
    }

    const isMobile = document.body.classList.contains("mobile-mode");
    const isTablet = document.body.classList.contains("tablet-mode");
    const isDesktop = document.body.classList.contains("desktop-mode");

    // Re-render apps when transitioning between device modes to swap layouts
    if ((wasMobile && !isMobile) || (wasTablet && !isTablet) || (wasDesktop && !isDesktop)) {
        renderApps();
        // Re-sync dock active indicator dots
        Object.keys(activeApps).forEach(appId => {
            const dockWrapper = document.getElementById(`dock-${appId}`);
            if (dockWrapper) dockWrapper.classList.add("open");
        });
    }
}

// Ensure open windows fit mobile sizing constraints
function adjustWindowsForMobile() {
    Object.values(activeApps).forEach(win => {
        win.style.left = "0px";
        win.style.top = "30px";
        win.style.width = "100%";
        win.style.height = "calc(100% - 30px)";
    });
}

// --- 4. CLOCK CONTROLLER ---
function updateClock() {
    const now = new Date();
    const systemTime = document.getElementById("system-time");
    if (systemTime) {
        systemTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}

// Dynamic icon display partition to avoid redundant layouts
function getAppLists() {
    const width = window.innerWidth;
    if (width > 1024) {
        return {
            grid: ['about', 'projects', 'skills', 'education', 'resume', 'contact', 'terminal'],
            dock: ['about', 'projects', 'terminal']
        };
    } else if (width >= 768) {
        return {
            grid: ['about', 'projects', 'skills', 'education', 'resume', 'contact', 'terminal'],
            dock: ['about', 'projects', 'terminal']
        };
    } else {
        return {
            grid: ['about', 'projects', 'skills', 'education', 'resume', 'contact', 'terminal'],
            dock: ['about', 'projects', 'contact']
        };
    }
}

// --- 5. APP RENDERING ENGINES ---
function renderApps() {
    const desktopGrid = document.getElementById("desktop-grid");
    const dock = document.getElementById("dock");

    desktopGrid.innerHTML = '';
    dock.innerHTML = '';

    const appLists = getAppLists();

    // Render Grid Apps
    appLists.grid.forEach(appId => {
        const app = systemApps.find(a => a.id === appId);
        if (!app) return;
        const appEl = document.createElement("div");
        appEl.className = "app-icon";
        appEl.innerHTML = `
            <div class="app-svg-wrapper">${app.icon}</div>
            <div class="app-label">${app.title}</div>
        `;
        appEl.addEventListener("dblclick", () => openApp(app.id));
        appEl.addEventListener("click", () => {
            if (window.innerWidth <= 1024) openApp(app.id);
        });
        appEl.addEventListener("touchstart", (e) => {
            openApp(app.id);
        }, { passive: true });
        desktopGrid.appendChild(appEl);
    });

    // Render Dock Icons
    appLists.dock.forEach(appId => {
        const app = systemApps.find(a => a.id === appId);
        if (!app) return;
        const dockWrapper = document.createElement("div");
        dockWrapper.className = "dock-icon-wrapper";
        dockWrapper.id = `dock-${app.id}`;
        dockWrapper.innerHTML = `<div class="dock-icon-svg">${app.icon}</div>`;
        dockWrapper.addEventListener("click", () => openApp(app.id));
        dockWrapper.addEventListener("touchstart", (e) => {
            openApp(app.id);
        }, { passive: true });
        dock.appendChild(dockWrapper);
    });

    initDockMagnification();
}

// Dynamic dock zoom transitions on neighboring elements (Desktop only)
function initDockMagnification() {
    const dockContainer = document.getElementById("dock-container");
    const dockIcons = document.querySelectorAll(".dock-icon-wrapper");

    if (window.innerWidth > 1024 && dockContainer) {
        dockContainer.addEventListener("mousemove", (e) => {
            dockIcons.forEach(icon => {
                const rect = icon.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const dist = Math.abs(e.clientX - x);
                const scale = Math.max(1, 1.4 - dist / 150);
                icon.style.transform = `scale(${scale}) translateY(${(scale - 1) * -12}px)`;
            });
        });

        dockContainer.addEventListener("mouseleave", () => {
            dockIcons.forEach(icon => {
                icon.style.transform = "none";
            });
        });
    }
}

// --- 7. WINDOW MANAGER (OPEN, CLOSE, DRAG, MINIMIZE) ---
function openApp(appId) {
    // Spotlight/Dock indicator state management
    const dockWrapper = document.getElementById(`dock-${appId}`);
    if (dockWrapper) dockWrapper.classList.add("open");

    // If app already open, focus it
    if (activeApps[appId]) {
        bringToFront(activeApps[appId]);
        return;
    }

    const app = systemApps.find(a => a.id === appId);
    const win = document.createElement("div");
    win.className = "os-window opening";
    win.id = `win-${appId}`;

    // Stagger layout placements on desktop only
    if (window.innerWidth > 1024) {
        const offset = Object.keys(activeApps).length * 25;
        win.style.left = `${(window.innerWidth / 2) - 325 + offset}px`;
        win.style.top = `${120 + offset}px`;
        win.style.width = "650px";
        win.style.height = "420px";
        win.style.transform = "none";
    } else {
        // Clear all inline coordinates so full-screen CSS overrides work cleanly on Mobile & Tablet
        win.style.left = "";
        win.style.top = "";
        win.style.width = "";
        win.style.height = "";
        win.style.transform = "";
    }

    // Render contents inside the window body
    const bodyContent = getAppContentHTML(appId);

    win.innerHTML = `
        <div class="window-header">
            <div class="window-header-left">
                <div class="window-controls">
                    <button class="ctrl-btn ctrl-close" onclick="closeApp('${appId}')" title="Close"></button>
                    <button class="ctrl-btn ctrl-minimize" onclick="minimizeApp('${appId}')" title="Minimize"></button>
                    <button class="ctrl-btn ctrl-maximize" onclick="maximizeApp('${appId}')" title="Maximize"></button>
                </div>
            </div>
            <div class="window-header-title">
                ${app.icon}
                <span>${app.title}</span>
            </div>
            <div class="window-header-right"></div>
        </div>
        <div class="window-body">
            ${bodyContent}
        </div>
        <div class="window-resize-handle"></div>
    `;

    document.getElementById("window-workspace").appendChild(win);
    activeApps[appId] = win;

    // Trigger scale transition
    setTimeout(() => win.classList.remove("opening"), 50);

    makeDraggable(win);
    makeResizable(win);
    bringToFront(win);

    win.addEventListener("mousedown", () => bringToFront(win));

    // Special initialization for terminal after rendering
    if (appId === 'terminal') {
        initTerminalCLI();
    }
}

function closeApp(appId) {
    const win = activeApps[appId];
    if (win) {
        win.classList.add("opening"); // reverses transition (shrink & fade)
        const dockWrapper = document.getElementById(`dock-${appId}`);
        if (dockWrapper) dockWrapper.classList.remove("open");

        setTimeout(() => {
            win.remove();
            delete activeApps[appId];
            updateActiveAppName();
        }, 200);
    }
}

function minimizeApp(appId) {
    // Simply fades/shrinks window, click dock to reopen
    closeApp(appId);
}

function maximizeApp(appId) {
    const win = activeApps[appId];
    if (!win || window.innerWidth <= 768) return; // Ignore on mobile (always fullscreen)

    if (win.style.width === "100vw") {
        // Restore window sizes
        win.style.width = win.dataset.oldW || "650px";
        win.style.height = win.dataset.oldH || "420px";
        win.style.left = win.dataset.oldL || "100px";
        win.style.top = win.dataset.oldT || "100px";
        win.style.borderRadius = "12px";
    } else {
        // Stretch full screen
        win.dataset.oldW = win.style.width;
        win.dataset.oldH = win.style.height;
        win.dataset.oldL = win.style.left;
        win.dataset.oldT = win.style.top;

        win.style.left = "0px";
        win.style.top = "30px";
        win.style.width = "100vw";
        win.style.height = "calc(100vh - 30px)";
        win.style.borderRadius = "0px";
    }
}

function bringToFront(win) {
    zIndexCounter++;
    win.style.zIndex = zIndexCounter;
    
    // Add active styling
    document.querySelectorAll(".os-window").forEach(w => w.classList.remove("active"));
    win.classList.add("active");
    
    updateActiveAppName();
}

function updateActiveAppName() {
    const windows = Array.from(document.querySelectorAll(".os-window:not(.opening)"));
    if (windows.length === 0) {
        document.querySelector(".active-app-name").textContent = "Finder";
        return;
    }
    // Sort windows by zIndex descending to find the top active window
    windows.sort((a, b) => parseInt(b.style.zIndex || 0) - parseInt(a.style.zIndex || 0));
    const topWin = windows[0];
    const title = topWin.querySelector(".window-header-title span").textContent.trim();
    document.querySelector(".active-app-name").textContent = title;
}

// Window Dragging Implementation
function makeDraggable(win) {
    const header = win.querySelector(".window-header");
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    header.onmousedown = (e) => {
        if (e.target.classList.contains("ctrl-btn")) return;
        if (window.innerWidth <= 768) return; // Disable dragging on Mobile

        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        win.classList.add("dragging");
    };

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let targetTop = win.offsetTop - pos2;
        let targetLeft = win.offsetLeft - pos1;

        // Boundaries checks (keep header accessible)
        if (targetTop < 30) targetTop = 30; // system bar boundary
        
        win.style.top = `${targetTop}px`;
        win.style.left = `${targetLeft}px`;
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        win.classList.remove("dragging");
    }
}

// Simple resizable utility (updates absolute dimensions)
function makeResizable(win) {
    const handle = win.querySelector(".window-resize-handle");
    if (!handle) return;

    handle.onmousedown = (e) => {
        e.preventDefault();
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
    };

    function resize(e) {
        if (window.innerWidth <= 768) return;
        const width = e.clientX - win.getBoundingClientRect().left;
        const height = e.clientY - win.getBoundingClientRect().top;
        
        if (width > 300) win.style.width = `${width}px`;
        if (height > 200) win.style.height = `${height}px`;
    }

    function stopResize() {
        window.removeEventListener("mousemove", resize);
        window.removeEventListener("mouseup", stopResize);
    }
}

// --- 8. GENERATING DYNAMIC PORTFOLIO CONTENT ---
function getAppContentHTML(appId) {
    if (typeof portfolioData === 'undefined') {
        return `<p>Error loading data.js database.</p>`;
    }

    switch (appId) {
        case 'about':
            return `
                <div class="about-hero">
                    <div class="about-avatar">👨‍💻</div>
                    <div class="about-name">${portfolioData.name}</div>
                    <div class="about-role">${portfolioData.role}</div>
                </div>
                <p>${portfolioData.about}</p>
            `;
        
        case 'skills':
            // Group skills by category dynamically
            const categories = {};
            portfolioData.skills.forEach(skill => {
                if (!categories[skill.category]) {
                    categories[skill.category] = [];
                }
                categories[skill.category].push(skill.name);
            });

            let categoriesHTML = '';
            for (let cat in categories) {
                categoriesHTML += `
                    <div class="skill-category">
                        <div class="skill-category-title">${cat}</div>
                        <div class="skills-list">
                            ${categories[cat].map(s => `<span class="skill-badge">${s}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
            return categoriesHTML;

        case 'projects':
            const projectsHTML = portfolioData.projects.map(p => `
                <div class="project-card">
                    <div>
                        <div class="project-title">${p.title}</div>
                        <div class="project-desc">${p.desc}</div>
                        <div class="project-tags">
                            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                        </div>
                    </div>
                    <a href="${p.link}" target="_blank" class="project-link">Source Code ↗</a>
                </div>
            `).join('');
            return `<div class="projects-grid">${projectsHTML}</div>`;

        case 'education':
            const eduHTML = portfolioData.education.map(e => `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-degree">${e.degree}</div>
                    <div class="timeline-inst">${e.institution}</div>
                    <div class="timeline-year">${e.year} | <span style="color:${e.status === 'Pursuing' ? 'orange':'green'}">${e.status}</span></div>
                </div>
            `).join('');
            return `<div class="timeline">${eduHTML}</div>`;

        case 'resume':
            return `
                <h3>Download My Professional Resume</h3>
                <p style="margin: 15px 0;">Grab the latest copy of my resume to check my qualifications and professional experience.</p>
                <a href="${portfolioData.resumeUrl}" download class="project-link" style="display:inline-block; padding: 10px 20px; background:var(--active-highlight); color:white; border-radius:8px;">Download Document (PDF)</a>
            `;

        case 'contact':
            const email = (portfolioData.contact && portfolioData.contact.email) ? portfolioData.contact.email : 'N/A';
            const phone = (portfolioData.contact && portfolioData.contact.phone) ? portfolioData.contact.phone : 'N/A';
            const socialButtons = portfolioData.socials.map(s => `
                <a href="${s.url}" target="_blank" class="social-button">${s.platform}</a>
            `).join('');
            return `
                <div class="contact-container">
                    <h3>Contact Information</h3>
                    <div class="contact-info-item">
                        <span class="contact-icon">✉️</span>
                        <span>${email}</span>
                    </div>
                    <div class="contact-info-item">
                        <span class="contact-icon">📞</span>
                        <span>${phone}</span>
                    </div>
                    <div class="socials-row">
                        ${socialButtons}
                    </div>
                </div>
            `;

        case 'terminal':
            return `
                <div class="terminal-container">
                    <div class="terminal-history">Welcome to Bapun CLI (Pkbehera OS Terminal).
Type 'help' to see list of commands.

</div>
                    <div class="terminal-input-line">
                        <span class="terminal-prompt">bapun_os$</span>
                        <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
                    </div>
                </div>
            `;

        default:
            return `<p>Content template not initialized.</p>`;
    }
}

// --- 9. TERMINAL EMULATOR LOGIC ---
function initTerminalCLI() {
    const win = document.getElementById("win-terminal");
    if (!win) return;
    
    const input = win.querySelector(".terminal-input");
    const history = win.querySelector(".terminal-history");

    input.focus();
    // Auto focus when terminal area is clicked
    win.querySelector(".terminal-container").addEventListener("click", () => input.focus());

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const rawCmd = input.value;
            const cleanCmd = rawCmd.trim().toLowerCase();
            input.value = "";

            if (cleanCmd) {
                history.innerHTML += `bapun_os$ ${rawCmd}\n`;
                const output = parseTerminalCommand(cleanCmd);
                if (output !== null) {
                    history.innerHTML += `${output}\n`;
                }
                // Scroll down
                history.scrollTop = history.scrollHeight;
            }
        }
    });

    function parseTerminalCommand(cmd) {
        switch (cmd) {
            case 'help':
                return `Available commands:
  about    - Print short bio summary
  skills   - List technical competencies
  projects - Show portfolio developments
  contact  - Print personal contacts & socials
  clear    - Flush CLI terminal history
  help     - Show instructions list`;
            
            case 'about':
                return `${portfolioData.about}`;

            case 'skills':
                return portfolioData.skills.map(s => `• ${s.name} [${s.category}]`).join('\n');

            case 'projects':
                return portfolioData.projects.map(p => `• ${p.title}: ${p.desc} (${p.link})`).join('\n');

            case 'contact':
                const emailTerm = (portfolioData.contact && portfolioData.contact.email) ? portfolioData.contact.email : 'N/A';
                const phoneTerm = (portfolioData.contact && portfolioData.contact.phone) ? portfolioData.contact.phone : 'N/A';
                let res = `Email: ${emailTerm}\nPhone: ${phoneTerm}\nSocials:\n`;
                portfolioData.socials.forEach(s => {
                    res += `  - ${s.platform}: ${s.url}\n`;
                });
                return res;

            case 'clear':
                history.innerHTML = '';
                return null;

            default:
                return `bash: command not found: ${cmd}. Type 'help' for instructions.`;
        }
    }
}

// --- 10. SYSTEM NOTIFICATIONS & SEARCH ---
function initNotifications() {
    const trigger = document.getElementById("notif-trigger");
    const panel = document.getElementById("notif-panel");
    const clearBtn = document.getElementById("clear-notifs");
    const badge = trigger.querySelector(".badge");

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        panel.classList.toggle("hidden");
        badge.style.display = "none"; // clear badge
    });

    clearBtn.addEventListener("click", () => {
        panel.querySelector(".notif-body").innerHTML = `<p style="font-size:12px; color:#888; text-align:center; padding:20px;">No new notifications.</p>`;
    });

    document.addEventListener("click", (e) => {
        if (!panel.contains(e.target) && e.target !== trigger) {
            panel.classList.add("hidden");
        }
    });
}

function initSpotlightSearch() {
    const trigger = document.getElementById("search-trigger");
    const overlay = document.getElementById("search-overlay");
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        overlay.classList.toggle("hidden");
        if (!overlay.classList.contains("hidden")) {
            input.value = "";
            results.innerHTML = "";
            input.focus();
        }
    });

    input.addEventListener("input", () => {
        const query = input.value.toLowerCase().trim();
        results.innerHTML = "";

        if (query.length === 0) return;

        // Search systems metadata (matching apps)
        const matchedApps = systemApps.filter(app => app.title.toLowerCase().includes(query));
        matchedApps.forEach(app => {
            const item = document.createElement("div");
            item.className = "search-result-item";
            item.innerHTML = `${app.icon} <span>Open App: ${app.title}</span>`;
            item.addEventListener("click", () => {
                openApp(app.id);
                overlay.classList.add("hidden");
            });
            results.appendChild(item);
        });

        // Search projects (inside data.js)
        if (typeof portfolioData !== 'undefined') {
            const matchedProjects = portfolioData.projects.filter(p => 
                p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)
            );
            matchedProjects.forEach(p => {
                const item = document.createElement("div");
                item.className = "search-result-item";
                item.innerHTML = `📁 <span>Project: ${p.title}</span>`;
                item.addEventListener("click", () => {
                    openApp('projects');
                    overlay.classList.add("hidden");
                });
                results.appendChild(item);
            });
        }
    });

    document.addEventListener("click", (e) => {
        if (!overlay.contains(e.target) && e.target !== trigger) {
            overlay.classList.add("hidden");
        }
    });
}
