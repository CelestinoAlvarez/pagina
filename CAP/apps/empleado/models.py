from django.db import models
from CAP.apps.puesto.models import Puesto
from CAP.apps.persona.models import Persona

# Create your models here.
class Empleado(models.Model):
    persona=models.ForeignKey(Persona,null=False,blank=False, default="", on_delete=models.SET_DEFAULT)
    cargo=models.ForeignKey(Puesto, null=False, blank=False, default="", on_delete=models.SET_DEFAULT)
    fecha_incorporacion=models.DateField()
    email=models.EmailField()
    estudios=models.CharField(max_length=30)
    