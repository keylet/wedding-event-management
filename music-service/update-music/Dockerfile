FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/music-service-0.0.1.jar
COPY ${JAR_FILE} update-music-service.jar
EXPOSE 8063
ENTRYPOINT ["java","-jar","update-music-service.jar"]