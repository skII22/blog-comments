---
title: "Linux编译安装mysql8.4.3"
description: "Explore the key factors behind Redis's exceptional speed."
image: "https://assets.bytebytego.com/diagrams/0422-why-is-redis-so-fast.png"
date: '2025-06-30'
draft: false
categories:
  - caching-performance
tags:
  - "Linux"
---
```shell
yum install libtirpc-devel
yum install rpcgen
```



```shell
#Ubuntu
sudo apt install make gcc -y
#Centos
sudo yum install make gcc -y
```



```shell
cd /home
wget https://ghproxy.net/https://github.com/Kitware/CMake/releases/download/v3.25.0/cmake-3.25.0.tar.gz
tar xvf cmake-3.25.0.tar.gz
cd cmake-3.25.0
./configure
gmake
make install
```



```shell
wget https://archives.boost.io/release/1.77.0/source/boost_1_77_0.tar.bz2
tar xvf boost_1_77_0.tar.bz2
cd boost_1_77_0
./bootstrap.sh
./b2 install
```



```shell
wget https://cdn.mysql.com/Downloads/MySQL-8.4/mysql-8.4.3.tar.gz
tar -xvf mysql-8.4.3.tar.gz
cd mysql-8.4.3
cmake -DCMAKE_INSTALL_PREFIX=/usr/local/mysql \
-DMYSQL_UNIX_ADDR=/data/mysql/mysql.sock \
-DDEFAULT_CHARSET=utf8mb4 \
-DDEFAULT_COLLATION=utf8mb4_general_ci \
-DWITH_EXTRA_CHARSETS=all \
-DWITH_MYISAM_STORAGE_ENGINE=1 \
-DWITH_INNOBASE_STORAGE_ENGINE=1 \
-DWITH_MEMORY_STORAGE_ENGINE=1 \
-DWITH_READLINE=1 \
-DENABLED_LOCAL_INFILE=1 \
-DMYSQL_DATADIR=/data/mysql \
-DMYSQL_USER=mysql \
-DSYSCONFDIR=/usr/local/mysql \
-DINSTALL_SHAREDIR=share \
-DWITH_DEBUG=0 \
-DWITH_SSL=system \
-DWITH-mysqld-ldflags=-all-static \
-DWITH-client-ldflags=-all-static \
-DWITH_EMBEDDED_SERVER=OFF \
-DWITH_BOOST=/home/boost_1_77_0 \
-DFORCE_INSOURCE_BUILD=ON
make -j 4
make install
```

编译不要带	<font style="background-color:#FBDE28;">-DMYSQL_TCP_PORT=3306 \</font>	否则会指定端口为3306



```shell
groupadd mysql
useradd -g mysql mysql -s /bin/false
mkdir -p /data/mysql/
mkdir -p /data/mysql_logs/binlog/
mkdir -p /data/apps/mysql/data/
touch /data/mysql_logs/error.log
chown -R mysql:mysql /data/mysql/
chown -R mysql:mysql /data/apps/
chown -R mysql:mysql /data/mysql_logs/
```



```shell
[client]
#修改默认端口
port    = 49105
socket    = /data/mysql/mysql.sock
skip-binary-as-hex

[mysql]
prompt="\u@devops_db \R:\m:\s [\d]> "
no-auto-rehash

[mysqld]
user    = mysql
port    = 49105
basedir    = /usr/local/mysql
datadir    = /data/mysql
socket    = /data/mysql/mysql.sock
pid-file = /data/mysql_logs/mysqldb.pid
character-set-server = utf8mb4
skip_name_resolve = 1
mysqlx = 0
#若你的MySQL数据库主要运行在境外，请务必根据实际情况调整本参数
default_time_zone = "+8:00"

open_files_limit    = 65535
back_log = 1024
max_connections = 512
max_connect_errors = 1000000
table_open_cache = 1024
table_definition_cache = 1024
table_open_cache_instances = 64
thread_stack = 512K
external-locking = FALSE
max_allowed_packet = 32M
sort_buffer_size = 16M
join_buffer_size = 16M
thread_cache_size = 768
interactive_timeout = 600
wait_timeout = 600
tmp_table_size = 96M
max_heap_table_size = 96M
slow_query_log = 1
log_timestamps = SYSTEM
slow_query_log_file = /data/mysql_logs/slow.log
log-error = /data/mysql_logs/error.log
long_query_time = 0.1
log_queries_not_using_indexes =1
log_throttle_queries_not_using_indexes = 60
min_examined_row_limit = 100
log_slow_admin_statements = 1
log_slow_slave_statements = 1
server-id = 3306
log-bin = /data/mysql_logs/binlog/binlog
sync_binlog = 1
binlog_cache_size = 4M
max_binlog_cache_size = 2G
max_binlog_size = 1G

#注意：MySQL 8.0开始，binlog_expire_logs_seconds选项也存在的话，会忽略expire_logs_days选项
#expire_logs_days = 30

#master_info_repository = TABLE
#relay_log_info_repository = TABLE
#gtid_mode = on
#enforce_gtid_consistency = 1
#log_slave_updates
#slave-rows-search-algorithms = 'INDEX_SCAN,HASH_SCAN'
#binlog_format = row
#binlog_checksum = 1
#relay_log_recovery = 1
#relay-log-purge = 1
#key_buffer_size = 32M
#read_buffer_size = 8M
#read_rnd_buffer_size = 16M
#bulk_insert_buffer_size = 64M
#myisam_sort_buffer_size = 128M
#myisam_max_sort_file_size = 10G
#myisam_repair_threads = 1
lock_wait_timeout = 3600
explicit_defaults_for_timestamp = 1
innodb_thread_concurrency = 0
innodb_sync_spin_loops = 100
innodb_spin_wait_delay = 30

transaction_isolation = REPEATABLE-READ
#innodb_additional_mem_pool_size = 16M
innodb_buffer_pool_size = 45875M
innodb_buffer_pool_instances = 4
innodb_buffer_pool_load_at_startup = 1
innodb_buffer_pool_dump_at_shutdown = 1
innodb_data_file_path = ibdata1:1G:autoextend
innodb_flush_log_at_trx_commit = 1
innodb_log_buffer_size = 32M
innodb_log_file_size = 2G
innodb_log_files_in_group = 2
innodb_max_undo_log_size = 4G
innodb_undo_directory = /data/mysql_logs/undolog
innodb_undo_tablespaces = 95

# 根据您的服务器IOPS能力适当调整
# 一般配普通SSD盘的话，可以调整到 10000 - 20000
# 配置高端PCIe SSD卡的话，则可以调整的更高，比如 50000 - 80000
innodb_io_capacity = 10000
innodb_io_capacity_max = 8000
innodb_flush_sync = 0
innodb_flush_neighbors = 0
innodb_write_io_threads = 8
innodb_read_io_threads = 8
innodb_purge_threads = 4
innodb_page_cleaners = 4
innodb_open_files = 65535
innodb_max_dirty_pages_pct = 50
innodb_flush_method = O_DIRECT
innodb_lru_scan_depth = 4000
innodb_checksum_algorithm = crc32
innodb_lock_wait_timeout = 10
innodb_rollback_on_timeout = 1
innodb_print_all_deadlocks = 1
innodb_file_per_table = 1
innodb_online_alter_log_max_size = 4G
innodb_stats_on_metadata = 0
innodb_undo_log_truncate = 1

# some var for MySQL 8
log_error_verbosity = 3
innodb_print_ddl_logs = 1
binlog_expire_logs_seconds = 2592000
#innodb_dedicated_server = 0

innodb_status_file = 1
#注意: 开启 innodb_status_output & innodb_status_output_locks 后, 可能会导致log-error文件增长较快
innodb_status_output = 0
innodb_status_output_locks = 0

#performance_schema
performance_schema = 1
performance_schema_instrument = '%memory%=on'
performance_schema_instrument = '%lock%=on'

#innodb monitor
innodb_monitor_enable="module_innodb"
innodb_monitor_enable="module_server"
innodb_monitor_enable="module_dml"
innodb_monitor_enable="module_ddl"
innodb_monitor_enable="module_trx"
innodb_monitor_enable="module_os"
innodb_monitor_enable="module_purge"
innodb_monitor_enable="module_log"
innodb_monitor_enable="module_lock"
innodb_monitor_enable="module_buffer"
innodb_monitor_enable="module_index"
innodb_monitor_enable="module_ibuf_system"
innodb_monitor_enable="module_buffer_page"
innodb_monitor_enable="module_adaptive_hash"

[mysqldump]
quick
max_allowed_packet = 32M
```



```sql
cp /data/apps/mysql/my.cnf /etc/my.cnf
```

<font style="background-color:#ED740C;">如果后期需要自定义配置文件在/etc/init.d/mysql中修改conf = /aaa/bbb 即可。</font>



```shell
/usr/local/mysql/bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql --datadir=/data/mysql
```



```shell
cat /data/mysql_logs/error.log | grep password | grep generated | grep temporary
```



```shell
vim /etc/profile
加入：export PATH=$PATH:/usr/local/mysql/bin
重新加载peofile
source /etc/profile
建立软连接
ln -s /usr/local/mysql/include/mysql /usr/include/mysql
写入系统服务，赋权、并开机启动

cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql
chmod +x /etc/init.d/mysql

编辑vim /etc/init.d/mysql文件，设置
basedir=/usr/local/mysql
datadir=/data/mysql
启动mysql
service mysql start
```



```shell
mysql -u root -p #使用默认密码登录
第一次登录后系统会强制让修改默认密码：
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MySQLroot123#' PASSWORD EXPIRE NEVER; #修改密码，NEVER表示密码永不过期
```



```sql
create user 'reador' @'localhost' identified by '12345678';
```



```shell
mysql_secure_installation
本人选择为 Y	2	N	Y	N	Y	Y，依个人要求进行选择。
```



```sql
use mysql;
update user set host='%' where user='root' limit 1;
flush privileges;

use mysql;
update user set host='%' where user='reador' limit 1;
flush privileges;
```



```sql
grant select on zzgk.* to 'reador'@'%';
```

### question:
<font style="background-color:#ECAA04;">Could NOT find OpenSSL, try to set the path to OpenSSL root folder in the system variable OPENSSL_ROOT_DIR (missing: OPENSSL_CRYPTO_LIBRARY OPENSSL_INCLUDE_DIR)</font>

```shell
sudo yum install openssl-devel
```

