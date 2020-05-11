from django.shortcuts import render,redirect
from django.views.generic import ListView,CreateView,UpdateView,DeleteView
from django.urls import reverse
from CAP.apps.obra.forms import ObraForm
from CAP.apps.obra.models import Obra


# Create your views here.

def obra_view(request):
    if request.method=='POST':
        form=ObraForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/obra/obra')
    else:
        form=ObraForm()
    
    return render(request,'obra/obra_nueva.html',{'form':form})

    #DEFINICION DE LAS VISTAS OBRA

class ObraList(ListView):
    model=Obra
    template_name='obra/obra_listado.html'


class ObraCreate(CreateView):
    model=Obra
    form_class=ObraForm
    template_name='obra/obra_nueva.html'
    def get_success_url(self):
        return reverse('listado_obras')

class ObraUpdate(UpdateView):
    model=Obra
    form_class=ObraForm
    template_name='obra/obra_nuevo.html'
    
    def get_success_url(self):
        return reverse('listado_obras')

    
class ObraDelete(DeleteView):
    model=Obra
    template_name='obra/obra_eliminar.html'
    
    def get_success_url(self):
        return reverse('listado_obras')

    
