from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
  return HttpResponse('Test')


def login(request):
  return render(request, 'login.html')


def signup(request):
  return render(request, 'signUp.html')
