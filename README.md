# GreenTrack - School Garden Management Website

A website designed to help schools manage their gardening programs digitally. GreenTrack allows teachers to assign garden plots to students, while enabling students to record plant observations and monitor growth over time.

**NOTE: Everything in this document is provisional!**

## Project Overview

Many school gardening programs still rely on paper journals, which makes it difficult to keep observation records organized, track plant growth consistently, monitor multiple garden plots, and review student participation.

GreenTrack solves this by giving teachers a single place to manage and assign garden plots, keep all garden data stored together for easy monitoring, and let students record their observations digitally.

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

### Static Features (HTML & CSS)
- Login Page
- Student Dashboard
- My Garden Plot Page
- Observation History
- Admin Dashboard
- Responsive Navigation

### Dynamic Features (JavaScript)
- User Login Validation
- Add Observation
- Display Observation History
- Assign Garden Plot
- Update Plant Status
- Logout Functionality

## Tech Stack

**Languages**
- HTML5
- CSS3
- JavaScript (Vanilla)

**CSS Techniques**
- Flexbox
- CSS Grid
- Responsive Design

**JavaScript Functions**
- Form Validation
- CRUD Operations
- Dynamic Table Updates
- Event Listeners

## Folder Structure (Subject to CHANGE!)

```
greentrack/
├── index.html                  # Login page (entry point)
├── signup.html                  # Signup page (entry point)
│
├── student/
│   ├── dashboard.html          # Student Dashboard
│   ├── my-plot.html            # My Garden Plot page
│   └── observations.html       # Observation History page
│   └── plot_journal.html       # A diary log of assigned plot (not sure if this is necessary)
│
├── admin/
│   ├── dashboard.html          # Admin Dashboard
│   └── manage_plots.html       # Assign Garden Plot (admin-side)
│   └── reports.html       # Generate reports (admin-side)
│   └── student_observations.html # Monitor observations submitted by students    (admin-side)
│   └── manage_students.html       # Manage students (admin-side)
├── css/
│   ├── style.css               # Global styles, resets, variables
│   ├── nav.css                 # Responsive navigation
│   ├── login.css
│   ├── student.css
│   └── admin.css
│
├── js/
│   ├── auth.js                 # Login validation + logout
│   ├── observations.js         # Add / display observation history
│   ├── plots.js                # Assign garden plot / update plant status
│   ├── nav.js                  # Responsive nav toggle behavior
│   └── data.js                 # Shared mock data / localStorage helpers (CRUD)
│
├── assets/
│   ├── images/                 # Logos, icons, plant photos
│   └── fonts/                  # Custom fonts, if any
│
└── README.md
```


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

