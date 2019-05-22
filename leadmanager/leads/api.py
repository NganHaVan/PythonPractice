from .models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

#Lead Viewset
class LeadViewset(viewsets.ModelViewSet):
  queryset = Lead.objects.all()
  permission_classes = [permissions.IsAuthenticated]
  
  serializer_class = LeadSerializer

  def get_query_set(self):
    return self.request.user.leads.all()

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)