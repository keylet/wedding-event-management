FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/music-service-0.0.1.jar
COPY ${JAR_FILE} read-music-service.jar
EXPOSE 8062
ENTRYPOINT ["java","-jar","read-music-service.jar"]