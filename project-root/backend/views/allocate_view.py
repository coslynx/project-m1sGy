import pandas as pd

from backend.models.Group import Group
from backend.models.Hostel import Hostel

def allocate_rooms(group_csv_path, hostel_csv_path):
    group_data = pd.read_csv(group_csv_path)
    hostel_data = pd.read_csv(hostel_csv_path)
    
    allocation_details = []
    
    for index, group_row in group_data.iterrows():
        group_id = group_row['Group ID']
        members = group_row['Members']
        gender = group_row['Gender']
        
        filtered_hostels = hostel_data[(hostel_data['Gender'] == gender) & (hostel_data['Capacity'] >= members)]
        if not filtered_hostels.empty:
            hostel_row = filtered_hostels.iloc[0]
            hostel_name = hostel_row['Hostel Name']
            room_number = hostel_row['Room Number']
            
            allocation_details.append({
                'Group ID': group_id,
                'Hostel Name': hostel_name,
                'Room Number': room_number,
                'Members Allocated': members
            })
    
    return allocation_details