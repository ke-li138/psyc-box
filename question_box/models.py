from django.db import models
from django.contrib.auth.models import User


class NewUser(User):
    user_type = models.CharField(max_length=50, default="user", null=True)
    topic = models.TextField(default=None, null=True)
    active = models.BooleanField(default=True, null=True)

    def __str__(self):
        return f"id: {self.id}, username: {self.username},  user type: {self.user_type}, topic: {self.topic}, active = {self.active}"


class Questions(models.Model):
    question = models.TextField(default=None, null=True)
    timestamp = models.DateTimeField(default=None, null=True)
    public = models.BooleanField(default=True, null=True)
    anonymous = models.BooleanField(default=False, null=True)
    post = models.BooleanField(default=False, null=True)
    box = models.ForeignKey("Boxes", on_delete=models.CASCADE,
                            related_name="questions", default=None, null=True)
    edited = models.BooleanField(default=False, null=True)

    def __str__(self):
        return f"id: {self.id}, question: {self.question}, edited: {self.edited}, post: {self.post}"


class Answers(models.Model):
    answer = models.TextField(default=None, null=True)
    timestamp = models.DateTimeField(default=None, null=True)
    box = models.ForeignKey("Boxes", on_delete=models.CASCADE,
                            related_name="answers", default=None, null=True)
    confirmed = models.BooleanField(default=False, null=True)
    edited = models.BooleanField(default=False, null=True)
    post = models.BooleanField(default=False, null=True)

    def __str__(self):
        return f"id: {self.id}, answer: {self.answer}, confirmed: {self.confirmed}, post: {self.post}"


class Boxes(models.Model):
    asked_by = models.ForeignKey(
        "NewUser", on_delete=models.CASCADE, related_name="asks_user", default=None, null=True)
    answered = models.BooleanField(default=False, null=True)
    answered_by = models.ForeignKey(
        "NewUser", on_delete=models.CASCADE, related_name="answers_user", default=None, null=True)
    confirmed_by = models.ForeignKey(
        "NewUser", on_delete=models.CASCADE, related_name="comfirms_user", default=None, null=True)
    topic = models.TextField(default="family", null=True)

    def __str__(self):
        return f"id: {self.id}, asked by: {self.asked_by}, topic: {self.topic}"

    def serialize(self):
        return {
            "id": self.id,
            "asked_by": self.asked_by,
            "answered_by": self.answered_by,
            "confirmed_by": self.confirmed_by,
            "answered": self.answered,
            "topic": self.topic,
        }
