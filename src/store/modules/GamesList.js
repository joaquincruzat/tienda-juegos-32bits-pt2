export const gamesListModule = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    },
    ADD_STOCK(state, index) {
      state.list[index].stock++;
    },
    REMOVE_STOCK(state, index) {
      state.list[index].stock--;
    },
    SET_COLOR(state, { index, newColor }) {
      state.list[index].color = newColor;
    },
    // getters: {
    //   totalStock(state) {
    //     state.list.reduce((accumulator, game) => {
    //       accumulator = accumulator + game.stock;
    //       return accumulator;
    //     }, 0);
    //   },
    // },
  },
  actions: {
    async getAllGames({ commit }) {
      const games = await fetch("/juegos.json").then((res) => res.json());
      commit("SET_LIST", games);
    },
    addStock(context, gameToFind) {
      const games = context.state.list;
      const index = games.findIndex(
        (game) => game.codigo === gameToFind.codigo
      );
      context.commit("ADD_STOCK", index);
    },
    removeStock(context, gameToFind) {
      const games = context.state.list;
      const index = games.findIndex(
        (game) => game.codigo === gameToFind.codigo
      );
      if (games[index].stock > 0) {
        context.commit("REMOVE_STOCK", index);
      }
    },
    changeColor(context, { gameToFind, newColor }) {
      const games = context.state.list;
      const index = games.findIndex(
        (game) => game.codigo === gameToFind.codigo
      );
      context.commit("SET_COLOR", { index, newColor });
    },
  },
};
