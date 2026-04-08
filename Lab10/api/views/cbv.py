from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Product
from api.serializers import ProductSerializer

#Class-Based Views

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDetailPIView(APIView):
    def get(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response({'error' : 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response({'error' : 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response({'error' : 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)