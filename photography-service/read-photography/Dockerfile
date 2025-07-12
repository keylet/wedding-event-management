FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/photography-service-0.0.1.jar
COPY ${JAR_FILE} read-photography-service.jar
EXPOSE 8052
ENTRYPOINT ["java","-jar","read-photography-service.jar"]