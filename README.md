# Pkbehera OS - Interactive Web OS Portfolio

Welcome to **Pkbehera OS**, a highly interactive, responsive, and modern browser-based web operating system designed as a personal portfolio. The project simulates a complete desktop operating system experience inspired by macOS and Unix-like interfaces, providing a unique way to explore a developer's skills, projects, and experiences.

---

## 🌟 Features

*   **Interactive Desktop OS Environment**: A dynamic workspace simulating desktop icons, draggable/resizable windows, active top menu bar, and system tray.
*   **Fully Responsive Design**: Supports both desktop experience and mobile phone layouts dynamically.
*   **Custom Web Terminal**: A fully functioning terminal simulation executing commands like `help`, `about`, `skills`, `projects`, `clear`, and more.
*   **macOS-style Dock**: A sleek bottom dock with bounce animations and active application tracking.
*   **Global Spotlight Search**: Quick search overlay allowing users to instantly find applications, projects, or specific skills.
*   **System Notification Panel**: Real-time mock system alerts and notifications.
*   **Highly Configurable**: All portfolio information (projects, skills, socials, degree) is decoupled and stored in `data.js` for easy personalization.

---

## 📂 Project Structure

```text
├── assets/                  # Icons, wallpapers, and static assets
├── data.js                  # Configuration file holding editable portfolio details
├── index.html               # Main entry HTML file
├── script.js                # Core OS application logic (window management, terminal, search, etc.)
├── style.css                # Styling stylesheet (colors, glassmorphism, responsive styles)
├── LICENSE                  # MIT License
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

Since Pkbehera OS is built using native HTML, CSS, and Vanilla JavaScript, it does not require any build steps or compilation. You can run it directly in any browser.

### Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/PKBEHERAOS.git
    cd PKBEHERAOS
    ```
2.  **Open the project:**
    *   Simply double-click `index.html` to open it in your browser.
    *   Alternatively, use a local server like Live Server in VS Code or run:
        ```bash
        # Python 3
        python -m http.server 8000
        # Node.js
        npx serve .
        ```
    *   Open `http://localhost:8000` (or the respective port) in your web browser.

---

## ⚙️ Configuration

To customize this portfolio with your own details, edit [data.js](file:///d:/PKBEHERAOS/data.js):

```javascript
const portfolioData = {
    name: "Your Name",
    role: "Your Role / Bio Summary",
    about: "Detailed description about yourself...",
    skills: [
        { name: "JavaScript", category: "Languages" },
        // Add more skills...
    ],
    projects: [
        {
            title: "Project Title",
            desc: "Brief project description...",
            link: "https://github.com/...",
            tags: ["HTML", "CSS", "JS"]
        },
        // Add more projects...
    ],
    education: [
        {
            degree: "Your Degree",
            institution: "Your University",
            year: "Start - End",
            status: "Status"
        }
    ],
    socials: [
        { platform: "GitHub", url: "https://github.com/..." }
    ],
    contact: {
        email: "hello@example.com",
        phone: "+91 99999 99999"
    },
    resumeUrl: "#"
};
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](file:///d:/PKBEHERAOS/LICENSE) file for details.
