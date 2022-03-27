const initialState = [];

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      const newFriend = {
        name: action.payload,
        fav: false,
        id: state.length,
      };
      state = [...state, newFriend];
      return state;
    case "delete":
      state = state.filter((item) => item.id !== action.payload);
      return state;
    case "favorite":
      state = state.map((item) => {
        if (item.id === action.payload) {
          item.fav = !item.fav;
          return item;
        }
        return item;
      });
      return state;
    case "sort":
      let favList = state.filter((item) => item.fav === true);
      favList.sort((a, b) => {
        let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      let unFavList = state.filter((item) => item.fav === false);
      unFavList.sort((a, b) => {
        let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      state = [...favList, ...unFavList];
      return state;
    default:
      return state;
  }
};

export default friendReducer;
