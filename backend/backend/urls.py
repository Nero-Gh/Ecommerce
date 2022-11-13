
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView , TokenRefreshView

urlpatterns = [

    path('admin/', admin.site.urls),
    path('api/',include('ecommerce.urls')),

    # add rest_framework for JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # adding rest_framework auth
    path('api-auth/',include('rest_framework.urls')),

]