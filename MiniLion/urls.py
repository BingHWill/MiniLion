from django.contrib import admin
from django.urls import path
from app.views.views_web import page_home, page_partner
from app.views.views_applicant import submit_applicant

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', page_home),
    path('partner/', page_partner),
    path('api/v1/apply/user/', submit_applicant)
]