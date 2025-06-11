import Editor from '@tinymce/tinymce-vue';
import Vue from 'vue';

// Core (side-effect)
import 'tinymce/tinymce';

// Theme, icons, models
import 'tinymce/icons/default';
import 'tinymce/models/dom/model'; // 👈 This is the missing one!
import 'tinymce/themes/silver';

// Plugins
import 'tinymce/plugins/code';
import 'tinymce/plugins/image';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';

// Skin CSS
import 'tinymce/skins/ui/oxide/skin.min.css';

Vue.component('Editor', Editor);
