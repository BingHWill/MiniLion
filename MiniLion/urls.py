# from django.contrib import admin
# from django.urls import path
# from django.conf import settings
# from django.conf.urls.static import static
# from app.views.views_web import page_home, page_partner
# from app.views.views_applicant import submit_applicant

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('', page_home),
#     path('partner/', page_partner),
#     path('api/v1/apply/user/', submit_applicant)
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from app.views.views_web import page_home, page_partner
from app.views.views_applicant import submit_applicant

urlpatterns = [
	url(r'^$', page_home),
	url(r'^partner/$', page_partner),
	url(r'^api/v1/apply/user/$', submit_applicant),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)