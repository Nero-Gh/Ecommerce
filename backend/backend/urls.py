
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('ecommerce.urls')),

    # adding rest_framework auth
    path('api-auth/',include('rest_framework.urls'))
]
 