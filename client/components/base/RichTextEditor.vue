<template>
  <div class="rich-text-editor">
    <label v-if="label" class="admin-label">{{ label }}</label>
    <div class="editor-wrapper">
      <Editor :key="editorKey" v-model="localContent" :init="editorConfig" />
      <!-- :tinymce-script-src="tinymceScriptSrcLocale" -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
// import {} from '../../static/tinymce/tinymce';

export default defineComponent({
  name: 'RichTextEditor',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: String,
    language: {
      type: String,
      default: 'en',
    },
  },
  emits: ['update'],
  setup(props, { emit }) {
    const localContent = ref(props.modelValue ?? '');
    const editorKey = ref(`editor-${props.language ?? 'En'}`);

    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal !== localContent.value) {
          localContent.value = newVal;
        }
      }
    );

    // Sync local -> emit
    watch(localContent, (val) => {
      emit('update', val);
    });

    // Handle dynamic language switching with editor reload
    const reloadEditor = (newLang) => {
      setTimeout(() => {
        editorKey.value = `editor-${newLang}`;
        editorVisible.value = true;
      }, 0); // nextTick or 0ms delay to fully unmount
    };

    watch(
      () => props.language,
      (newLang) => {
        reloadEditor(newLang);
      }
    );

    const editorConfig = {
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
      language: props.language.toLowerCase() ?? 'Tm',
      language_url: props.language ? `/tinymce/langs/${props.language.toLowerCase()}.js` : '',
    };

    return {
      localContent,
      editorConfig,
      editorKey,
    };
  },
});
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
