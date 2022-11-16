from rest_framework import serializers
from .models import Product,ProductCategory,Vendor,Customer,Order,OrderItems,CustomerAddress,ProductRating


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        depth = 1
        fields = ['user','address']



class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"

    def __init__(self, *args , **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        depth= 1
        fields = "__all__"

class ProductDetailSerializer(serializers.ModelSerializer):
    product_ratings = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Product
        depth= 1
        fields = ['id','category','vendor','title','detail','price','product_ratings']


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # depth = 1
        fields = "__all__"



class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        depth = 1
        fields = ['user','mobile']



class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"

    def __init__(self, *args , **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        depth = 1
        fields = ['customer','order_time']

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        depth = 1
        fields = ['id','order','product']


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        depth = 1
        fields = '__all__'


class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAddress
        depth = 1
        fields = ['id','customer','address','default_address']



class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model =ProductRating
        depth = 1
        fields = ['id','customer','product','rating','review','add_time']
