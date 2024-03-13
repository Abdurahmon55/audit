from rest_framework.serializers import ModelSerializer
from .models import *
from django.contrib.auth import get_user_model

class UserSerializer(ModelSerializer):
    class Meta:
        models=get_user_model()
        fields='__all__'

class GrupSerializer(ModelSerializer):
    class Meta:
        model=GrupProduct
        fields='__all__'

class ProductSerializer(ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'

class AuditSerailizer(ModelSerializer):
    class Meta:
        model=Audit
        fields='__all__'