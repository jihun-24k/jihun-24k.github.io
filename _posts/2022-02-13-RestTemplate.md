---
title: "RestTemplate"
excerpt: "RestTemplate 개념과 동작원리"

categories:
  - Spring
tags:
  - java
  - library

toc: true
toc_sticky: true
---

## RestTemplate

스프링에서 제공하는 HTTP 통신을 유용하게 사용할 수 있는 템플릿입니다. Spring 3.0부터 지원하며 HTTP 서버와의 통신을 단순화하고 RESTful 원칙을 지킵니다. 하지만 Spring 5.0 부터 WebClient를 사용하는 걸 권장하고 있습니다.

### RestTemplate 동작 원리

HttpClient는 HTTP를 사용하여 통신하는 범용 라이브러리입니다. RestTemplate는 HttpClient를 추상화해서 제공합니다. 

![](https://jihun-24k.github.io/assets/images/spring/rest.png){: .align-center}

1. 어플리케이션이 RestTemplate를 생성하고, URI, HTTP 메소드 등의 헤더를 담아 요청
2. RestTemplate는 HttpMessageConverter를 사용하여 requestEntity를 요청 메세지로 변환
3. RestTemplate는 ClientHttpRequestFactory로 부터 ClientHttpRequest를 가져와서 요청을 보냄
4. ClientHttpRequest는 요청메세지를 만들어 HTTP 프로토콜을 통해 서버와 통신
5. RestTemple는 ResponseErrorHandler로 오류를 확인하고 있다면 처리로직을 태움
6. ResponseErrorHandler는 오류가 있다면 ClientHttpResponse에서 응답데이터를 가져와서 처리
7. RestTemplate는 HttpMessageConverter를 이용해서 응답메세지를 java object로 변환
8. 어플리케이션에 반환


`출처`  
[스프링 RestTemplate 정리(요청 함)](https://velog.io/@soosungp33/%EC%8A%A4%ED%94%84%EB%A7%81-RestTemplate-%EC%A0%95%EB%A6%AC%EC%9A%94%EC%B2%AD-%ED%95%A8)