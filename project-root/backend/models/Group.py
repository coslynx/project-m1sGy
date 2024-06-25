class Group(models.Model):
    group_id = models.IntegerField()
    number_of_members = models.IntegerField()
    gender = models.CharField(max_length=10)

    def __str__(self):
        return f"Group ID: {self.group_id}, Members: {self.number_of_members}, Gender: {self.gender}"