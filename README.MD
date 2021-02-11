# ecs-env

## ABOUT

ecs-env is a script globally installed to help generate Spring Boot's application.properties from environment variables in task definitions Amazon ECS.

## Continuous Integration

[![Build Status](https://travis-ci.org/alarangeiras/ecs-env.svg?branch=master)](https://travis-ci.org/alarangeiras/ecs-env)

## INSTALL

> npm i -g ecs-env

## USAGE

> ecs-env SERVICE_NAME {REGION} {FILE_NAME}

where:
* SERVICE_NAME: The service name (task definition) in ECS
* REGION: Optional region where service name exists. If ommited it'll use the $HOME/.aws/config
* FILE_NAME: Optional filename. If ommited it'll create a file named `application-prod.properties`