from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Team(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    nfl_team = models.TextField()

class League(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    teams = models.ManyToManyField(Team)
    members = models.ManyToManyField(User)
    admin = models.ForeignKey(User,on_delete=models.CASCADE,related_name='admin_key')

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    wins = models.IntegerField(default=0)

class Season(models.Model):
    id = models.AutoField(primary_key=True)
    league = models.ForeignKey(League,on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    winner = models.ForeignKey(User,on_delete=models.CASCADE)
    winning_team = models.TextField()
