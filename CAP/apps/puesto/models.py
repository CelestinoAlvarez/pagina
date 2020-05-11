from django.db import models

# Create your models here.
class Puesto(models.Model):
    cargo=models.CharField(max_length=15)
   