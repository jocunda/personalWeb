"use strict";
(self["webpackChunkpersonalweb"] = self["webpackChunkpersonalweb"] || []).push([[257],{

/***/ 4679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/AppBox/styles.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"boxContainer":"ixGAUA9EHjcSPfqVnOYN","aboutText":"AFtKkYMsI8rK81kVBGHu","cloudContainer":"UYduKzeGqHIcLA6jbI9T","cloud1":"m17TSv84r_95QonD19oa","cloud-transit":"O5Pp5vJvaXR5EsyYoYMR","cloud2":"ePiLZKO4XYyDK45213Y8","cloud-transit-2":"ruwjvFoaCU7FnMMZ01SD","cloud3":"IMtlrGF0i0GTJ4eGTNAV","cloud4":"ONUfQv_GYx89ErtqnCpU"});
// EXTERNAL MODULE: ./node_modules/@fluentui/react-image/lib/components/Image/Image.js + 3 modules
var Image = __webpack_require__(1436);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-divider/lib/components/Divider/Divider.js + 3 modules
var Divider = __webpack_require__(7222);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-text/lib/components/presets/Title2/Title2.js + 2 modules
var Title2 = __webpack_require__(5109);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-text/lib/components/Text/Text.js
var Text = __webpack_require__(2761);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-card/lib/components/CardFooter/CardFooter.js + 3 modules
var CardFooter = __webpack_require__(1258);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-tooltip/lib/components/Tooltip/Tooltip.js + 42 modules
var Tooltip = __webpack_require__(3780);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-button/lib/components/Button/Button.js + 8 modules
var Button = __webpack_require__(501);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-icons/lib/utils/bundleIcon.js + 1 modules
var bundleIcon = __webpack_require__(9626);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js + 2 modules
var chunk_0 = __webpack_require__(622);
;// CONCATENATED MODULE: ./src/images/mypic.jpg
var mypic_namespaceObject = __webpack_require__.p + "images/f2b68b94e1b5f47209d8.jpg";
;// CONCATENATED MODULE: ./src/images/icons8-mail-100.png
var icons8_mail_100_namespaceObject = __webpack_require__.p + "images/2c6d188fec84cf850c4b.png";
;// CONCATENATED MODULE: ./src/images/icons8-mail-100other.png
var icons8_mail_100other_namespaceObject = __webpack_require__.p + "images/510277aea1d72ab661c1.png";
;// CONCATENATED MODULE: ./src/images/icons8-linkedin-100.png
var icons8_linkedin_100_namespaceObject = __webpack_require__.p + "images/043ac0cc1b3ef6f4b0bb.png";
;// CONCATENATED MODULE: ./src/images/icons8-linkedin-100other.png
var icons8_linkedin_100other_namespaceObject = __webpack_require__.p + "images/2eb885fcbad9337a7bc7.png";
;// CONCATENATED MODULE: ./src/images/icons8-github-100.png
var icons8_github_100_namespaceObject = __webpack_require__.p + "images/ee1b1a4d0f7fe306f4c2.png";
;// CONCATENATED MODULE: ./src/images/icons8-github-100other.png
var icons8_github_100other_namespaceObject = __webpack_require__.p + "images/39656458425fc833b96e.png";
;// CONCATENATED MODULE: ./src/images/cloud1.png
var cloud1_namespaceObject = __webpack_require__.p + "images/45183e616912cd3dc899.png";
;// CONCATENATED MODULE: ./src/images/cloud2.png
var cloud2_namespaceObject = __webpack_require__.p + "images/02450655e1508635345c.png";
;// CONCATENATED MODULE: ./src/images/cloud3.png
var cloud3_namespaceObject = __webpack_require__.p + "images/e631af00f6b012153697.png";
;// CONCATENATED MODULE: ./src/images/cloud4.png
var cloud4_namespaceObject = __webpack_require__.p + "images/1061053f536a14f76549.png";
;// CONCATENATED MODULE: ./src/components/AppHoverImage/Component.tsx

//styles


function AppHoverImage(_a) {
    var src = _a.src, alt = _a.alt, url = _a.url;
    var _b = (0,react.useState)(false), hovered = _b[0], setHovered = _b[1];
    var handleMouseEnter = function () {
        setHovered(true);
    };
    var handleMouseLeave = function () {
        setHovered(false);
    };
    var handleClick = function () {
        if (url) {
            window.open(url, '_blank'); // Open the specified URL in a new tab
        }
    };
    return react.createElement(react.Fragment, null,
        react.createElement(Image/* Image */.E, { alt: alt, src: hovered ? src.hovered : src.normal, height: 50, width: 50, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onClick: handleClick, style: { cursor: 'pointer' } }));
}

;// CONCATENATED MODULE: ./src/components/AppBox/Component.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

//styles




//assets











//hooks

var Apps24Icon = (0,bundleIcon/* default */.Z)(chunk_0/* Apps24Filled */.vXw, chunk_0/* Apps24Regular */.bND);
function AppBox(props) {
    var cloudImages = [
        { src: cloud1_namespaceObject, height: 80, width: 150 },
        { src: cloud2_namespaceObject, height: 200, width: 600 },
        { src: cloud3_namespaceObject, height: 90, width: 140 },
        { src: cloud4_namespaceObject, height: 100, width: 190 },
    ];
    return react.createElement(react.Fragment, null,
        react.createElement("div", { className: styles_module.boxContainer },
            react.createElement(Image/* Image */.E, { alt: "My avatar", shape: "circular", src: mypic_namespaceObject, height: 150, width: 150 }),
            react.createElement(Divider/* Divider */.i, { inset: true }),
            react.createElement(Title2/* Title2 */.R, { align: "center" }, "Silvia Jocunda"),
            react.createElement(Text/* Text */.x, { size: 500, font: "monospace" }, "Engineer"),
            react.createElement(Text/* Text */.x, { className: styles_module.aboutText, align: "start" }, "Self-taught programming languages for HTML, CSS, Javascript and Typescript. I have a high interest in front-end web development and design."),
            react.createElement(Divider/* Divider */.i, { inset: true }),
            react.createElement(CardFooter/* CardFooter */.e, null,
                react.createElement(Tooltip/* Tooltip */.u, __assign({ content: "silviawanshan88@gmail.com", relationship: "label" }, props),
                    react.createElement("div", null,
                        react.createElement(AppHoverImage, { src: { normal: icons8_mail_100_namespaceObject, hovered: icons8_mail_100other_namespaceObject }, url: "mailto:silviawanshan88@gmail.com", alt: "Mail icon" }))),
                react.createElement(AppHoverImage, { src: { normal: icons8_linkedin_100_namespaceObject, hovered: icons8_linkedin_100other_namespaceObject }, url: "https://linkedin.com/in/silviajocunda", alt: "Link icon" }),
                react.createElement(AppHoverImage, { src: { normal: icons8_github_100_namespaceObject, hovered: icons8_github_100other_namespaceObject }, url: "https://github.com/jocunda", alt: "Github icon" })),
            react.createElement(Button/* Button */.z, { icon: react.createElement(Apps24Icon, null) }, "Project")),
        react.createElement("div", { className: styles_module.cloudContainer }, cloudImages.map(function (cloud, index) { return (react.createElement(Image/* Image */.E, { key: "cloud-".concat(index), alt: "Cloud", src: cloud.src, height: cloud.height, width: cloud.width, className: styles_module["cloud".concat(index + 1)] })); })));
}

;// CONCATENATED MODULE: ./src/App.tsx



var App = function () {
    return (react.createElement(react.Fragment, null,
        react.createElement(AppBox, null)));
};
/* harmony default export */ var src_App = (App);

// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js + 7 modules
var FluentProvider = __webpack_require__(7169);
// EXTERNAL MODULE: ./node_modules/@fluentui/tokens/lib/themes/teams/lightTheme.js + 14 modules
var lightTheme = __webpack_require__(448);
;// CONCATENATED MODULE: ./src/bootstrap.tsx




var domNode = document.getElementById('root');
var root = (0,client/* createRoot */.s)(domNode);
root.render(react.createElement(react.StrictMode, null,
    react.createElement(FluentProvider/* FluentProvider */.r, { theme: lightTheme/* teamsLightTheme */.Y },
        react.createElement(src_App, null))));


/***/ })

}]);
//# sourceMappingURL=257.js.map