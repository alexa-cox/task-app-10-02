// const ACTIVE_ITEMS = ['Do Laundry', 'Clean Room'];
// const COMPLETED_ITEMS = ['Take Out Trash', 'Make Dinner'];

// export const allActiveItems = () => {
//   return ACTIVE_ITEMS;
// };

// export const allCompletedItems = () => {
//   return COMPLETED_ITEMS;
// };

export const ACTIVE_ITEMS_KEY = 'activeItems';
export const COMPLETED_ITEMS_KEY = 'completedItems';

// Initialize localStorage with default data if not already set
if (!localStorage.getItem(ACTIVE_ITEMS_KEY)) {
  localStorage.setItem(
    ACTIVE_ITEMS_KEY,
    JSON.stringify(['Do Laundry', 'Clean Room'])
  );
}

if (!localStorage.getItem(COMPLETED_ITEMS_KEY)) {
  localStorage.setItem(
    COMPLETED_ITEMS_KEY,
    JSON.stringify(['Take Out Trash', 'Make Dinner'])
  );
}

export const allActiveItems = () => {
  const storedActiveItems = localStorage.getItem(ACTIVE_ITEMS_KEY);
  return storedActiveItems ? JSON.parse(storedActiveItems) : [];
};

export const allCompletedItems = () => {
  const storedCompletedItems = localStorage.getItem(COMPLETED_ITEMS_KEY);
  return storedCompletedItems ? JSON.parse(storedCompletedItems) : [];
};
