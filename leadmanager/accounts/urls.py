from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as know_views

# API: /auth/...
urlpatterns = [
    path('', include('knox.urls')),
    path('register', RegisterAPI.as_view()),
    path('login', LoginAPI.as_view()),
    path('profile', UserAPI.as_view()),
    path('logout', know_views.LogoutView.as_view(), name = "knox_logout")
]
