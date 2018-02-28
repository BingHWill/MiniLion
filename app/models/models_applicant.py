from django.db import models
from django.utils import timezone

class Applicant(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=16, blank=True, null=True)
	mobile = models.CharField(max_length=11, blank=True, null=True, unique=True)
	apply_date = models.DateField(default=timezone.now)

	def __str__(self):
		return self.telephone