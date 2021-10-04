---
title: "플러터 프로젝트 구성요소"
excerpt: "첫 플러터 앱 만들어보기"

categories:
  - Flutter
tags:
  - framework
  - app
  - google
  - mobile

toc: true
toc_sticky: true
---

### 플러터 프로젝트 구성요소

![](https://jihun-24k.github.io/assets/images/flutter/hello1.png){: .align-center}

플러터 프로젝트의 <b>기본 폴더</b> (물리적 폴더)

1. <b>lib 폴더</b>
  - 플러터 소스 코드(.dart) 위치
2. <b>android 폴더</b>
  - 플러터를 컴파일하여 생성된 안드로이드 앱 소스 코드, 자동 생성되어 임의로 수정하지 않습니다.
3. <b>ios 폴더</b>
  - 플러터를 컴파일하여 생성된 iOS 앱 소스코드, 역시 자동생성
4. <b>test 폴더</b>
  - 테스트 코드 위치

최상위 폴더의 주요 파일

1. <b>.metadata 파일</b>
  - 플러터 프로젝트를 위한 내부 파일, 개발자가 편집하지 않습니다.
2. <b>.packages 파일</b>
  - pubpec.yaml 파일과 관련된 내부 파일로 자동 생성
3. <b>.iml 파일</b>
  - .iml 파일은 안드로이드 스튜디오에서 생성한 프로젝트 내부 파일
4. <b>pubpec.yaml 파일</b>
  - 이 중요 YAML문서는 사람에게 읽기 쉽게 만들어진 마크업 언어 파일로 프로젝트에 필요한 라이브러리와 리소스(이미지, 폰트, 동영상)등을 지정한다.

---

### 플러터 앱 실행 흐름

플러터에서 가장 중요한 파일을 하나 꼽자면 <b>main.dart</b>입니다. 이 파일에서 앱을 구동하고 화면을 표시할 수 있기 때문입니다. 아래는 플러터 앱 실행 흐름 그림으로 표현했습니다.

![](https://jihun-24k.github.io/assets/images/flutter/hello2.png){: .align-center}{: width="%60" height="%60"}

- runApp() 함수는 인수로 넘긴 위젯을 화면에 표시하는 역할
- 언더바(_)의 의미는 이 클래스가 동일한 파일에서만 접근할 수 있음(private)을 의미합니다.


#### 안드로이드와 플러터의 차이점

안드로이드 프로젝트에서는 앱의 시작점을 하나만 지정할 수 있으나 플러터에서는 같은 프로젝트에서 다수의 main() 함수를 가진 파일을 생성할 수 있습니다. 이런 가벼움이 플러터의 강점입니다.

![](https://jihun-24k.github.io/assets/images/flutter/hello3.png){: .align-center}{: width="%60" height="%60"}

앞선 도식화완 다른 관점으로 앱을 도식화 했습니다. home(Scaffold)과 appBar 속성은 거의 변하지 않고 <b>body 부분을 나만의 위젯으로 교체하면</b> 간단하게 앱화면을 만들 수 있습니다.

---