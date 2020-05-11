from django.http import HttpResponse
from django.template import Template,Context
from django.template.loader import get_template
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as do_login
from django.contrib.auth import logout as do_logout
from django.contrib.auth.forms import UserCreationForm

def inicio(request):

    documento=get_template("inicio/inicio.html")
    pagina=documento.render()

    return HttpResponse(pagina)

#USUARIOS
def usuarioBienvenido(request):
    if request.user.is_authenticated:
        return render(request,"principal/principal.html")
    return render(request, "usuarios/login.html")

def usuarioRegistro(request):
     # Creamos el formulario de autenticación vacío
    form = UserCreationForm()
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = UserCreationForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():

            # Creamos la nueva cuenta de usuario
            user = form.save()

            # Si el usuario se crea correctamente 
            if user is not None:
                # Hacemos el login manualmente
                do_login(request, user)
                # Y le redireccionamos a la portada
                return redirect('/inicio/')

    # Si llegamos al final renderizamos el formulario
    return render(request, "usuarios/registro.html", {'form': form})

def usuarioLogin(request):
      # Creamos el formulario de autenticación vacío
    form = AuthenticationForm()
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = AuthenticationForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():
            # Recuperamos las credenciales validadas
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            # Verificamos las credenciales del usuario
            user = authenticate(username=username, password=password)

            # Si existe un usuario con ese nombre y contraseña
            if user is not None:
                # Hacemos el login manualmente
                do_login(request, user)
                # Y le redireccionamos a la portada
                return redirect('/inicio/')

    # Si llegamos al final renderizamos el formulario
    return render(request,"usuarios/login.html", {'form': form})


def usuarioLogout(request):
    do_logout(request)
    return redirect("/inicio/")

#COOKIES
def cookies(request):

    documento=get_template("cookies/cookies.html")
    pagina=documento.render()

    return HttpResponse(pagina)

def principal(request):

    documento2=get_template("principal/principal.html")
    paginas=documento2.render()

    return HttpResponse(paginas)

def programacion(request):

    documento2=get_template("programacion/programacion.html")
    paginas=documento2.render()

    return HttpResponse(paginas)
    
def automatizacion(request):

    documento2=get_template("automatizacion/automatizacion.html")
    paginas=documento2.render()

    return HttpResponse(paginas)

def electricidad(request):

    documento2=get_template("electricidad/electricidad.html")
    paginas=documento2.render()

    return HttpResponse(paginas)
    

#REGLAMENTO    
def reglamento(request):

    documento2=get_template("electricidad/reglamento/reglamento.html")
    paginas=documento2.render()

    return HttpResponse(paginas)

def resumenGUIABTRD(request):
    documento=get_template("electricidad/reglamento/guiabtrd.html")
    paginas=documento.render()
    
    return HttpResponse(paginas)

def resumenGUIABTIndice(request):
    documento=get_template("electricidad/reglamento/guiabtindice.html")
    paginas=documento.render()

    return HttpResponse(paginas)

def resumenITCBT04(request):
    documento=get_template("electricidad/reglamento/itcbt04.html")
    paginas=documento.render()

    return HttpResponse(paginas)

def resumenITCBT05(request):
    documento=get_template("electricidad/reglamento/itcbt05.html")
    paginas=documento.render()

    return HttpResponse(paginas)
    
def resumenITCBT06(request):
    documento=get_template("electricidad/reglamento/itcbt06.html")
    paginas=documento.render()

    return HttpResponse(paginas)

def resumenITCBT09(request):
    documento=get_template("electricidad/reglamento/itcbt09.html")
    paginas=documento.render()

    return HttpResponse(paginas)