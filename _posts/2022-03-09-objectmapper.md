---
title: "Object Mapper"
excerpt: "Object Mapper의 개념 및 예시"

categories:
  - Spring
tags:
  - java
  - library

toc: true
toc_sticky: true
---

## Object Mapper

Text JSON → Object 으로 아니면 Object → Text JSON으로 바꿔주는 것으로 이미 은연 중 많이 사용이된 `ObjectMapper`입니다. Controller Request에서 Text JSON → Object로 Response에서는 Object → Text JSON으로 바꿔줍니다. 

### Text JSON → Object

User를 생성해 테스트하는 방식으로 코드를 구현했습니다. 기본적인 클래스의 형태를 만들어주고 test에서 `ObjectMapper`를 테스트해봅니다.

```java
public class User {

    private String name;
    private int age;

    public User(String name, int age){
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
// test 코드
@SpringBootTest
class ObjectMapperApplicationTests {

	@Test
	void contextLoads() throws JsonProcessingException {
		System.out.println("----------");
		var objectMapper = new ObjectMapper();

		// object -> text로 변환
		var user = new User("jihun", 10);
		var text = objectMapper.writeValueAsString(user);
		System.out.println(text);

	}
}
```

위의 코드를 실행시켜보면 에러가 발생하게 되는데 해결하기 위해선 먼저 User에 get 메소드들을 추가시켜줍니다. `ObjectMapper`는 Get method를 참조하기 때문입니다. 추가하게되면 정상적으로 `ObjectMapper` 가 동작하게 됩니다.

```java
public String getName() {
    return name;
}
public int getAge() {
    return age;
}
```

### Object → Text JSON

object에서 텍스트로 변환하는 방법은 다음과 같습니다. 

```java
// text -> object
var objectUser = objectMapper.readValue(text, User.class);
System.out.println(objectUser);
```

이 테스트 코드 또한 오류가 발생하게 되는데 이는 default 생성자가 필요한데 없기때문에 발생하게 됩니다. User에 default 생성자를 만들어주고 실행시키면 테스트를 통과하는 걸 볼 수 있습니다.

```java
public User(){
    this.name = null;
    this.age = 0;
}
```

### ObjectMapper 사용시 주의점

1. `ObjectMapper` 참조하는 클래스에는 앞에 get을 붙인 다른 method가 있으면 안된다.
    - `ObjectMapper` 가 get이 붙은 메소드를 읽어 오류가 나기 때문입니다.
2. `@JsonProperty` 를 통해 자유롭게 케이스문을 변환해 objectMapper를 할 수 있습니다.
    
    ```java
    // User에 추가한 변수
    @JsonProperty("phone_number")
    private String phoneNumber;
    
    //결과: object하고 text 사이의 변환이 잘 이루어졌다.
    {"name":"jihun","age":10,"phone_number":"010-8888-9999"}
    User{name='jihun', age=10, phoneNumber='010-8888-9999'}
    ```