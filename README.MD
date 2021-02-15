# ecs-env

## ABOUT

ecs-env is a script globally installed to help generate Spring Boot's application.properties from environment variables in task definitions Amazon ECS.

## Continuous Integration

![release](https://github.com/alarangeiras/ecs-env/workflows/release/badge.svg)

## Instalation

You can install ecs-env throught npmjs running the command below: 

> npm i -g ecs-env

Alternativelly you can download the pre-compiled version in the [release session of github's repository](https://github.com/alarangeiras/ecs-env/releases). You'll find there, versions to all the main platforms (64bit).

## Help

If you want to get some help then run the command below: 

> ecs-env -h

where:
* SERVICE_NAME: The service name (task definition) in ECS
* REGION: Optional region where service name exists. If ommited it'll use the $HOME/.aws/config
* FILE_NAME: Optional filename. If ommited it'll create a file named `application-prod.properties`