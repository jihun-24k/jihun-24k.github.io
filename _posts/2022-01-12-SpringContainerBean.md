---
title: "Spring Container & Bean"
excerpt: "Spring Container와 Bean 개념 잡기"

categories:
  - Spring
tags:
  - java
  - spring
  - bean
  - qualifier
  - configuration
  - component

toc: true
toc_sticky: true
---

Spring에서 가장 중요한 개념이라고 하면 IoC와 AOP라고 할 수 있는데 이 중에서도 IoC를 하면서 DI를 다룰때 나오는 개념들 중 Spring Container와 Bean이 있습니다. 컨테이너? 무엇을 담고 있는 것인거 같기도 하고 Bean은 또 어떤건지 이번 글에서 `Spring Container`과 `Bean`에 대해서 정리해볼까합니다. 

## Spring Container

`Spring Container`, 현실에서 컨테이너는 어떤 물건을 담고 있는 것을 의미하는데 Spring에서 컨테이너의 기능은 Bean들을 담고 있습니다. 등록된 Bean들을 생성 / 제거를 하며 생명주기를 관리하는 역할을 합니다. 

본래 각기 다른 모듈이나 메소드, 클래스등을 호출해서 사용하려면 개발자가 직접 매개변수를 작성해 제어를 해줘야하는데 이를 Spring에선 간단한 Annotation만 붙이면 Container가 직접 관리해줍니다. 

## Bean

Bean은 Spring에서 앱을 구성하는 기본적인 객체를 의미합니다. 사용자(개발자)가 메서드나 클래스를 빈으로 등록하면 Spring Container가 Bean들을 관리해줍니다. 아래에서 Bean들을 어떻게 등록하는지 여러 Annotation을 알아보도록 하겠습니다.

## Configuration & Bean

`Configuration`은 한 객체에 여러개의 Bean들을 등록할 수 있게 해주는 Annotation입니다. `Configuration`을 쓰고 안에 메서드들 위에 `Bean`을 붙이게 되면 Spring Container에 등록되는 것을 확인 할 수 있습니다. 이때 `Bean`옆에 이름을 지정해주면 다형성이 있을때 충돌이 나지 않도록 방지해 줄 수 있습니다.

```java
// 사용 예시
@Configuration
class AppConfig{

	@Bean("base64Encode")
	public Encoder encoder(Base64Encoder base64Encoder){
		return new Encoder(base64Encoder);
	}

	@Bean("urlEncode")
	public Encoder encoder(UrlEncoder urlEncoder){
		return new Encoder(urlEncoder);
	}
}
```

## Component & Qualifier

`Component`는 하나의 클래스를 Bean으로 등록시켜 줍니다. `Component`를 사용할 때도 다형성 때문에 충돌이 될 수가 있는데 이를 `Qualifier`를 사용해 충돌하지 않도록 이름을 바꿔줄 수 있습니다.

```java
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Encoder {
    private IEncoder iEncoder;

    public Encoder(@Qualifier("base64Encoder") IEncoder iEncoder){
        this.iEncoder = iEncoder;
    }

    public void setIEncoder(IEncoder iEncoder){
        this.iEncoder = iEncoder;
    }

    public String encode(String message){
        return iEncoder.encode(message);
    }
}
```

---

`참고자료` 

[[Spring] 컨테이너 Container](https://ibocon.tistory.com/122)