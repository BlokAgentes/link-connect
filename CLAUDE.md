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

- **Local development**: Use a local web server (e.g., `python -m http.server 8000` or Live Server extension)
- **File editing**: Direct editing of HTML, CSS, and JavaScript files
- **Testing**: Open pages in browser and test functionality manually

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

## Key Functions

- `renderStudents()`: Dynamically generates student profile cards
- `filterStudents()`: Handles filtering by semester and interests
- `renderPosts()`: Creates post cards for the mural
- `handleNewPost()`: Processes new post form submissions
- `renderAnnouncements()`: Displays announcement cards