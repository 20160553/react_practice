# 자바스크립트 학습

## 세팅

### 웹사이트(html)에 자바스크립트 넣는 법

### 인라인 방식

```
<script>
    alert('Hello)
</script>
```

### js 파일 방식

```
<script src="script.js></script>
```

### script 태그의 defer 속성

이 속성은 html이 모두 로드된 이후 js가 실행하도록 설정한다.

### type 속성

`type="module"`을 이용하면 자바스크립트 모듈로 취급된다.

이를 이요하면 import와 export를 사용할 수 있다.

#### export 방식

`export 변수/함수 선언;`

`export default "asdf"` => 해당 파일 기본 export 값 설정. default 출력값은 파일당 1개만 존재 가능


```
export let apiKey = "asdf";

export default "asdf";

```

#### import 방식

`import { 변수명, 변수명1 } from 파일 위치;`

`import 변수명 frrom 파일 위치;` => 디폴트 export 값을 받을 때에도 변수명 지정 필요.

`import * as 받을 객체명 from 파일 위치;` => 객체로 import 하기

```
import { apiKey, abc as content } from "./util.js"; // 리액트에서 사용할 떄는 js 학장자 빼도 됨 (자동추가)

import 변수명 frrom 파일 위치;

import * as 받을 객체명 from 파일 위치;
```

### Build Process를 사용하는 이유

`package.json`: 프로젝트에서 사용되는 의존성이 선언되어 있음.

1. 의존성 라이브러리 연결
2. 코드의 난독화 및 간략화

## 변수 및 값

### 변수 타입

1. 문자형 (String)
2. 숫자형 (Number)
3. 논리형 (Boolean)
4. 미정 (Null & undefined)

### 선언 방식

let 변수명
const 변수명

## 연산자

`==` => 타입이 다를 경우 자동 형변환 이후 비교
`===` => 형변환 없이 피연산자가 정확히 일치해야 true 반환

## 함수 매개변수

### 선언 방법

`function 함수명(매개변수)`

### 사용 방법

`함수명(인자)`

