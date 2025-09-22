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


## CSS 

`import 'css 위치'`를 이용하면, css 파일에 선언된 스타일을 적용할 수 있다.

단 이때, 주의할 점은 css의 스타일은 해당 css 파일을 임포트한 파일 외에도 적용된다는 점이다.

예를들어, `Header.jsx`에서만 `Header.css` 파일을 임포트했더라도, 다른 파일에서 header 태그를 사용할 때, `Header.css`의 스타일이 적용된다.


## children props

`props`는 항상 `children` 속성을 포함한다.

`props.children`은 태그 사이의 입력되는 값으로서, 다양한 타입이 들어갈 수 있다.


## 이벤트 리스너

```
    document.querySelector('button').addEventListener('click', () => {

    })
```

위 코드와 같이 버튼에 이벤트 리스너를 추가할 수 있지만, 해당 방식을 이용하면 쓸데 없이 코드가 너무 길어지는 문제가 발생한다.

이를 해결하기 위해, 특정 이벤트 리스너는 리액트에 미리 선언되어 있다. 

다음은 리액트에서 버튼의 클릭 리스너를 구현하는 방법이다.

```

export default function TabButton({ children }) {
    function handleClick() {
        console.log('click');
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}
```

위 코드에서는 리액트에서 제공하는 `onClick` 이벤트를 사용하고 있다.

해당 이벤트는 태그를 클릭했을 때 발생하는 이벤트이며, 해당 속성에 `onClick={함수명}`과 같이 클릭됐을 때, 특정 함수를 실행하도록 할 수 있다.

단 `onClick={함수명()}`과 같이 사용하게 되면, 클릭될 때, 함수가 실행되는 것이 아닌 객체가 생성될 때 실행됨을 명심하자.


만약 이벤트가 발생했을 때, 특정한 값을 매개변수로 전달받아 사용할 수 있다. 이 때 사용할 수 있는 것이 익명함수를 이용하는 것이다.

```
<TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
```

위 함수는 onSelect 내부에서 익몀 함수를 전달하며, 익명함수 내부에는 매개변수를 전달 받는 함수를 사용하고 있다. 단 이 때, 컴포넌트에 전달하는 것은 익명 함수이기 때문에, 이벤트가 발생할 때 익명함수가 실행되며 내부 함수가 실행되게 된다.


## UI를 업데이트 하는 방법 State 및 React Hook

리액트는 일반 변수를 변경하는 것으론, 화면을 다시 그리지 않는다.

이 때, 변화를 감지하고 화면을 다시 그리기 위해 사용되는 것이 바로 `상태` 즉 `State`이다.

상태를 변경하는 것은 `useState` 함수를 이용하여 호출된다.

`useState`는 `React Hook`이라는 리액트에서 선언된 특수한 함수 중 하나이며, 이러한 `Hook`은 컴포넌트 내부에서만 사용이 가능하다. 

즉 컴포넌트 내부 함수에선 이러한 `hook`을 사용하는 것은 허용되지 않는다.

`const [ 변수명, 함수명 ] = useState(초기값);`으로 useState를 선언할 수 있으며, 선언한 함수명으로 변수의 값을 조작할 수 있다.

변수 값이 변경되면 화면은 다시 그려지며, 다시 그려질 때, 업데이트 된 값을 사용할 수 있다.

#### 즉 useState를 실행한 바로는 업데이트된 값을 사용할 수 없다.