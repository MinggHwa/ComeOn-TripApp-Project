# 1루와 야! 무지개 놀자!✈️

![배너](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/95375c34-6c3d-4974-99f9-a044fa3052e0)

🔗배포 URL: https://1st-come-on-trip-app.vercel.app

📅프로젝트 기간 : 2023년 8월 29일 ~ 2023년 9월 24일  
<br/>

## ✈️프로젝트 소개
YOUNG CHILLER들을 위한 청량한 여행앱!     
리액트로 구성된 여행 대표앱 '야놀자'를 모티브로 하는  기능과 심플한 UI/UX에 중점을 둔 앱, 야무지개놀자 여행앱입니다.

<br/>

## 🦁목차

1. [팀 소개](#팀-소개)
2. [담당 페이지](#담당-페이지)
3. [기술 스택](#기술-스택)
4. [담당 페이지 시연](#담당-페이지-시연)
5. [화면 구성](#화면-구성)
6. [트러블 슈팅](#트러블-슈팅)
7. [프로젝트 구조](#프로젝트-구조)

<br/>

## 🌈팀 소개

|                             🐤강경민                             |                             🐻김종윤                             |                            🎧️신명화                            |                             🐇장효윤                             |
| :--------------------------------------------------------------: | :--------------------------------------------------------------: | :-------------------------------------------------------------: | :--------------------------------------------------------------: |
| ![캐릭터](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/486aadd9-cfbe-423f-92e4-71dc7198e19f) | ![캐릭터](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/1ea4b6b3-ff87-48b1-8eb1-3996b8720140) | ![캐릭터](https://avatars.githubusercontent.com/u/73214037?v=4) | ![캐릭터](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/3f474a9b-d758-4b3f-a798-0edc64f6cdda) |
|            [Github 주소](https://github.com/minomad)             |            [Github 주소](https://github.com/whddbsl)             |         [Github 주소](https://github.com/MyoungHwaShin)         |             [Github 주소](https://github.com/HYHYJ)              |

<br/>

## 💻담당 페이지

### 🎧️신명화 (스크럼 마스터)

- :book: 마이페이지 - 나의 예약 
   - 예약 내역 리스트 렌더링
   - 각 예약 내역 상세보기
 
- :tada:  마이페이지 - 나의 후기
  - 후기 내역 리스트 렌더링
  - 해당 후기 바로가기
 
- :hand: 마이페이지 - 회원정보
  - 비밀번호 확인 페이지
  - 닉네임, 비밀번호, 배경, 프로필 사진 변경
 
- :balloon:  마이페이지 - 1:1문의
  - 문의 내역 리스트 렌더링
  - 문의 생성/삭제
  - 문의 내역 수정
 
- :crown: 마이페이지 - 상담원 연결
  - 채팅 - 실시간 송신 가능(DB)
 
- :computer: 로그아웃
- :whale: 회원탈퇴

<br/>


<br/>

## 📚기술 스택

[![My Skills](https://skillicons.dev/icons?i=html,css,tailwind,javascript,react,vite,vercel,git,github,figma)](https://skillicons.dev)
![zustand](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/0f5f178b-381c-44de-8f5f-7ec6ce1045c9)
![react-query](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/3b6bfa41-463d-4c22-9b5f-4ca215b7c767)
![framer-motion](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/eca9548d-af1d-4de3-b5c3-2313c9cac184)
![pb](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/75b04053-0d9f-42bb-b88c-b50b52c5e6f7)

<br/>

## 🛠️ 트러블슈팅 & 기술적 도전

### ⚠️ 입력 시 리렌더링 과다 발생 (디바운스 도입)

- **문제상황**: 비밀번호 입력창에서 한 글자 입력할 때마다 `console.log`가 계속 출력되고 전체 컴포넌트가 리렌더링됨
- **원인분석**: `onChange` 이벤트에서 `setState()`가 호출될 때마다 렌더링 → 성능 저하 발생  
  특히 `console.log(password)`로 디버깅할 때 **한 글자 입력마다 로그가 찍혀** 리렌더링이 과도함을 확인함
- **해결방법**: `debounce` 유틸을 적용하여, **입력이 끝난 뒤 일정 시간 후에만 상태 업데이트**하도록 최적화  
  → `setPassword()`를 1000ms 디바운스로 감쌈
- **개선 후 효과**: 렌더링 횟수가 눈에 띄게 줄고, DevTools에서 불필요한 리렌더링이 사라짐
- **배운 점**: 입력값 처리 시 항상 실시간 반응이 필요한지 판단하고,  
  필요 시 `debounce` 또는 `throttle`로 최적화하면 UX와 성능을 모두 잡을 수 있다.

<br/>

## 📱 담당 페이지 시연


### 마이 페이지 (지원자 신명화 담당)

| 로그인 유도 | 마이 페이지 | 나의 예약 |
| :-----------: | :-----------: | :-----------: |
| ![로그인유도](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/9457d552-1379-4a09-a82e-f5a9381d065e) | ![마이페이지](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/0819eb68-86ed-44ad-9909-43b4a7759bf5) | ![나의예약](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/85a184ae-9a3a-4309-8820-1aae9cc11a36) |

| 결제 내역 | 나의 후기 | 정보변경 |
| :-----------: | :-----------: | :-----------: |
| ![결제내역](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/af6aab09-adb0-47a0-985e-2ac877ad712a) | ![나의후기](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/b5006e81-0a81-40d8-8da3-f7b212639201) | ![정보변경](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/32d54d26-d957-420a-9347-520b94544308) |

| 정보변경 | 상담원 연결 | 상담원 채팅 |
| :-----------: | :-----------: | :-----------: |
| ![정보변경](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/57e18b9c-6b5a-4900-9321-1fd41bf08c26) | ![상담원 연결](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/4bef0cf5-d322-436a-82e7-9011a5b9fe88) | ![상담원 채팅](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/775b6517-1557-4458-b1e3-2ac8f9d29533) |

| 1:1문의 | 문의 내역 | 회원 탈퇴 |
| :-----------: | :-----------: | :-----------: |
| ![1:1문의](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/7f199b46-eb2f-4d3f-bf2e-1c5061dbe6b4) | ![문의내역](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/6b01e02f-b3be-4ae2-89f5-6409848fc61a) | ![회원탈퇴](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/956dad52-24e7-46e8-a8c5-d0d34b53c18b) |

<br/>

## 📁프로젝트 구조

<details>

```
📦src
 ├─📂api
 │  └📜usePocketData.js
 ├─📂components
 │  ├─📜AroundList.jsx
 │  ├─📜AroundMap.jsx
 │  ├─📜Button.jsx
 │  ├─📜CartController.jsx
 │  ├─📜Category.jsx
 │  ├─📜CustomDate.jsx
 │  ├─📜Entertainment.jsx
 │  ├─📜Exhibition.jsx
 │  ├─📜Form.jsx
 │  ├─📜Guest.jsx
 │  ├─📜Header.jsx
 │  ├─📜Hotel.jsx
 │  ├─📜HotelInfoCategory.jsx
 │  ├─📜HotelIntro.jsx
 │  ├─📜HotelList.jsx
 │  ├─📜HotelReviewEdit.jsx
 │  ├─📜HotelService.jsx
 │  ├─📜Input.jsx
 │  ├─📜Kakao.jsx
 │  ├─📜LeisureBrand.jsx
 │  ├─📜LeisureButton.jsx
 │  ├─📜LeisureCategory.jsx
 │  ├─📜LeisureInfoCategory.jsx
 │  ├─📜LeisureLink.jsx
 │  ├─📜LeisureProduct.jsx
 │  ├─📜LeisureProductInfo.jsx
 │  ├─📜LocationChoice.jsx
 │  ├─📜LocationMap.jsx
 │  ├─📜LocationSideButton.jsx
 │  ├─📜LocationSideButtonList.jsx
 │  ├─📜MetaTag.jsx
 │  ├─📜MyBasicButton.jsx
 │  ├─📜MyChatMessage.jsx
 │  ├─📜MyCircleProfile.jsx
 │  ├─📜MyForm.jsx
 │  ├─📜MyInput.jsx
 │  ├─📜MyList.jsx
 │  ├─📜MyNewQna.jsx
 │  ├─📜MyQnaTemplate.jsx
 │  ├─📜MySelecModal.jsx
 │  ├─📜NumberOfPeople.jsx
 │  ├─📜SearchFavorite.jsx
 │  ├─📜SearchHotel.jsx
 │  ├─📜SearchLeisure.jsx
 │  ├─📜SearchRecent.jsx
 │  ├─📜SearchResult.jsx
 │  ├─📜SearchTraffic.jsx
 │  ├─📜SelectModal.jsx
 │  ├─📜Spinner.jsx
 │  ├─📜TrafficCategory.jsx
 │  ├─📜TrafficReserveButton.jsx
 │  ├─📜WishCart.jsx
 │  └─📜WishList.jsx
 ├─📂Hook
 │  └─📜useStorage.js
 ├─📂layout
 │  ├─📜Navigation.jsx
 │  └─📜RootLayout.jsx
 ├─📂pages
 │  ├─📜AirlinePage.jsx
 │  ├─📜AppInstallPage.jsx
 │  ├─📜AroundPage.jsx
 │  ├─📜BookingPage.jsx
 │  ├─📜CartPage.jsx
 │  ├─📜ExhibitionDetailPage.jsx
 │  ├─📜FindPage.jsx
 │  ├─📜HotelDetailPage.jsx
 │  ├─📜HotelPage.jsx
 │  ├─📜HotelReviewPage.jsx
 │  ├─📜HotelRoomDetailPage.jsx
 │  ├─📜HotelRoomPage.jsx
 │  ├─📜LeisureBrandPage.jsx
 │  ├─📜LeisureDetailPage.jsx
 │  ├─📜LeisureListPage.jsx
 │  ├─📜LeisurePage.jsx
 │  ├─📜LeisureThemePage.jsx
 │  ├─📜LocationDetailPage.jsx
 │  ├─📜LocationPage.jsx
 │  ├─📜MainPage.jsx
 │  ├─📜MyBookingDetailPage.jsx
 │  ├─📜MyBookingPage.jsx
 │  ├─📜MyChatPage.jsx
 │  ├─📜MyInfoChangePage.jsx
 │  ├─📜MyInfoPage.jsx
 │  ├─📜MyNewQnaPage.jsx
 │  ├─📜MyPage.jsx
 │  ├─📜MyQnaDetailPage.jsx
 │  ├─📜MyQnaPage.jsx
 │  ├─📜MyReviewPage.jsx
 │  ├─📜MyWithdrawalPage.jsx
 │  ├─📜SearchDetailPage.jsx
 │  ├─📜SearchPage.jsx
 │  ├─📜SignInPage.jsx
 │  ├─📜SignUpPage.jsx
 │  ├─📜TrafficCarDetailPage.jsx
 │  ├─📜TrafficCarPage.jsx
 │  ├─📜TrafficDetailPage.jsx
 │  ├─📜TrafficPage.jsx
 │  ├─📜TrafficTrainPage.jsx
 │  └─📜WishPage.jsx
 ├─📂store
 │  ├─📜middleware.js
 │  ├─📜useAuthStore.js
 │  └─📜zustand.js
 ├─📂styles
 │  └─📜tailwind.css
 ├─📂utils
 │  ├─📜debounce.js
 │  ├─📜getPbImageURL.js
 │  ├─📜numberWithComma.js
 │  ├─📜regEx.js
 │  └─📜ScrollToTop.js
 ├─📜App.jsx
 ├─📜main.jsx
 └─📜routes.jsx
```

</details>

