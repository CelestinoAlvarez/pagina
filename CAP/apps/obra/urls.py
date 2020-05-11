from django.urls import path
from CAP.apps.obra.views import obra_view


urlpatterns = [
    path('nueva/', obra_view, name="nueva"),
]