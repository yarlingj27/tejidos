<template id="productoTemplate">
  <article id="contenedorProductos">
    <section v-for="(productos, categoria) in agrupadosPorCategoria" :key="categoria" id="categoria">
      <h2>{{ categoria }}</h2>
      <section id="productosContenedor">

        <section v-for="producto in productos" :key="producto.producto" id="producto">
          <h3>{{ producto.descripcion }}</h3>
          <img :src="`/src/assets/imagenes/${producto.imagen}`" :alt="producto.producto" width="150" height="100"/>
          <b>Precio Unidad: ${{ producto.precio }}</b>
          
        </section>
      </section>
    </section>
  </article>
</template>

<script>
import listaTejidos from "@/tejidos.json";

export default {
  
  computed: {
    agrupadosPorCategoria() {
      return listaTejidos.reduce((acumulador, item) => {
        if (!acumulador[item.categoria]) {
          acumulador[item.categoria] = [];
        }
        acumulador[item.categoria].push(item);
        return acumulador;
      }, {});
    },
  },
};
</script>