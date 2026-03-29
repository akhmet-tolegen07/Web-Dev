from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

# Create your views here.

#/api/products
def product_list(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False)

#/api/produscts/<id>/
def product_detail(request, id):
    product = Product.objects.get(id=id)
    data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category.id
    }
    return JsonResponse(data)

#/api/categories/
def category_list(request):
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False)

# /api/categories/<id>/
def category_detail(request, id):
    category = Category.objects.get(id=id)
    data = {
        "id": category.id,
        "name": category.name
    }
    return JsonResponse(data)

#/api/categories/<id>/products/
def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = list(products.values())
    return JsonResponse(data, safe=False)