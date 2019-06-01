from rest_framework import serializers
from .models import Game

# ModelSerializer to eliminate duplicate codes


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = "__all__"
