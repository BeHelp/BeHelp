<script>
export default {
  mounted() {
    const plugin = document.createElement('script');
    plugin.setAttribute('src', '../src/assets/js/cloudinary.js');
    plugin.async = true;
    document.head.appendChild(plugin);
  },
};
</script>

<template>
  <div>
    <h1>Signup</h1>
    <p>Signup part of the application</p>
    <div>
      <form method="post" enctype="multipart/form-data">
        <input type="file" name="file" />
        <input type="submit" value="Upload File" name="submit" />
      </form>

      <p id="data"></p>
    </div>
  </div>
</template>
