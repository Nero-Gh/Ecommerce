from rest_framework import serializers
from .models import Product,ProductCategory,Vendor


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        depth = 1
        fields = ['user','address']

    # def __init__(self, *args , **kwargs):
    #     super(VendorSerializer, self).__init__(*args, **kwargs)
    #     self.Meta.depth = 1


class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"

    def __init__(self, *args , **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1