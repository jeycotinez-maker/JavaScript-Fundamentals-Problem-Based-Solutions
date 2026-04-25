# JavaScript-Fundamentals-Problem-Based-Solutions

# CrowdCount |Occupancy Monitor

CrowdCount is a web app that helps a coffee shop manager track occupancy in real time.  It was built for James, who needs a fast way to monitor people entering and leaving so the shop stays within fire-code limits.

## Problem Analysis
James manages a busy coffee shop and cannot safely rely on manual counting during rush hours. He needs a simple system that shows occupancy at a glance, warns staff before the shop gets too full, and helps prevent going over the legal capacity.

## Features
- Set maximum capacity.
- Track entries with `+ Entry`.
- Track exits with `- Exit`.
- Show live occupancy as `current / max`.
- Show live occupancy percentage.
- Change status colors:
- Green for safe.
- Orange for warning at 85%.
- Red for stop at 100%.
- Warning dialog with **Continue** and **Stop Entry** choices.
- Reset button.
- Responsive layout for desktop and mobile.