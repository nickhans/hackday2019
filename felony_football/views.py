from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

from felony_football.models import League


# Create your views here.
@login_required(login_url='/accounts/login/')
def index(request):
  leagues = League.objects.filter(members__id=request.user.id)
  return render(request, 'index.html', {'leagues': leagues})


@login_required(login_url='/accounts/login/')
def league(request, league_id):
  leagues = League.objects.filter(members__id=request.user.id)
  league = League.objects.get(id=league_id)
  teams = league.teams.all()
  print(teams[0].nfl_team)
  return render(request, 'league.html', {'leagues': leagues, 'teams': teams})


@login_required(login_url='/accounts/login/')
def create_league(request):
  return HttpResponse("CREATE LEAGUE")


@login_required(login_url='/accounts/login/')
def join_league(request):
  return HttpResponse("JOIN LEAGUE")


@login_required(login_url='/accounts/login/')
def profile(request):
  return HttpResponse('PROFILE')


def login(request):
  return render(request, 'login.html')


def signup(request):
  return render(request, 'signUp.html')
