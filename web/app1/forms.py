# forms.py
from django import forms
from .models import Team, Player

class TeamForm(forms.ModelForm):
    class Meta:
        model = Team
        fields = ['name']

class PlayerForm(forms.ModelForm):
    class Meta:
        model = Player
        fields = ['name', 'position']

PlayerFormset = forms.inlineformset_factory(Team, Player, form=PlayerForm, extra=1)
