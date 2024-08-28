<template>
  <div class="flex justify-center my-10">
    <form
      class="flex items-center flex-col w-6/12 gap-4 rounded-md bg-gray-500 p-5"
      action="https://formsubmit.co/nikolas.omendes@gmail.com"
      method="POST"
    >
      <p>Entre em contato</p>
      <input
        class="rounded-md w-full p-1 bg-white bg-opacity-50 placeholder-gray-900"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        class="rounded-md w-full p-1 bg-white bg-opacity-50 placeholder-gray-900"
        type="name"
        name="nome"
        placeholder="Nome"
      />
      <input
        class="rounded-md w-full p-1 bg-white bg-opacity-50 placeholder-gray-900"
        type="text"
        name="assunto"
        placeholder="Assunto"
      />
      <textarea
        class="rounded-md w-full p-1 bg-white bg-opacity-50 placeholder-gray-900"
        name="message"
        placeholder="Escreva aqui..."
      ></textarea>
      <button type="submit">enviar</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Forms",
};
</script>
<style></style>
