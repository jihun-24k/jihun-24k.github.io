---
title: "Interceptor"
excerpt: "Interceptor 개념 및 실습"

categories:
  - Spring
tags:
  - java
  - library

toc: true
toc_sticky: true
---

## Interceptor

Filter와 매우 유사한 형태로 존재하지만, 차이점은 Spring Context에 등록이 됩니다.

AOP와 유사한 기능을 제공할 수 있으며, 주로 인증단계를 처리하거나, Logging을 하는데에 사용됩니다.

이를 선/후 처리함으로써 Service business logic과 분리 시킵니다.

## Interceptor 실습

아래와 같은 패키지들과 클래스를 만들어 실습을 진행했습니다.
![](https://jihun-24k.github.io/assets/images/spring/interceptor.png){: .align-center}

### Interceptor 만들기

interceptor 패키지를 만들어 AuthInterceptor 클래스에 `HandlerInterceptor` 인터페이스를 상속시킵니다. Filter랑 다른 점은 handler라는 매개변수를 하나 더 지닌 메소드를 가지고 있습니다. 

```java
@Override
public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
```

### Auth annotation 만들기

Auth란 어노테이션을 만든 다음 PrivateController에만 Auth 어노테이션을 달아줍니다. 이는 Interceptor를 통해 Private에서 접근 권한을 설정하려고 합니다.

```java
package com.example.interceptor.annotation;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD})
public @interface Auth {}
```

### Interceptor를 통한 접근 권한 설정

먼저 Auth 어노테이션이 달려있는지 확인하는 `checkAnnotation` 이란 메소드를 만들어줍니다.

```java
		private boolean checkAnnotation(Object handler, Class clazz){
        // resource javascript, html 등 리소스 자원이면 무조건 통과
        if(handler instanceof ResourceHttpRequestHandler){
            return true;
        }

        // annotation check
        HandlerMethod handlerMethod = (HandlerMethod) handler;

        if (null != handlerMethod.getMethodAnnotation(clazz) || null != handlerMethod.getBeanType().getAnnotation(clazz)){
            // Auth annotation 이 있을때는 true
            return true;
        }

        return false;
    }
```

이를 통해 오버라이드해온 `preHandle` 안에서 권한체크를 시도합니다.

```java
		@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String url  =request.getRequestURI();

        URI uri = UriComponentsBuilder.fromUriString(request.getRequestURI())
                .query(request.getQueryString())
                .build()
                .toUri();

        log.info("request url : {}", url);
        boolean hasAnnotation = checkAnnotation(handler, Auth.class);
        log.info("has annotation : {}", hasAnnotation);

        // 나의 서버는 모두 public으로 동작을 하는데
        // 단 Auth 권한을 가진 요청에 대해서는 세션, 쿠키,
        if (hasAnnotation){
            // 권한체크
            String query = uri.getQuery();
            log.info("query : {}", query);
            if (query.equals("name = jihun")){
                return true;
            }
            throw new AuthException();
        }

        return true;
    }
```