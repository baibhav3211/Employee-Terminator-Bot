#Auth service

FROM openjdk:17.0.2-oracle
WORKDIR /project/app
COPY ./target/authservice-0.0.1-SNAPSHOT.jar authservice.jar
EXPOSE 9000
ENV EUREKA_HOST=srdservice

ENTRYPOINT ["java","-jar","authservice.jar"]

#Docker port mapping : 9000


#Run Mongo and Mysql Database in a container by pulling the public image from the registery

# Mysql

##Pull the image from the registry(Docker hub)
#docker pull mysql:8.0.31
#docker images

#As all of the containers(services) should interact, they should run in the same network
## Creating the network
#docker network create data
#docker network ls

##Run the image
#docker run --name localmysql --network=data -p 3309:3306 -e MYSQL_ROOT_PASSWORD=R@ju.kr50 -d mysql:8.0.34

# Mongo

#docker pull mongo:6.0.3
#docker run --name localmongo --network=data -p 27018:27017 -d mongo:6.0.3

# To enter inside the mongo container
# - docker exec -i -t <containerId> bash

# Auth service

# Building image for authservice
#docker build -t authservice:1.0 .  (make sure you are in a authservice dir)

#docker run --name authservice --network=data -p 9010:9000 authservice:1.0
