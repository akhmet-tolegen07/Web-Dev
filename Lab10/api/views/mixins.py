from rest_framework import mixins, generics
from rest_framework.response import Response
from rest_framework import status
from api.models import Product
from api.serializers import ProductSerializer

#Mixins 

class ProductListAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ProductDetailAPIView(mixins.RetrieveModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(self, request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(self, request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(self, request, *args, **kwargs)