from django.db import models

# Create your models here.
class Cliente(models.Model):
    nombre=models.CharField(max_length=50)
    cif=models.CharField(max_length=9)
    direccion=models.CharField(max_length=50)
    poblacion=models.CharField(max_length=30)
    cp=models.IntegerField()
    provincia=models.CharField(max_length=25)
    email=models.EmailField()

    def __str__(self):
        return '{}'.format(self.nombre)