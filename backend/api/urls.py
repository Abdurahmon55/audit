from django.urls import path
from .views import *

urlpatterns=[
    path('grup/', GrupProductViews.as_view()),
    path('grup/audit/', AuditViews.as_view()),
    path('grup/product/', ProductViews.as_view()),
]