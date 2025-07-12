FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/photography-service-0.0.1.jar
COPY ${JAR_FILE} delete-photography-service.jar
EXPOSE 8054
ENTRYPOINT ["java","-jar","delete-photography-service.jar"]