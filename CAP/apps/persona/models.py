from django.db import models

# Create your models here.

class Persona(models.Model):
    nombre=models.CharField(max_length=25)
    primer_apellido=models.CharField(max_length=25)
    segundo_apellido=models.CharField(max_length=25)
    dni=models.CharField(max_length=9)
    direccion=models.CharField(max_length=50)
    poblacion=models.CharField(max_length=30)
    cp=models.IntegerField()
    provincia=models.CharField(max_length=25)