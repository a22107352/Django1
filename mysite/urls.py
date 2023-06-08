
from django.contrib import admin

from django.urls import path, include

urlpatterns = [

    path('admin/', admin.site.urls),
    path('portfolio/', include('portfolio.urls')),
    path('blog/', include('blog.urls')),
    path('login/', include('login.urls')),
]