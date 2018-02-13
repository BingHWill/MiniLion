from django.shortcuts import render, get_object_or_404
from .models import Applicant

def page_home(request):
	return render(request, 'templates/page_home.html')