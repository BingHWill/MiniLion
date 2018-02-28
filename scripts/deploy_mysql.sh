#!/bin/bash

LOCAL_HOST="localhost"
LOCAL_PORT="3306"
LOCAL_USER="root"
LOCAL_PASSWORD="binghong"

function deploy_mysql {
    echo "Wait......"
   mysql -h${LOCAL_HOST}  -P${LOCAL_PORT}  -u${LOCAL_USER} -p${LOCAL_PASSWORD} -e "CREATE database IF NOT EXISTS web_minilion;"
   mysql -h${LOCAL_HOST}  -P${LOCAL_PORT}  -u${LOCAL_USER} -p${LOCAL_PASSWORD} -e "CREATE user web_minilion@localhost identified by 'web_minilion';"
   mysql -h${LOCAL_HOST}  -P${LOCAL_PORT}  -u${LOCAL_USER} -p${LOCAL_PASSWORD} -e "FLUSH PRIVILEGES;"
   mysql -h${LOCAL_HOST}  -P${LOCAL_PORT}  -u${LOCAL_USER} -p${LOCAL_PASSWORD} -e "GRANT ALL PRIVILEGES ON web_minilion.* TO 'web_minilion'@'localhost';"
}

function show_help {
        echo "help:"
        echo ""
        echo "     ./deploy_mysql.sh PASSWORD    　　# password of root in localhost mysql  "
        echo ""
}

if [ $# = 1 ]; then
    LOCAL_PASSWORD=${LOCAL_PASSWORD}
    deploy_mysql
else
    show_help
fi