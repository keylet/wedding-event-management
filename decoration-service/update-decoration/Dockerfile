FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/decoration-service-0.0.1.jar
COPY ${JAR_FILE} update-decoration-service.jar
EXPOSE 8043
ENTRYPOINT ["java","-jar","update-decoration-service.jar"]
