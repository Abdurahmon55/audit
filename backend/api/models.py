from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

class GrupProduct(models.Model):
    boss=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='grup')
    grupName=models.CharField(default='allProduict', max_length=100)
    imageGrup=models.ImageField( default='static/def.jpg')
    authAddImage=models.TextField(blank=True)
    your_boolean_field = models.BooleanField(default=False)

    def __str__(self):
        return self.grupName



class Product(models.Model):
    grup=models.ForeignKey(GrupProduct, on_delete=models.CASCADE, related_name='product')
    your_boolean_field = models.BooleanField(default=False)
    productName=models.CharField(max_length=100)
    priceProduct=models.IntegerField(default=0)
    totalProduct=models.IntegerField(default=0)
    imageProduct=models.ImageField(upload_to='your_directory/', default='static/def.jpg')
    authAddImage=models.TextField(blank=True)

    def __str__(self):
        return self.productName

class Audit(models.Model):
    boss=models.ForeignKey(get_user_model(), on_delete=models.CASCADE,)
    grup=models.ForeignKey(GrupProduct, on_delete=models.CASCADE, related_name='audit')
    totalMoney=models.IntegerField(blank=True)