# 컴포너트

## 컴포넌트란?

컴포넌트란 잠재적으로 재사용이 가능한 구성 요소이다.

특정 기능을 수행하는 코드 단위를 분리하여 향후 재상용할 수 있도록 한다.

이러한 컴포넌트로 분할 시, 복잡한 인터페이슬르 간단한 컴포넌트의 조합으로 구성이 가능하며, 유지보수를 좋게 할 수 있다.

## 개발 서버 빌드

`npm run dev`를 사용하면 개발 서버를 열고, 코드 수정을 지속적으로 관찰하여 화면에 적용됩니다.


## JSX 확장자

js 코드에서 html 코드를 작성하여 요소를 관리할 수 있는 파일. 

리액트에서 사용되는 확장자

해당 코드는 브라우저에서 실행이 블가능하며 변환 과정을 거쳥야 합니다.


## 컴포넌트 규칙

1. 함수 제목이 대문자로 시작해야함
2. 반환값은 렌더리이 가능해야함

선언 예시

```
function MyHeader() {
    return (<header> </header>);
}
```

사용 예시

```
<div>
    <MyHeader />
</div>
```

## index.jsx

index.jsx는 HTML 파일에 가장 먼저 로딩되는 파일로 리액트 앱의 주요 입구로 작용합니다.

리액트를 부팅하는 역할이라고 할 수 있습니다.

```
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
```

`root`라는 요소를 찾고, 해당 요소에 `App` 컴포넌트를 생성한다는 의미입니다.

하지만 해당 요소의 코드를 개발자 모드로 확인해본다면 우리가 생성한 컴포넌트는 보여지지 않습니다.

단지, 내부에 포함된 기본 html 소스만 보여집니다.

## 동적인 값 표현

JSX에서는 `{}`를 이용하여 태그에 동적인 값을 추가할 수 있습니다.

`{}` 사이에는 자바스크립트 표현이 가능합니다. 

예를 들어 아래 코드의 경우 화면에 2가 출력됩니다.

`<p> {1 + 1} </p>`


## 파일 임포트

`import 변수명 from './assets/이미지명`


## 컴포넌트에서 데이터를 전달받아 사용하는 Propos

컴포넌트를 재사용할 때, 동일한 컴포넌트지만 내용을 다르게 하고 싶을 수 있습니다.

이럴 때 사용하는 것이 바로 Props입니다.

Props는 함수에서 매개변수를 전달받는 것과 같이, 외부에서 데이터를 주입받고 해당 컴포넌트에서 사용할 수 있도록 해줍니다.

컴포넌트는 매개변수로 하나를 전달받습니다. 이를 일반적으로는 `props`라고 지칭합니다.

태그에 속성을 지정하는 것으로 컴포넌트에 props를 전달할 수 있습니다.

```
<CoreConcept 
    title="Components" 
    description="Component Description" 
    img={componentsImg} />
```

전달받은 데이터는 `props.key`를 통해 접근하여 사용할 수 있습니다.

이때, 자바스크립트 문법을 이용하는 것과 같이 `{}` 내부에서 사용해야합니다.

```
function CoreConcept(props) {
  return (
    <li>
      <imag src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
```

## Props 대치 문법

태그의 속성을 일일이 지정하는 것은 매우 귀찮은 작업일 수 있다.

만약 특정 객체와 `key`와 컴포넌트의 속성들이 일치한다면 이를 `...` 연산자를 이용하여 간편하게 사용할 수 있다.

아래와 같이 사용이 가능하다.

```
const object = {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
};

<CoreConcept {...object} />

```


또한 구조 분해를 이용하면 다음과 같은 사용도 가능합니다.

```
function CoreConcept({img, title, description}) {
  return (
    <li>
      <imag src={img} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```
