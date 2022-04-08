---
title: "Git Commit Message"
excerpt: "commit message 규칙 필요성 및 구조"

categories:
  - Git
tags:
  - git
  - commit message

toc: true
toc_sticky: true
---

## Commit Message 규칙 필요성

Git은 버전을 관리하기 위한 도구이고 Github는 강력한 협업 도구입니다. 협업에 있어서 여러 사람들과 Commit Message을 맞추지 않으면 어떤 Commit을  했는지 한눈에 알아보기 힘들 수가 있는데 이 때문에 Git Commit Message 규칙을 정해 작성해야합니다.

## Commit Message 7가지 규칙

1. 제목과 본문을 빈 행으로 구분한다.
2. 제목을 50글자 내로 제한
3. 제목 첫글자는 대문자로 작성
4. 제목 끝에 마침표 넣지 않기
5. 제목은 명령문으로 사용함 과거형을 사용하지 않는다.
6. 본문의 각 행은 72글자 내로 제한
7. 어떻게 보다는 무엇(What)과 왜(Why)를 설명한다.

## Commit Message 구조

```bash
type(타입) : title(제목)
body(본문, 생략 가능)
Resolves : #issue, ...(해결한 이슈, 생략 가능)
See also : #issue, ...(참고 이슈, 생략 가능)
```

### Commit type 지정

- FEAT : 새로운 기능의 추가
- FIX: 버그 수정
- DOCS: 문서 수정
- STYLE: 스타일 관련 기능(코드 포맷팅,세미콜론 누락, 코드 자체의 변경이 없는 경우)
- REFACTOR: 코드 리펙토링
- TEST: 테스트 코드, 리펙토링 테스트 코드 추가
- CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex: .gitignore 수정 같은 경우)

---

`Dependency`

[좋은 git 커밋 메시지를 작성하기 위한 7가지 약속 : NHN Cloud Meetup](https://meetup.toast.com/posts/106)