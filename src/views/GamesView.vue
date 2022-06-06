<template>
    <div>
      <h1>Lista de Juegos</h1>
      <GamesListTable />
  </div>
</template>

<script>

import Store from "@/store";
import GamesListTable from "../components/GamesListTable.vue";



export default {
    name: "games",
    components: { GamesListTable },
    beforeRouteEnter(to, from, next){
      Store.dispatch("gamesList/getAllGames")
      next ()
    },
}
</script>

<style>

</style>