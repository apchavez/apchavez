# Alexander Prieto

Ingeniero de sistemas con más de 8 años de experiencia construyendo soluciones fullstack en Java (Spring Boot, WebFlux, Quarkus), Python, Go, C# y TypeScript, con frontend en Angular, React y Vue. Me especializo en microservicios y APIs REST para sistemas empresariales en sectores como banca, seguros y sector público, con experiencia en arquitecturas escalables, cloud y CI/CD — enfocado en la calidad del código, alto rendimiento y la estabilidad de aplicaciones críticas.

A continuación se presentan dos grupos de proyectos de portafolio, cada uno implementando **el mismo dominio de negocio varias veces a propósito** — una vez por cloud/stack — para demostrar que las mismas capacidades de ingeniería son portables entre ecosistemas, y no están atadas a un solo proveedor o framework.

---

## Estado en vivo

<!-- STATUS:START -->

| Proyecto | Tipo | CI | Estado de infraestructura |
|---|---|---|---|
| [aws-typescript](https://github.com/apchavez/aws-typescript) | Cloud | ✅ 2026-08-10 | Deploy — · Destroy — (💤 costo cero) |
| [azure-python](https://github.com/apchavez/azure-python) | Cloud | ❌ 2026-08-17 | Deploy — · Destroy — (💤 costo cero) |
| [gcp-go](https://github.com/apchavez/gcp-go) | Cloud | ❌ 2026-08-21 | Deploy — · Destroy ✅ 2026-07-29 (💤 costo cero) |
| [quarkus-react](https://github.com/apchavez/quarkus-react) | Fullstack | ❌ 2026-08-17 | — |
| [spring-webflux-angular](https://github.com/apchavez/spring-webflux-angular) | Fullstack | ✅ 2026-08-17 | — |
| [spring-mvc-angular](https://github.com/apchavez/spring-mvc-angular) | Fullstack | ✅ 2026-08-18 | — |
| [net-vue](https://github.com/apchavez/net-vue) | Fullstack | ❌ 2026-08-14 | — |
| [spring-jpa-native](https://github.com/apchavez/spring-jpa-native) | Fullstack | ✅ 2026-08-14 | — |

_Actualizado automáticamente 2026-08-21 06:57 UTC por [update-status.yml](.github/workflows/update-status.yml)._

<!-- STATUS:END -->

---

## Plataforma de Agendamiento de Citas Médicas — mismo dominio, tres clouds

### [aws-typescript](https://github.com/apchavez/aws-typescript)
[![CI](https://github.com/apchavez/aws-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/aws-typescript/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_aws-typescript&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_aws-typescript)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_aws-typescript&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_aws-typescript)

Agendamiento de citas médicas en AWS: crear/listar/obtener-historial con paginación basada en cursor, un event store en DynamoDB para el historial completo de citas, fan-out vía SNS/SQS a un worker Lambda que persiste en RDS, confirmación desacoplada vía EventBridge, notificaciones por correo con SES, un retry + circuit breaker hecho a mano alrededor de cada llamada externa, JWT Lambda Authorizer, throttle real en API Gateway, tracing con X-Ray, Dead Letter Queues y CloudWatch Alarms. IaC en 2 capas: Terraform para la red/plataforma (VPC dedicada, RDS, security groups, VPC endpoints) y Serverless Framework encima para la aplicación (Lambdas, DynamoDB, SNS/SQS/EventBridge) — el patrón real de equipo de plataforma vs. equipo de aplicación. Incluye un pipeline de deploy/destroy de un solo comando (`workflow_dispatch`) y fue probado de punta a punta contra una cuenta real de AWS.

`TypeScript` `AWS Lambda` `DynamoDB` `SNS/SQS` `EventBridge` `SES` `X-Ray` `Clean Architecture` `Terraform` `Serverless Framework`

### [azure-python](https://github.com/apchavez/azure-python)
[![CI](https://github.com/apchavez/azure-python/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/azure-python/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_azure-python&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_azure-python)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_azure-python&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_azure-python)

La misma plataforma en Azure, escrita en **Python** (modelo de programación v2 de Azure Functions) — mismos endpoints, misma autorización basada en titularidad, mismos números de retry/circuit-breaker hecho a mano que sus hermanos, portada línea por línea. Cosmos DB para estado y event-sourcing, fan-out con Service Bus, confirmación desacoplada vía Event Grid, API Management (tier StandardV2) como gateway con rate-limiting real, correo con Azure Communication Services, pipeline IaC completo en Bicep con costo cero en Azure cuando está inactivo. Suite de Pytest con un gate de cobertura limitado a las capas de dominio/aplicación — no requiere cuenta de Azure ni variables de entorno para correr.

`Python` `Azure Functions` `Cosmos DB` `Service Bus` `Event Grid` `API Management` `Clean Architecture` `Bicep`

### [gcp-go](https://github.com/apchavez/gcp-go)
[![CI](https://github.com/apchavez/gcp-go/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/gcp-go/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_gcp-go&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_gcp-go)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_gcp-go&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_gcp-go)

La misma plataforma en GCP, escrita en **Go** (Cloud Run) — mismos endpoints, misma autorización basada en titularidad, mismos números de retry/circuit-breaker hecho a mano que sus hermanos. Firestore para estado y event-sourcing, fan-out con Pub/Sub a un worker de Cloud Run, confirmación desacoplada vía Eventarc a un tercer servicio Cloud Run, Cloud SQL para la persistencia final, API Gateway con quota como capa de rate-limiting, tracing con Cloud Trace, notificaciones por correo con SendGrid, IaC con Terraform y backend de estado remoto en GCS. Incluye un pipeline de deploy/destroy de un solo comando y fue probado de punta a punta contra un proyecto real de GCP.

`Go` `Cloud Run` `Firestore` `Pub/Sub` `Eventarc` `Cloud SQL` `Cloud Trace` `Clean Architecture` `Terraform`

---

## Plataforma de Gestión de Productos — mismo dominio, cinco stacks fullstack

### [quarkus-react](https://github.com/apchavez/quarkus-react)
[![CI](https://github.com/apchavez/quarkus-react/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/quarkus-react/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_quarkus-react&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_quarkus-react)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_quarkus-react&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_quarkus-react)

App fullstack de administración de productos: backend REST en Quarkus con arquitectura hexagonal, persistencia en MongoDB con caché en Redis, publicación de eventos de dominio vía Kafka (tópico `product-events`), rate limiting con Redis en los endpoints de escritura, auth con JWT, frontend en React + Material UI, despliegue en Kubernetes vía Helm con observabilidad Prometheus/Grafana, y pipelines de CI/CD independientes por servicio.

`Java 21` `Quarkus` `React` `MongoDB` `Redis` `Kafka` `Kubernetes`

### [spring-webflux-angular](https://github.com/apchavez/spring-webflux-angular)
[![CI](https://github.com/apchavez/spring-webflux-angular/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/spring-webflux-angular/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-webflux-angular&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-webflux-angular)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-webflux-angular&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-webflux-angular)

El mismo dominio de gestión de productos — misma superficie REST, mismo tópico Kafka `product-events`, mismas reglas de rate limiting que sus hermanos — sobre un backend reactivo con Spring Boot WebFlux + R2DBC que aplica límites hexagonales con ArchUnit, un frontend en Angular 21 (componentes standalone, Angular Material), auth con JWT, y despliegue en Kubernetes vía Helm con observabilidad Prometheus/Grafana.

`Java 21` `Spring Boot WebFlux` `Angular` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Kubernetes`

### [spring-mvc-angular](https://github.com/apchavez/spring-mvc-angular)
[![CI](https://github.com/apchavez/spring-mvc-angular/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/spring-mvc-angular/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-mvc-angular&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-mvc-angular)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-mvc-angular&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-mvc-angular)

El mismo dominio de gestión de productos y el mismo frontend Angular que spring-webflux-angular — su contraparte bloqueante a propósito, sobre un backend clásico de Spring MVC (Spring Data JDBC sobre el almacén relacional, `KafkaTemplate` para el mismo tópico `product-events`, un hilo por petición en vez de reactivo) que aplica los mismos límites hexagonales con ArchUnit, auth con JWT, y despliegue en Kubernetes vía Helm con observabilidad Prometheus/Grafana.

`Java 21` `Spring Boot MVC` `Angular` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Kubernetes`

### [net-vue](https://github.com/apchavez/net-vue)
[![CI](https://github.com/apchavez/net-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/net-vue/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_net-vue&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_net-vue)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_net-vue&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_net-vue)

El mismo dominio de gestión de productos — mismos 7 endpoints REST, mismo tópico Kafka `product-events`, mismas reglas de rate limiting con Redis que sus hermanos — sobre un backend ASP.NET Core Web API (arquitectura Clean/Hexagonal, EF Core + PostgreSQL, auth JWT RS256) con un frontend en Vue 3 (Composition API, Vuetify), y despliegue en Kubernetes vía Helm con observabilidad Prometheus/Grafana.

`C#` `ASP.NET Core` `Vue 3` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Kubernetes`

### [spring-jpa-native](https://github.com/apchavez/spring-jpa-native)
[![CI](https://github.com/apchavez/spring-jpa-native/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/spring-jpa-native/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-jpa-native&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-jpa-native)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=apchavez_spring-jpa-native&metric=coverage)](https://sonarcloud.io/summary/new_code?id=apchavez_spring-jpa-native)

El mismo dominio de gestión de productos con un enfoque distinto: backend Spring Boot en arquitectura hexagonal centrado en JPA/Hibernate (relaciones de entidades Product/Category, fix de N+1, bloqueo optimista, auditoría), auth con JWT, eventos con Kafka, caché con Redis, persistencia en PostgreSQL/Flyway, observabilidad con Prometheus/Grafana, y un frontend móvil en React Native (Expo) en vez de un frontend web.

`Java 21` `Spring Boot` `JPA/Hibernate` `React Native` `PostgreSQL` `Kafka` `Hexagonal Architecture` `Terraform`

---

## Stack Tecnológico

| | |
|---|---|
| **Lenguajes** | Java 21, TypeScript, Python, Go, C# |
| **Cloud** | AWS (Lambda, DynamoDB, SNS/SQS, EventBridge, SES, X-Ray), Azure (Functions, Cosmos DB, Service Bus, Event Grid, API Management, ACS), GCP (Cloud Run, Firestore, Pub/Sub, Eventarc, Cloud SQL, API Gateway, Cloud Trace) |
| **Frameworks** | Spring Boot WebFlux, Spring Boot MVC, Quarkus, ASP.NET Core, Azure Functions (modelo Python v2) |
| **Frontend** | React, Angular, Vue |
| **Mensajería** | Kafka, SNS/SQS, Azure Service Bus, GCP Pub/Sub |
| **Arquitectura** | Clean Architecture, Hexagonal (Ports & Adapters), Event-Driven |
| **Infraestructura** | Terraform, Bicep, Serverless Framework, Kubernetes (Helm), Docker, GitHub Actions |
| **Datos** | DynamoDB, Cosmos DB, Azure SQL, Firestore, Cloud SQL, PostgreSQL, MongoDB, Redis |
