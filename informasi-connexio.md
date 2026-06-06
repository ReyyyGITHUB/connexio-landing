# CONNEXIO - DOKUMENTASI LENGKAP

## 📋 RINGKASAN UMUM

**Nama Project:** Connexio - Project-based Terminal Manager  
**Repository:** yandanp/Connexio  
**License:** MIT  
**Status:** Active Development (v0.5.0)  
**Platform:** Cross-platform (Windows, macOS, Linux)  
**Tipe:** Desktop Application (Electron)

---

## 🎯 PROBLEM & SOLUSI

### Problem
Ketika bekerja pada beberapa project, developer berakhir dengan puluhan terminal windows/tabs tanpa organisasi yang jelas. Pertanyaan yang sering muncul:
- "Mana terminal yang untuk project mana?"
- "Server mana yang sedang berjalan?"
- "Command apa yang saya jalankan di sini?"

### Solusi
Connexio mengorganisir terminal **berdasarkan project**. Setiap project memiliki workspace tersendiri dengan:
- Dedicated terminal tabs
- Persistent sessions
- Productivity tools built-in

---

## ✨ DAFTAR FITUR LENGKAP

### Core Features - Terminal Management

1. **📁 Project Workspace**
   - Setiap project memiliki workspace sendiri
   - Dedicated terminals per project
   - Organized UI untuk setiap project

2. **📑 Multi-tab Terminals**
   - Multiple terminal tabs per project
   - Rename tabs
   - Drag-to-reorder functionality
   - Layout persistence

3. **🐚 Shell Picker**
   - Auto-detect available shells
   - Supported shells: PowerShell, CMD, Git Bash, WSL, Zsh, Fish, Bash
   - Per-project shell selection
   - Custom shell configuration

4. **💾 Session Persistence**
   - Tabs bertahan setelah app restart
   - Layout preference disimpan
   - Active project remembered
   - Command history preserved

5. **🔀 Drag & Drop**
   - Reorder tabs
   - Reorder projects
   - Move projects between groups
   - Intuitive drag-and-drop interface

### Productivity Features

1. **📋 Task Runner**
   - Auto-detect scripts dari:
     - package.json (npm, yarn, pnpm)
     - Makefile
     - Cargo.toml
     - pyproject.toml
   - One-click run
   - Task history tracking

2. **📌 Pinned Commands**
   - Save favorite commands per project
   - Global pinned commands
   - CRUD operations (Create, Read, Update, Delete)
   - Drag-to-reorder
   - Quick access buttons

3. **⏱️ Command Timer**
   - Track execution time
   - Desktop notifications for long-running commands (>10s)
   - Command history with duration
   - Performance tracking

4. **🌿 Git Status**
   - Live branch display
   - Ahead/behind commit count
   - Modified files count
   - Staged/untracked file tracking
   - Real-time git status in workspace header

### Connectivity Features

1. **🔗 SSH Manager**
   - Save SSH connections per project
   - Global SSH connection storage
   - Key authentication support
   - Password authentication support
   - One-click connect
   - Connection presets

2. **🔄 Auto-Updater**
   - Check for updates via GitHub Releases
   - Download & install dengan satu klik
   - Automatic version checking
   - Seamless update process

### Customization Features

1. **🎨 Themes**
   - Built-in themes:
     - **Connexio Dark** - Default dark dengan accent ungu
     - **Connexio Light** - Clean light theme
     - **Midnight Ocean** - Deep blue dengan teal accents
   - Full terminal color support
   - Theme persistence

2. **⚙️ Settings**
   - Font size adjustment
   - Font family selection
   - Cursor style customization
   - Scrollback buffer size
   - Copy-on-select option
   - Default shell selection
   - Per-project overrides

3. **🖥️ Custom Titlebar**
   - Frameless window support
   - App version display
   - Clean modern design

---

## 🛠️ TECH STACK - INFORMASI TEKNIS

### Frontend Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18+ | UI framework & component library |
| **TypeScript** | Latest | Type safety & development experience |
| **Tailwind CSS** | Latest | Styling & utility-first CSS |
| **Zustand** | Latest | State management & store |
| **Vite** | Latest | Build tool & dev server |

### Desktop & Terminal
| Technology | Purpose |
|------------|---------|
| **Electron** | Cross-platform desktop app framework |
| **xterm.js** | Terminal rendering & emulation |
| **node-pty** | Native terminal backend & pty management |

### Build & Deployment
| Technology | Purpose |
|------------|---------|
| **electron-builder** | App packaging & installer creation |
| **electron-store** | Persistent storage & configuration |
| **GitHub Actions** | CI/CD automation |

### Language
- **97.2% TypeScript** - Majority of codebase
- **1.1% JavaScript** - Config files & scripts
- **1.7% Other** - CSS, JSON, etc.

---

## 📁 ARSITEKTUR PROYEK

```
Connexio/
├── src/
│   ├── main/                          # Electron main process
│   │   ├── index.ts                   # App entry, window creation, IPC setup
│   │   ├── preload.ts                 # Context bridge API
│   │   ├── terminal.ts                # node-pty terminal management
│   │   ├── project.ts                 # Project CRUD operations
│   │   ├── session.ts                 # Session persistence logic
│   │   ├── workspace.ts               # Workspace state persistence
│   │   ├── settings.ts                # App settings & shell detection
│   │   ├── git.ts                     # Git status detection
│   │   ├── tasks.ts                   # Task runner & pinned commands
│   │   ├── ssh.ts                     # SSH connection manager
│   │   ├── updater.ts                 # Auto-updater (GitHub Releases)
│   │   ├── theme.ts                   # Theme management system
│   │   └── themes-default.ts          # Built-in themes definitions
│   │
│   ├── renderer/                      # React frontend application
│   │   ├── components/                # React UI components
│   │   │   ├── Workspace.tsx          # Main workspace (tabs, terminal, panel)
│   │   │   ├── Terminal.tsx           # xterm.js terminal instance wrapper
│   │   │   ├── TerminalLayer.tsx      # Global terminal renderer
│   │   │   ├── Sidebar.tsx            # Project sidebar with drag & drop
│   │   │   ├── TaskPanel.tsx          # Task runner UI & pinned commands
│   │   │   ├── SSHPanel.tsx           # SSH connection manager UI
│   │   │   ├── GitStatusBar.tsx       # Git status display
│   │   │   ├── CommandTimer.tsx       # Command execution timer UI
│   │   │   ├── SettingsModal.tsx      # Settings dialog UI
│   │   │   ├── ShellPicker.tsx        # Shell selection dropdown
│   │   │   ├── WorkspaceTab.tsx       # Draggable & renameable tab component
│   │   │   ├── UpdateNotification.tsx # Auto-update notification toast
│   │   │   └── ...                    # Other components
│   │   │
│   │   ├── stores/                    # Zustand state management
│   │   │   └── *.ts                   # Store definitions
│   │   │
│   │   ├── styles/                    # Global CSS & styling
│   │   └── types/                     # TypeScript type definitions
│   │
│   └── shared/
│       └── types.ts                   # Shared types (main ↔ renderer IPC)
│
├── assets/                            # App icons & images
│   ├── icon.ico                       # Windows icon
│   ├── icon.png                       # macOS/Linux icon
│   └── ...
│
├── .github/
│   └── workflows/                     # GitHub Actions CI/CD
│       └── release.yml                # Auto-release workflow
│
├── Configuration files
│   ├── package.json                   # Project dependencies & scripts
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── tsconfig.main.json             # Main process TS config
│   ├── vite.config.ts                 # Vite build configuration
│   ├── tailwind.config.js             # Tailwind CSS config
│   ├── postcss.config.js              # PostCSS configuration
│   └── .gitignore                     # Git ignore rules
│
└── package-lock.json                  # Dependency lock file
```

---

## 🛠️ DEVELOPMENT GUIDE

### Prerequisites

**Node.js & npm:**
- Node.js 18 atau lebih tinggi
- npm (latest version)

**Platform-specific Requirements:**

**Windows:**
- Visual Studio Build Tools (untuk kompilasi native modules)
- Python 3.x

**macOS:**
```bash
xcode-select --install
```

**Linux:**
```bash
sudo apt install build-essential python3
```

### Setup & Installation

```bash
# Clone repository
git clone https://github.com/yandanp/Connexio.git
cd Connexio

# Install dependencies
npm install

# Start development dengan hot-reload
npm run dev
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development mode dengan hot-reload |
| `npm run build` | Build untuk production |
| `npm run build:win` | Build Windows installer (.exe) |
| `npm run build:mac` | Build macOS app (.dmg) |
| `npm run build:linux` | Build Linux app (.AppImage) |
| `npm run typecheck` | TypeScript type checking |
| `npm start` | Run built application |

### Release Process

```bash
# 1. Bump version
npm version patch    # atau minor/major

# 2. Push commits dan tags
git push
git push --tags

# 3. GitHub Actions automatically:
#    - Builds untuk semua platforms
#    - Creates release di GitHub
#    - Uploads binaries sebagai assets
```

---

## 📊 PROJECT STATISTICS

- **Stars:** 8
- **Forks:** 1
- **Contributors:** Multiple
- **Releases:** 5 versions
- **Latest Version:** v0.5.0 (June 6, 2026)
- **Commit Count:** 29 commits
- **Languages:** TypeScript, JavaScript, CSS, JSON

---

## 📥 DOWNLOAD & INSTALLATION

### Current Version: v0.5.0

| Platform | Format | Download Link |
|----------|--------|---------------|
| **Windows** | Connexio_0.5.0_x64-setup.exe | [Download](https://github.com/yandanp/Connexio/releases/download/v0.5.0/Connexio_0.5.0_x64-setup.exe) |
| **macOS** | Connexio_0.5.0_aarch64.dmg | [Download](https://github.com/yandanp/Connexio/releases/download/v0.5.0/Connexio_0.5.0_aarch64.dmg) |
| **Linux (AppImage)** | Connexio_0.5.0_amd64.AppImage | [Download](https://github.com/yandanp/Connexio/releases/download/v0.5.0/Connexio_0.5.0_amd64.AppImage) |
| **Linux (Debian)** | Connexio_0.5.0_amd64.deb | [Download](https://github.com/yandanp/Connexio/releases/download/v0.5.0/Connexio_0.5.0_amd64.deb) |

**Installation Methods:**
1. Download dari [GitHub Releases](https://github.com/yandanp/Connexio/releases)
2. Untuk Windows: Run installer
3. Untuk macOS: Drag app to Applications folder
4. Untuk Linux: Make executable & run

---

## 🎨 THEMES

### Theme Details

| Theme Name | Style | Color Palette |
|-----------|-------|---------------|
| **Connexio Dark** | Default, professional dark | Purple accents on dark background |
| **Connexio Light** | Clean & minimal | Light background with subtle accents |
| **Midnight Ocean** | Deep & immersive | Deep blue dengan teal accents |

**Theme Features:**
- Konsisten untuk app UI dan terminal colors
- Per-project theme selection
- Auto-apply theme pada startup
- Terminal color support untuk semua shells

---

## 🔄 IPC & Communication

### Main → Renderer (Events)
- Terminal output streaming
- Git status updates
- SSH connection status
- Update availability notifications

### Renderer → Main (Requests)
- Create/Update/Delete project
- Execute terminal command
- Run task/script
- SSH connection management
- Settings save/load
- Theme change

---

## 📦 Dependencies Highlights

**Key Production Dependencies:**
```json
{
  "electron": "^latest",
  "react": "^18",
  "typescript": "^latest",
  "xterm": "^latest",
  "node-pty": "^latest",
  "zustand": "^latest",
  "electron-store": "^latest"
}
```

---

## 🤝 CONTRIBUTION GUIDELINES

### Commit Convention

| Prefix | Usage | Example |
|--------|-------|---------|
| `feat:` | New feature | `feat: add SSH connection manager` |
| `fix:` | Bug fix | `fix: terminal not resizing properly` |
| `ci:` | CI/CD changes | `ci: update GitHub Actions workflow` |
| `chore:` | Maintenance | `chore: update dependencies` |

### Pull Request Process
1. Fork repository
2. Create feature branch: `git checkout -b feat/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push branch: `git push origin feat/amazing-feature`
5. Open Pull Request dengan deskripsi detail

---

## 📋 TOPICS & TAGS

Repository di-tag dengan:
- electron
- react
- ssh
- productivity
- typescript
- terminal
- xterm
- project-management
- developer-tools
- terminal-manager

---

## 🔗 USEFUL LINKS

- **GitHub Repository:** https://github.com/yandanp/Connexio
- **Releases:** https://github.com/yandanp/Connexio/releases
- **Issues:** https://github.com/yandanp/Connexio/issues
- **Pull Requests:** https://github.com/yandanp/Connexio/pulls
- **Author:** yandanp (https://github.com/yandanp)

---

## 📝 LICENSE

**MIT License** © yandanp

This project is open source and available under the MIT License. You are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Private use

**Conditions:**
- Include original license
- Include copyright notice

---

## 💡 USE CASES

1. **Multi-Project Developers** - Organize terminals by project
2. **DevOps Engineers** - Manage multiple servers via SSH
3. **Full-Stack Teams** - Run frontend, backend, database in one workspace
4. **System Administrators** - Quick SSH access to servers
5. **Open Source Contributors** - Manage multiple project repositories

---

## 🚀 FUTURE CONSIDERATIONS

Potential features berdasarkan architecture:
- Project templates
- Workspace sharing
- Collaborative features
- Plugin system
- Remote workspace sync
- Integration dengan CI/CD systems
- Terminal recording & playback
- AI-powered command suggestions

---

**Document Generated:** 2026  
**Last Updated:** Based on v0.5.0 release
**Completeness:** ✅ Comprehensive - Includes all technical, feature, and operational information