FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/decoration-service-0.0.1.jar
COPY ${JAR_FILE} delete-decoration-service.jar
EXPOSE 8044
ENTRYPOINT ["java","-jar","delete-decoration-service.jar"]
