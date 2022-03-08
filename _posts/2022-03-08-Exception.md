---
title: "Exception"
excerpt: "예외처리 및 관련 어노테이션 정리"

categories:
  - Spring
tags:
  - java
  - library

toc: true
toc_sticky: true
---

## Exception 처리

Web Application의 입장에서 보면 에러가 났을 때 내려줄 수 있는 방법이 많지 않습니다. 

1. 에러페이지
2. 4XX Error, 5XX Error
3. Client가 200외에 처리를 잘 하지 못할 때는 200을 내려주고 별도의 에러 Message를 전달

이러한 처리들을 Spring 또한 가지고 있는데 이때 사용되는 어노테이션으론 `@ControllerAdvice` 와  `@ExceptionHandler` 가 있습니다.

## ControllerAdvice

### Global 단위

`@RestControllerAdvice` 어노테이션으로 전 시스템의 오류를 잡아내는 처리를 해줄 수 있습니다. 따로 pakage를 만들어 Global한 에러 처리 클래스를 만든 다음 위에 어노테이션을 붙이면 아래와 같게 됩니다.

```java
@RestControllerAdvice
public class GlobalControllerAdvice {

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity exception(Exception e){
        System.out.println("-----------");
        System.out.println(e.getLocalizedMessage());
        System.out.println("-----------");

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("");
    }
}
```

예외 처리 문구를 관리하는 메소드 위에 `@ExceptionHandler` 어노테이션을 붙혀주고 메세지를 출력하면 스프링에서의 기본 메세지가 아니라 사용자가 커스텀을 할 수 있게 됩니다. 만일 전체 종류의 에러가 아니라 특정 메소드 때문에 일어나는 에러를 관리하고 싶다면 해당 메소드 이름을 따로 알아내 `@ExceptionHandler` 어노테이션을 붙여주면 됩니다.

```java
@ExceptionHandler(value = MethodArgumentNotValidException.class)
public ResponseEntity methodArgumentNotValidException(MethodArgumentNotValidException e){
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
}
```

### Controller 단위

위와 같은 방법은 프로그램의 전체 시스템 오류에 대한 예외처리였고 이를 Controller 단위로 처리하고 싶다면 예외처리할 Controller 클래스 밑에 메소드를 작성해주면 됩니다.

이렇게 에러 처리하게되면 순서는 Controller의 에러처리부터 먼저 Mapping이 되는 것을 확인할 수 있습니다.

(우선순위 Controller 단위 에러 > Global)

```java
package com.example.exception.controller;

import com.example.exception.dto.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class ApiController {

    @GetMapping("")
    public User get(@RequestParam(required = false) String name, @RequestParam(required = false) Integer age){
        User user = new User();
        user.setName(name);
        user.setAge(age);

        int a = 10 + age;
        return user;
    }

    @PostMapping("")
    public User post(@Valid @RequestBody User user){
        System.out.println(user);
        return user;
    }

		// 에러 처리 문구를 Controller에 입력
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity methodArgumentNotValidException(MethodArgumentNotValidException e){
        System.out.println("controller error");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }
}
```

### Global → Controller

전역 에러처리방식에서 컨트롤 단위의 처리로 바꿔 줄 수 있는데 `@RestControllerAdvice` 옆에 basePackage를 지정해서 해당 클래스에서만 처리할 수 있도록 만들어줍니다.

```java
@RestControllerAdvice(basePackageClasses = ApiController.class)
```

## Validated

`@Validated` 에 의해서 Get 메소드 안의 RequestParam도 유효한지 검사할 수 있게 됩니다.

```java
@Validated
public class ApiController {

    @GetMapping("")
    public User get(
            @Size(min = 1)
            @RequestParam String name, 
            
            @NotNull
            @RequestParam Integer age){}
}
```