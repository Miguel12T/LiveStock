(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Fallecida_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      becerros: [],
      novillas: [],
      vacas: [],
      listarTablas: 1,
      pagination: {
        page: 1,
        per_page: 3
      },
      paginas: []
    };
  },
  methods: {
    listarBecerros: function listarBecerros() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/fallecidas', {
                  params: _this.pagination
                });

              case 2:
                res = _context.sent;
                _this.becerros = res.data[0];

                _this.listarPaginasBecerros();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    listarNovillas: function listarNovillas() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('api/fallecidas');

              case 2:
                res = _context2.sent;
                _this2.novillas = res.data[1];

                _this2.listarPaginasNovillas();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    listarVacas: function listarVacas() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get('api/fallecidas');

              case 2:
                res = _context3.sent;
                _this3.vacas = res.data[2];

                _this3.listarPaginasVacas();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    listarPaginasBecerros: function listarPaginasBecerros() {
      var n = 2;
      var arrayN = [];
      var ini = this.pagination.page - 2;

      if (ini < 1) {
        ini = 1;
      }

      var fin = this.pagination.page + 2;

      if (fin > this.becerros.last_page) {
        fin = this.becerros.last_page;
      }

      for (var i = ini; i <= fin; i++) {
        arrayN.push(i);
      }

      this.paginas = arrayN;
    },
    listarPaginasNovillas: function listarPaginasNovillas() {
      var n = 2;
      var arrayN = [];
      var ini = this.pagination.page - 2;

      if (ini < 1) {
        ini = 1;
      }

      var fin = this.pagination.page + 2;

      if (fin > this.novillas.last_page) {
        fin = this.novillas.last_page;
      }

      for (var i = ini; i <= fin; i++) {
        arrayN.push(i);
      }

      this.paginas = arrayN;
    },
    listarPaginasVacas: function listarPaginasVacas() {
      var n = 2;
      var arrayN = [];
      var ini = this.pagination.page - 2;

      if (ini < 1) {
        ini = 1;
      }

      var fin = this.pagination.page + 2;

      if (fin > this.vacas.last_page) {
        fin = this.vacas.last_page;
      }

      for (var i = ini; i <= fin; i++) {
        arrayN.push(i);
      }

      this.paginas = arrayN;
    }
  },
  created: function created() {
    this.listarBecerros();
    this.listarNovillas();
    this.listarVacas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=template&id=0d5c0652":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=template&id=0d5c0652 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container",
  id: "label"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
  "class": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active"
}, "Sección de Fallecidos")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "col-2 md-1",
  id: "listarTablas"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "1"
}, "Becerros", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "2"
}, "Novillas", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "Vacas", -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_4, _hoisted_5, _hoisted_6];
var _hoisted_8 = {
  key: 0,
  "class": "card"
};
var _hoisted_9 = {
  "class": "col-2 md-1",
  id: "filas"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "3 Filas", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "5"
}, "5 Filas", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "10"
}, "10 Filas", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "25"
}, "25 Filas", -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13];
var _hoisted_15 = {
  "class": "card-body"
};
var _hoisted_16 = {
  "class": "table table-dark table-hover",
  id: "razas"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "N°"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Imagen"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Raza"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Genero"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Identificación"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Fecha de Nacimiento"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Tipo")])], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "text-center",
  scope: "row"
};
var _hoisted_19 = {
  id: "centrador",
  "class": "text-center"
};
var _hoisted_20 = ["src"];
var _hoisted_21 = {
  "class": "text-center"
};
var _hoisted_22 = {
  "class": "text-center"
};
var _hoisted_23 = {
  "class": "text-center"
};
var _hoisted_24 = {
  "class": "text-center"
};
var _hoisted_25 = {
  "class": "text-center"
};
var _hoisted_26 = {
  "class": "card-body"
};
var _hoisted_27 = {
  "class": "col-7 md-2",
  id: "mensajeRegistros"
};
var _hoisted_28 = {
  id: "paginador"
};
var _hoisted_29 = {
  "class": "pagination"
};
var _hoisted_30 = ["onClick"];
var _hoisted_31 = {
  key: 1,
  "class": "card"
};
var _hoisted_32 = {
  "class": "col-2 md-1",
  id: "filas"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "3 Filas", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "5"
}, "5 Filas", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "10"
}, "10 Filas", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "25"
}, "25 Filas", -1
/* HOISTED */
);

var _hoisted_37 = [_hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36];
var _hoisted_38 = {
  "class": "card-body"
};
var _hoisted_39 = {
  "class": "table table-dark table-hover",
  id: "razas"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "N°"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Imagen"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Raza"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Genero"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Identificación"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Tipo")])], -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "text-center",
  scope: "row"
};
var _hoisted_42 = {
  id: "centrador",
  "class": "text-center"
};
var _hoisted_43 = ["src"];
var _hoisted_44 = {
  "class": "text-center"
};
var _hoisted_45 = {
  "class": "text-center"
};
var _hoisted_46 = {
  "class": "text-center"
};
var _hoisted_47 = {
  "class": "text-center"
};
var _hoisted_48 = {
  "class": "card-body"
};
var _hoisted_49 = {
  "class": "col-7 md-2",
  id: "mensajeRegistros"
};
var _hoisted_50 = {
  id: "paginador"
};
var _hoisted_51 = {
  "class": "pagination"
};
var _hoisted_52 = ["onClick"];
var _hoisted_53 = {
  key: 2,
  "class": "card"
};
var _hoisted_54 = {
  "class": "col-2 md-1",
  id: "filas"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "3 Filas", -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "5"
}, "5 Filas", -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "10"
}, "10 Filas", -1
/* HOISTED */
);

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "25"
}, "25 Filas", -1
/* HOISTED */
);

var _hoisted_59 = [_hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58];
var _hoisted_60 = {
  "class": "card-body"
};
var _hoisted_61 = {
  "class": "table table-dark table-hover",
  id: "razas"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "N°"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Imagen"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Raza"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Genero"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Identificación"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, "Tipo")])], -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "text-center",
  scope: "row"
};
var _hoisted_64 = {
  id: "centrador",
  "class": "text-center"
};
var _hoisted_65 = ["src"];
var _hoisted_66 = {
  "class": "text-center"
};
var _hoisted_67 = {
  "class": "text-center"
};
var _hoisted_68 = {
  "class": "text-center"
};
var _hoisted_69 = {
  "class": "text-center"
};
var _hoisted_70 = {
  "class": "card-body"
};
var _hoisted_71 = {
  "class": "col-7 md-2",
  id: "mensajeRegistros"
};
var _hoisted_72 = {
  id: "paginador"
};
var _hoisted_73 = {
  "class": "pagination"
};
var _hoisted_74 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.listarTablas = $event;
    }),
    placeholder: "3 Filas"
  }, _hoisted_7, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.listarTablas]])]), this.listarTablas == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.pagination.per_page = $event;
    }),
    onChange: _cache[2] || (_cache[2] = function ($event) {
      $options.listarBecerros();
    }),
    placeholder: "3 Filas"
  }, _hoisted_14, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.pagination.per_page]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.becerros.data, function (becerro, item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: becerro.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item += 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      id: "imagenR",
      src: '/imagen/' + becerro.imagen,
      "class": "img-responsive"
    }, null, 8
    /* PROPS */
    , _hoisted_20)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(becerro.raza), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(becerro.genero), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(becerro.nombre), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(becerro.fecha_nacimiento), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(becerro.tipo), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, " Mostrando registros del " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.becerros.from) + " al " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.becerros.to) + " de un total de " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.becerros.total) + " registros ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: $data.pagination.page == 1
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    tabindex: "-1",
    "aria-disabled": "true",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      $data.pagination.page--;
      $options.listarBecerros();
    })
  }, "Anterior")], 2
  /* CLASS */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.paginas, function (n) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        active: $data.pagination.page == n
      }]),
      key: n
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "page-link",
      onClick: function onClick($event) {
        $data.pagination.page = n;
        $options.listarBecerros();
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 9
    /* TEXT, PROPS */
    , _hoisted_30)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: $data.pagination.page == $data.becerros.last_page
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      $data.pagination.page++;
      $options.listarBecerros();
    })
  }, "Siguiente")], 2
  /* CLASS */
  )])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), this.listarTablas == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.pagination.per_page = $event;
    }),
    onChange: _cache[6] || (_cache[6] = function ($event) {
      $options.listarNovillas();
    }),
    placeholder: "3 Filas"
  }, _hoisted_37, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.pagination.per_page]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.novillas.data, function (novilla, item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: novilla.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item += 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      id: "imagenR",
      src: '/imagen/' + novilla.imagen,
      "class": "img-responsive"
    }, null, 8
    /* PROPS */
    , _hoisted_43)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(novilla.raza), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(novilla.genero), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(novilla.nombre), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(novilla.tipo), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, " Mostrando registros del " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.novillas.from) + " al " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.novillas.to) + " de un total de " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.novillas.total) + " registros ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: $data.pagination.page == 1
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    tabindex: "-1",
    "aria-disabled": "true",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      $data.pagination.page--;
      $options.listarNovillas();
    })
  }, "Anterior")], 2
  /* CLASS */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.paginas, function (n) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        active: $data.pagination.page == n
      }]),
      key: n
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "page-link",
      onClick: function onClick($event) {
        $data.pagination.page = n;
        $options.listarNovillas();
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 9
    /* TEXT, PROPS */
    , _hoisted_52)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: $data.pagination.page == $data.novillas.last_page
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      $data.pagination.page++;
      $options.listarNovillas();
    })
  }, "Siguiente")], 2
  /* CLASS */
  )])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), this.listarTablas == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.pagination.per_page = $event;
    }),
    onChange: _cache[10] || (_cache[10] = function ($event) {
      $options.listarVacas();
    }),
    placeholder: "3 Filas"
  }, _hoisted_59, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.pagination.per_page]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.vacas.data, function (vaca, item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: vaca.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item += 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      id: "imagenR",
      src: '/imagen/' + vaca.imagen,
      "class": "img-responsive"
    }, null, 8
    /* PROPS */
    , _hoisted_65)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(vaca.raza), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(vaca.genero), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(vaca.nombre), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(vaca.tipo), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, " Mostrando registros del " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.vacas.from) + " al " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.vacas.to) + " de un total de " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.vacas.total) + " registros ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: $data.pagination.page == 1
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    tabindex: "-1",
    "aria-disabled": "true",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      $data.pagination.page--;
      $options.listarVacas();
    })
  }, "Anterior")], 2
  /* CLASS */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.paginas, function (n) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        active: $data.pagination.page == n
      }]),
      key: n
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "page-link",
      onClick: function onClick($event) {
        $data.pagination.page = n;
        $options.listarVacas();
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 9
    /* TEXT, PROPS */
    , _hoisted_74)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
      disabled: $data.pagination.page == $data.vacas.last_page
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      $data.pagination.page++;
      $options.listarVacas();
    })
  }, "Siguiente")], 2
  /* CLASS */
  )])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.mostrar{\r\n    display: list-item;\r\n    opacity: 1;\r\n    background: rgba(75, 56, 143, 0.705);\n}\n#label{\r\n    padding-top: 20px;\n}\nbody{\r\n    font-family: Monaco, Courier New, Courier, monospace;\r\n    font-size: 16px;\n}\nol{\r\n    width: 1000px;\r\n    float: center;\r\n    margin-left: 50px;\n}\n.breadcrumb {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 0.75rem 1rem;\r\n    margin-bottom: 1rem;\r\n    list-style: none;\r\n    background-color: #e9ecef;\r\n    border-radius: 0.25rem;\n}\n#filas{\r\n    margin-top: 1.3em;\r\n    margin-left: 19px;\n}\n#listarTablas{\r\n    margin-top: 1.3em;\r\n    margin-left: 49px;\r\n    width: 230px;\r\n    height: 45px;\r\n    font-size: 16px;\n}\n#mensajeRegistros{\r\n    margin-top: -2em;\n}\n#paginador{\r\n    margin-left: 780px;\r\n    margin-top: -3.5em;\n}\nimg{\r\n    padding-top: 9px;\r\n    width: 100px;\r\n    height: 90px;\r\n    margin: 15px;\r\n    display: block;\n}\n#centrador{\r\n    width: 180px;\r\n    height: 50px;\r\n    padding: 0px;\n}\n#imagenR{\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 0px;\r\n    margin: 2%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\n}\n#centrador img{\r\n    transition: all 300ms;\r\n    position: relative;\n}\n#centrador #imagenR:hover{\r\n    transform: scale(5.5);\n}\n#imagenR:hover{\r\n    border-radius:50%;\r\n    -webkit-border-radius:50%;\r\n    box-shadow: 0px 0px 30px 5px #1a1817;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Fallecida_vue_vue_type_style_index_0_id_0d5c0652_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Fallecida_vue_vue_type_style_index_0_id_0d5c0652_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Fallecida_vue_vue_type_style_index_0_id_0d5c0652_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Fallecida.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Fallecida.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fallecida_vue_vue_type_template_id_0d5c0652__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fallecida.vue?vue&type=template&id=0d5c0652 */ "./resources/js/components/Fallecida.vue?vue&type=template&id=0d5c0652");
/* harmony import */ var _Fallecida_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fallecida.vue?vue&type=script&lang=js */ "./resources/js/components/Fallecida.vue?vue&type=script&lang=js");
/* harmony import */ var _Fallecida_vue_vue_type_style_index_0_id_0d5c0652_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css */ "./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css");
/* harmony import */ var C_Users_acer_Ganado_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_acer_Ganado_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Fallecida_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Fallecida_vue_vue_type_template_id_0d5c0652__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Fallecida.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Fallecida.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Fallecida.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Fallecida_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Fallecida_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Fallecida.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Fallecida.vue?vue&type=template&id=0d5c0652":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Fallecida.vue?vue&type=template&id=0d5c0652 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Fallecida_vue_vue_type_template_id_0d5c0652__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Fallecida_vue_vue_type_template_id_0d5c0652__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Fallecida.vue?vue&type=template&id=0d5c0652 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=template&id=0d5c0652");


/***/ }),

/***/ "./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Fallecida_vue_vue_type_style_index_0_id_0d5c0652_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Fallecida.vue?vue&type=style&index=0&id=0d5c0652&lang=css");


/***/ })

}]);