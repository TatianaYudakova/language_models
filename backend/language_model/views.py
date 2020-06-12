from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def get_continue_by_input(request):
    return Response(True)