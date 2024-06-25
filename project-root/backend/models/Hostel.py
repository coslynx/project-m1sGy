class Hostel:
    def __init__(self, name, room_number, capacity, gender_accommodation):
        self.name = name
        self.room_number = room_number
        self.capacity = capacity
        self.gender_accommodation = gender_accommodation
        self.allocated_groups = []

    def allocate_room(self, group_id, members):
        if len(self.allocated_groups) < self.capacity:
            self.allocated_groups.append({"group_id": group_id, "members": members})
            return True
        else:
            return False

    def get_allocation_details(self):
        allocation_details = []
        for group in self.allocated_groups:
            allocation_details.append({"group_id": group["group_id"], "hostel_name": self.name, "room_number": self.room_number, "members_allocated": group["members"]})
        return allocation_details