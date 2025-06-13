<template>
  <div class="rich-text-editor">
    <label v-if="label" class="admin-label">{{ label }}</label>
    <div class="editor-wrapper">
      <Editor
        :key="language"
        v-model="modelValue"
        :init="editorConfig"
        :tinymce-script-src="tinymceScriptSrc"
      />
    </div>
  </div>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  label: String,
  language: {
    type: String,
    default: 'en',
  },
});

const emit = defineEmits(['update:modelValue']);

const tinymceScriptSrc = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js';

const editorRef = ref(null);
const localContent = ref(props.modelValue);

// Keep localContent in sync with external modelValue
watch(
  () => props.modelValue,
  (val) => {
    if (val !== localContent.value) {
      localContent.value = val;
    }
  }
);

// Emit changes when localContent updates
watch(localContent, (val) => {
  emit('update:modelValue', val);
});

const editorConfig = computed(() => ({
  height: 500,
  menubar: true,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'image',
    'charmap',
    'preview',
    'anchor',
    'searchreplace',
    'visualblocks',
    'code',
    'fullscreen',
    'insertdatetime',
    'media',
    'table',
    'help',
    'wordcount',
    'emoticons',
    'pagebreak',
    'directionality',
    'nonbreaking',
    'save',
  ],
  toolbar: `undo redo | blocks | fontfamily fontsize | bold italic underline strikethrough | 
            forecolor backcolor | alignleft aligncenter alignright alignjustify | 
            bullist numlist outdent indent | removeformat | link image media | 
            code fullscreen preview print | table hr pagebreak emoticons | 
            ltr rtl | template`,
  skin_url: '/tinymce/skins/ui/oxide',
  content_css: '/tinymce/skins/content/default/content.css',
  icons_url: '/tinymce/icons/default/icons.js',
  language_url: `/tinymce/langs/${props.language.toLowerCase()}.js`,
  setup(editor) {
    editorRef.value = editor;
    editor.on('init', () => {
      editor.setContent(localContent.value || '');
    });
    editor.on('change keyup', () => {
      localContent.value = editor.getContent();
    });
  },
}));
</script>
<style scoped>
.admin-label {
  color: var(--primary);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 6px;
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
