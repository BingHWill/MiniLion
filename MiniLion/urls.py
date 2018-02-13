from django.contrib import admin
from django.urls import path
from app.views import page_home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', page_home),
]

# from mysite.views import hello, my_homepage_view

# urlpatterns = patterns('',
#     ('^$', my_homepage_view),
#     # ...
# )