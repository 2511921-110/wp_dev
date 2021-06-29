(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["local-seo-pro-Locations-vue","local-seo-pro-LocationsBusinessInfo-vue","local-seo-pro-MultipleLocationsSettings-vue"],{8063:function(s,t,e){},b464:function(s,t,e){"use strict";var o=e("8063"),n=e.n(o);n.a},bcdb:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"aioseo-locations"},[e("core-card",{attrs:{slug:"locationsSettings","header-text":s.strings.locationsSettings}},[e("div",{staticClass:"aioseo-settings-row"},[e("p",{staticClass:"location-description"},[s._v(s._s(s.strings.description))])]),e("core-settings-row",{staticClass:"multiple-locations",scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.multipleLocations)+" "),s.isUnlicensed?e("core-pro-badge"):s._e()]},proxy:!0},{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"multipleLocations",disabled:s.isUnlicensed,options:[{label:s.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.yes,value:!0}]},scopedSlots:s._u([{key:"desktop",fn:function(){return[e("svg-desktop")]},proxy:!0},{key:"mobile",fn:function(){return[e("svg-mobile")]},proxy:!0}]),model:{value:s.isMultipleLocation,callback:function(t){s.isMultipleLocation=t},expression:"isMultipleLocation"}}),s.options.localBusiness.locations.general.multiple&&s.$aioseo.license.isActive?e("core-alert",{staticClass:"locations-link",attrs:{type:"blue"}},[e("div",{domProps:{innerHTML:s._s(s.strings.multipleLocationsLink)}})]):s._e(),s.isUnlicensed?e("core-alert",{staticClass:"locations-link",attrs:{type:"blue"}},[e("div",{domProps:{innerHTML:s._s(s.strings.multipleLocationsFree)}})]):s._e()]},proxy:!0}])}),e("core-display-info",{attrs:{label:s.strings.displayLocationInfo,options:s.displayInfo}})],1),s.options.localBusiness.locations.general.multiple?s._e():e("locations-business-info"),s.options.localBusiness.locations.general.multiple?e("multiple-locations-settings"):s._e()],1)},n=[],i=e("5530"),a=e("2f62"),l=e("d8a3"),c=e("c57d"),r={components:{MultipleLocationsSettings:l["default"],LocationsBusinessInfo:c["default"]},data:function(){return{displayInfo:{widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Business Info" widget.',this.$td),'<a href="'.concat(this.$aioseo.urls.admin.widgets,'" target="_blank">'),"</a>","AIOSEO")},shortcode:{copy:"[aioseo_local_business_info]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the location info. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeBusinessInfo",!0))},block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Business Info" block.',this.$td),"AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_business_info' ) ) aioseo_local_business_info(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the location info. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionBusinessInfo",!0))}},strings:{locationsSettings:this.$t.__("Locations Settings",this.$td),description:this.$t.sprintf(this.$t.__("Whether your business has multiple locations, or just one, %1$s makes it easy to configure and display relevant information about your local business. You can use the custom-built tools below, or you can use the Locations custom post type (multiple locations only) to generate relevant and necessary information for search engines or for your customers.",this.$td),"AIOSEO"),multipleLocations:this.$t.__("Multiple Locations",this.$td),multipleLocationsLink:this.$t.sprintf(this.$t.__("Use the %1$sLocations%2$s Post Type in the menu on the left to start adding your locations.",this.$td),'<a href="'.concat(this.$aioseo.localBusiness.postTypeEditLink,'">'),"</a>"),multipleLocationsFree:this.$t.sprintf(this.$t.__("Multiple Locations feature is available only for %1$s Pro users. Upgrade to Pro and unlock all %2$s features!",this.$td),"AIOSEO","AIOSEO"),displayLocationInfo:this.$t.__("Display Location Info",this.$td),widget:this.$t.__("Widget",this.$td),shortcode:this.$t.__("Shortcode",this.$td),gutenbergBlock:this.$t.__("Gutenberg Block",this.$td),phpCode:this.$t.__("PHP Code",this.$td)}}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(a["c"])(["isUnlicensed"])),Object(a["e"])(["options"])),{},{isMultipleLocation:{get:function(){return!this.isUnlicensed&&this.options.localBusiness.locations.general.multiple},set:function(s){this.options.localBusiness.locations.general.multiple=s}}})},u=r,d=(e("b464"),e("2877")),p=Object(d["a"])(u,o,n,!1,null,null,null);t["default"]=p.exports},c57d:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[s.options.localBusiness.locations.general.multiple?s._e():e("core-card",{attrs:{slug:"localBusinessInfo","header-text":s.strings.businessInfo}},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e("p",{staticClass:"location-description"},[s._v(s._s(s.strings.locationInfo1))]),e("p",{staticClass:"location-description mb-0"},[s._v(s._s(s.strings.locationInfo2))])]),e("core-settings-row",{staticClass:"info-name-row",attrs:{name:s.strings.name,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("local-business-name")]},proxy:!0}],null,!1,276075501)}),e("core-settings-row",{staticClass:"info-business-image",attrs:{name:s.strings.image,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("local-business-image")]},proxy:!0}],null,!1,3202536589)}),e("core-settings-row",{staticClass:"info-business-type",attrs:{name:s.strings.businessType,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("local-business-business-type")]},proxy:!0}],null,!1,4144345881)}),e("core-settings-row",{staticClass:"info-business-address-row",attrs:{id:"info-business-address-row",name:s.strings.businessAddress,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("local-business-business-address")]},proxy:!0}],null,!1,1864513495)}),e("core-settings-row",{staticClass:"info-business-contact-row",attrs:{id:"info-business-contact-row",name:s.strings.businessContact,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("local-business-business-contact")]},proxy:!0}],null,!1,3695398241)}),e("core-settings-row",{staticClass:"info-business-IDs-row",attrs:{name:s.strings.businessIDs,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("local-business-business-ids")]},proxy:!0}],null,!1,420205695)}),e("core-settings-row",{staticClass:"info-payment-info-row",attrs:{name:s.strings.paymentInfo,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("local-business-payment-info")]},proxy:!0}],null,!1,332645171)}),e("core-settings-row",{staticClass:"info-area-row",attrs:{name:s.strings.areaServed,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("local-business-area-served")]},proxy:!0}],null,!1,1581046819)})],1)],1)},n=[],i=e("5530"),a=e("2f62"),l=e("9c0e"),c={mixins:[l["a"],l["o"]],data:function(){return{strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),locationInfo2:this.$t.__("Local business information may be displayed when users search for businesses on Google search or Google Maps. Google decides on a per search basis whether to display this information or not and it’s completely automated.",this.$td),businessInfo:this.$t.__("Business Info",this.$td),name:this.$t.__("Name",this.$td),businessType:this.$t.__("Type",this.$td),urls:this.$t.__("URLs",this.$td),businessAddress:this.$t.__("Address",this.$td),businessContact:this.$t.__("Contact Info",this.$td),businessIDs:this.$t.__("IDs",this.$td),paymentInfo:this.$t.__("Payment Info",this.$td),areaServed:this.$t.__("Area Served",this.$td),image:this.$t.__("Image",this.$td)}}},computed:Object(i["a"])({},Object(a["e"])(["options"]))},r=c,u=e("2877"),d=Object(u["a"])(r,o,n,!1,null,null,null);t["default"]=d.exports},d8a3:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"aioseo-locations aioseo-locations-multiple-locations-settings"},[s.options.localBusiness.locations.general.multiple&&s.$aioseo.license.isActive?e("core-card",{attrs:{slug:"advancedLocationsSettings","header-text":s.strings.advancedLocationsSettings}},[e("core-settings-row",{staticClass:"location-permalink",attrs:{name:s.strings.locationsPermalink},scopedSlots:s._u([{key:"content",fn:function(){return[e("div",{staticClass:"location-permalink-preview"},[e("span",{staticClass:"baseurl"},[s._v(s._s(s.$aioseo.urls.mainSiteUrl)+"/")]),s._l(s.$aioseo.localBusiness.postTypePermalinkStructure,(function(t,o){return e("span",{key:o,class:"{slug}"==t?"slug":""},[s._v(s._s("{slug}"==t?s.currentPostTypeSlug:t))])}))],2),e("base-checkbox",{attrs:{size:"medium"},model:{value:s.options.localBusiness.locations.general.useCustomSlug,callback:function(t){s.$set(s.options.localBusiness.locations.general,"useCustomSlug",t)},expression:"options.localBusiness.locations.general.useCustomSlug"}},[s._v(" "+s._s(s.strings.useCustomSlug)+" ")]),s.options.localBusiness.locations.general.useCustomSlug?e("base-input",{staticClass:"custom-slug",class:{"aioseo-error":!s.validCustomSlug},attrs:{spellcheck:!1},on:{input:function(t){return s.validateCustomSlug(t)}},model:{value:s.options.localBusiness.locations.general.customSlug,callback:function(t){s.$set(s.options.localBusiness.locations.general,"customSlug",t)},expression:"options.localBusiness.locations.general.customSlug"}}):s._e(),s.options.localBusiness.locations.general.useCustomSlug&&!s.validCustomSlug?e("div",{staticClass:"aioseo-description aioseo-error"},[s._v(" "+s._s(s.strings.invalidCustomSlug)+" ")]):s._e()]},proxy:!0}],null,!1,4281210992)}),e("core-settings-row",{staticClass:"location-category-permalink",attrs:{name:s.strings.locationsCategoryPermalink},scopedSlots:s._u([{key:"content",fn:function(){return[e("div",{staticClass:"location-permalink-preview location-category-permalink-preview"},[e("span",{staticClass:"baseurl"},[s._v(s._s(s.$aioseo.urls.mainSiteUrl)+"/")]),s._l(s.$aioseo.localBusiness.taxonomyPermalinkStructure,(function(t,o){return e("span",{key:o,class:"{slug}"==t?"slug":""},[s._v(s._s("{slug}"==t?s.currentTaxonomySlug:t))])}))],2),e("base-checkbox",{attrs:{size:"medium"},model:{value:s.options.localBusiness.locations.general.useCustomCategorySlug,callback:function(t){s.$set(s.options.localBusiness.locations.general,"useCustomCategorySlug",t)},expression:"options.localBusiness.locations.general.useCustomCategorySlug"}},[s._v(" "+s._s(s.strings.useCustomCategorySlug)+" ")]),s.options.localBusiness.locations.general.useCustomCategorySlug?e("base-input",{staticClass:"custom-slug",class:{"aioseo-error":!s.validCustomCategorySlug},attrs:{spellcheck:!1},on:{input:function(t){return s.validateCustomCategorySlug(t)}},model:{value:s.options.localBusiness.locations.general.customCategorySlug,callback:function(t){s.$set(s.options.localBusiness.locations.general,"customCategorySlug",t)},expression:"options.localBusiness.locations.general.customCategorySlug"}}):s._e(),s.options.localBusiness.locations.general.useCustomCategorySlug&&!s.validCustomCategorySlug?e("div",{staticClass:"aioseo-description aioseo-error"},[s._v(" "+s._s(s.strings.invalidCustomSlug)+" ")]):s._e()]},proxy:!0}],null,!1,681061009)}),e("core-settings-row",{staticClass:"location-enhanced-search",attrs:{name:s.strings.enhancedSearch},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"enhancedSearch",disabled:!s.$aioseo.localBusiness.enhancedSearchTest,options:[{label:s.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:s.options.localBusiness.locations.general.enhancedSearch,callback:function(t){s.$set(s.options.localBusiness.locations.general,"enhancedSearch",t)},expression:"options.localBusiness.locations.general.enhancedSearch"}}),s.$aioseo.localBusiness.enhancedSearchTest?s._e():e("div",{staticClass:"aioseo-description",domProps:{innerHTML:s._s(s.strings.enhancedSearchError)}}),e("div",{staticClass:"aioseo-description"},[s._v(s._s(s.strings.enhancedSearchDesc))])]},proxy:!0}],null,!1,4125583926)}),s.options.localBusiness.locations.general.enhancedSearch?e("core-settings-row",{staticClass:"location-enhanced-search",attrs:{name:s.strings.enhancedSearchExcerpt},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"enhancedSearchExcerpt",options:[{label:s.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:s.options.localBusiness.locations.general.enhancedSearchExcerpt,callback:function(t){s.$set(s.options.localBusiness.locations.general,"enhancedSearchExcerpt",t)},expression:"options.localBusiness.locations.general.enhancedSearchExcerpt"}}),e("div",{staticClass:"aioseo-description"},[s._v(s._s(s.strings.enhancedSearchExcerptDesc))])]},proxy:!0}],null,!1,1695670279)}):s._e(),e("core-settings-row",{staticClass:"location-admin-labels",attrs:{name:s.strings.customAdminLabels},scopedSlots:s._u([{key:"content",fn:function(){return[e("p",{staticClass:"admin-labels-description"},[s._v(s._s(s.strings.customAdminLabelsDesc))]),e("div",{staticClass:"aioseo-columns"},[e("div",{staticClass:"aioseo-col col-xs-12 col-md-6 text-xs-left"},[e("span",{staticClass:"label-description"},[s._v(s._s(s.strings.singleLabel))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:s.options.localBusiness.locations.general.singleLabel,callback:function(t){s.$set(s.options.localBusiness.locations.general,"singleLabel",t)},expression:"options.localBusiness.locations.general.singleLabel"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 col-md-6 text-xs-left"},[e("span",{staticClass:"label-description"},[s._v(s._s(s.strings.pluralLabel))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:s.options.localBusiness.locations.general.pluralLabel,callback:function(t){s.$set(s.options.localBusiness.locations.general,"pluralLabel",t)},expression:"options.localBusiness.locations.general.pluralLabel"}})],1)])]},proxy:!0}],null,!1,4277414536)})],1):s._e()],1)},n=[],i=(e("4de4"),e("b0c0"),e("ac1f"),e("5319"),e("5530")),a=e("2f62"),l={data:function(){return{strings:{advancedLocationsSettings:this.$t.__("Advanced Locations Settings",this.$td),locationsPermalink:this.$t.__("Locations Permalink",this.$td),useCustomSlug:this.$t.__("Use custom slug",this.$td),invalidCustomSlug:this.$t.__("Slug is empty or is already taken. Please enter a different one.",this.$td),locationsCategoryPermalink:this.$t.__("Locations Category Permalink",this.$td),useCustomCategorySlug:this.$t.__("Use custom category slug",this.$td),enhancedSearch:this.$t.__("Enhanced Search",this.$td),enhancedSearchDesc:this.$t.__("Include business locations in site-wide search results. Users searching for street name, zip code or city will now also get your business location(s) in their search results.",this.$td),enhancedSearchError:this.$t.sprintf(this.$t.__("Enhanced Search cannot be enabled on your website because there is a search query conflict. To learn more about this, %1$sclick here%2$s.",this.$td),'<a href="'.concat(this.$links.getDocUrl("localSeoSearchQueryConflict"),'" target="_blank">'),"</a>"),enhancedSearchExcerpt:this.$t.__("Enhanced Search - Excerpt",this.$td),enhancedSearchExcerptDesc:this.$t.__("Shows the location address appended to the search result.",this.$td),customAdminLabels:this.$t.__("Custom Admin Labels",this.$td),customAdminLabelsDesc:this.$t.__("With multiple locations, you will have a new menu item in your admin sidebar. By default, this menu item is labeled using the plural term of locations with each single item being called a location. If you like, you may enter custom labels to better match your business.",this.$td),singleLabel:this.$t.__("Single label",this.$td),pluralLabel:this.$t.__("Plural label",this.$td)},validCustomSlug:!0,validCustomCategorySlug:!0}},computed:Object(i["a"])(Object(i["a"])({},Object(a["e"])(["options"])),{},{currentPostTypeSlug:function(){return this.options.localBusiness.locations.general.useCustomSlug&&this.options.localBusiness.locations.general.customSlug?this.options.localBusiness.locations.general.customSlug:this.$aioseo.localBusiness.postTypeDefaultSlug},currentTaxonomySlug:function(){return this.options.localBusiness.locations.general.useCustomCategorySlug&&this.options.localBusiness.locations.general.customCategorySlug?this.options.localBusiness.locations.general.customCategorySlug:this.$aioseo.localBusiness.taxonomyDefaultSlug}}),methods:{validateCustomSlug:function(s){var t=this;this.validCustomSlug=!0,s=s.replace(/^\/+/,"").replace(/\/+$/,"").replace(/\s+/g,"-"),this.options.localBusiness.locations.general.customSlug=s,(0>=s.length||0<this.$aioseo.postData.postTypes.filter((function(e){return e.name!==t.$aioseo.localBusiness.postTypeName&&e.slug===s})).length)&&(this.validCustomSlug=!1)},validateCustomCategorySlug:function(s){var t=this;this.validCustomCategorySlug=!0,s=s.replace(/^\/+/g,"").replace(/\/+$/g,"").replace(/\s+/g,"-"),this.options.localBusiness.locations.general.customCategorySlug=s,(0>=s.length||0<this.$aioseo.postData.taxonomies.filter((function(e){return e.name!==t.$aioseo.localBusiness.taxonomyName&&e.slug===s})).length)&&(this.validCustomCategorySlug=!1)}}},c=l,r=e("2877"),u=Object(r["a"])(c,o,n,!1,null,null,null);t["default"]=u.exports}}]);