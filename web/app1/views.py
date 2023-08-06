from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Team,Player
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import TeamForm, PlayerFormset



# Create your views here.
def index(request):
    return render(request , 'index.html')

def gryffindor_team_view(request):
    return render(request, 'team1.html')

def slytherin_team_view(request):
    return render(request, 'team2.html')


def hufflepuff_team_view(request):
    return render(request, 'team3.html')


def ravenclaw_team_view(request):
    return render(request, 'team4.html')

def schedule(request):
    return render(request, 'schedule.html')

def store(request):
    return render(request, 'store.html')

def ticket(request):
    return render(request, 'ticket.html')

def create_team(request):
    if request.method == 'POST':
        form = TeamForm(request.POST)
        formset = PlayerFormset(request.POST)
        if form.is_valid() and formset.is_valid():
            team = form.save()
            for player_form in formset:
                name = player_form.cleaned_data.get('name')
                position = player_form.cleaned_data.get('position')
                if name and position:
                    Player.objects.create(team=team, name=name, position=position)
            return redirect('createteam.html')
    else:
        form = TeamForm()
        formset = PlayerFormset()
    return render(request, 'createteam.html', {'form': form, 'formset': formset})



# def team_detail(request, team_id):
#     team = Team.objects.get(id=team_id)
#     players = Player.objects.filter(team=team)
#     return render(request, 'team_detail.html', {'team': team, 'players': players})



def register(request):
    if request.method == 'POST':
        uname = request.POST.get('username')
        email = request.POST.get('email')
        pass1 = request.POST.get('password1')


        my_user = User.objects.create_user(uname, email, pass1)
        my_user.save()
        return redirect('login')

    return render(request, 'login.html')


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        pass1 = request.POST.get('pass')
        user = authenticate(request, username=username, password=pass1)
        if user is not None:
            login(request, user)
            return redirect('login')
        elif request.user.is_superuser:
            return render(request, 'schedule.html')
        else:
            return redirect('home')

    return render(request, 'login.html')




@login_required
def admin_dashboard(request):
    print("User:", request.user)
    print("Is Superuser:", request.user.is_superuser)

    if not request.user.is_superuser:
        print("Redirecting to home.html")
        return render(request, 'home.html')

    print("Rendering schedule.html")
    return render(request, 'schedule.html')

