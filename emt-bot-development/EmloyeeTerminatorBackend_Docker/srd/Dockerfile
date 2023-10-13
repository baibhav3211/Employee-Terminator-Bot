#SRD service

FROM openjdk:17.0.2-oracle
WORKDIR /project/app
COPY ./target/srd-0.0.1-SNAPSHOT.jar srd.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","srd.jar"]

#Docker port mapping : 8761


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
#docker run --name localmysql --network=data -p 3309:3306 -e MYSQL_ROOT_PASSWORD=pass123 -d mysql:8.0.34

# Mongo

#docker pull mongo:6.0.3
#docker run --name localmongo --network=data -p 27018:27017 -d mongo:6.0.3

# To enter inside the mongo container
# - docker exec -i -t <containerId> bash

# SRD service

# Building image for SRD service
#docker build -t srdservice:1.0 .  (make sure you are in a srdservice dir)

#docker run --name srdservice --network=data -p 8762:8761 srdservice:1.0
