# swarm-intelligence

Библиотека алгоритмов роевого интеллекта (в том числе PSO — Particle Swarm Optimization). Позволяет искать минимум или максимум целевой функции с помощью роя частиц (boids).

## Описание

- **Swarm** — рой частиц, выполняющий итерации и обновляющий лучшую найденную позицию.
- **Целевые функции** — Paraboloid, Rastrigin, Rosenbrock, Griewank, Schwefel (подключение своих функций поддерживается).
- **Визуализация** — модуль рендера на Canvas для отображения роя и поверхности целевой функции.
- **Демо** — интерактивное приложение с выбором функции и отрисовкой в реальном времени.

## Установка

```bash
npm install swarm-intelligence
# или
yarn add swarm-intelligence
```

## Быстрый пример

```typescript
import { Swarm, getArrayWithRandomValues } from 'swarm-intelligence';
import { createConfig } from 'swarm-intelligence/swarmCreators';
import { paraboloid } from 'swarm-intelligence/objectiveFunctions';

const config = createConfig({
  maxX: 800,
  maxY: 600,
  recommendedVelocities: paraboloid.recommendedVelocities,
  velocity: 0.4,
});

const swarm = new Swarm({
  ...config,
  getArrayWithRandomValues,
  objectiveFunction: paraboloid.function,
  isBetterValueOfBestValue: paraboloid.isBetterValueOfBestValue,
});

// Итерации
for (let i = 0; i < 100; i++) {
  swarm.nextIteration();
}

console.log('Лучшая позиция:', swarm.bestPosition);
console.log('Лучшее значение:', swarm.bestValue);
```

## Запуск демо

Локальный запуск демо с визуализацией:

```bash
yarn start
```

Откроется страница с выбором целевой функции (Paraboloid, Rastrigin, Rosenbrock, Griewank, Schwefel), отображением формулы и анимацией роя на Canvas. Опция «следовать за курсором» задаёт целевую точку по положению мыши.

## Скрипты

| Команда              | Описание                        |
| -------------------- | ------------------------------- |
| `yarn build`         | Сборка библиотеки               |
| `yarn build:demo`    | Сборка демо                     |
| `yarn start`         | Запуск демо в режиме разработки |
| `yarn test`          | Запуск тестов                   |
| `yarn test:watch`    | Тесты в режиме наблюдения       |
| `yarn test:coverage` | Покрытие кода тестами           |
| `yarn lint`          | Проверка линтером               |
| `yarn format`        | Форматирование кода             |

## Ссылки

- [Репозиторий](https://github.com/Krivega/swarm-intelligence)
- [Баги и предложения](https://github.com/Krivega/swarm-intelligence/issues)
- [Лицензия MIT](https://github.com/Krivega/swarm-intelligence/blob/master/package.json)
