(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["settings-partials-Breadcrumbs-ContentTypes-vue","settings-partials-Breadcrumbs-Preview-vue"],{"02c9":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},e._l(e.postTypes,(function(t){return s("core-settings-row",{key:t.name,staticClass:"aioseo-breadcrumbs-post-type",attrs:{name:t.label},scopedSlots:e._u([{key:"content",fn:function(){return[s("div",[s("preview",{attrs:{"preview-data":e.getPreview(t),useDefaultTemplate:e.dynamicOptions.breadcrumbs.postTypes[t.name].useDefaultTemplate}}),s("grid-row",[s("grid-column",[s("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.postTypes[t.name].useDefaultTemplate,callback:function(s){e.$set(e.dynamicOptions.breadcrumbs.postTypes[t.name],"useDefaultTemplate",s)},expression:"dynamicOptions.breadcrumbs.postTypes[postType.name].useDefaultTemplate"}}),e._v(" "+e._s(e.strings.useDefaultTemplate)+" ")],1)],1),e.dynamicOptions.breadcrumbs.postTypes[t.name].useDefaultTemplate?e._e():s("grid-row",[e.options.breadcrumbs.breadcrumbPrefix&&e.options.breadcrumbs.breadcrumbPrefix.length?s("grid-column",[s("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.postTypes[t.name].showPrefixCrumb,callback:function(s){e.$set(e.dynamicOptions.breadcrumbs.postTypes[t.name],"showPrefixCrumb",s)},expression:"dynamicOptions.breadcrumbs.postTypes[postType.name].showPrefixCrumb"}}),e._v(" "+e._s(e.strings.showPrefixLabel)+" ")],1):e._e(),s("grid-column",[s("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.postTypes[t.name].showHomeCrumb,callback:function(s){e.$set(e.dynamicOptions.breadcrumbs.postTypes[t.name],"showHomeCrumb",s)},expression:"dynamicOptions.breadcrumbs.postTypes[postType.name].showHomeCrumb"}}),e._v(" "+e._s(e.strings.showHomeLabel)+" ")],1),e.postTypeHasArchive(t)?s("grid-column",[s("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.postTypes[t.name].showArchiveCrumb,callback:function(s){e.$set(e.dynamicOptions.breadcrumbs.postTypes[t.name],"showArchiveCrumb",s)},expression:"dynamicOptions.breadcrumbs.postTypes[postType.name].showArchiveCrumb"}}),e._v(" "+e._s(e.strings.showPostTypeArchiveLabel)+" ")],1):e._e(),e.getPostTaxonomyOptions(t).length?s("grid-column",[s("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.postTypes[t.name].showTaxonomyCrumbs,callback:function(s){e.$set(e.dynamicOptions.breadcrumbs.postTypes[t.name],"showTaxonomyCrumbs",s)},expression:"dynamicOptions.breadcrumbs.postTypes[postType.name].showTaxonomyCrumbs"}}),e._v(" "+e._s(e.strings.showTaxonomyLabel)+" ")],1):e._e(),e.postTypeIsHierarchical(t)?s("grid-column",[s("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.postTypes[t.name].showParentCrumbs,callback:function(s){e.$set(e.dynamicOptions.breadcrumbs.postTypes[t.name],"showParentCrumbs",s)},expression:"dynamicOptions.breadcrumbs.postTypes[postType.name].showParentCrumbs"}}),e._v(" "+e._s(e.strings.showParentLabel)+" ")],1):e._e(),s("grid-column",[s("core-settings-row",{attrs:{name:e.postTypeIsHierarchical(t)&&e.dynamicOptions.breadcrumbs.postTypes[t.name].showParentCrumbs?e.strings.singleTemplateLabel:"",leftSize:"12",rightSize:"12"},scopedSlots:e._u([{key:"content",fn:function(){return[s("core-html-tags-editor",{attrs:{"line-numbers":!0,"tags-context":"breadcrumbs-post-type-"+t.name,"minimum-line-numbers":3,checkUnfilteredHtml:"","default-tags":["breadcrumb_post_title","breadcrumb_link"]},model:{value:e.dynamicOptions.breadcrumbs.postTypes[t.name].template,callback:function(s){e.$set(e.dynamicOptions.breadcrumbs.postTypes[t.name],"template",s)},expression:"dynamicOptions.breadcrumbs.postTypes[postType.name].template"}})]},proxy:!0}],null,!0)})],1),e.postTypeIsHierarchical(t)&&e.dynamicOptions.breadcrumbs.postTypes[t.name].showParentCrumbs?s("grid-column",[s("core-settings-row",{attrs:{name:e.strings.parentTemplateLabel,leftSize:"12",rightSize:"12"},scopedSlots:e._u([{key:"content",fn:function(){return[s("core-html-tags-editor",{attrs:{"line-numbers":!0,"tags-context":"breadcrumbs-post-type-"+t.name,"minimum-line-numbers":3,checkUnfilteredHtml:"","default-tags":["breadcrumb_post_title","breadcrumb_link"]},model:{value:e.dynamicOptions.breadcrumbs.postTypes[t.name].parentTemplate,callback:function(s){e.$set(e.dynamicOptions.breadcrumbs.postTypes[t.name],"parentTemplate",s)},expression:"dynamicOptions.breadcrumbs.postTypes[postType.name].parentTemplate"}})]},proxy:!0}],null,!0)})],1):e._e(),e.dynamicOptions.breadcrumbs.postTypes[t.name].showTaxonomyCrumbs&&e.getPostTaxonomyOptions(t).length?s("grid-column",[s("grid-column",[s("div",{staticClass:"taxonomy-select"},[e._v(" "+e._s(e.strings.selectTaxonomyLabel)+" "),s("base-select",{attrs:{size:"medium",options:e.getPostTaxonomyOptions(t),placeholder:e.strings.selectTaxonomy,value:e.getPostTaxonomyOptions(t).find((function(s){return s.value===e.getPostTypeTaxonomy(t).name}))},on:{input:function(s){return e.dynamicOptions.breadcrumbs.postTypes[t.name].taxonomy=s.value}}})],1)]),s("grid-column",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectTaxonomyDescription)+" ")])],1):e._e()],1)],1)]},proxy:!0}],null,!0)})})),1)},n=[],o=s("5530"),r=(s("b0c0"),s("4de4"),s("ac1f"),s("5319"),s("4d63"),s("25f0"),s("d81d"),s("caad"),s("2532"),s("2f62")),i=s("c468"),m={components:{preview:i["default"]},data:function(){return{strings:{useDefaultTemplate:this.$t.__("Use a default template",this.$td),selectTaxonomyLabel:this.$t.__("Taxonomy priority:",this.$td),selectTaxonomy:this.$t.__("Select a taxonomy",this.$td),selectTaxonomyDescription:this.$t.__("Choose taxonomy that should have a priority for this post type.",this.$td),showPostTypeArchiveLabel:this.$t.__("Show post type archive link",this.$td),showTaxonomyLabel:this.$t.__("Show taxonomy link",this.$td),showHomeLabel:this.$t.__("Show homepage link",this.$td),showPrefixLabel:this.$t.__("Show prefix link",this.$td),showParentLabel:this.$t.__("Show parent item link",this.$td),singleTemplateLabel:this.$t.__("Single item template",this.$td),parentTemplateLabel:this.$t.__("Parent item template",this.$td)}}},methods:{getPreview:function(e){var t=this.options.breadcrumbs,s=this.dynamicOptions.breadcrumbs.postTypes[e.name],a=s.useDefaultTemplate;return[a&&t.breadcrumbPrefix||!a&&s.showPrefixCrumb?t.breadcrumbPrefix:"",a&&t.homepageLink||!a&&s.showHomeCrumb?t.homepageLabel?t.homepageLabel:"Home":"",t.showBlogHome&&this.$aioseo.data.staticBlogPage&&"post"===e.name?"Blog Home":"",this.postTypeHasArchive(e)&&(a||!a&&s.showArchiveCrumb)?e.label:"",a||!a&&s.showTaxonomyCrumbs?this.getPostTypeTaxonomyTemplate(e):"",this.postTypeIsHierarchical(e)&&(a||!a&&s.showParentCrumbs)?this.getPostTypeParentTemplate(e):"",this.getPostTypeTemplate(e)]},postTypeIsHierarchical:function(e){return 0<this.$aioseo.postData.postTypes.filter((function(t){return t.name===e.name&&t.hierarchical})).length},postTypeHasArchive:function(e){return 0<this.$aioseo.postData.postTypes.filter((function(t){return t.name===e.name&&t.hasArchive})).length},getPostTypeTaxonomyTemplate:function(e){var t=this.getPostTypeTaxonomy(e);if(!(0>=t.length)){var s=this.dynamicOptions.breadcrumbs.taxonomies[t.name].parentTemplate||this.dynamicOptions.breadcrumbs.taxonomies[t.name].template,a=this.dynamicOptions.breadcrumbs.taxonomies[t.name].useDefaultTemplate?this.$aioseo.breadcrumbs.defaultTemplates.taxonomies[t.name]:s;return a.replace(new RegExp("#breadcrumb_taxonomy_title","g"),t.singular+" Parent")}},getPostTypeParentTemplate:function(e){var t=this.dynamicOptions.breadcrumbs.postTypes[e.name].useDefaultTemplate?this.$aioseo.breadcrumbs.defaultTemplates.postTypes[e.name]:this.dynamicOptions.breadcrumbs.postTypes[e.name].parentTemplate;return t.replace(new RegExp("#breadcrumb_post_title","g"),e.singular+" Parent")},getPostTypeTemplate:function(e){var t=this.dynamicOptions.breadcrumbs.postTypes[e.name].useDefaultTemplate?this.$aioseo.breadcrumbs.defaultTemplates.postTypes[e.name]:this.dynamicOptions.breadcrumbs.postTypes[e.name].template;return t.replace(new RegExp("#breadcrumb_post_title","g"),e.singular)},getPostTaxonomyOptions:function(e){return this.$aioseo.postData.taxonomies.filter((function(t){return e.taxonomies.includes(t.name)})).map((function(e){return{value:e.name,label:e.label}}))},getPostTypeTaxonomy:function(e){var t=this,s=this.$aioseo.postData.taxonomies.filter((function(s){return s.name===t.dynamicOptions.breadcrumbs.postTypes[e.name].taxonomy}));return 0===s.length&&0<e.taxonomies.length&&(s=this.$aioseo.postData.taxonomies.filter((function(t){return e.taxonomies.includes(t.name)}))),0<s.length?s[0]:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(r["e"])(["options","dynamicOptions"])),{},{postTypes:function(){return this.$aioseo.postData.postTypes||[]}})},p=m,c=(s("1557"),s("2877")),l=Object(c["a"])(p,a,n,!1,null,"470c8026",null);t["default"]=l.exports},1557:function(e,t,s){"use strict";s("f74f")},c468:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"preview-box"},[e.label?s("span",{staticClass:"label"},[e._v(" "+e._s(e.label)+": ")]):e._e(),e._l(this.getPreviewData(),(function(t,a){return[1<e.previewLength&&a>0&&a<e.previewLength?s("span",{key:a+"sep",staticClass:"aioseo-breadcrumb-separator",domProps:{innerHTML:e._s(e.options.breadcrumbs.separator)}}):e._e(),a<e.previewLength-1?s("span",{key:a+"crumb",class:{"aioseo-breadcrumb":!t.match(/aioseo-breadcrumb/),link:t!==e.options.breadcrumbs.breadcrumbPrefix&&!t.match(/<a /)},domProps:{innerHTML:e._s(t)}}):e._e(),a===e.previewLength-1?s("span",{key:a+"crumbLast",class:{last:!0,link:e.options.breadcrumbs.linkCurrentItem&&e.useDefaultTemplate&&!t.match(/<a /),noLink:!e.options.breadcrumbs.linkCurrentItem&&e.useDefaultTemplate,"aioseo-breadcrumb":!t.match(/aioseo-breadcrumb/)},domProps:{innerHTML:e._s(t)}}):e._e()]}))],2)},n=[],o=s("5530"),r=(s("d81d"),s("4de4"),s("ac1f"),s("5319"),s("fb6a"),s("2f62")),i={props:{previewData:{type:Array,default:null},useDefaultTemplate:{type:Boolean,default:!0},label:String},computed:Object(o["a"])(Object(o["a"])({},Object(r["e"])(["options"])),{},{previewLength:function(){return this.getPreviewData()?this.getPreviewData().length:0}}),methods:{getPreviewData:function(){var e=this,t=this.previewData.filter((function(e){return!!e})).map((function(t){return e.$tags.decodeHTMLEntities(t).replace(/#breadcrumb_separator/g,'<span class="aioseo-breadcrumb-separator">'+e.options.breadcrumbs.separator+"</span>").replace(/#breadcrumb_link/g,"Permalink")}));return this.useDefaultTemplate&&!this.options.breadcrumbs.showCurrentItem&&(t=t.slice(0,t.length-1)),t}}},m=i,p=s("2877"),c=Object(p["a"])(m,a,n,!1,null,null,null);t["default"]=c.exports},f74f:function(e,t,s){}}]);