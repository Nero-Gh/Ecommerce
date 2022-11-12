from django.shortcuts import render
from django.http import HttpResponse
from .serializer import VendorSerializer,VendorDetailSerializer
from .models import Vendor
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
    except vendor.DoesNotExit:
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


        
