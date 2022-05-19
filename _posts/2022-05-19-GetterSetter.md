---
title: "Java: Getter와 Setter"
excerpt: "Getter와 Setter가 필요한 이유"

categories:
  - Java
tags:
  - java
  - getter
  - setter

toc: true
toc_sticky: true
---

## 맴버변수의 조건들

클래스 단위로 변수들을 묶어버리면 다른 데이터와 섞이는 일은 사라지게 됩니다. 하지만 데이터에 대한 제약 조건들이 있을 수 있습니다. 제약 조건이 모두 프로그램에 반영된다면 보다 정확한 데이터를 유지할 수 있습니다. 이러한 것을 객체지향언어에서는 제어자와 메서드를 이용해서 이러한 조건들을 코드에 쉽게 반영할 수 있습니다.

가령 예를 들어 시간에 관한 Timer라는 클래스가 있다고 가정합니다. Timer안에 데이터들(시, 분, 초)은 아래의 제약 조건에 따라할 것입니다.

> 1. 시, 분, 초는 모두 0보다 크거나 같아야한다.
2. 시의 범위는 0~23, 분과 초의 범위는 0~59이다.
> 

이를 제어자와 메서드를 통해 아래와 같이 관리해줄 수 있습니다.

```java
public class Timer{
		private int hour;
		private int minute;
		private float second;

		public int getHour()  {return hour;}
		public int getMinute() {return minute;}
		public float getSecond() {return second;}

		public void setHour(int h){
				if (h<0 || h > 59) return;
				hour = h;
		}

		public void setMinute(int m){
				if (m<0 || m > 59) return;
				minute = m;
		}

		public void setSecond(float s){
				if (s<0.0f || s > 59.99f) return;
				second = s;
		}
```

제어자를 이용해 변수의 값을 직접 변경하지 못하도록 하고 대신 메서드를 통해서 값을 변경하도록 작성한 코드입니다. 값을 변경할 때 지정된 값의 유효성을 조건문으로 점검한 다음에 유효한 값일 경우에만 변경합니다.