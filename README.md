# Alexander Prieto

Backend engineer focused on distributed systems, event-driven architecture, and cloud-native development. I build production-grade services in Java and TypeScript across AWS and Azure.

---

## Projects

### [clinic-scheduling-azure](https://github.com/apchavez/clinic-scheduling-azure)
[![CI](https://github.com/apchavez/clinic-scheduling-azure/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/clinic-scheduling-azure/actions/workflows/ci.yml)

Azure migration of a medical appointment scheduling platform. Demonstrates that serverless, event-driven patterns are portable across clouds — the domain logic stays unchanged, only the infrastructure adapters swap.

`Java 21` `Azure Functions` `Cosmos DB` `Service Bus` `Clean Architecture` `Resilience4j` `Event Sourcing`

### [clinic-scheduling-platform](https://github.com/apchavez/clinic-scheduling-platform)
The original AWS version of the same platform. SNS/SQS fan-out, per-country Lambda workers, DynamoDB state store, and RDS for final persistence.

`TypeScript` `AWS Lambda` `DynamoDB` `SNS/SQS` `Clean Architecture`

### [reactive-customer-service](https://github.com/apchavez/reactive-customer-service)
[![CI](https://github.com/apchavez/reactive-customer-service/actions/workflows/ci.yml/badge.svg)](https://github.com/apchavez/reactive-customer-service/actions/workflows/ci.yml)

Fully reactive REST API with Spring Boot WebFlux, R2DBC, and PostgreSQL. Includes ArchUnit tests to enforce hexagonal boundaries, rate limiting, and structured observability.

`Java 21` `Spring Boot WebFlux` `PostgreSQL` `Hexagonal Architecture` `Kubernetes`

### [product-management](https://github.com/apchavez/product-management)
Fullstack application with a Quarkus backend, React frontend, MongoDB, Redis, and a full Kubernetes deployment manifest.

`Java 21` `Quarkus` `React` `MongoDB` `Redis` `Kubernetes`

### [event-driven-integration-service](https://github.com/apchavez/event-driven-integration-service)
Serverless integration service: consumes external APIs, transforms and translates data, persists to DynamoDB. 100% test coverage.

`TypeScript` `AWS Lambda` `DynamoDB` `Serverless Framework`

---

## Stack

| | |
|---|---|
| **Languages** | Java 21, TypeScript |
| **Cloud** | Azure (Functions, Cosmos DB, Service Bus, ACS), AWS (Lambda, DynamoDB, SNS/SQS) |
| **Frameworks** | Spring Boot, Quarkus, Azure Functions v4 |
| **Architecture** | Clean Architecture, Hexagonal (Ports & Adapters), Event-Driven |
| **Infrastructure** | Bicep, Kubernetes, Docker, GitHub Actions |
| **Data** | Cosmos DB, PostgreSQL, Azure SQL, DynamoDB, MongoDB, Redis |
