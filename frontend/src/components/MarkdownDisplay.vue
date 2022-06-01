<template>
  <div v-html="convertMd" />
</template>

<script>
import { marked } from "marked";

export default {
  name: "MarkdownDisplay",
  props: ["Konten"],
  computed: {
    convertMd() {
      let text = this.Konten;

      text = text.replace(/\n/g, "<br />");

      return marked(text);
    },
  },
};
</script>