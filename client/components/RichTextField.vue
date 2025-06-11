<template>
  <div class="admin-textarea">
    <label class="admin-label">{{ label }}</label>
    <div class="editor-wrapper">
      <Editor
        :modelValue="modelValue"
        @update:modelValue="(val) => $emit('update:modelValue', val)"
        :init="editorInit"
      />
    </div>
  </div>
</template>

<script setup>
import { Editor } from '@tinymce/tinymce-vue';
import { computed } from 'vue';

defineProps({
  label: String,
  modelValue: String,
  language: {
    type: String,
    default: 'en',
  },
});

const editorInit = computed(() => ({
  height: 500,
  menubar: true,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount',
    'emoticons hr pagebreak directionality nonbreaking save template',
  ],
  toolbar: `undo redo | blocks | fontfamily fontsize | bold italic underline strikethrough | 
    forecolor backcolor | alignleft aligncenter alignright alignjustify | 
    bullist numlist outdent indent | removeformat | link image media | 
    code fullscreen preview print | table hr pagebreak emoticons | 
    ltr rtl | template`,
  skin_url: '/tinymce/skins/ui/oxide',
  content_css: '/tinymce/skins/content/default/content.css',
  icons_url: '/tinymce/icons/default/icons.js',
  language_url: `/tinymce/langs/${language}.js`,
}));
</script>

<style scoped>
.admin-label {
  color: var(--primary);
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.editor-wrapper {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
  margin: 8px 0 20px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
</style>
