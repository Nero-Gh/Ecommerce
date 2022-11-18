from django.urls import path
from .views import VendorList,VendorDetail,ProductList,ProductDetail,CustomerList,CustomerDetail,OrderList,OrderDetail,OrderItemList,OrderItemDetail,CustomerAddressViewSet,ProductRatingViewSet,ProductCategoryViewSet
from rest_framework import  routers

router = routers.DefaultRouter()
router.register('address',CustomerAddressViewSet)
router.register('product-rating',ProductRatingViewSet)
router.register('product-category',ProductCategoryViewSet)


urlpatterns = [
    #url endpoint for vendors
    path('vendors/',VendorList.as_view()),
    path('vendors/<int:id>',VendorDetail.as_view()),

    #url endpoint for product
    path('products/',ProductList.as_view()),
    path('products/<int:pk>',ProductDetail.as_view()),


    #url endpoint for customers
     path('customers/',CustomerList.as_view()),
     path('customers/<int:id>',CustomerDetail.as_view()),


    #url endpoint for Order
     path('orders/',OrderList.as_view()),
     path('orders/<int:pk>/',OrderDetail.as_view()),

     
    #url endpoint for OrderItem
     path('orders-item/',OrderItemList.as_view()),
     path('orders-item/<int:id>',OrderItemDetail.as_view()),
]


urlpatterns+=router.urls
