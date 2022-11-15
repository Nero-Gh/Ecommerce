from django.urls import path
from .views import Vendorlist,VendorDetail,ProductList,ProductDetail,CustomerList,CustomerDetail

urlpatterns = [
    #url endpoint for vendors
    path('vendors/',Vendorlist),
    path('vendors/<int:id>',VendorDetail),

    #url endpoint for prodcut
    path('products/',ProductList),
    path('products/<int:id>',ProductDetail),

    #url
     path('customers/',CustomerList),
     path('customers/<int:id>',CustomerDetail),
]
