<template>
  <div class="base-textarea">
    <h4 class="base-textarea__label">{{ label }}</h4>
    <Editor
      v-model="main[`content${activeLang}`]"
      :init="{
        height: 500,
        menubar: true,
        toolbar: `undo redo | blocks | fontfamily fontsize | bold italic underline strikethrough | 
              forecolor backcolor | alignleft aligncenter alignright alignjustify | 
              bullist numlist outdent indent | removeformat | link image media | 
              code fullscreen preview print | table hr pagebreak emoticons | 
              ltr rtl | template`,
        skin_url: '/tinymce/skins/ui/oxide',
        content_css: '/tinymce/skins/content/default/content.css',
        icons_url: '/tinymce/icons/default/icons.js',
        language_url: '/tinymce/langs/en.js',
      }"
    />
  </div>
</template>

<script>
import Blockquote from '@tiptap/extension-blockquote';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { Editor, EditorContent } from '@tiptap/vue-2';
export default {
  components: {
    EditorContent,
  },
  props: {
    label: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => '',
    },
    height: {
      type: String,
      default: () => '',
    },
    value: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [
        StarterKit,
        Blockquote,
        Underline,
        Placeholder.configure({
          includeChildren: true,
          placeholder: ({ node }) => {
            if (node.type.name === 'div') {
              return '…';
            }
            if (node.type.name === 'img') {
              return '…';
            }

            return '…';
          },
        }),
      ],
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML());

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss" scoped>
.text-editor-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  &__text-editor {
    display: flex;
    gap: 6px;
    padding: 6px;
    border-radius: 8px;
    background-color: var(--gray-800);
  }

  &__text-editor-item {
    padding: 7px;
    border-radius: 4px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: var(--gray-900);
    }

    &.active {
      background-color: var(--primary);
      &:deep() {
        svg {
          width: 20px;
          height: 20px;
          color: #fff;
        }
      }
    }

    &:deep() {
      svg {
        width: 20px;
        height: 20px;
        color: #333333;
      }
    }
  }

  &__calendar {
  }
}
.base-textarea {
  width: 100%;

  &__label {
    color: var(--primary);
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 4px;
    @media (max-width: 767px) {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }

  &__textarea {
    border: 1px solid #f3f3f3 !important;
    border-radius: 4px;
    color: var(--border);
    font-size: 16px;
    width: 100%;
    line-height: 19px;
    height: 150px;
    transition: 0.3s ease 0s;
    padding: 10px 17px 10px 10px;
    background: #f3f3f3;
    position: relative;
    resize: none;
    overflow-y: auto;
    overflow-x: hidden;
    &::placeholder {
      border-radius: 16px;
      color: var(--text4);
      font-weight: 400;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }

  &__tiptap {
    width: 100%;
    height: 100%;
  }

  &:deep() {
    .tiptap {
      width: 100%;
      height: 100%;
      > * + * {
        margin-top: 0.75em;
      }
      .ProseMirror {
        position: relative;
      }
      .ProseMirror {
        word-wrap: break-word;
        white-space: normal;
        -webkit-font-variant-ligatures: none;
        font-variant-ligatures: none;
        font-feature-settings: 'liga' 0; /* the above doesn't seem to work in Edge */
      }

      .ProseMirror pre {
        white-space: normal;
      }

      .ProseMirror li {
        position: relative;
      }

      .ProseMirror-hideselection *::selection {
        background: transparent;
      }
      .ProseMirror-hideselection *::-moz-selection {
        background: transparent;
      }
      .ProseMirror-hideselection {
        caret-color: transparent;
      }
      .ProseMirror-hideselection {
        ::before {
          content: attr(data-placeholder);
          color: var(--border);
          float: left;
          height: 0;
          pointer-events: none;
        }
      }
      p {
        color: var(--border);
        font-size: 16px;
        &.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: var(--border);
          float: left;
          height: 0;
          pointer-events: none;
        }
        &.is-empty::before {
          content: attr(data-placeholder);
          float: left;
          color: var(--border);
          pointer-events: none;
          height: 0;
        }
      }
      strong {
        font-weight: 800 !important;
        color: #000 !important;
      }

      ul,
      ol {
        padding: 0 1rem;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        line-height: 1.1;
      }

      code {
        background-color: var(--primary);
        color: #ffff;
      }

      pre {
        background: #0d0d0d;
        color: #fff;
        font-family: 'JetBrainsMono', monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

        code {
          color: inherit;
          padding: 0;
          background: none;
          font-size: 0.8rem;
        }
      }

      img {
        max-width: 100%;
        height: auto;
      }

      blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0d0d0d, 0.1);
      }

      hr {
        border: none;
        border-top: 2px solid rgba(#0d0d0d, 0.1);
        margin: 2rem 0;
      }
    }
    .is-editor-empty {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
