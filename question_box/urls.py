from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # path("index/<str:lang>", views.index_lang, name="index_lang"),
    path("all_questions", views.all_questions, name="all_questions"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("ask", views.ask, name="ask"),
    path("my_questions", views.my_questions, name="my_questions"),
    path("therapists/<str:action>", views.therapists, name="therapists"),
    path("post/<str:post>", views.post, name="post"),
    path("assign/<str:assign>", views.assign, name="assign"),
    path("answer/<str:username>/<str:answer>", views.answer, name="answer"),
    path("confirm/<str:username>/<str:confirm>", views.confirm, name="confirm")
]
