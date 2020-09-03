# README

### 내용
* Back-end
    - JWT를 사용하여 회원 인가 with [JWTSessions](https://github.com/tuwukee/jwt_sessions)
    - Artist - Record (one to many)
    - 간단하게 구성되어 JWT기반 회원인증/인가, API 빠른 실습 가능
      
* Front-end (Vue)
    - VueAxios의 plain과 secured를 정의
        - request 헤더에 csrf토큰 삽입
        - AccessToken만료 경우 토큰을 갱신 요청 후 재시도
    - tailwindcss
    - localStorage에 csrf 토큰 값, signedIn 값 저장하여 각 컴포넌트에서 사용

<br>

### __유튜브 동영상__
Ruby on Rails API with Vue.js 를 보고 따라한 프로젝트

[Ruby on Rails API with Vue.js - Intro - 01](https://www.youtube.com/watch?v=eUedqaHS4RQ)

[Ruby on Rails API with Vue.js - Configuring Rails - 02](https://www.youtube.com/watch?v=TBZwkWznhZs)

[Ruby on Rails API with Vue.js - JWTSessions Gem Setup - 03](https://www.youtube.com/watch?v=Pa6B0J_l8oc)

[Ruby on Rails API with Vue.js - Adding Sample Data - 04](https://www.youtube.com/watch?v=4e-ZlVsT5z4)

[Ruby on Rails API with Vue.js - Installing and Configuring Vue - 05](https://www.youtube.com/watch?v=o_z5pol6vZE)

[Ruby on Rails API with Vue.js - Creating our First Vue Component - 06](https://www.youtube.com/watch?v=d9_-8yZmOF4)

[Ruby on Rails API with Vue.js - Artist Vue Component - 07](https://www.youtube.com/watch?v=VqhcKlee2L0)

[Ruby on Rails API with Vue.js - Final Components and Testing - 08](https://www.youtube.com/watch?v=zFgoIPNBddc)

[프로젝트 깃헙](https://github.com/justalever/recordstore)


* Ruby version
    - 2.6.5

* Rails version
    - Rails 6.0.3.2

* Database
    - SQLite
    - rails db:migrate
    - rails db:seed

* How to run the test suite
    - 테스트 없음

* Services (job queues, cache servers, search engines, etc.)
    - JWTSessions의 Token 저장소로써 Redis가 사용 됨

* Vue version
    - @vue/cli 4.5.4