from django import forms
from CAP.apps.obra.models import Obra

class ObraForm(forms.ModelForm):

    class Meta:
        model=Obra
        fields=[
            'nombre',
            'direccion',
            'poblacion',
            'cp',
            'provincia',
            'cliente'
        ]

        labels={
            'nombre':'Nombre',
            'direccion':'Dirección',
            'poblacion':'Población',
            'cp':'Código Postal',
            'provincia':'Provincia',
            'cliente':'Nombre Cliente'
        }

        widgets={
            'nombre':forms.TextInput(),
            'direccion':forms.TextInput(),
            'poblacion':forms.TextInput(),
            'cp':forms.TextInput(),
            'provincia':forms.TextInput(),
            'cliente':forms.Select(),
        }