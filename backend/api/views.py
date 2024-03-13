from django.shortcuts import render
from rest_framework.generics import *
from .serializers import *
from .models import *
# Create your views here.

def getObject(name, views, model, serializer):
    class name(views):
        queryset=model.objects.all()
        serializer_class=serializer
    return name

GrupProductViews=getObject('GrupProductViews', ListCreateAPIView, GrupProduct, GrupSerializer)
ProductViews=getObject('ProductViews', ListCreateAPIView, Product, ProductSerializer)
AuditViews=getObject('AuditViews', ListCreateAPIView, Audit, AuditSerailizer)
