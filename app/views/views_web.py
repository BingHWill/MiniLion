import json
from django.shortcuts import render, get_object_or_404

def page_home(request):
	return render(request, 'templates/page_home.html')

def page_partner(request):
	return render(request, 'templates/page_partner.html')