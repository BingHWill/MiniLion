from django.contrib import admin
from django.urls import path
from app.views import page_home, page_partner

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', page_home),
    path('partner/', page_partner)
]