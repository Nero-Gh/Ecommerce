from django.db import models
from django.contrib.auth.models import User

# Create your models here.

#Creating seller model
class Vendor(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    address = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.user.username



#create product category model
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.title


#creating product model
class Product(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True,blank=True)
    price = models.FloatField()

    def __str__(self):
        return self.title
