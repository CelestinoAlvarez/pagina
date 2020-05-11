from django.urls import path
from electricidad.views import user


urlpatterns = [
    path('indice/', user, name="indice"),
]
