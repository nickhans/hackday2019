# Generated by Django 3.0 on 2019-12-07 20:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('felony_football', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='league',
            name='teams',
            field=models.ManyToManyField(blank=True, to='felony_football.Team'),
        ),
        migrations.AlterField(
            model_name='season',
            name='winner',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='season',
            name='winning_team',
            field=models.CharField(blank=True, max_length=60),
        ),
        migrations.AlterField(
            model_name='team',
            name='nfl_team',
            field=models.CharField(max_length=30),
        ),
    ]
