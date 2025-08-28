# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Link Connect is a student networking web application for Link educational institution. It's a client-side only application built with vanilla HTML, CSS, and JavaScript that helps students connect with peers based on shared interests and academic semester.

## Architecture

This is a single-page application with multiple HTML files sharing common resources:

- **Multi-page structure**: Three main pages (index.html, mural.html, avisos.html) with shared navigation
- **Client-side rendering**: All content is dynamically generated from JavaScript mock data
- **Shared resources**: Single CSS file (style.css) and JavaScript file (script.js) used across all pages
- **Responsive design**: Mobile-first approach with responsive breakpoints

## Key Components

### Data Layer (script.js:1-148)
- `students` array: Mock student profiles with semester, interests, and company info
- `posts` array: User-generated questions and ideas for the mural
- `announcements` array: Official announcements and opportunities

### Page Initialization (script.js:154-164)
- Route-based initialization using `window.location.pathname`
- Each page has dedicated init functions: `initProfiles()`, `initMural()`, `initAnnouncements()`

### Core Features
- **Student Profiles** (index.html): Filterable grid of student cards by semester and interests
- **Mural** (mural.html): Community question/idea sharing with form submission
- **Announcements** (avisos.html): Display of official events and opportunities

## Development Commands

Since this is a static HTML/CSS/JavaScript application, no build tools or package managers are configured. To work with this codebase:

- **Local development**: Start local server with `python3 -m http.server 8000` or `npx http-server -p 8000`, then access `http://localhost:8000`
- **File editing**: Direct editing of HTML, CSS, and JavaScript files
- **Testing**: Open pages in browser and test functionality manually
- **No linting/build**: No npm scripts or build tools configured

## File Structure

```
/
├── index.html       # Student profiles page (main landing)
├── mural.html       # Community questions and ideas
├── avisos.html      # Official announcements
├── script.js        # All JavaScript functionality and data
└── style.css        # Complete styling for all pages
```

## Code Patterns

- **Vanilla JavaScript**: No frameworks or libraries used
- **DOM manipulation**: Direct element creation and event handling
- **CSS Grid/Flexbox**: Modern layout techniques throughout
- **Mobile-first**: Responsive design with mobile breakpoints at 768px
- **Portuguese language**: All content and UI text in Brazilian Portuguese
- **Design system**: shadcn/ui inspired theme with dark blue color scheme (#0D1E3B, #112A54)
- **Mock data**: All data stored in JavaScript arrays at top of script.js

## Student Classification

Students are organized into 5 companies/turmas:
- **Builder** 🔨, **Dreamer** 💭, **Innovators** 💡, **Winners** 🏆, **Creators** 🎨

Interest categories: Tecnologia, Educação, Agronegócio, Saúde, Sustentabilidade, Finanças

## Key Functions

- `renderStudents()`: Dynamically generates student profile cards
- `filterStudents()`: Handles filtering by semester and interests
- `openStudentModal()`: Opens detailed student modal with contact functionality
- `renderPosts()`: Creates post cards for the mural
- `handleNewPost()`: Processes new post form submissions
- `toggleComments()`: Shows/hides comments section for posts
- `addComment()`: Adds new comments to posts
- `renderAnnouncements()`: Displays announcement cards
- `generateStudentEmail()`: Auto-generates student email addresses based on name
- `copyEmailToClipboard()`: Handles email copying functionality with fallback