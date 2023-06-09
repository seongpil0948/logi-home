# TODO
- vue test utils to nuxt test utils
# 테스트의 유형
우리는 우리의 앱을 여러 유형과 단계로 테스트 함으로써 의도에 따라 동작하는지 더욱 자신감을 가질 수 있습니다.  
아래 유형 별 간단한 설명을 첨부 하였지만, 모든 테스트가 프로젝트 시작부터 구성 될 필요는 없습니다.
소프트웨어 성격에 따라 점진적으로 추가하여, 우리의 앱 품질을 향상 시킵시다.

## Manual(블랙박스) Testing
수동 테스트는 자동화된 도구를 사용하지 않고 수행되는 테스트를 제안합니다.
사람이 사용자가 어떤 것을 하는지 정확히 재현합니다.
- 개발팀 자체 테스트
- QA 팀 테스트
- 클라이언트 테스트

#### 예시
1. 컴퓨터에 앞에 앉는다.
2. 브라우저로 애플리케이션을 연다.
3. 로그인을 한다.
4. 여기저기 클릭해본다.
## E2E (종단간) Testing
E2E 테스트(어떤 때는 "함수형 테스팅"이라고 불리기도 하는) 
모든 시스템(Front-end, Back-end, …)을 포함하여 테스트합니다. 
브라우저를 자동화하고 애플리케이션를 통틀어 정형화한 사용자 흐름을 재현하려고 합니다. (로그인 후 이동된 페이지가 홈페이지가 맞는지, 버튼을 클릭하였을때 모달이 등장하는지 등등…). E2E는 여러분의 소프트웨어의 큰 부분을 보장할 수 있도록 도와줍니다.
## Component / Integration(통합) Testing
통합 테스트는 여러 Unit/단위(기능, 구성 요소, 클래스 등)의 조합으로 함께 의도한 대로 동작하는지 확인합니다. 
행동을 전체적으로 테스트하고 가능한 한 적게 모킹하려고 합니다. 

## Unit(단위) Testing
단위 테스트는 소프트웨어의 작은/독립/원자 또는 순수함수 단위로  예상대로 동작하는지 확인합니다.  
일반적으로 종속성(공동 작업자)이 없거나 테스트를 위해 모킹된 것들에 대해 테스트합니다.  

## API Testing

## Smoke Testing
## Static(정적) Testing
정적 테스트는 코드 수행 없이 실행될 수 있습니다. 
설정이 쉽고 빠르며 애플리케이션을 개발하는 동안 오타 및 타입 에러를 지속적으로 포착할 수 있습니다.  
한 번 설정을 해둔다면 프로젝트 단위 재사용성이 높은 테스트입니다.
__TypeScript__ 및 __ESLint(린터)__ 는 이러한 유형의 테스트를 수행하는 일반적인 도구입니다.

# Refer
- https://test-utils.vuejs.org/
- https://nuxt.com/docs/getting-started/testing#testing
- https://vitest.dev/guide/test-context.html
- https://github.com/vitest-dev/vitest/tree/main/examples/playwright