#!/bin/bash

# Verifica se o diretório /var/run/mysqld existe, senão, cria-o
if [ ! -d "/var/run/mysqld" ]; then
    mkdir -p /var/run/mysqld
    chown mysql:mysql /var/run/mysqld
fi

# Inicia o MySQL especificando o diretório do soquete
/usr/sbin/mysqld --socket=/var/run/mysqld/mysqld.sock --datadir=/var/lib/mysql --pid-file=/var/run/mysqld/mysqld.pid --log-error=/var/log/mysql/error.log
