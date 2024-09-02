import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { name: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } =
  filtersSlice.actions;
export const filtersReducer =
  filtersSlice.reducer;
export const selectNameFilter = (
  state,
) => state.filters.name;

// export const filterValue = (state) =>
//   state.filters.name;
// export const selectFilter = (state) =>
//   state.contacts.filters.name;

// Завдання вирішено неправильно (компонент Filters slice file)
//  Завдання не прийнято.
// Основні спостереження:
// Ви правильно використали createSlice для створення срізу.
// Експорт дій та редуктора належно здійснено.
// Функція редуктора setFilterValue правильно реалізована для оновлення стану.
// Аналіз критичних помилок:
//  Критичні помилки у вашому завданні пов'язані з конкретними вимогами, які не були виконані:
// Вимогою було наявність поля changeFilter у редукторах, однак було надано setFilterValue.
// Цей розбіжність вказує на нерозуміння або неуважність до інструкцій завдання.
// Відсутність функції selectNameFilter є значним прорахунком. Ця функція необхідна для доступу до назви фільтру з стану, що є критичною частиною управління станом в додатку Redux. Її неприсутність означає, що компоненти не можуть легко отримати доступ до назви фільтру, що може призвести до ускладнень при реалізації функціональності фільтрації.
// Остаточне рішення:
//  Завдання не прийнято.
// Щоб поліпшити ваше звернення:
// Перейменуйте функцію редуктора setFilterValue на changeFilter, щоб відповідати вимогам завдання.
// Реалізуйте та експортуйте функцію selectNameFilter, щоб забезпечити легкий доступ до назви фільтру зі станом. Ця функція має мати такий вигляд:
// export const selectNameFilter = (state) => state.filters.name;
