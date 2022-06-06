<template>
  <div>
    <table class="table table-bordered w-50 mx-auto mt-5">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Color</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Portada</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(game, index) in gamesList"
          :key="index"
          :style="{ color: game.color }"
          class="align-middle"
        >
          <td>{{ game.codigo }}</td>
          <td>
            <select :value="game.color" @change="changeColorGame(game, $event)">
              <option
                v-for="(color, $index) in colors"
                :key="$index"
                :value="color.value"
              >
                {{ color.label }}
              </option>
            </select>
          </td>
          <td>{{ game.nombre }}</td>
          <td>{{ game.stock }}</td>
          <td>{{ game.precio }}</td>
          <td>
            <img class="cover" :src="game.cover" />
          </td>
          <td>
            <button class="btn btn-dark" @click="addStock(game)">+</button>
            <button class="btn btn-dark" @click="removeStock(game)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <h5>Stock Disponible: </h5>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import App from "@/App.vue";

export default {
  data: () => ({
    colors: [
      { value: "red", label: "Rojo" },
      { value: "blue", label: "Azul" },
      { value: "green", label: "Verde" },
      { value: "black", label: "Negro" },
    ],
  }),
  computed: {
    ...mapState("gamesList", {
      gamesList: (state) => state.list,
    }),
  },
  components: { App },
  methods: {
    ...mapActions("gamesList", ["addStock", "removeStock", "changeColor"]),
    changeColorGame(game, event) {
      this.changeColor({ gameToFind: game, newColor: event.target.value });
    },
  },
};
</script>

<style>
table {
  width: 80%;
}
table,
th,
td {
  border: 1px solid black;
}
.cover {
  width: 80px;
  height: 100px;
}
</style>