from django.contrib import admin
from .models import User,Team,Player

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')  # Display these fields in the admin list view
    search_fields = ('username', 'email')  # Enable search by these fields in the admin interface

admin.site.register(User, UserAdmin)

admin.site.register(Team)

admin.site.register(Player)