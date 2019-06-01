from django.db import models

# Create your models here.


class Game(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=200, blank=True, default='')
    released_dated = models.DateTimeField()
    game_category = models.CharField(max_length=200, default='', blank=True)
    played = models.BooleanField(default=False)

    class Meta:
        ordering = ('name',)
