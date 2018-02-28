from app.models.models_applicant import Applicant

class ApplicantUtils():

	@staticmethod
	def process(name, mobile):
		try:
		    applicant = Applicant.objects.get(mobile=mobile)
		    if applicant is None:
		    	Applicant.objects.create(name=name, mobile=mobile)
		    	return True
		    return False
		except Applicant.DoesNotExist:
			Applicant.objects.create(name=name, mobile=mobile)
			return True