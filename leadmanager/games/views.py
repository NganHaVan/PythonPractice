from rest_framework import generics
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import Game, GameCategory, Player, PlayScore
from .serializer import (GameCategorySerializer, GameSerializer,
                         PlayerSerializer, PlayScoreSerializer)
from .pagination import PageNumberCustomization


class GameCategoryList(generics.ListCreateAPIView):
    queryset = GameCategory.objects.all()
    serializer_class = GameCategorySerializer
    name = 'gamecategory-list'


class GameCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = GameCategory.objects.all()
    serializer_class = GameCategorySerializer
    name = 'gamecategory-detail'


class GameList(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    pagination_lass = PageNumberCustomization
    name = 'game-list'


class GameDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    name = 'game-detail'


class PlayerList(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    name = 'player-list'


class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    name = 'player-detail'


class PlayScoreList(generics.ListCreateAPIView):
    queryset = PlayScore.objects.all()
    serializer_class = PlayScoreSerializer
    name = 'playscore-list'


class PlayScoreDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlayScore.objects.all()
    serializer_class = PlayScoreSerializer
    name = 'playscore-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({
            'players': reverse(PlayerList.name, request=request),
            'game-categories': reverse(GameCategoryList.name, request=request),
            'games': reverse(GameList.name, request=request),
            'scores': reverse(PlayScoreList.name, request=request)
        })
