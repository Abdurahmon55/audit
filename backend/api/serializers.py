from rest_framework.serializers import ModelSerializer
from .models import *
from django.contrib.auth import get_user_model



class ProductSerializer(ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'
        
class AuditSerailizer(ModelSerializer):
    class Meta:
        model=Audit
        fields='__all__'

class GrupSerializer(ModelSerializer):
    audit=AuditSerailizer(many=True, read_only = True)
    product=ProductSerializer(many=True, read_only = True)
    class Meta:
        model=GrupProduct
        fields='__all__'

class UserSerializer(ModelSerializer):
    grup=GrupSerializer(many=True, read_only = True)
    class Meta:
        model=get_user_model()
        fields=['id', 'grup', 'username', 'last_login']



