from django.shortcuts import render
from portfolio.extracao_dados import extrai_info_de_url
import time, threading

timer = None  # timer


def foo():
    print(time.ctime())

    global timer  # variavel global timer
    timer = threading.Timer(20, foo)  # define o timer

    timer.start()  # inicia o timer


def index(request):
    return render(request, "index.html")


def chart_view(request):
    foo()

    url = 'https://www.pordata.pt/portugal/obitos+de+residentes+em+portugal+total+e+no+primeiro+ano+de+vida-15'
    data = extrai_info_de_url(url)

    timer.cancel()  # cancela o timer

    context = {'data': data}
    return render(request, 'chart.html', context)
