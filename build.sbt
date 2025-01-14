

name := """SET Game Web"""
organization := "pzme"
version := "1.0-SNAPSHOT"


lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "3.3.1"

javaOptions ++= Seq("-Xmx256m", "-Xss512k", "-Dfile.encoding=UTF-8")
fork := true

// Dependencies

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.1" % Test
libraryDependencies += "org.scala-lang.modules" %% "scala-swing" % "3.0.0"
libraryDependencies += "com.google.inject" % "guice" % "6.0.0"   // Downgrade Guice version
libraryDependencies += "net.codingwell" %% "scala-guice" % "6.0.0"   // Match Scala-Guice with Guice 6.0.0
libraryDependencies += "org.playframework" %% "play-guice" % "3.0.5"  // Play Guice integration

// Additional configurations
//TwirlKeys.templateImports += "pzme.controllers._"
// play.sbt.routes.RoutesKeys.routesImport += "pzme.binders._"
