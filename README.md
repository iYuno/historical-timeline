# Historical Timeline

Интерактивное React-приложение с исторической шкалой времени. Пользователь может переключаться между тематическими периодами, видеть диапазон лет и просматривать события выбранного периода через свайпер.

## Возможности

- круговая навигация по периодам;
- анимированное отображение начального и конечного года;
- свайпер событий для активного периода;
- загрузка данных через `@tanstack/react-query` и `axios`;
- локальный mock API через `MSW` в development-режиме;
- обработка состояний `loading` и `error`;
- поддержка клавиатурной навигации стрелками.

## Стек

- React 19
- TypeScript
- Webpack 5
- styled-components
- Swiper
- GSAP
- TanStack Query
- MSW
- Biome
- Stylelint

## Требования

- Node.js 18+
- npm 9+

## Установка

```bash
npm install
```

## Запуск

```bash
npm start
```

Приложение поднимается на `http://localhost:3000`.

По умолчанию в development-режиме включается `MSW`, поэтому запрос к `GET /api/timeline-periods` обслуживается локально из [`src/mocks/data/timeline-periods.ts`](/d:/Work/historical-timeline/src/mocks/data/timeline-periods.ts).

## Переменные окружения

Шаблон лежит в [` .env.example`](/d:/Work/historical-timeline/.env.example).

```bash
API_BASE_URL=/
MOCK_API=enabled
```

- `API_BASE_URL` задает базовый URL для `axios`.
- `MOCK_API=disabled` отключает `MSW` и позволяет ходить в реальный backend.

## Сборка

```bash
npm run build
```

Production-сборка попадает в директорию `dist/`.

## Проверки

```bash
npm run lint
npm run check
npm run format
npm run lint:css
npm run lint:css:fix
```

## API контракт

Приложение ожидает ответ `GET /api/timeline-periods` в формате:

```json
{
  "data": [
    {
      "id": "science",
      "label": "Наука",
      "startYear": 1953,
      "endYear": 2012,
      "events": [
        {
          "id": "science-1",
          "year": 1953,
          "title": "Открытие структуры ДНК",
          "description": "..."
        }
      ]
    }
  ]
}
```

## Архитектура

Структура проекта близка к FSD:

- `src/app` - точка входа, провайдеры, глобальные стили;
- `src/pages` - страницы приложения;
- `src/widgets` - крупные UI-блоки, включая основной таймлайн;
- `src/features` - пользовательские сценарии;
- `src/entities` - сущности периодов и событий;
- `src/shared` - общий UI, конфиг и утилиты;
- `src/mocks` - mock API для локальной разработки.

Webpack-алиасы настроены для `@app`, `@pages`, `@widgets`, `@features`, `@entities` и `@shared`.
