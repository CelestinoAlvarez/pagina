from django import forms
from django.core.exceptions import ValidationError
from CAP.apps.cliente.models import Cliente


class ClienteForm(forms.ModelForm):

    class Meta:
        model=Cliente
        fields=[
            'nombre',
            'cif',
            'direccion',
            'poblacion',
            'cp',
            'provincia',
            'email',
        ]

        labels={
            'nombre':'Nombre',
            'cif':'CIF o DNI',
            'direccion':'Dirección',
            'poblacion':'Población',
            'cp':'Código Postal',
            'provincia':'Provincia',
            'email':'e-mail'
        }

        widgets={
            'nombre':forms.TextInput(),
            'cif':forms.TextInput(),
            'direccion':forms.TextInput(),
            'poblacion':forms.TextInput(),
           # 'cp':forms.TextInput(),
            'provincia':forms.TextInput(),
            'email':forms.TextInput(),
        }

    def clean_cp(self):
        cp = self.cleaned_data['cp']
        try:
            valor=int(cp)
            if valor>9999:
                raise ValidationError("Código no válido")
        except ValueError:
            raise ValidationError("Debes introducir un número")
        return cp

    def clean(self):
         cleaned_data = super(ClienteForm, self).clean()