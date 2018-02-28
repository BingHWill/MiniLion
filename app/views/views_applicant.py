import json
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from app.utils_models.applicant_utils import ApplicantUtils

def submit_applicant(request):
	name = request.POST.get("apply_name")
	phone = request.POST.get("apply_phone")
	
	response = ApplicantUtils.process(name, phone)
	if response:
		return HttpResponse(json.dumps({'code': 1}))
	else:
		return HttpResponse(json.dumps({'code': 2}))
	