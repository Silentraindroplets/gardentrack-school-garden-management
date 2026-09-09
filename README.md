# GardenTrack School Garden Management

A static HTML, CSS, and vanilla JavaScript website for managing school garden
plots, student observations, and garden activity.

## Project Overview

Many school gardening programs still rely on paper journals, which makes it difficult to keep observation records organized, track plant growth consistently, monitor multiple garden plots, and review student participation.

GardenTrack gives administrators a central place to manage students, assign
plots, review observations, and view reports. Students can view their assigned
plot, submit daily observations, and review their observation logs.

## The Problem

- Paper-based journals are hard to organize and search
- Inconsistent tracking of plant growth over time
- Difficult to monitor multiple garden plots at once
- No easy way to review student participation

## Target Audience

**Teachers / Garden Coordinators**
- Assign garden plots to students
- Monitor student submissions
- Check overall garden progress

**Students**
- View their assigned plot
- Submit plant observations
- Track plant growth over time

## Features

### Student Features
- Student dashboard
- Assigned plot information
- Daily observation form
- Observation logs
- Fast-access dashboard links

### Admin Features
- Admin dashboard
- Student and plot management
- Student observation review
- Reports and analytics

### Shared Features
- Responsive navigation
- Login and signup validation
- Local browser storage for account data

## Tech Stack

**Languages**
- HTML5
- CSS3
- JavaScript (Vanilla)

**CSS Techniques**
- Flexbox
- CSS Grid
- Responsive Design

**JavaScript**
- Form validation and authentication
- Dashboard interactions
- Plot management interactions
- Local storage account handling

## Folder Structure

```text
school-garden-management/
├── index.html                  # Login page and entry point
├── student/
│   ├── student_dashboard.html  # Student dashboard
│   ├── my_plot.html            # Assigned plot information
│   ├── observations.html       # Daily observation form
│   ├── observation_log.html    # Observation logs
│   └── student_signup.html     # Student registration
├── admin/
│   ├── admin_dashboard.html    # Admin dashboard
│   ├── manage_plots.html       # Plot management
│   ├── manage_students.html    # Student management
│   ├── reports.html            # Reports and analytics
│   ├── student_observations.html # Observation review
│   └── admin_signup.html       # Admin registration
├── css/
│   ├── style.css               # Global styles and variables
│   ├── nav.css                 # Navigation styles
│   ├── student.css             # Student-page styles
│   ├── admin.css               # Admin-page styles
│   └── auth.css                # Authentication-page styles
├── js/
│   ├── auth.js                 # Login, signup, and account storage
│   ├── dashboard.js             # Dashboard interactions
│   └── manage_plots.js          # Plot management interactions
├── images/                     # Logos and interface icons
├── fonts/                      # Custom fonts
└── README.md
```

## Running the Project

Open `index.html` in a browser, or serve the project directory with any local
static web server. No package installation or build step is required.


## Team

**MOIST INC.** — BSIT 2A, Group 3
**IT 212 – HCI 2 (Elect 1)**
Instructor: Mr. Moses Jireh A. Lozano
Misamis Oriental Institute of Science and Technology Inc.

| Name | Role |
|---|---|
| Felix Cagampang | Project Manager / Lead Designer |
| Jeff Gabriel Embate | Lead Front-End Developer (HTML/CSS) |
| Rutche Rahinao | JavaScript Developer (Logic/Interactivity) |
| Spike Capoquian | JavaScript Developer (Logic/Interactivity) |
| Jael Camocamo | QA Tester / Content Creator |

