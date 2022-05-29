<template>
  <div v-html="convertMd" />
</template>

<script>
import { marked } from "marked";

export default {
  name: "MarkdownDisplay",
  props: ["markdown"],
  computed: {
    convertMd() {
      let text = this.markdown;

      text = text.replace(/\n/g, "<br />");

      return marked(text);
    },
  },
};
</script>