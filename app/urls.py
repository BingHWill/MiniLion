from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from app.views.views_web import views_web
from app.views.views_applicant import views_applicant

urlpatterns = [
	url(r'^$', views_web.page_home),
	url(r'^/partner/$', views_web.page_partner),
	url(r'^/api/v1/apply/user/$', views_applicant.submit_applicant),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)