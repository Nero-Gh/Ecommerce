from django.urls import path
from .views import Vendorlist,VendorDetail,ProductList,ProductDetail,CustomerList

urlpatterns = [
    #url endpoint for vendors
    path('vendors/',Vendorlist),
    path('vendors/<int:id>',VendorDetail),

    #url endpoint for prodcut
    path('products/',ProductList),
    path('products/<int:id>',ProductDetail),

    #url
     path('customer/',CustomerList),
]
