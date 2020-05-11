from django.http import HttpResponse
from django.shortcuts import render

def user(request):
    return HttpResponse("Index")



def user1(request):
    return HttpResponse("Es la segunda página")

