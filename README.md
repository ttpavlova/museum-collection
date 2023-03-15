# Museum Collection

Учебный проект выполнен в рамках React-интенсива компании Aston.

Реализованы следующие требования к функциональности:

## 1 уровень

### React

- Функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты.
- Есть рендеринг списков: [History](https://github.com/ttpavlova/museum-collection/blob/main/src/components/History/History.tsx), [Favourites](https://github.com/ttpavlova/museum-collection/blob/main/src/components/Favourites/Favourites.tsx), [Cards](https://github.com/ttpavlova/museum-collection/blob/main/src/components/Cards/Cards.tsx), [CardDetails](https://github.com/ttpavlova/museum-collection/blob/main/src/components/Cards/CardDetails.tsx).
- Реализована хотя бы одна форма: [Form](https://github.com/ttpavlova/museum-collection/blob/main/src/components/Form/Form.tsx), [SearchBar](https://github.com/ttpavlova/museum-collection/blob/main/src/components/SearchBar/SearchBar.tsx), [SearchBarMini](https://github.com/ttpavlova/museum-collection/blob/main/src/components/SearchBar/SearchBarMini.tsx).
- Есть применение Контекст API: [ThemeProvider](https://github.com/ttpavlova/museum-collection/blob/main/src/ThemeProvider.tsx).
- Есть применение предохранителя: использована библиотека react-error-boundary, страница ошибки - [ErrorPage](https://github.com/ttpavlova/museum-collection/blob/main/src/components/ErrorPage/ErrorPage.tsx).
- Есть хотя бы один кастомный хук: [useAuth](https://github.com/ttpavlova/museum-collection/blob/main/src/hooks/useAuth.tsx), [useDebounce](https://github.com/ttpavlova/museum-collection/blob/main/src/hooks/useDebounce.tsx).
- Хотя бы несколько компонентов используют PropTypes: [Cards](https://github.com/ttpavlova/museum-collection/blob/main/src/components/Cards/Cards.tsx), [SearchBar](https://github.com/ttpavlova/museum-collection/blob/main/src/components/SearchBar/SearchBar.tsx).
- Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/ttpavlova/museum-collection/blob/main/src/hooks/useDebounce.tsx), использован в компоненте [SearchBar](https://github.com/ttpavlova/museum-collection/blob/main/src/components/SearchBar/SearchBar.tsx).
- Есть применение lazy + Suspense: [App](https://github.com/ttpavlova/museum-collection/blob/main/src/App.tsx), SearchPage.

### Redux

- Используем Modern Redux with Redux Toolkit: [store](https://github.com/ttpavlova/museum-collection/blob/main/src/redux/store.tsx).
- Используем слайсы: [usersSlice](https://github.com/ttpavlova/museum-collection/blob/main/src/redux/usersSlice.tsx).
- Есть хотя бы одна кастомная мидлвара: [checkAuthDataMiddleware](https://github.com/ttpavlova/museum-collection/blob/main/src/redux/middleware/checkAuthDataMiddleware.tsx), [localStorageMiddleware](https://github.com/ttpavlova/museum-collection/blob/main/src/redux/middleware/localStorageMiddleware.tsx).
- Используется RTK Query: [collectionApi](https://github.com/ttpavlova/museum-collection/blob/main/src/services/collectionApi.tsx).
- Используется Transforming Responses: [collectionApi](https://github.com/ttpavlova/museum-collection/blob/main/src/services/collectionApi.tsx).

## 2 уровень

- Использован TypeScript.
