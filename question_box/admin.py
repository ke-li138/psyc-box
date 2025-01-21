from django.contrib import admin
from .models import NewUser, Questions, Answers, Boxes

admin.site.register(NewUser)
admin.site.register(Questions)
admin.site.register(Answers)
admin.site.register(Boxes)