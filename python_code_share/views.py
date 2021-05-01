from django.shortcuts import render

# Create your views here.

def codeshare(request):
  return render(request, 'firepad_test.html')