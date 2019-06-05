import os
from faker import Faker
import random
from leadmanager.games.models import Game, GameCategory
from django import setup

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'leadmanager.settings')
setup()
fakegen = Faker()
game_categories = ['2D', '3D', 'Online', 'Virtual']


def pick_game_category():
    c = GameCategory.objects.get(name=random.choice(game_categories))
    return c


def populate(N=10):
    for entry in range(N):
        random_game_category = pick_game_category()
        random_played = random.choice([True, False])
        fake_name = fakegen.name()
        fake_released_dated = fakegen.iso8601(tzinfo=None, end_datetime=None)
        new_game = Game.objects.create(name=fake_name, game_category=random_game_category,
                                       released_dated=fake_released_dated, played=random_played)
        new_game.save()


if __name__ == '__main__':
    print("Populating data ...")
    populate()
    print('Population completed')
