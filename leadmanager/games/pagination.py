from rest_framework.pagination import PageNumberPagination


class PageNumberCustomization(PageNumberPagination):
    page_size = 4
    max_page_size = 100
    page_query_param = "page"
# class LimitOffsetPaginationWithMaxLimit(LimitOffsetPagination):
#     max_limit = 5
