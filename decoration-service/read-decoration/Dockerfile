FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/decoration-service-0.0.1.jar
COPY ${JAR_FILE} read-decoration-service.jar
EXPOSE 8042
ENTRYPOINT ["java","-jar","read-decoration-service.jar"]

