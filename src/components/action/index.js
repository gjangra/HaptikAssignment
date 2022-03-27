export const addFriend = (name) => {
  return {
    type: "add",
    payload: name,
  };
};

export const deleteFriend = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};

export const addToFavorites = (id) => {
  return {
    type: "favorite",
    payload: id,
  };
};

export const sorting = () => {
  return {
    type: "sort",
  };
};
