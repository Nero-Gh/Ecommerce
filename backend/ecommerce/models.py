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
    catgeory = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='category_products') #Product will still exit category
    vendor = models.ForeignKey(Vendor,on_delete=models.SET_NULL,null=True)  #Product will still exit vendor
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True,blank=True)
    price = models.FloatField()

    def __str__(self):
        return self.title



#todo Creating customer model
class Customer(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    mobile = models.PositiveBigIntegerField()

    def __str__(self):
        return self.user.username


#todo creating order model
class Order(models.Model):
    customer = models.ForeignKey(Customer,on_delete = models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customer


# creating orderItems model    
class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete = models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product,on_delete = models.CASCADE)

    def __str__(self):
        return self.product.title


