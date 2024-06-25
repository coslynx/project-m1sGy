import pandas as pd

def allocate_rooms(group_file_path, hostel_file_path):
    group_data = pd.read_csv(group_file_path)
    hostel_data = pd.read_csv(hostel_file_path)

    # Your allocation algorithm logic here

    allocation_details = pd.DataFrame(columns=['Group ID', 'Hostel Name', 'Room Number', 'Members Allocated'])

    # Your logic to populate allocation_details dataframe here

    return allocation_details

# Function to write allocation details to a CSV file
def write_allocation_details(allocation_details, output_file_path):
    allocation_details.to_csv(output_file_path, index=False)