import Editor from '@tinymce/tinymce-vue';
import Vue from 'vue';

// Core (side-effect)
import '../static/tinymce/tinymce';

// Theme, icons, models
import '../static/tinymce/icons/default';
import '../static/tinymce/models/dom/model';
import '../static/tinymce/themes/silver';

// Plugins
import '../static/tinymce/plugins/code';
import '../static/tinymce/plugins/image';
import '../static/tinymce/plugins/link';
import '../static/tinymce/plugins/lists';

// Skin CSS
import '../static/tinymce/skins/ui/oxide-dark/skin.min.css';
import '../static/tinymce/skins/ui/oxide/skin.min.css';

import '../static/tinymce/icons/default';
import '../static/tinymce/plugins/advlist';
import '../static/tinymce/plugins/anchor';
import '../static/tinymce/plugins/autolink';
import '../static/tinymce/plugins/charmap';
import '../static/tinymce/plugins/code';
import '../static/tinymce/plugins/directionality';
import '../static/tinymce/plugins/emoticons';
import '../static/tinymce/plugins/fullscreen';
import '../static/tinymce/plugins/help';
import '../static/tinymce/plugins/image';
import '../static/tinymce/plugins/insertdatetime';
import '../static/tinymce/plugins/link';
import '../static/tinymce/plugins/lists';
import '../static/tinymce/plugins/media';
import '../static/tinymce/plugins/nonbreaking';
import '../static/tinymce/plugins/pagebreak';
import '../static/tinymce/plugins/preview';
import '../static/tinymce/plugins/save';
import '../static/tinymce/plugins/searchreplace';
import '../static/tinymce/plugins/table';
import '../static/tinymce/plugins/visualblocks';
import '../static/tinymce/plugins/wordcount';

Vue.component('Editor', Editor);
