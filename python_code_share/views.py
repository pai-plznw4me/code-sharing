from django.shortcuts import render


# Create your views here.

def codeshare(request):
    return render(request, 'run_firepad.html')