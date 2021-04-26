# Docker

# Bind mount

Montar um volume do computador para dentro do container

```bash
docker container run -d --name nginx01 -p 8080:80 -v /home/walter/workspace/fullcyle2/html:/usr/share/nginx/html nginx
```

```bash
docker container run -d --name nginx01 -p 8080:80 --mount type=bind,source=/home/walter/workspace/fullcyle2/html,target=/usr/share/nginx/html nginx
```

A diferença entre o --mout e -v é que o -v cria a pasta caso nao exista e --mount a pasta deve existir antes da montagem
Quando tivermos a usar o entrypoint.sh é importante usar o comando exec "$@" para garantir que o proximo comando seja executado no final da execuçao do shellscript

# Network

Bridge: network padrao para comunicaçao entre container directa (Nao faz resoluçao de nome)
Host: mescla a rede do docker com host do docker (o host acessa uma porta do container sem fazer o bind ou exposiçao de portas)
Overlay: usar quando temos varios docker em computadores diferentes e fazer eles se comunicarem com se tivezem na mesma rede (Docker Swarm)
Maclan: Nao é comum
None: sem rede o container isolado

```bash
docker network ls
```

### Create network bridge

Desse modo a resoluçao de nomes funciona

```bash
docker network create --driver bridge pluralsis
```

### Connect container a network

```bash
docker network connect pluralsis ubuntu3
```

### Run container in network host

```bash
docker container run --rm -d --name nginx --network host nginx
```

### Acess container from docker host

```bash
docker container attach nginx
http://host.docker.internal:8000
```
