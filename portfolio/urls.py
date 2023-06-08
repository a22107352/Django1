from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views

app_name = 'portfolio'
urlpatterns = [
    path('', views.index, name="index"),
    path('chart/', views.chart_view, name='chart'),
]
