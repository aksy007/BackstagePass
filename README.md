# React Feed Post UI - Architecture Plan

## App URL: https://aksy007.github.io/BackstagePass/

## Project Overview

A responsive social media feed UI built with React, featuring light/dark mode support, interactive components, and carefully designed visual hierarchy.

## Component Structure

### Layout Components

- **Layout** - Main page wrapper with header and sidebar
  - **MainHeader** - Navigation and branding header
  - **TopBar** - Secondary navigation/actions bar
  - **MainContent** - Primary content area

### Sidebar Components

- **Sidebar** - Day selection sidebar with blur/locked states
  - **DayItem** - Individual day selector with active state indicator

### Feed Components

- **FeedPost** - Main feed container
  - **FeedPostCard** - Individual post card
    - **PostHeader** - Author info and metadata
    - **PostContent** - Text/caption content
    - **PostMedia** - Images/media display
    - **PostFooter** - Interactions (likes, comments, etc.)
  - **SubscriberPostCard** - Premium/subscriber post variant
    - **PinnedHeader** - Pinned indicator with confetti animation
  - **ConfettiHeader** - Decorative confetti animation

## Styling Strategy

### CSS Architecture

- **Module-based CSS** - Each component has its own `.module.css` file
- **CSS Variables** - Centralized theme colors in `styles/variables.css`
- **Reset & Globals** - Base styling in `styles/reset.css` and `globals.css`

### Theme Implementation

- **Prefer-color-scheme** - Native CSS media query for light/dark detection
- **CSS Variables** - Dynamic color switching via `--color-*` variables

## Responsiveness Strategy

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Fluid Design

- Flexible grid layouts using CSS Grid/Flexbox
- Mobile-first approach

## File Organization

```
src/
├── components/
│   ├── Common/
│   ├── Confetti/
│   ├── FeedPost/
│   ├── Layout/
│   ├── MainContent/
│   └── Sidebar/
├── constants/
├── context/
├── data/
├── hooks/
│   └── useDarkMode.js
├── styles/
│   ├── globals.css
│   ├── reset.css
│   └── variables.css
├── App.jsx
└── main.jsx
```

## Key Features

### 1. Feed Post Card

- Clean card layout with shadow/borders
- Author profile with avatar
- Smooth hover transitions

### 2. Subscriber Post Card

- Enhanced styling variant
- Confetti/Pinned header as a prop
- Reusable and maintainable
- Same base structure as FeedPostCard

### 3. Sidebar Navigation

- Vertical day selector
- Current day highlighting
- Smooth indicator movement
- Blur/locked state visuals
- Responsive collapse on mobile

### 4. Dark Mode

- Automatic detection via `prefer-color-scheme`

## Technologies Used

- **React 18+** - UI library
- **Icon Library** - React Icons Library
- **CSS Modules** - Component-scoped styling
- **CSS Variables** - Theme customization
- **CSS Flexbox/Grid** - Layouts
- **Vite** - Build tool
