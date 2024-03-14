from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

class GrupProduct(models.Model):
    boss=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='grup')
    grupName=models.CharField(default='allProduict', max_length=100)

    def __str__(self):
        return self.grupName

class Product(models.Model):
    grup=models.ForeignKey(GrupProduct, on_delete=models.CASCADE, related_name='product')
    your_boolean_field = models.BooleanField(default=False)
    imageProduct=models.ImageField(blank=True)
    productName=models.CharField(max_length=100)
    priceProduct=models.IntegerField(default=0)
    totalProduct=models.IntegerField(default=0)

    def __str__(self):
        return self.productName

class Audit(models.Model):
    boss=models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='audit')
    totalMoney=models.IntegerField(blank=True)