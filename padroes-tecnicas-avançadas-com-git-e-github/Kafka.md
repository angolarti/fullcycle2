# Kafka

## Download

```bash
wget -c https://downloads.apache.org/kafka/2.7.0/kafka_2.13-2.7.0.tgz
```

## Descompactar e mudar path

```bash
tar xvzf kafka_2.13-2.7.0.tgz - C /opt
mv /opt/kafka_2.13-2.7.0 /opt/kafka
```

## Start Zookkeeper e kafka server

```bash
cd /opt/kafka
sudo bin/zookeeper-server-start.sh  config/zookeeper.properties
sudo bin/kafka-server-start.sh config/server.properties
```

## Create a topic

```bash
sudo bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic PLURALSIS_SRMIA_SRV_NC
```

## List topics

```bash
sudo bin/kafka-topics.sh --list --bootstrap-server localhost:9092
```

## Produzir mensagens

```bash
sudo bin/kafka-console-producer.sh --broker-list localhost:9092 --topic PLURALSIS_SRMIA_SRV_NC
```

## Consumir mensagens

```bash
sudo bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic PLURALSIS_SRMIA_SRV_NC
```

```bash
sudo bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic PLURALSIS_SRMIA_SRV_NC --from-beginning
```
