<template>
  <div class="about-info">
    <div class="hljs" ref="hlDiv" v-html="body" v-highlight></div>
  </div>
</template>

<script>
  import cons from '@/components/constant';

  let marked = require('marked');
  let hljs = require('highlight.js');
  import '../../../static/css/gruvbox-light.css';

  export default {
    name: "AboutInfo",
    data() {
      return {
        body: '',
      }
    },
    methods: {
      loadAbout() {
        this.axios.get(cons.apis + '/blog/about', {
          headers: {
            'Authorization': '123'
          },
          responseType: 'json',
        })
          .then(dat => {
            this.body = dat.data.body;
          }).catch(err => {
          console.log(err.response);
        });
      },
    },
    mounted() {
      this.loadAbout();
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code, lang) {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(lang, code, true).value;
          } else {
            return hljs.highlightAuto(code).value;
          }
        }
      });
      this.body = marked(this.body);
    },
  }
</script>

<style scoped>
  .about-info {
    display: flex;
    flex-direction: column;
    width: 856px;
    padding: 0;
    height: auto;
    flex: 1;

  }

  /*以下是Markdown文本样式*/
  >>> .hljs pre code {
    background-color: #eae1e1;
  }

  >>> .hljs pre code {
    background-color: #eae1e1;
  }

  >>> .hljs h1, h2, h3, h4 {
    color: #111111;
    font-weight: 400;
    margin-top: 1em;
  }

  >>> .hljs h1, h2, h3, h4, h5 {
    font-family: Georgia, Palatino, serif;
  }

  >>> .hljs h1, h2, h3, h4, h5, dl {
    margin-bottom: 16px;
    padding: 0;
  }

  >>> .hljs p {
    margin: 8px 0;
  }

  >>> .hljs h1 {
    font-size: 48px;
    line-height: 54px;
  }

  >>> .hljs h2 {
    font-size: 36px;
    line-height: 42px;
  }

  >>> .hljs h1, h2 {
    border-bottom: 1px solid #EFEAEA;
    padding-bottom: 10px;
  }

  >>> .hljs h3 {
    font-size: 24px;
    line-height: 30px;
  }

  >>> .hljs h4 {
    font-size: 21px;
    line-height: 26px;
  }

  >>> .hljs h5 {
    font-size: 18px;
    line-height: 23px;
  }

  >>> .hljs a {
    color: #0099ff;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  >>> .hljs a:hover {
    text-decoration: none;
    color: #ff6600;
  }

  >>> .hljs a:visited {
    /*color: purple;*/
  }

  >>> .hljs ul, ol {
    padding: 0;
    padding-left: 24px;
    margin: 0;
  }

  >>> .hljs li {
    line-height: 24px;
  }

  >>> .hljs p, ul, ol {
    font-size: 16px;
    line-height: 24px;
  }

  >>> .hljs ol ol, ul ol {
    list-style-type: lower-roman;
  }

  >>> .hljs pre {
    max-width: 800px;
    white-space: pre-wrap;
    line-height: 1.7em;
    overflow: auto;
    padding: 6px 10px;
  }

  >>> .hljs aside {
    display: block;
    float: right;
    width: 390px;
  }

  >>> .hljs blockquote {
    border-left: .5em solid #eee;
    padding: 0 0 0 2em;
    margin-left: 0;
  }

  >>> .hljs blockquote cite {
    font-size: 14px;
    line-height: 20px;
    color: #bfbfbf;
  }

  >>> .hljs blockquote cite:before {
    content: '\2014 \00A0';
  }

  >>> .hljs blockquote p {
    color: #666;
  }

  >>> .hljs hr {
    text-align: left;
    color: #999;
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
  }

  >>> .hljs dl {
    padding: 0;
  }

  >>> .hljs dl dt {
    padding: 10px 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: bold;
  }

  >>> .hljs dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  >>> .hljs dd {
    margin-left: 0;
  }

  /* Code below this line is copyright Twitter Inc. */

  >>> .hljs button,
  input,
  select,
  textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
  }

  >>> .hljs button, input {
    line-height: normal;
    *overflow: visible;
  }

  >>> .hljs button::-moz-focus-inner, input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  >>> .hljs button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
    -webkit-appearance: button;
  }

  >>> .hljs input[type=checkbox], input[type=radio] {
    cursor: pointer;
  }

  /* override default chrome & firefox settings */
  >>> .hljs input:not([type="image"]), textarea {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  >>> .hljs input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  >>> .hljs input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  >>> .hljs label,
  input,
  select,
  textarea {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: normal;
    line-height: normal;
    margin-bottom: 18px;
  }

  >>> .hljs input[type=checkbox], input[type=radio] {
    cursor: pointer;
    margin-bottom: 0;
  }

  >>> .hljs input[type=text],
  input[type=password],
  textarea,
  select {
    display: inline-block;
    width: 210px;
    padding: 4px;
    font-size: 13px;
    font-weight: normal;
    line-height: 18px;
    height: 18px;
    color: #808080;
    border: 1px solid #ccc;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  >>> .hljs select, input[type=file] {
    height: 27px;
    line-height: 27px;
  }

  >>> .hljs textarea {
    height: auto;
  }

  /* grey out placeholders */
  >>> .hljs :-moz-placeholder {
    color: #bfbfbf;
  }

  >>> .hljs ::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  >>> .hljs input[type=text],
  input[type=password],
  select,
  textarea {
    -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
    -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
    transition: border linear 0.2s, box-shadow linear 0.2s;
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  >>> .hljs input[type=text]:focus, input[type=password]:focus, textarea:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
    -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
  }

  /* buttons */
  >>> .hljs button {
    display: inline-block;
    padding: 4px 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 18px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    background-color: #0064cd;
    background-repeat: repeat-x;
    /*background-image: -khtml-gradient(linear, left top, left bottom, from(#049cdb), to(#0064cd));*/
    background-image: -moz-linear-gradient(top, #049cdb, #0064cd);
    background-image: -ms-linear-gradient(top, #049cdb, #0064cd);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #049cdb), color-stop(100%, #0064cd));
    background-image: -webkit-linear-gradient(top, #049cdb, #0064cd);
    background-image: -o-linear-gradient(top, #049cdb, #0064cd);
    background-image: linear-gradient(top, #049cdb, #0064cd);
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    border: 1px solid #004b9a;
    border-bottom-color: #003f81;
    -webkit-transition: 0.1s linear all;
    -moz-transition: 0.1s linear all;
    transition: 0.1s linear all;
    border-color: #0064cd #0064cd #003f81;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  }

  >>> .hljs button:hover {
    color: #fff;
    background-position: 0 -15px;
    text-decoration: none;
  }

  >>> .hljs button:active {
    -webkit-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  >>> .hljs button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  >>> .hljs table {
    *border-collapse: collapse; /* IE7 and lower */
    border-spacing: 0;
    width: 100%;
  }

  >>> .hljs table {
    border: solid #ccc 1px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    /*-webkit-box-shadow: 0 1px 1px #ccc;
    -moz-box-shadow: 0 1px 1px #ccc;
    box-shadow: 0 1px 1px #ccc;   */
  }

  >>> .hljs table tr:hover {
    background: #fbf8e9;
    -o-transition: all 0.1s ease-in-out;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  >>> .hljs table td, .table th {
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  >>> .hljs table th {
    background-color: #dce9f9;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#ebf3fc), to(#dce9f9));
    background-image: -webkit-linear-gradient(top, #ebf3fc, #dce9f9);
    background-image: -moz-linear-gradient(top, #ebf3fc, #dce9f9);
    background-image: -ms-linear-gradient(top, #ebf3fc, #dce9f9);
    background-image: -o-linear-gradient(top, #ebf3fc, #dce9f9);
    background-image: linear-gradient(top, #ebf3fc, #dce9f9);
    /*-webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;*/
    /*-moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;*/
    /*box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;*/
    border-top: none;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
    padding: 5px;
  }

  >>> .hljs table td:first-child, table th:first-child {
    border-left: none;
  }

  >>> .hljs table th:first-child {
    -moz-border-radius: 6px 0 0 0;
    -webkit-border-radius: 6px 0 0 0;
    border-radius: 6px 0 0 0;
  }

  >>> .hljs table th:last-child {
    -moz-border-radius: 0 6px 0 0;
    -webkit-border-radius: 0 6px 0 0;
    border-radius: 0 6px 0 0;
  }

  >>> .hljs table th:only-child {
    -moz-border-radius: 6px 6px 0 0;
    -webkit-border-radius: 6px 6px 0 0;
    border-radius: 6px 6px 0 0;
  }

  >>> .hljs table tr:last-child td:first-child {
    -moz-border-radius: 0 0 0 6px;
    -webkit-border-radius: 0 0 0 6px;
    border-radius: 0 0 0 6px;
  }

  >>> .hljs table tr:last-child td:last-child {
    -moz-border-radius: 0 0 6px 0;
    -webkit-border-radius: 0 0 6px 0;
    border-radius: 0 0 6px 0;
  }
</style>
