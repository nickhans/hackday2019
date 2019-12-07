from django.contrib import admin
from felony_football.models import Team, League, Profile, Season

# Register your models here.
admin.site.register(Team)
admin.site.register(League)
admin.site.register(Profile)
admin.site.register(Season)
