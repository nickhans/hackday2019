from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('league/<int:league_id>', views.league),
    path('league/create/', views.create_league, name='create'),
    path('league/join/', views.join_league, name='join'),
    path('profile/', views.profile, name='profile'),
]
