from rest_framework import serializers
from .models import Game, GameCategory, PlayScore, Player

# ModelSerializer to eliminate duplicate codes


class GameCategorySerializer(serializers.HyperlinkedModelSerializer):
    # One to many relationship (many=True)
    games = serializers.HyperlinkedRelatedField(
        view_name='game-detail', read_only=True, many=True)

    class Meta:
        model = GameCategory
        fields = ('url', 'pk', 'name', 'games')


class GameSerializer(serializers.HyperlinkedModelSerializer):
    # Display game_category's name instead of game_category_id
    # SlugRelatedField: a read-write field that reperesents the target of the relationship by a unique 'slug' attribute
    game_category = serializers.SlugRelatedField(
        queryset=GameCategory.objects.all(), slug_field="name")

    class Meta:
        model = Game
        fields = ('url', 'game_category', 'name', 'released_dated', 'played')


class ScoreSerializer(serializers.HyperlinkedModelSerializer):
    # Display all the details for the game
    game = GameSerializer()
    # Player is not included because it will be nested in the Player model

    class Meta:
        model = PlayScore
        fields = ('url', 'pk', 'score', 'score_date', 'game')


class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    scores = ScoreSerializer(many=True, read_only=True)
    gender = serializers.ChoiceField(choices=Player.GENDER_CHOICES)
    gender_description = serializers.CharField(
        source='get_gender_display', read_only=True)

    class Meta:
        model = Player
        fields = ('url', 'name', 'gender', 'gender_description', 'scores')


class PlayScoreSerializer(serializers.ModelSerializer):
    player = serializers.SlugRelatedField(
        queryset=Player.objects.all(), slug_field="name")
    game = serializers.SlugRelatedField(
        queryset=Game.objects.all(), slug_field="name")

    class Meta:
        model = PlayScore
        fields = ('url', 'pk', 'score', 'score_date', 'player', 'game')
