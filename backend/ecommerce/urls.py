from django.urls import path
from .views import Vendorlist,VendorDetail

urlpatterns = [
    path('vendors/',Vendorlist),
    path('vendors/<int:id>',VendorDetail),
]
