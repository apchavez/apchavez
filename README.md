# Alexander Prieto

Ingeniero de sistemas con más de 8 años de experiencia construyendo soluciones fullstack en Java (Spring Boot, WebFlux, Quarkus), Python, Go, C# y TypeScript, con frontend en Angular, React y Vue. Me especializo en microservicios y APIs REST para sistemas empresariales en sectores como banca, seguros y sector público, con experiencia en arquitecturas escalables, cloud y CI/CD — enfocado en la calidad del código, alto rendimiento y la estabilidad de aplicaciones críticas.

A continuación se presentan dos grupos de proyectos de portafolio, cada uno implementando **el mismo dominio de negocio varias veces a propósito** — una vez por cloud/stack — para demostrar que las mismas capacidades de ingeniería son portables entre ecosistemas, y no están atadas a un solo proveedor o framework.

---

## Estado en vivo

<!-- STATUS:START -->

| Proyecto | Tipo | CI | Estado de infraestructura |
|---|---|---|---|
| [aws-typescript](https://github.com/apchavez/aws-typescript) | Cloud | ✅ 2026-07-17 | Deploy ✅ 2026-07-17 · Destroy ✅ 2026-07-16 (⚠️ desplegado) |
| [azure-python](https://github.com/apchavez/azure-python) | Cloud | ✅ 2026-07-17 | Deploy ✅ 2026-07-17 · Destroy ✅ 2026-07-16 (⚠️ desplegado) |
| [gcp-go](https://github.com/apchavez/gcp-go) | Cloud | ✅ 2026-07-17 | Deploy ✅ 2026-07-17 · Destroy ✅ 2026-07-16 (⚠️ desplegado) |
| [quarkus-react](https://github.com/apchavez/quarkus-react) | Fullstack | ✅ 2026-07-17 | — |
| [spring-webflux-angular](https://github.com/apchavez/spring-webflux-angular) | Fullstack | ✅ 2026-07-17 | — |
| [spring-mvc-angular](https://github.com/apchavez/spring-mvc-angular) | Fullstack | ✅ 2026-07-17 | — |
| [net-vue](https://github.com/apchavez/net-vue) | Fullstack | ✅ 2026-07-17 | — |

_Actualizado automáticamente 2026-07-19 08:29 UTC por [update-status.yml](.github/workflows/update-status.yml)._

<!-- STATUS:END -->

---

## Plataforma de Agendamiento de Citas Médicas — mismo dominio, tres clouds

### [aws-typescript](https://github.com/apchavez/aws-typescript)
[![CI](https://github.com/apchavez/aws-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/aws-typescript/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=clean-arch-aws-lambda-typescript&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=clean-arch-aws-lambda-typescript)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=clean-arch-aws-lambda-typescript&metric=coverage)](https://sonarcloud.io/summary/new_code?id=clean-arch-aws-lambda-typescript)

Agendamiento de citas médicas en AWS: crear/cancelar/reagendar/obtener-historial con paginación basada en cursor, un event store en DynamoDB para el historial completo de citas, fan-out vía SNS/SQS a workers Lambda por país, RDS para la persistencia final, notificaciones por correo con SES, un retry + circuit breaker hecho a mano alrededor de cada llamada externa, JWT Lambda Authorizer, Dead Letter Queues y CloudWatch Alarms. Incluye un pipeline de deploy/destroy de un solo comando (`workflow_dispatch`) y fue probado de punta a punta contra una cuenta real de AWS.

`TypeScript` `AWS Lambda` `DynamoDB` `SNS/SQS` `SES` `Clean Architecture` `Serverless Framework`

### [azure-python](https://github.com/apchavez/azure-python)
[![CI](https://github.com/apchavez/azure-python/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/azure-python/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=clean-arch-azure-functions-java&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=clean-arch-azure-functions-java)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=clean-arch-azure-functions-java&metric=coverage)](https://sonarcloud.io/summary/new_code?id=clean-arch-azure-functions-java)

La misma plataforma en Azure, escrita en **Python** (modelo de programación v2 de Azure Functions) — mismos endpoints, misma autorización basada en titularidad, mismos números de retry/circuit-breaker hecho a mano que sus hermanos, portada línea por línea. Cosmos DB para estado y event-sourcing, fan-out con Service Bus, correo con Azure Communication Services, pipeline IaC completo en Bicep con costo cero en Azure cuando está inactivo. Suite de Pytest con un gate de cobertura limitado a las capas de dominio/aplicación — no requiere cuenta de Azure ni variables de entorno para correr.

`Python` `Azure Functions` `Cosmos DB` `Service Bus` `Clean Architecture` `Bicep`

### [gcp-go](https://github.com/apchavez/gcp-go)
[![CI](https://github.com/apchavez/gcp-go/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/gcp-go/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_gcp-go&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_gcp-go)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_gcp-go&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_gcp-go)

La misma plataforma en GCP, escrita en **Go** (Cloud Run) — mismos endpoints, misma autorización basada en titularidad, mismos números de retry/circuit-breaker hecho a mano que sus hermanos. Firestore para estado y event-sourcing, fan-out con Pub/Sub a workers de Cloud Run por país (suscripciones push filtradas por atributo), Cloud SQL para la persistencia final, notificaciones por correo con SendGrid, IaC con Terraform y backend de estado remoto en GCS. Incluye un pipeline de deploy/destroy de un solo comando y fue probado de punta a punta contra un proyecto real de GCP.

`Go` `Cloud Run` `Firestore` `Pub/Sub` `Cloud SQL` `Clean Architecture` `Terraform`

---

## Plataforma de Gestión de Productos — mismo dominio, cuatro stacks fullstack

### [quarkus-react](https://github.com/apchavez/quarkus-react)
[![CI](https://github.com/apchavez/quarkus-react/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/quarkus-react/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quarkus-react-fullstack-k8s&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quarkus-react-fullstack-k8s)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=quarkus-react-fullstack-k8s&metric=coverage)](https://sonarcloud.io/summary/new_code?id=quarkus-react-fullstack-k8s)

App fullstack de administración de productos: backend REST en Quarkus con arquitectura hexagonal, persistencia en MongoDB con caché en Redis, publicación de eventos de dominio vía Kafka (tópico `product-events`), rate limiting con Redis en los endpoints de escritura, auth con JWT, frontend en React + Material UI, un clúster EKS provisionado con Terraform, y pipelines de CI/CD independientes por servicio.

`Java 21` `Quarkus` `React` `MongoDB` `Redis` `Kafka` `Kubernetes` `Terraform`

### [spring-webflux-angular](https://github.com/apchavez/spring-webflux-angular)
[![CI](https://github.com/apchavez/spring-webflux-angular/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/spring-webflux-angular/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-webflux-angular&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-webflux-angular)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-webflux-angular&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-webflux-angular)

El mismo dominio de gestión de productos — misma superficie REST, mismo tópico Kafka `product-events`, mismas reglas de rate limiting que sus hermanos — sobre un backend reactivo con Spring Boot WebFlux + R2DBC que aplica límites hexagonales con ArchUnit, un frontend en Angular 21 (componentes standalone, Angular Material), auth con JWT, un clúster EKS provisionado con Terraform, y despliegue en Kubernetes vía Helm con observabilidad Prometheus/Grafana.

`Java 21` `Spring Boot WebFlux` `Angular` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Kubernetes` `Terraform`

### [spring-mvc-angular](https://github.com/apchavez/spring-mvc-angular)
[![CI](https://github.com/apchavez/spring-mvc-angular/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/spring-mvc-angular/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-mvc-angular&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-mvc-angular)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-mvc-angular&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-mvc-angular)

El mismo dominio de gestión de productos y el mismo frontend Angular que spring-webflux-angular — su contraparte bloqueante a propósito, sobre un backend clásico de Spring MVC (Spring Data JDBC sobre el almacén relacional, `KafkaTemplate` para el mismo tópico `product-events`, un hilo por petición en vez de reactivo) que aplica los mismos límites hexagonales con ArchUnit, auth con JWT, un clúster EKS provisionado con Terraform, y despliegue en Kubernetes vía Helm con observabilidad Prometheus/Grafana.

`Java 21` `Spring Boot MVC` `Angular` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Kubernetes` `Terraform`

### [net-vue](https://github.com/apchavez/net-vue)
[![CI](https://github.com/apchavez/net-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/net-vue/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_net-vue&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_net-vue)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_net-vue&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_net-vue)

El mismo dominio de gestión de productos — mismos 7 endpoints REST, mismo tópico Kafka `product-events`, mismas reglas de rate limiting con Redis que sus hermanos — sobre un backend ASP.NET Core Web API (arquitectura Clean/Hexagonal, EF Core + PostgreSQL, auth JWT RS256) con un frontend en Vue 3 (Composition API, Vuetify), un clúster EKS provisionado con Terraform, y despliegue en Kubernetes vía Helm con observabilidad Prometheus/Grafana.

`C#` `ASP.NET Core` `Vue 3` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Kubernetes` `Terraform`

---

## Stack Tecnológico

| | |
|---|---|
| **Lenguajes** | Java 21, TypeScript, Python, Go, C# |
| **Cloud** | AWS (Lambda, DynamoDB, SNS/SQS, SES), Azure (Functions, Cosmos DB, Service Bus, ACS), GCP (Cloud Run, Firestore, Pub/Sub, Cloud SQL) |
| **Frameworks** | Spring Boot WebFlux, Spring Boot MVC, Quarkus, ASP.NET Core, Azure Functions (modelo Python v2) |
| **Frontend** | React, Angular, Vue |
| **Mensajería** | Kafka, SNS/SQS, Azure Service Bus, GCP Pub/Sub |
| **Arquitectura** | Clean Architecture, Hexagonal (Ports & Adapters), Event-Driven |
| **Infraestructura** | Bicep, Terraform, Kubernetes (Helm), Docker, GitHub Actions |
| **Datos** | DynamoDB, Cosmos DB, Azure SQL, Firestore, Cloud SQL, PostgreSQL, MongoDB, Redis |
