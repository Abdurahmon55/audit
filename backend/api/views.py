from django.shortcuts import render
from rest_framework.generics import *
from .serializers import *
from .models import *
from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.

def getObject(name, views, model, serializer):
    class name(views):
        queryset=model.objects.all()
        serializer_class=serializer
    return name

class UserViews(ListAPIView):
    queryset=get_user_model().objects.all()
    serializer_class=UserSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields =['id']


GrupProductViews=getObject('GrupProductViews', ListCreateAPIView, GrupProduct, GrupSerializer)
GrupProductDetailViews=getObject('GrupProductDetailViews', RetrieveUpdateDestroyAPIView, GrupProduct, GrupSerializer)
ProductViews=getObject('ProductViews', ListCreateAPIView, Product, ProductSerializer)
ProductDetailViews=getObject('ProductDetailViews', RetrieveUpdateDestroyAPIView, Product, ProductSerializer)
AuditViews=getObject('AuditViews', ListCreateAPIView, Audit, AuditSerailizer)
AuditDetailViews=getObject('AuditDetailViews', RetrieveUpdateDestroyAPIView, Audit, AuditSerailizer)
