from django.db import models
from CAP.apps.cliente.models import Cliente

# Create your models here.
class Obra(models.Model):
    nombre=models.CharField(max_length=50)
    direccion=models.CharField(max_length=50)
    poblacion=models.CharField(max_length=30)
    cp=models.IntegerField()
    provincia=models.CharField(max_length=25)
    cliente=models.ForeignKey(Cliente,null=False,blank=False, default="", on_delete=models.SET_DEFAULT )
    