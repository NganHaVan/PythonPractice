from django.urls import path
# from .views import game_list, game_detail
from .views import GameCategoryList, GameCategoryDetail, GameList, GameDetail, PlayScoreList, PlayScoreDetail, PlayerList, PlayerDetail, ApiRoot

# API: /games/...
urlpatterns = [
    path('', GameList.as_view(), name=GameList.name),
    path('<int:pk>/', GameDetail.as_view(), name=GameDetail.name),
    path('game-categories/', GameCategoryList.as_view(),
         name=GameCategoryList.name),
    path('game-categories/<int:pk>/', GameCategoryDetail.as_view(),
         name=GameCategoryDetail.name),
    path('players/', PlayerList.as_view(), name=PlayerList.name),
    path('players/<int:pk>/', PlayerDetail.as_view(), name=PlayerDetail.name),
    path('play-scores/', PlayScoreList.as_view(), name=PlayScoreList.name),
    path('play-scores/<int:pk>/', PlayScoreDetail.as_view(),
         name=PlayScoreDetail.name),
    path('root', ApiRoot.as_view(), name=ApiRoot.name)
]
