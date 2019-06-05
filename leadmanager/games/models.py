from django.db import models

# Create your models here.


class GameCategory(models.Model):
    name = models.CharField(max_length=200, unique=True)

    class Meta:
        ordering = ('name',)
    # The method will be called whenever it has to provide a human-readable representation for the model

    def __str__(self):
        return self.name


class Game(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=200, blank=False,
                            default='', unique=True)
    released_dated = models.DateTimeField()
    # Many-to-one relationship with the game category model
    # CASCADE: Whenever a game category is deleted, all the games that belong to this category will be deleted too
    game_category = models.ForeignKey(
        GameCategory, related_name='games', on_delete=models.CASCADE)
    played = models.BooleanField(default=False)

    class Meta:
        ordering = ('pk',)

    def __str__(self):
        return self.name


class Player(models.Model):
    MALE = 'M'
    FEMALE = 'F'
    GENDER_CHOICES = ((MALE, 'Male'), (FEMALE, 'Female'),)
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=200, blank=False,
                            default='', unique=True)
    gender = models.CharField(
        max_length=2, choices=GENDER_CHOICES, default=MALE)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name


class PlayScore(models.Model):
    player = models.ForeignKey(
        Player, related_name="scores", on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    score = models.IntegerField()
    score_date = models.DateTimeField()

    class Meta:
        ordering = ('-score',)
