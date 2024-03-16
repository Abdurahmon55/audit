from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns=[
    path('user/grup/', GrupProductViews.as_view()),
    path('user/grup/<int:pk>/', GrupProductDetailViews.as_view()),
    path('user/grup/audit/', AuditViews.as_view()),
    path('user/grup/audit/<int:pk>/', AuditDetailViews.as_view()),
    path('user/grup/product/', ProductViews.as_view()),
    path('user/grup/product/<int:pk>/', ProductDetailViews.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/', UserViews.as_view()),
]