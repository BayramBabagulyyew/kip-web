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

import 'tinymce/icons/default';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/wordcount';

Vue.component('Editor', Editor);
