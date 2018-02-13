from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.page_home, name='page_home'),
]