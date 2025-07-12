FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/music-service-0.0.1.jar
COPY ${JAR_FILE} delete-music-service.jar
EXPOSE 8064
ENTRYPOINT ["java","-jar","delete-music-service.jar"]