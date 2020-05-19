#!/bin/bash
while true
do

cpu=$(top -bn 2 -d 0.01 | grep '^%Cpu' | tail -n 1 | awk '{print $2+$4+$6}');
total=$( awk '/MemTotal/ {print $2}' < /proc/meminfo )
memfree=$( awk '/MemFree/ {print $2}' < /proc/meminfo )
memory_used=$(echo "(($total-$memfree)*100/$total)" | bc)
ribu=$( awk '{ print }' /sys/class/thermal/thermal_zone0/temp )
suhu=$(($ribu/1000))


mysql -u root -h 200.100.1.2 -pduatujuh27 monitoring <<EOF
UPDATE data SET cpu = '$cpu' WHERE id = 2;
UPDATE data SET memory = '$memory_used' WHERE id = 2;
UPDATE data SET suhu = '$suhu' WHERE id = 2;
EOF

sleep 1

done
