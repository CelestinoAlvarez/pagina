"""CAP URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.contrib.auth import logout
from CAP.views import inicio,principal,programacion,automatizacion,electricidad,reglamento,cookies
from CAP.views import usuarioBienvenido,usuarioRegistro,usuarioLogin,usuarioLogout
from CAP.views import resumenGUIABTRD,resumenGUIABTIndice,resumenITCBT04,resumenITCBT05,resumenITCBT06,resumenITCBT09
from CAP.apps.cliente.views import cliente_view,cliente_listado,cliente_editar,cliente_eliminar,ClienteList,ClienteCreate,ClienteUpdate,ClienteDelete

from CAP.apps.cliente.models import Cliente
    
from CAP.apps.obra.views import obra_view,ObraList,ObraCreate,ObraUpdate,ObraDelete


from . import views


urlpatterns = [
    path('admin/', admin.site.urls, name='administrador'),
    #Registro de usuarios
    path('usuarios/bienvenido',usuarioBienvenido,name='usuarioBienvenido'),
    path('usuarios/registro',usuarioRegistro,name='usuarioRegistro'),
    path('usuarios/login',usuarioLogin,name='usuarioLogin'),
    path('usuarios/logout',usuarioLogout,name='usuarioLogout'),
    path('inicio/', inicio, name="inicio"),
    path('cookies/',cookies, name="cookies"),
    path('principal/', principal, name="principal"),
    path('programacion/',programacion, name="programacion"),
    path('automatizacion/',automatizacion, name="automatizacion"),
    path('electricidad/',electricidad, name="electricidad"),

    #Reglamento
    path('reglamento/',reglamento, name="reglamento"),
    path('reglamento/guiabtrd',resumenGUIABTRD, name="reglamentoGUIABTRD"),
    path('reglamento/guiabtindice',resumenGUIABTIndice, name="reglamentoGUIABTIndice"),
    path('reglamento/itcbt04',resumenITCBT04, name="reglamentoITCBT04"),
    path('reglamento/itcbt05',resumenITCBT05, name="reglamentoITCBT05"),
    path('reglamento/itcbt06',resumenITCBT06, name="reglamentoITCBT06"),
    path('reglamento/itcbt09',resumenITCBT09, name="reglamentoITCBT09"),

    path('cliente/nuevo',ClienteCreate.as_view(), name="nuevo_cliente"),
    path('cliente/listado',ClienteList.as_view(), name="listado_clientes"),
    path('cliente/editar/<pk>',ClienteUpdate.as_view(), name="editar_cliente"),
    path('cliente/eliminar/<pk>',ClienteDelete.as_view(), name="eliminar_cliente"),
    path('obra/listado',ObraList.as_view(), name="listado_obras"),
    path('obra/nueva',ObraCreate.as_view(), name="nueva_obra"),
    path('obra/editar/<pk>',ObraUpdate.as_view(),name='editar_obra'),
    path('obra/eliminar/<pk>',ObraDelete.as_view(),name='eliminar_obra'),
    
]
