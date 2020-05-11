from django.shortcuts import render, redirect
from django.views.generic import ListView,CreateView,UpdateView,DeleteView
from django.urls import reverse
from CAP.apps.cliente.forms import ClienteForm
from CAP.apps.cliente.models import Cliente


# Create your views here.

def cliente_view(request):
    if request.method == 'POST':
        form = ClienteForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/cliente/nuevo')
    else:
        form = ClienteForm()
    
    return render ( request, 'cliente/cliente_nuevo.html', {'form':form})

def cliente_listado(request):
    clientes=Cliente.objects.all()
    contexto={'clientes':clientes}
    return render(request,'cliente/cliente_listado.html',contexto)

def cliente_editar(request, id_cliente):
    cliente=Cliente.objects.get(id=id_cliente)
    if request.method=="GET":
        form=ClienteForm(instance=cliente)
    else:
        form=ClienteForm(request.POST,instance=cliente)
        if form.is_valid():
            form.save()
        return redirect("/cliente/listado")
    return render(request, "cliente/cliente_nuevo.html", {'form':form})

def cliente_eliminar(request, id_cliente):
    persona=Cliente.objects.get(id=id_cliente)
    if request.method=="POST":
        persona.delete()
        return redirect('listado_clientes')
    return render(request, "cliente/cliente_eliminar.html", {'cliente':persona})
    
# PROGRAMACIÓN CON CLASES
# CLIENTE
class ClienteList(ListView):
    model=Cliente
    template_name='cliente/cliente_listado.html'

class ClienteCreate(CreateView):
    model=Cliente
    form_class=ClienteForm
    template_name='cliente/cliente_nuevo.html'
    
    def get_success_url(self):
        return reverse('listado_clientes')

class ClienteUpdate(UpdateView):
    model=Cliente
    form_class=ClienteForm
    template_name='cliente/cliente_nuevo.html'
    
    def get_success_url(self):
        return reverse('listado_clientes')

class ClienteDelete(DeleteView):
    model=Cliente
    template_name='cliente/cliente_eliminar.html'
    
    def get_success_url(self):
        return reverse('listado_clientes')

