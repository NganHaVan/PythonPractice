from django.urls import path
from .views import game_list, game_detail

# API: /games/...
urlpatterns = [
    path('', game_list),
    path('<int:pk>/', game_detail)
]
