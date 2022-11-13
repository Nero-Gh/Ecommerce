from django.shortcuts import render
from django.http import HttpResponse
from .serializer import VendorSerializer,VendorDetailSerializer,ProductSerializer,CustomerSerializer,CustomerDetailSerializer
from .models import Vendor,Product,ProductCategory,Customer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.


@api_view(['GET','POST'])
def Vendorlist(request):
    if request.method == 'GET':
        vendor = Vendor.objects.all()
        serializer = VendorSerializer(vendor, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
def VendorDetail (request,id):
    try:
        vendor = Vendor.objects.get(id=id)
    except Vendor.DoesNotExit:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
            serializer = VendorDetailSerializer(vendor)
            return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VendorDetailSerializer(vendor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        vendor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




#Product Api Response Code    

@api_view(['GET','POST'])
def ProductList(request):
    if request.method == 'GET':
       product = Product.objects.all()
       serializer = ProductSerializer(product, many=True)
       return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET','PUT','DELETE'])
def ProductDetail(request,id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExit:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
            serializer = ProductSerializer (product)
            return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





@api_view(['GET','POST'])
def CustomerList(request):
    if request.method == 'GET':
       product = Customer.objects.all()
       serializer = CustomerSerializer(product, many=True)
       return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)