from django.contrib import admin
from django.urls import path
from . import views
from django.views.static import serve

from django.urls import re_path

from django.conf import settings

urlpatterns = [
    path('', views.index, name="home"),
    path('team/gryffindor/', views.gryffindor_team_view, name='gryffindor_team'),
    path('team/slytherin/', views.slytherin_team_view, name='slytherin_team'),
    path('team/hufflepuff/', views.hufflepuff_team_view, name='hufflepuff_team'),
    path('team/ravenclaw/', views.ravenclaw_team_view, name='ravenclaw_team'),
    path('schedule/', views.schedule, name="schedule"),
    path('store/', views.store, name="store"),
    path('login/', views.login_view, name="login"),
    path('register/', views.register, name="register"),
    path('ticket/', views.ticket, name="ticket"),
    path('createteam/', views.create_team, name="register_team"),
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root':       settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
]


