FROM openjdk:21-jdk-slim
WORKDIR /app

# Kopiere und entpacke die Distribution
COPY target/universal/set-game-web-1.0-SNAPSHOT.zip /app/
RUN apt-get update && apt-get install -y unzip && unzip set-game-web-1.0-SNAPSHOT.zip

# Setze den Startbefehl
CMD ["./set-game-web-1.0-SNAPSHOT/bin/set-game-web", "-Dplay.http.secret.key=${PLAY_SECRET}", "-Dhttp.port=${PORT}"]
