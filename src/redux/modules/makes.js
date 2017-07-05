let initialState = [
  {
    "id": 10,
    "name": "Porsche"
  },
  {
    "id": 20,
    "name": "Nissan"
  },
  {
    "id": 30,
    "name": "BMW"
  },
  {
    "id": 40,
    "name": "Audi"
  },
  {
    "id": 50,
    "name": "Mazda"
  }
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}