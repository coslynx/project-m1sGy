# Project Overview

- Develop a web application using Next.js for the frontend and Django for the backend.
- Utilize two CSV files: one containing group information and the other containing hostel information.
- Allocate rooms based on specific criteria and display the allocation details.
- Provide a downloadable CSV file with the allocation details.

# Features

- Upload two CSV files containing group and hostel information.
- Algorithm to allocate rooms based on specific criteria.
- Display allocated rooms with group members.
- Downloadable CSV file with allocation details.

# Group Information CSV

- Contains group ID, number of members, and gender.
- Different scenarios for group sizes and gender combinations.
- Example: Group ID | Members | Gender 101 | 3 | Boys

# Hostel Information CSV

- Contains hostel name, room number, capacity, and gender accommodation.
- Example: Hostel Name | Room Number | Capacity | Gender Boys

# Output

- Display allocated rooms with group members.
- Example output CSV: Group ID | Hostel Name | Room Number | Members Allocated

# Frontend Requirements

- User-friendly interface to upload CSV files.
- Algorithm to allocate rooms based on criteria.
- Criteria include same group members staying together, gender-specific hostels, and room capacity limits.
- No need to store CSV files as they are for one-time use only.

# Enhancements

- Include a feature to manually adjust room allocations.
- Implement a search function to quickly locate specific group members.
- Add visual indicators to show room occupancy levels in hostels.
- Incorporate responsive design for optimal viewing on different devices.