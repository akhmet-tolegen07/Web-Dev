# Level 2 - Function-Based Views
# from api.views.fbv import product_list, product_detail

# Level 3 - Class-Based Views
# from api.views.cbv import ProductListAPIView, ProductDetailPIView 

# Level 4 - Mixins
# from api.views.mixins import ProductListAPIView, ProductDetailAPIView

# Level 5 - Generics
from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)