# Alexander Prieto

Backend engineer focused on distributed systems, event-driven architecture, and cloud-native development. I build production-grade services in Java and TypeScript across AWS and Azure.

---

## Projects

### [clinic-scheduling-azure](https://github.com/apchavez/clinic-scheduling-azure)
[![CI](https://github.com/apchavez/clinic-scheduling-azure/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/clinic-scheduling-azure/actions/workflows/ci.yml)

Azure migration of the medical appointment platform originally built on AWS. Same domain logic and Clean Architecture — only the infrastructure adapters change. Implements event sourcing, Resilience4j circuit breaker + exponential retry, cursor-based pagination, ACS email notifications, and a full Bicep IaC pipeline with zero Azure cost at rest.

`Java 21` `Azure Functions` `Cosmos DB` `Service Bus` `Clean Architecture` `Resilience4j` `Bicep`

### [clinic-scheduling-platform](https://github.com/apchavez/clinic-scheduling-platform)
[![CI](https://github.com/apchavez/clinic-scheduling-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/clinic-scheduling-platform/actions/workflows/ci.yml)

The original AWS version of the same platform. SNS/SQS fan-out with per-country Lambda workers, DynamoDB state store, RDS for final persistence, JWT Lambda Authorizer, Dead Letter Queues, and CloudWatch Alarms.

`TypeScript` `AWS Lambda` `DynamoDB` `SNS/SQS` `Clean Architecture` `Serverless Framework`

### [reactive-customer-service](https://github.com/apchavez/reactive-customer-service)
[![CI](https://github.com/apchavez/reactive-customer-service/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/reactive-customer-service/actions/workflows/ci.yml)

Fully reactive REST API with Spring Boot WebFlux and R2DBC. Enforces hexagonal boundaries with ArchUnit, includes property-based tests with jqwik, per-IP rate limiting, and a full Kubernetes deployment published to GHCR.

`Java 21` `Spring Boot WebFlux` `PostgreSQL` `Hexagonal Architecture` `Kubernetes`

### [product-management](https://github.com/apchavez/product-management)
[![Backend CI](https://github.com/apchavez/product-management/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/apchavez/product-management/actions/workflows/docker-publish.yml)
[![Frontend CI](https://github.com/apchavez/product-management/actions/workflows/docker-publish-web.yml/badge.svg)](https://github.com/apchavez/product-management/actions/workflows/docker-publish-web.yml)

Fullstack product administration app: Quarkus REST backend with hexagonal architecture and Redis caching, React + Material UI frontend, MongoDB persistence, and a complete Kubernetes deployment with independent CI/CD pipelines per service.

`Java 21` `Quarkus` `React` `MongoDB` `Redis` `Kubernetes`

### [event-driven-integration-service](https://github.com/apchavez/event-driven-integration-service)
[![CI](https://github.com/apchavez/event-driven-integration-service/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/event-driven-integration-service/actions/workflows/ci.yml)

Serverless integration service that consumes external APIs, transforms and translates data, and persists to DynamoDB. 100% test coverage across all layers.

`TypeScript` `AWS Lambda` `DynamoDB` `Serverless Framework`

---

## Stack

| | |
|---|---|
| **Languages** | Java 21, TypeScript |
| **Cloud** | Azure (Functions, Cosmos DB, Service Bus, ACS), AWS (Lambda, DynamoDB, SNS/SQS) |
| **Frameworks** | Spring Boot WebFlux, Quarkus, Azure Functions v4 |
| **Architecture** | Clean Architecture, Hexagonal (Ports & Adapters), Event-Driven |
| **Infrastructure** | Bicep, Kubernetes, Docker, GitHub Actions |
| **Data** | Cosmos DB, PostgreSQL, Azure SQL, DynamoDB, MongoDB, Redis |
