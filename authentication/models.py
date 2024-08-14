from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager

class User(AbstractUser):
    objects = UserManager()

    def to_json(self):
        from .serializers import UserSerializer
        serialize = UserSerializer(self)
        return serialize.data
