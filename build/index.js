(()=>{"use strict";var e={n:l=>{var t=l&&l.__esModule?()=>l.default:()=>l;return e.d(t,{a:t}),t},d:(l,t)=>{for(var o in t)e.o(t,o)&&!e.o(l,o)&&Object.defineProperty(l,o,{enumerable:!0,get:t[o]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)};const l=window.wp.element,t=window.wp.blocks,o=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"simpletoc/toc","version":"5.0.24","title":"SimpleTOC","category":"layout","keywords":["TOC","Table of Contents","SimpleTOC","Inhaltsverzeichnis","Index"],"icon":"simpletocicon","description":"Adds a Table of Contents.","attributes":{"no_title":{"type":"boolean","default":false},"use_ol":{"type":"boolean","default":false},"remove_indent":{"type":"boolean","default":false},"add_smooth":{"type":"boolean","default":false},"use_absolute_urls":{"type":"boolean","default":false},"max_level":{"type":"integer","default":6},"min_level":{"type":"integer","default":1}},"supports":{"align":["wide","full"]},"textdomain":"simpletoc","editorScript":"file:index.js","editorStyle":"file:editor.css"}'),n=window.wp.i18n,a=window.wp.blockEditor,s=window.wp.serverSideRender;var i=e.n(s);const c=window.wp.components,r=window.wp.data,m=window.React,u=(0,l.createElement)("svg",{"fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"m365.983 78.248c2.72-32.415 29.921-57.908 63.029-57.908 34.91 0 63.253 28.342 63.253 63.252s-28.343 63.252-63.253 63.252v269.582c0 25.232-20.485 45.718-45.718 45.718h-313.62c-25.233 0-45.719-20.486-45.719-45.718v-292.46c0-25.233 20.486-45.718 45.719-45.718zm-245.943 324.857c-16.883 0-30.511-13.719-30.511-30.714 0-16.79 13.628-30.714 30.511-30.714 16.679 0 30.511 13.924 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm-50.851-61.428c-16.883 0-30.511-13.719-30.511-30.714 0-16.79 13.628-30.714 30.511-30.714 16.679 0 30.511 13.924 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm-50.851-61.428c-16.883 0-30.511-13.719-30.511-30.714 0-16.791 13.628-30.714 30.511-30.714 16.679 0 30.511 13.923 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm253.007-44.649v-24.188h-24.008v-10.108h24.008v-24.008h10.229v24.008h24.008v10.108h-24.008v24.188z"}));(0,t.registerBlockType)(o,{icon:u,edit:function(e){let{attributes:t,setAttributes:o}=e;const s=(0,a.useBlockProps)(),{isSavingPost:u}=(0,r.select)("core/editor"),[d,_]=(0,m.useState)(!1);return(0,r.subscribe)((()=>{u()?_(!0):_(!1)})),(0,m.useEffect)((()=>{d&&o({updated:Date.now()})}),[d]),(0,l.createElement)("div",s,(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(c.Panel,null,(0,l.createElement)(c.PanelBody,null,(0,l.createElement)(c.PanelRow,null,(0,l.createElement)(c.SelectControl,{label:(0,n.__)("Maximum level","simpletoc"),help:(0,n.__)("Maximum depth of the headings.","simpletoc"),value:t.max_level,options:[{label:(0,n.__)("Including","simpletoc")+" H6 ("+(0,n.__)("default","simpletoc")+")",value:"6"},{label:(0,n.__)("Including","simpletoc")+" H5",value:"5"},{label:(0,n.__)("Including","simpletoc")+" H4",value:"4"},{label:(0,n.__)("Including","simpletoc")+" H3",value:"3"},{label:(0,n.__)("Including","simpletoc")+" H2",value:"2"},{label:(0,n.__)("Including","simpletoc")+" H1",value:"1"}],onChange:e=>o({max_level:Number(e)})})),(0,l.createElement)(c.PanelRow,null,(0,l.createElement)(c.SelectControl,{label:(0,n.__)("Minimum level","simpletoc"),help:(0,n.__)("Minimum depth of the headings.","simpletoc"),value:t.min_level,options:[{label:(0,n.__)("Including","simpletoc")+" H6",value:"6"},{label:(0,n.__)("Including","simpletoc")+" H5",value:"5"},{label:(0,n.__)("Including","simpletoc")+" H4",value:"4"},{label:(0,n.__)("Including","simpletoc")+" H3",value:"3"},{label:(0,n.__)("Including","simpletoc")+" H2",value:"2"},{label:(0,n.__)("Including","simpletoc")+" H1 ("+(0,n.__)("default","simpletoc")+")",value:"1"}],onChange:e=>o({min_level:Number(e)})})),(0,l.createElement)(c.PanelRow,null,(0,l.createElement)(c.ToggleControl,{label:(0,n.__)("Remove heading","simpletoc"),help:(0,n.__)('Disable the "Table of contents" block heading and add your own heading block.',"simpletoc"),checked:t.no_title,onChange:()=>o({no_title:!t.no_title})})),(0,l.createElement)(c.PanelRow,null,(0,l.createElement)(c.ToggleControl,{label:(0,n.__)("Use an ordered list","simpletoc"),help:(0,n.__)("Replace the <ul> tag with an <ol> tag. This adds decimal numbers to each heading in the TOC.","simpletoc"),checked:t.use_ol,onChange:()=>o({use_ol:!t.use_ol})})),(0,l.createElement)(c.PanelRow,null,(0,l.createElement)(c.ToggleControl,{label:(0,n.__)("Remove list indent","simpletoc"),help:(0,n.__)("No bullet points or numbers at the first level.","simpletoc"),checked:t.remove_indent,onChange:()=>o({remove_indent:!t.remove_indent})})),(0,l.createElement)(c.PanelRow,null,(0,l.createElement)(c.ToggleControl,{label:(0,n.__)("Use absolute urls","simpletoc"),help:(0,n.__)("Adds the permalink url to the fragment.","simpletoc"),checked:t.use_absolute_urls,onChange:()=>o({use_absolute_urls:!t.use_absolute_urls})})),(0,l.createElement)(c.PanelRow,null,(0,l.createElement)(c.ToggleControl,{label:(0,n.__)("Smooth scrolling support","simpletoc"),help:(0,n.__)('Add the css class "smooth-scroll" to the links. This enables smooth scrolling in some themes like GeneratePress.',"simpletoc"),checked:t.add_smooth,onChange:()=>o({add_smooth:!t.add_smooth})}))))),(0,l.createElement)(a.BlockControls,null,(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(c.ToolbarButton,{className:"components-icon-button components-toolbar__control",label:(0,n.__)("Update table of contents","simpletoc"),onClick:()=>o({updated:Date.now()}),icon:"update"}))),(0,l.createElement)(i(),{block:"simpletoc/toc",attributes:t}))},save:function(e){let{attributes:l}=e;return null}})})();