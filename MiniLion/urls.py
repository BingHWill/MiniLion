from django.contrib import admin
from django.urls import path
from app.views import page_home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', page_home),
]