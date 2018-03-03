import multiprocessing

build = '127.0.0.1:8000'
workers = 9
errorlog = '/home/will/Desktop/MiniLion/logs/gunicorn_error.log'
accesslog = '/home/will/Desktop/MiniLion/logs/gunicorn_access.log'
#loglevel = 'debug'
proc_name = 'gunicorn_minilion'