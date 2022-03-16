---
title: "Validation"
excerpt: "Validatoin의 개념과 예시"

categories:
  - Spring
tags:
  - java
  - framework
  - library

toc: true
toc_sticky: true
---

## Validation

프로그래밍에 있어서 가장 필요한 부분입니다. 특히 Java에서는 null 값에 대해서 접근하려고 할 때 null pointer execption이 발생 함으로, 이러한 부분을 방지하기 위해서 미리 검증을 하는 과정을 Validation이라고 합니다.

1. 검증해야 할 값이 많은 경우 코드의 길이가 길어진다.
2. 구현에 따라서 달라질 수 있지만 Service Logic과의 분리가 필요하다.
3. 흩어져 있는 경우 어디에서 검증을 하는지 알기 어려우며, 재사용의 한계가 있다.
4. 구현에 따라 달라 질 수 있지만 검증 Logic이 변경되는 경우 테스트 코드등 참조하는 클래스에서 Logic이 변경되어야 하는 부분이 발생할 수 있다.

## Validation Annotation

![](https://jihun-24k.github.io/assets/images/spring/validation.png){: .align-center}

### Validation의 적용 방법

Validation 하고 싶은 즉, 검증하고 싶은 부분에 `@Valid` 어노테이션을 붙혀줍니다. 그리고 위의 검증하고 싶은 어노테이션을 선택해 해당 변수에다가 붙혀줍니다.

```java
// Valid를 RequestBody에 붙혀준다.
@PostMapping("/post")
public Object user(@Valid @RequestBody User user, BindingResult bindingResult)

// User에서 이름엔 공백이 안되게 나이는 90살이 안넘도록 하는 어노테이션을 붙힌다.
@NotBlank
private String name;

@Max(value = 90)
private int age;
```

## Custom Validation

생년월일 같은 년도, 월, 날짜를 입력받을 때는 사용자가 직접 Validation을 커스텀해서 진행해주어야합니다. 이렇게 때로는 어노테이션을 사용자가 직접 만들어야할 때도 있습니다. 이럴땐 AssertTrue/ False 또는 Constraint로 해결해줍니다.

### AssertTrue / False

Assert를 이용해 true false형태로 메소드를 만들어 검증할 수 있습니다. 하지만 이는 다른 객체마다 검증하려고 하면 같은 코드를 수많은 코드에 붙혀넣어야하기 때문에 재사용성이 떨어집니다.

```java
		@AssertTrue
    public boolean isReqYearMonthValidation(){
        try{
            LocalDate localDate = LocalDate.parse(getReqYearMonth()+"01", DateTimeFormatter.ofPattern("yyyyMMdd"));
        }catch(Exception e){
            return false;
        }
        return true;
    }
```

### ConstraintValidator

이처럼 ConstraintValidator로 Validation을 따로 빼놓아 어노테이션으로 만들어주면 예를들어 앞으로 생년월일을 체크해야한다고 하면 사용자가 직접 만든 `@YearMonth` 란 어노테이션만 붙히면 됩니다. 이는 앞선 AssertTrue/ False 보다 재사용성이 편리해지며 유지보수를 더 쉽게 만들어줍니다.

```java
package com.example.validation.validator;

import com.example.validation.annotation.YearMonth;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class YearMonthValidator implements ConstraintValidator<YearMonth, String> {

    private String pattern;

    @Override
    public void initialize(YearMonth constraintAnnotation) {
        this.pattern = constraintAnnotation.pattern();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        try{
            LocalDate localDate = LocalDate.parse(value+"01", DateTimeFormatter.ofPattern(this.pattern));
        }catch(Exception e){
            return false;
        }
        return true;
    }
}
```