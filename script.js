// script.js - Application logic for Pkbehera OS

// Global App Configuration & Icons (Clean inline SVGs for premium rendering)
const appIcons = {
    about: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#about-grad)"/><circle cx="12" cy="8" r="4" fill="white"/><path d="M6 19C6 15.6863 8.68629 13 12 13C15.3137 13 18 15.6863 18 19" stroke="white" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="about-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#4facfe"/><stop offset="1" stop-color="#00f2fe"/></linearGradient></defs></svg>`,
    skills: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#skills-grad)"/><path d="M12 6V18M6 12H18M16.5 7.5L7.5 16.5M7.5 7.5L16.5 16.5" stroke="white" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="skills-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#ff9a9e"/><stop offset="1" stop-color="#fecfef"/></linearGradient></defs></svg>`,
    projects: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#projects-grad)"/><path d="M4 6C4 4.89543 4.89543 4 6 4H10L12 6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="white"/><path d="M10 11H14M12 9V13" stroke="#f5576c" stroke-width="1.5" stroke-linecap="round"/><defs><linearGradient id="projects-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#f093fb"/><stop offset="1" stop-color="#f5576c"/></linearGradient></defs></svg>`,
    education: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#edu-grad)"/><path d="M12 5L4 9L12 13L20 9L12 5Z" fill="white"/><path d="M6 11V15C6 16.5 8.5 18 12 18C15.5 18 18 16.5 18 15V11" stroke="white" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="edu-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#5ff7a6"/><stop offset="1" stop-color="#22b968"/></linearGradient></defs></svg>`,
    resume: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#res-grad)"/><path d="M7 6C7 4.89543 7.89543 4 9 4H15L18 7V18C18 19.1046 17.1046 20 16 20H9C7.89543 20 7 19.1046 7 18V6Z" fill="white"/><path d="M10 9H14M10 13H14M10 16H12" stroke="#f6d365" stroke-width="1.5" stroke-linecap="round"/><defs><linearGradient id="res-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#f6d365"/><stop offset="1" stop-color="#fda085"/></linearGradient></defs></svg>`,
    contact: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#contact-grad)"/><path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V6Z" fill="white"/><path d="M5 6.5L12 11.5L19 6.5" stroke="#4a00e0" stroke-width="1.5" stroke-linecap="round"/><defs><linearGradient id="contact-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#8e2de2"/><stop offset="1" stop-color="#4a00e0"/></linearGradient></defs></svg>`,
    terminal: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#term-grad)"/><path d="M6 8L10 12L6 16" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16H18" stroke="white" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="term-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#3a6073"/><stop offset="1" stop-color="#3a7bd5"/></linearGradient></defs></svg>`,
    chrome: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#chrome-grad)"/><circle cx="12" cy="12" r="5" fill="white"/><circle cx="12" cy="12" r="3" fill="#1a73e8"/><defs><linearGradient id="chrome-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#4285F4"/><stop offset="0.3" stop-color="#EA4335"/><stop offset="0.6" stop-color="#FBBC05"/><stop offset="1" stop-color="#34A853"/></linearGradient></defs></svg>`,
    vscode: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#1e1e1e"/><path d="M18 5L12 8L7 4L4 6V18L7 20L12 16L18 19L20 17V7L18 5ZM7 8.5L10.5 12L7 15.5V8.5Z" fill="#007ACC"/></svg>`,
    notepad: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#note-grad)"/><path d="M6 5H18V19H6V5ZM8 8H16V9.5H8V8ZM8 11H16V12.5H8V11ZM8 14H13V15.5H8V14Z" fill="white"/><defs><linearGradient id="note-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#ffb74d"/><stop offset="1" stop-color="#ffa726"/></linearGradient></defs></svg>`,
    taskmanager: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#263238"/><path d="M5 19H19V17.5H5V19ZM7 16H9V10H7V16ZM11 16H13V6H11V16ZM15 16H17V12H15V16Z" fill="#00e676"/></svg>`,
    settings: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#sett-grad)"/><path d="M19.14 12.94C19.2 12.63 19.23 12.32 19.23 12C19.23 11.68 19.2 11.37 19.14 11.06L21.39 9.31C21.59 9.15 21.65 8.87 21.52 8.64L19.39 4.95C19.26 4.72 18.98 4.63 18.75 4.72L16.1 5.79C15.55 5.37 14.94 5.03 14.28 4.76L13.88 1.93C13.84 1.69 13.63 1.5 13.38 1.5H9.03C8.78 1.5 8.57 1.69 8.53 1.93L8.13 4.76C7.47 5.03 6.86 5.37 6.31 5.79L3.66 4.72C3.43 4.63 3.15 4.72 3.02 4.95L0.89 8.64C0.76 8.87 0.82 9.15 1.02 9.31L3.27 11.06C3.21 11.37 3.18 11.68 3.18 12C3.18 12.32 3.21 12.63 3.27 12.94L1.02 14.69C0.82 14.85 0.76 15.13 0.89 15.36L3.02 19.05C3.15 19.28 3.43 19.37 3.66 19.28L6.31 18.21C6.86 18.63 7.47 18.97 8.13 19.24L8.53 22.07C8.57 22.31 8.78 22.5 9.03 22.5H13.38C13.63 22.5 13.84 22.31 13.88 22.07L14.28 19.24C14.94 18.97 15.55 18.63 16.1 18.21L18.75 19.28C18.98 19.37 19.26 19.28 19.39 19.05L21.52 15.36C21.65 15.13 21.59 14.85 21.39 14.69L19.14 12.94ZM11.21 15.6C9.22 15.6 7.61 13.99 7.61 12C7.61 10.01 9.22 8.4 11.21 8.4C13.2 8.4 14.81 10.01 14.81 12C14.81 13.99 13.2 15.6 11.21 15.6Z" fill="white" transform="scale(0.8) translate(3, 3)"/><defs><linearGradient id="sett-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#78909c"/><stop offset="1" stop-color="#455a64"/></linearGradient></defs></svg>`
};

// System Apps Metadata
const systemApps = [
    { id: 'about', title: 'About', icon: appIcons.about },
    { id: 'projects', title: 'Projects', icon: appIcons.projects },
    { id: 'skills', title: 'Skills', icon: appIcons.skills },
    { id: 'education', title: 'Education', icon: appIcons.education },
    { id: 'resume', title: 'Resume', icon: appIcons.resume },
    { id: 'contact', title: 'Contact', icon: appIcons.contact },
    { id: 'terminal', title: 'Terminal', icon: appIcons.terminal },
    { id: 'chrome', title: 'Chrome', icon: appIcons.chrome },
    { id: 'vscode', title: 'VS Code', icon: appIcons.vscode },
    { id: 'notepad', title: 'Notepad', icon: appIcons.notepad },
    { id: 'taskmanager', title: 'Task Manager', icon: appIcons.taskmanager },
    { id: 'settings', title: 'Settings', icon: appIcons.settings }
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
    updateClock();
    setInterval(updateClock, 1000);
    renderApps();
    initSpotlightSearch();
    initNotifications();

    const controlCenter = document.getElementById("control-center-trigger");
    if (controlCenter) {
        controlCenter.addEventListener("click", () => openApp("settings"));
    }

    // Desktop Notification Trigger (welcome msg)
    const badge = document.querySelector("#notif-trigger .badge");
    if (badge) badge.style.display = "block";
}

// --- 3. CLOCK CONTROLLER ---
function updateClock() {
    const now = new Date();
    const systemTime = document.getElementById("system-time");
    if (systemTime) {
        systemTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}

// --- 4. APP LAYOUT CONFIGURATION ---
function getAppLists() {
    return {
        grid: ['about', 'projects', 'skills', 'education', 'resume', 'contact', 'terminal', 'chrome', 'vscode', 'notepad', 'taskmanager', 'settings'],
        dock: ['about', 'projects', 'terminal', 'chrome', 'vscode', 'notepad', 'taskmanager', 'settings']
    };
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
        appEl.addEventListener("click", () => openApp(app.id));
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

    // Stagger layout placements for desktop
    const offset = Object.keys(activeApps).length * 25;
    win.style.left = `${(window.innerWidth / 2) - 325 + offset}px`;
    win.style.top = `${120 + offset}px`;
    win.style.width = "650px";
    win.style.height = "420px";
    win.style.transform = "none";

    // Render contents inside the window body
    const bodyContent = getAppContentHTML(appId);

    win.innerHTML = `
        <div class="window-header">
            <div class="window-header-left">
                <div class="window-controls">
                    <button class="ctrl-btn ctrl-close" title="Close"></button>
                    <button class="ctrl-btn ctrl-minimize" title="Minimize"></button>
                    <button class="ctrl-btn ctrl-maximize" title="Maximize"></button>
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

    // Attach control button event listeners programmatically
    win.querySelector(".ctrl-close").addEventListener("click", (e) => {
        e.stopPropagation();
        closeApp(appId);
    });
    win.querySelector(".ctrl-minimize").addEventListener("click", (e) => {
        e.stopPropagation();
        minimizeApp(appId);
    });
    win.querySelector(".ctrl-maximize").addEventListener("click", (e) => {
        e.stopPropagation();
        maximizeApp(appId);
    });

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

    // Special initialization for taskmanager after rendering
    if (appId === 'taskmanager') {
        updateTaskManager();
        const intervalId = setInterval(() => {
            if (!activeApps['taskmanager']) {
                clearInterval(intervalId);
            } else {
                updateTaskManager();
            }
        }, 2000);
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
    if (!win) return;

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

        case 'chrome':
            return `
                <div class="chrome-browser">
                    <div class="browser-navbar">
                        <div class="browser-address-container">
                            <input type="text" class="browser-address" value="https://wikipedia.org" onkeydown="if(event.key==='Enter') { event.preventDefault(); document.getElementById('chrome-iframe').src = this.value.startsWith('http') ? this.value : 'https://' + this.value; }">
                        </div>
                    </div>
                    <div class="browser-frame-content">
                        <iframe id="chrome-iframe" src="https://www.wikipedia.org" style="width:100%; height:100%; border:none;"></iframe>
                    </div>
                </div>
            `;

        case 'vscode':
            return `
                <div class="vscode-container">
                    <div class="vscode-sidebar">
                        <div class="vscode-sidebar-title">Workspace</div>
                        <div class="vscode-file active" onclick="selectVSCodeFile('data.js', this)">data.js</div>
                        <div class="vscode-file" onclick="selectVSCodeFile('index.html', this)">index.html</div>
                        <div class="vscode-file" onclick="selectVSCodeFile('script.js', this)">script.js</div>
                    </div>
                    <div class="vscode-main">
                        <div class="vscode-editor-header">Editor - data.js</div>
                        <button class="vscode-run-btn" onclick="runVSCodeCode()">Run Code</button>
                        <div class="vscode-editor" id="vscode-editor-content" contenteditable="true" spellcheck="false">// data.js
const portfolioData = {
    name: "Pradyumna",
    role: "Full Stack Developer"
};
console.log("Hello from " + portfolioData.name);</div>
                        <div class="vscode-terminal" id="vscode-terminal-content">> Select a file and click "Run Code" to execute.</div>
                    </div>
                </div>
            `;

        case 'notepad':
            const savedNote = localStorage.getItem('notepad_saved_text') || 'Type your notes here...';
            return `
                <div class="notepad-container">
                    <textarea class="notepad-textarea" id="notepad-text" oninput="localStorage.setItem('notepad_saved_text', this.value)" placeholder="Start writing...">${savedNote}</textarea>
                    <div class="notepad-controls">
                        <button class="notepad-btn" onclick="document.getElementById('notepad-text').value = ''; localStorage.removeItem('notepad_saved_text');">Clear Note</button>
                        <button class="notepad-btn" onclick="alert('Note Saved to Local Storage!')">Save Note</button>
                    </div>
                </div>
            `;

        case 'taskmanager':
            return `
                <div class="taskmgr-container">
                    <table class="taskmgr-table">
                        <thead>
                            <tr>
                                <th>Process Name</th>
                                <th>CPU</th>
                                <th>Memory</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="taskmgr-rows">
                            <!-- Rows injected dynamically -->
                        </tbody>
                    </table>
                </div>
            `;

        case 'settings':
            return `
                <div class="settings-container">
                    <div class="settings-section">
                        <h4>System Wallpapers</h4>
                        <div class="wallpaper-grid">
                            <div class="wallpaper-btn active" style="background:linear-gradient(135deg, #FF6B6B 0%, #4D96FF 50%, #6BCB77 100%)" onclick="changeWallpaper('gradient-1', this)"></div>
                            <div class="wallpaper-btn" style="background:linear-gradient(135deg, #f83600 0%, #f9d423 100%)" onclick="changeWallpaper('sunset', this)"></div>
                            <div class="wallpaper-btn" style="background:linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" onclick="changeWallpaper('darkspace', this)"></div>
                        </div>
                    </div>
                    <div class="settings-section">
                        <h4>System Specifications</h4>
                        <p style="font-size: 13px; margin: 4px 0;"><strong>OS:</strong> Pkbehera OS (Desktop Edition)</p>
                        <p style="font-size: 13px; margin: 4px 0;"><strong>Version:</strong> v1.2.0 (Stable)</p>
                        <p style="font-size: 13px; margin: 4px 0;"><strong>Processor:</strong> Virtual 8-Core Intel Core i9</p>
                        <p style="font-size: 13px; margin: 4px 0;"><strong>Memory:</strong> 16 GB RAM</p>
                        <p style="font-size: 13px; margin: 4px 0;"><strong>Storage:</strong> 512 GB SSD</p>
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
        if (!panel.contains(e.target) && !trigger.contains(e.target)) {
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
            item.innerHTML = `<span class="search-result-icon">${app.icon}</span> <span>Open App: ${app.title}</span>`;
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
                item.innerHTML = `<span class="search-result-icon">📁</span> <span>Project: ${p.title}</span>`;
                item.addEventListener("click", () => {
                    openApp('projects');
                    overlay.classList.add("hidden");
                });
                results.appendChild(item);
            });
        }
    });

    document.addEventListener("click", (e) => {
        if (!overlay.contains(e.target) && !trigger.contains(e.target)) {
            overlay.classList.add("hidden");
        }
    });
}

// Wallpaper changer
window.changeWallpaper = function(theme, btn) {
    document.querySelectorAll(".wallpaper-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const container = document.getElementById("os-container");
    if (theme === 'gradient-1') {
        container.style.background = 'linear-gradient(135deg, #FF6B6B 0%, #4D96FF 50%, #6BCB77 100%)';
    } else if (theme === 'sunset') {
        container.style.background = 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)';
    } else if (theme === 'darkspace') {
        container.style.background = 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)';
    }
};

// VS Code file selector mock
window.selectVSCodeFile = function(fileName, el) {
    document.querySelectorAll(".vscode-file").forEach(f => f.classList.remove("active"));
    el.classList.add("active");
    const editor = document.getElementById("vscode-editor-content");
    const header = document.querySelector(".vscode-editor-header");
    header.textContent = "Editor - " + fileName;
    
    if (fileName === 'data.js') {
        editor.textContent = `// data.js\nconst portfolioData = {\n    name: "${portfolioData.name}",\n    role: "${portfolioData.role}"\n};\nconsole.log("Hello from " + portfolioData.name);`;
    } else if (fileName === 'index.html') {
        editor.textContent = `<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Pkbehera OS</title>\n</head>\n<body>\n    <h1>Welcome to my OS Portfolio</h1>\n</body>\n</html>`;
    } else if (fileName === 'script.js') {
        editor.textContent = `// script.js\nconsole.log("Loading System Modules...");\ninitSystem();\nconsole.log("System Ready!");`;
    }
};

// VS Code runner mock
window.runVSCodeCode = function() {
    const editor = document.getElementById("vscode-editor-content");
    const terminal = document.getElementById("vscode-terminal-content");
    terminal.textContent = "> Running code...\n";
    setTimeout(() => {
        if (editor.textContent.includes('data.js')) {
            terminal.textContent += `Hello from ${portfolioData.name}\n\n[Process completed with exit code 0]`;
        } else if (editor.textContent.includes('index.html')) {
            terminal.textContent += `Parsing HTML...\nRendered: Welcome to my OS Portfolio\n\n[Process completed with exit code 0]`;
        } else if (editor.textContent.includes('script.js')) {
            terminal.textContent += `Loading System Modules...\nSystem Ready!\n\n[Process completed with exit code 0]`;
        } else {
            terminal.textContent += `Code executed successfully!\n\n[Process completed with exit code 0]`;
        }
    }, 500);
};

// Task Manager updater loop
window.updateTaskManager = function() {
    const rows = document.getElementById("taskmgr-rows");
    if (!rows) return;
    rows.innerHTML = '';
    
    // Add active processes
    Object.keys(activeApps).forEach(appId => {
        const cpu = Math.floor(Math.random() * 5) + 1;
        const ram = Math.floor(Math.random() * 40) + 15;
        const app = systemApps.find(a => a.id === appId);
        const title = app ? app.title : appId;
        
        rows.innerHTML += `
            <tr>
                <td>${title}</td>
                <td>${cpu}%</td>
                <td>${ram} MB</td>
                <td><button class="taskmgr-kill-btn" onclick="closeApp('${appId}'); setTimeout(updateTaskManager, 100);">Kill</button></td>
            </tr>
        `;
    });
};
