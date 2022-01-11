!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('vue')))
    : 'function' == typeof define && define.amd
    ? define(['vue'], t)
    : 'object' == typeof exports
    ? (exports.VueSelect = t(require('vue')))
    : (e.VueSelect = t(e.vue));
})('undefined' != typeof self ? self : this, function (e) {
  return (function (e) {
    var t = {};
    function o(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
    }
    return (
      (o.m = e),
      (o.c = t),
      (o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (o.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (o.t = function (e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (o.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            o.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return o.d(t, 'a', t), t;
      }),
      (o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (o.p = '/'),
      o((o.s = 10))
    );
  })([
    function (t, o) {
      t.exports = e;
    },
    function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = (e, t) => {
          for (const [o, n] of t) e[o] = n;
          return e;
        });
    },
    function (e, t, o) {
      var n = o(6),
        i = o(7),
        r = o(8);
      e.exports = function (e) {
        return n(e) || i(e) || r();
      };
    },
    function (e, t) {
      function o(t) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? (e.exports = o =
                function (e) {
                  return typeof e;
                })
            : (e.exports = o =
                function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          o(t)
        );
      }
      e.exports = o;
    },
    function (e, t) {
      e.exports = function (e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      };
    },
    function (e, t, o) {},
    function (e, t) {
      e.exports = function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, o = new Array(e.length); t < e.length; t++)
            o[t] = e[t];
          return o;
        }
      };
    },
    function (e, t) {
      e.exports = function (e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      };
    },
    function (e, t) {
      e.exports = function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      };
    },
    function (e, t, o) {
      'use strict';
      o(5);
    },
    function (e, t, o) {
      'use strict';
      o.r(t);
      var n = o(0);
      const i = ['dir'],
        r = ['id', 'aria-expanded', 'aria-owns'],
        s = { ref: 'selectedOptions', class: 'vs__selected-options' },
        l = ['disabled', 'title', 'aria-label', 'onClick'],
        c = { ref: 'actions', class: 'vs__actions' },
        a = ['disabled'],
        u = { class: 'vs__spinner' },
        p = ['id'],
        d = ['id', 'aria-selected', 'onMouseover', 'onClick'],
        h = { key: 0, class: 'vs__no-options' },
        f = Object(n.createTextVNode)('Sorry, no matching options.'),
        b = ['id'];
      var O = o(2),
        m = o.n(O),
        y = o(3),
        g = o.n(y),
        v = o(4),
        j = o.n(v),
        w = {
          props: { autoscroll: { type: Boolean, default: !0 } },
          watch: {
            typeAheadPointer: function () {
              this.autoscroll && this.maybeAdjustScroll();
            },
            open: function (e) {
              var t = this;
              this.autoscroll &&
                e &&
                this.$nextTick(function () {
                  return t.maybeAdjustScroll();
                });
            },
          },
          methods: {
            maybeAdjustScroll: function () {
              var e,
                t =
                  (null === (e = this.$refs.dropdownMenu) || void 0 === e
                    ? void 0
                    : e.children[this.typeAheadPointer]) || !1;
              if (t) {
                var o = this.getDropdownViewport(),
                  n = t.getBoundingClientRect(),
                  i = n.top,
                  r = n.bottom,
                  s = n.height;
                if (i < o.top)
                  return (this.$refs.dropdownMenu.scrollTop = t.offsetTop);
                if (r > o.bottom)
                  return (this.$refs.dropdownMenu.scrollTop =
                    t.offsetTop - (o.height - s));
              }
            },
            getDropdownViewport: function () {
              return this.$refs.dropdownMenu
                ? this.$refs.dropdownMenu.getBoundingClientRect()
                : { height: 0, top: 0, bottom: 0 };
            },
          },
        },
        S = {
          data: function () {
            return { typeAheadPointer: -1 };
          },
          watch: {
            filteredOptions: function () {
              for (var e = 0; e < this.filteredOptions.length; e++)
                if (this.selectable(this.filteredOptions[e])) {
                  this.typeAheadPointer = e;
                  break;
                }
            },
          },
          methods: {
            typeAheadUp: function () {
              for (var e = this.typeAheadPointer - 1; e >= 0; e--)
                if (this.selectable(this.filteredOptions[e])) {
                  this.typeAheadPointer = e;
                  break;
                }
            },
            typeAheadDown: function () {
              for (
                var e = this.typeAheadPointer + 1;
                e < this.filteredOptions.length;
                e++
              )
                if (this.selectable(this.filteredOptions[e])) {
                  this.typeAheadPointer = e;
                  break;
                }
            },
            typeAheadSelect: function () {
              var e = this.filteredOptions[this.typeAheadPointer];
              e && this.select(e);
            },
          },
        },
        _ = {
          props: { loading: { type: Boolean, default: !1 } },
          data: function () {
            return { mutableLoading: !1 };
          },
          watch: {
            search: function () {
              this.$emit('search', this.search, this.toggleLoading);
            },
            loading: function (e) {
              this.mutableLoading = e;
            },
          },
          methods: {
            toggleLoading: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              return (this.mutableLoading =
                null == e ? !this.mutableLoading : e);
            },
          },
        };
      const B = {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '10',
          height: '10',
        },
        P = [
          Object(n.createElementVNode)(
            'path',
            {
              d: 'M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z',
            },
            null,
            -1
          ),
        ];
      var V = o(1),
        k = o.n(V);
      const x = {};
      var C = k()(x, [
        [
          'render',
          function (e, t) {
            return (
              Object(n.openBlock)(), Object(n.createElementBlock)('svg', B, P)
            );
          },
        ],
      ]);
      const $ = {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '14',
          height: '10',
        },
        D = [
          Object(n.createElementVNode)(
            'path',
            {
              d: 'M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z',
            },
            null,
            -1
          ),
        ];
      const E = {};
      var A = {
          Deselect: C,
          OpenIndicator: k()(E, [
            [
              'render',
              function (e, t) {
                return (
                  Object(n.openBlock)(),
                  Object(n.createElementBlock)('svg', $, D)
                );
              },
            ],
          ]),
        },
        L = {
          mounted: function (e, t) {
            var o = t.instance;
            if (o.appendToBody) {
              var n = o.$refs.toggle.getBoundingClientRect(),
                i = n.height,
                r = n.top,
                s = n.left,
                l = n.width,
                c = window.scrollX || window.pageXOffset,
                a = window.scrollY || window.pageYOffset;
              (e.unbindPosition = o.calculatePosition(e, o, {
                width: l + 'px',
                left: c + s + 'px',
                top: a + r + i + 'px',
              })),
                document.body.appendChild(e);
            }
          },
          unmounted: function (e, t) {
            t.instance.appendToBody &&
              (e.unbindPosition &&
                'function' == typeof e.unbindPosition &&
                e.unbindPosition(),
              e.parentNode && e.parentNode.removeChild(e));
          },
        };
      var T = function (e) {
          var t = {};
          return (
            Object.keys(e)
              .sort()
              .forEach(function (o) {
                t[o] = e[o];
              }),
            JSON.stringify(t)
          );
        },
        F = 0;
      var M = function () {
        return ++F;
      };
      function N(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(o), !0).forEach(function (t) {
                j()(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : N(Object(o)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(o, t)
                );
              });
        }
        return e;
      }
      var R = {
        components: z({}, A),
        directives: { appendToBody: L },
        mixins: [w, S, _],
        emits: [
          'open',
          'close',
          'update:modelValue',
          'search',
          'search:compositionstart',
          'search:compositionend',
          'search:keydown',
          'search:blur',
          'search:focus',
          'search:input',
          'option:created',
          'option:selecting',
          'option:selected',
          'option:deselecting',
          'option:deselected',
        ],
        props: {
          modelValue: {},
          components: {
            type: Object,
            default: function () {
              return {};
            },
          },
          options: {
            type: Array,
            default: function () {
              return [];
            },
          },
          disabled: { type: Boolean, default: !1 },
          clearable: { type: Boolean, default: !0 },
          deselectFromDropdown: { type: Boolean, default: !1 },
          searchable: { type: Boolean, default: !0 },
          multiple: { type: Boolean, default: !1 },
          placeholder: { type: String, default: '' },
          transition: { type: String, default: 'vs__fade' },
          clearSearchOnSelect: { type: Boolean, default: !0 },
          closeOnSelect: { type: Boolean, default: !0 },
          label: { type: String, default: 'label' },
          autocomplete: { type: String, default: 'off' },
          reduce: {
            type: Function,
            default: function (e) {
              return e;
            },
          },
          selectable: {
            type: Function,
            default: function (e) {
              return !0;
            },
          },
          getOptionLabel: {
            type: Function,
            default: function (e) {
              return 'object' === g()(e)
                ? e.hasOwnProperty(this.label)
                  ? e[this.label]
                  : console.warn(
                      '[vue-select warn]: Label key "option.'.concat(
                        this.label,
                        '" does not'
                      ) +
                        ' exist in options object '.concat(
                          JSON.stringify(e),
                          '.\n'
                        ) +
                        'https://vue-select.org/api/props.html#getoptionlabel'
                    )
                : e;
            },
          },
          getOptionKey: {
            type: Function,
            default: function (e) {
              if ('object' !== g()(e)) return e;
              try {
                return e.hasOwnProperty('id') ? e.id : T(e);
              } catch (t) {
                return console.warn(
                  "[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",
                  e,
                  t
                );
              }
            },
          },
          onTab: {
            type: Function,
            default: function () {
              this.selectOnTab && !this.isComposing && this.typeAheadSelect();
            },
          },
          taggable: { type: Boolean, default: !1 },
          tabindex: { type: Number, default: null },
          pushTags: { type: Boolean, default: !1 },
          filterable: { type: Boolean, default: !0 },
          filterBy: {
            type: Function,
            default: function (e, t, o) {
              return (
                (t || '').toLocaleLowerCase().indexOf(o.toLocaleLowerCase()) >
                -1
              );
            },
          },
          filter: {
            type: Function,
            default: function (e, t) {
              var o = this;
              return e.filter(function (e) {
                var n = o.getOptionLabel(e);
                return (
                  'number' == typeof n && (n = n.toString()),
                  o.filterBy(e, n, t)
                );
              });
            },
          },
          createOption: {
            type: Function,
            default: function (e) {
              return 'object' === g()(this.optionList[0])
                ? j()({}, this.label, e)
                : e;
            },
          },
          resetOnOptionsChange: {
            default: !1,
            validator: function (e) {
              return ['function', 'boolean'].includes(g()(e));
            },
          },
          clearSearchOnBlur: {
            type: Function,
            default: function (e) {
              var t = e.clearSearchOnSelect,
                o = e.multiple;
              return t && !o;
            },
          },
          noDrop: { type: Boolean, default: !1 },
          inputId: { type: String },
          dir: { type: String, default: 'auto' },
          selectOnTab: { type: Boolean, default: !1 },
          selectOnKeyCodes: {
            type: Array,
            default: function () {
              return [13];
            },
          },
          searchInputQuerySelector: { type: String, default: '[type=search]' },
          mapKeydown: {
            type: Function,
            default: function (e, t) {
              return e;
            },
          },
          appendToBody: { type: Boolean, default: !1 },
          calculatePosition: {
            type: Function,
            default: function (e, t, o) {
              var n = o.width,
                i = o.top,
                r = o.left;
              (e.style.top = i), (e.style.left = r), (e.style.width = n);
            },
          },
          dropdownShouldOpen: {
            type: Function,
            default: function (e) {
              var t = e.noDrop,
                o = e.open,
                n = e.mutableLoading;
              return !t && o && !n;
            },
          },
          uid: {
            type: [String, Number],
            default: function () {
              return M();
            },
          },
        },
        data: function () {
          return {
            search: '',
            open: !1,
            isComposing: !1,
            pushedTags: [],
            _value: [],
            deselectButtons: [],
          };
        },
        computed: {
          isReducingValues: function () {
            return this.$props.reduce !== this.$options.props.reduce.default;
          },
          isTrackingValues: function () {
            return void 0 === this.modelValue || this.isReducingValues;
          },
          selectedValue: function () {
            var e = this.modelValue;
            return (
              this.isTrackingValues && (e = this.$data._value),
              e ? [].concat(e) : []
            );
          },
          optionList: function () {
            return this.options.concat(this.pushTags ? this.pushedTags : []);
          },
          searchEl: function () {
            return this.$slots.search
              ? this.$refs.selectedOptions.querySelector(
                  this.searchInputQuerySelector
                )
              : this.$refs.search;
          },
          scope: function () {
            var e = this,
              t = {
                search: this.search,
                loading: this.loading,
                searching: this.searching,
                filteredOptions: this.filteredOptions,
              };
            return {
              search: {
                attributes: z(
                  {
                    disabled: this.disabled,
                    placeholder: this.searchPlaceholder,
                    tabindex: this.tabindex,
                    readonly: !this.searchable,
                    id: this.inputId,
                    'aria-autocomplete': 'list',
                    'aria-labelledby': 'vs'.concat(this.uid, '__combobox'),
                    'aria-controls': 'vs'.concat(this.uid, '__listbox'),
                    ref: 'search',
                    type: 'search',
                    autocomplete: this.autocomplete,
                    value: this.search,
                  },
                  this.dropdownOpen &&
                    this.filteredOptions[this.typeAheadPointer]
                    ? {
                        'aria-activedescendant': 'vs'
                          .concat(this.uid, '__option-')
                          .concat(this.typeAheadPointer),
                      }
                    : {}
                ),
                events: {
                  compositionstart: function () {
                    return (e.isComposing = !0);
                  },
                  compositionend: function () {
                    return (e.isComposing = !1);
                  },
                  keydown: this.onSearchKeyDown,
                  blur: this.onSearchBlur,
                  focus: this.onSearchFocus,
                  input: function (t) {
                    return (e.search = t.target.value);
                  },
                },
              },
              spinner: { loading: this.mutableLoading },
              noOptions: {
                search: this.search,
                loading: this.mutableLoading,
                searching: this.searching,
              },
              openIndicator: {
                attributes: {
                  ref: 'openIndicator',
                  role: 'presentation',
                  class: 'vs__open-indicator',
                },
              },
              listHeader: t,
              listFooter: t,
              header: z({}, t, { deselect: this.deselect }),
              footer: z({}, t, { deselect: this.deselect }),
            };
          },
          childComponents: function () {
            return z({}, A, {}, this.components);
          },
          stateClasses: function () {
            return {
              'vs--open': this.dropdownOpen,
              'vs--single': !this.multiple,
              'vs--multiple': this.multiple,
              'vs--searching': this.searching && !this.noDrop,
              'vs--searchable': this.searchable && !this.noDrop,
              'vs--unsearchable': !this.searchable,
              'vs--loading': this.mutableLoading,
              'vs--disabled': this.disabled,
            };
          },
          searching: function () {
            return !!this.search;
          },
          dropdownOpen: function () {
            return this.dropdownShouldOpen(this);
          },
          searchPlaceholder: function () {
            return this.isValueEmpty && this.placeholder
              ? this.placeholder
              : void 0;
          },
          filteredOptions: function () {
            var e = [].concat(this.optionList);
            if (!this.filterable && !this.taggable) return e;
            var t = this.search.length ? this.filter(e, this.search, this) : e;
            if (this.taggable && this.search.length) {
              var o = this.createOption(this.search);
              this.optionExists(o) || t.unshift(o);
            }
            return t;
          },
          isValueEmpty: function () {
            return 0 === this.selectedValue.length;
          },
          showClearButton: function () {
            return (
              !this.multiple &&
              this.clearable &&
              !this.open &&
              !this.isValueEmpty
            );
          },
        },
        watch: {
          options: function (e, t) {
            var o = this;
            !this.taggable &&
              ('function' == typeof o.resetOnOptionsChange
                ? o.resetOnOptionsChange(e, t, o.selectedValue)
                : o.resetOnOptionsChange) &&
              this.clearSelection(),
              this.modelValue &&
                this.isTrackingValues &&
                this.setInternalValueFromOptions(this.modelValue);
          },
          modelValue: {
            immediate: !0,
            handler: function (e) {
              this.isTrackingValues && this.setInternalValueFromOptions(e);
            },
          },
          multiple: function () {
            this.clearSelection();
          },
          open: function (e) {
            this.$emit(e ? 'open' : 'close');
          },
        },
        created: function () {
          this.mutableLoading = this.loading;
        },
        methods: {
          setInternalValueFromOptions: function (e) {
            var t = this;
            Array.isArray(e)
              ? (this.$data._value = e.map(function (e) {
                  return t.findOptionFromReducedValue(e);
                }))
              : (this.$data._value = this.findOptionFromReducedValue(e));
          },
          select: function (e) {
            this.$emit('option:selecting', e),
              this.isOptionSelected(e)
                ? this.deselectFromDropdown &&
                  (this.clearable ||
                    (this.multiple && this.selectedValue.length > 1)) &&
                  this.deselect(e)
                : (this.taggable &&
                    !this.optionExists(e) &&
                    (this.$emit('option:created', e), this.pushTag(e)),
                  this.multiple && (e = this.selectedValue.concat(e)),
                  this.updateValue(e),
                  this.$emit('option:selected', e)),
              this.onAfterSelect(e);
          },
          deselect: function (e) {
            var t = this;
            this.$emit('option:deselecting', e),
              this.updateValue(
                this.selectedValue.filter(function (o) {
                  return !t.optionComparator(o, e);
                })
              ),
              this.$emit('option:deselected', e);
          },
          clearSelection: function () {
            this.updateValue(this.multiple ? [] : null);
          },
          onAfterSelect: function (e) {
            this.closeOnSelect &&
              ((this.open = !this.open), this.searchEl.blur()),
              this.clearSearchOnSelect && (this.search = '');
          },
          updateValue: function (e) {
            var t = this;
            void 0 === this.modelValue && (this.$data._value = e),
              null !== e &&
                (e = Array.isArray(e)
                  ? e.map(function (e) {
                      return t.reduce(e);
                    })
                  : this.reduce(e)),
              this.$emit('update:modelValue', e);
          },
          toggleDropdown: function (e) {
            var t = e.target !== this.searchEl;
            t && e.preventDefault();
            var o = [].concat(
              m()(this.deselectButtons || []),
              m()([this.$refs.clearButton] || !1)
            );
            void 0 === this.searchEl ||
            o.filter(Boolean).some(function (t) {
              return t.contains(e.target) || t === e.target;
            })
              ? e.preventDefault()
              : this.open && t
              ? this.searchEl.blur()
              : this.disabled || ((this.open = !0), this.searchEl.focus());
          },
          isOptionSelected: function (e) {
            var t = this;
            return this.selectedValue.some(function (o) {
              return t.optionComparator(o, e);
            });
          },
          isOptionDeselectable: function (e) {
            return this.isOptionSelected(e) && this.deselectFromDropdown;
          },
          optionComparator: function (e, t) {
            return this.getOptionKey(e) === this.getOptionKey(t);
          },
          findOptionFromReducedValue: function (e) {
            var t = this,
              o = []
                .concat(m()(this.options), m()(this.pushedTags))
                .filter(function (o) {
                  return JSON.stringify(t.reduce(o)) === JSON.stringify(e);
                });
            return 1 === o.length
              ? o[0]
              : o.find(function (e) {
                  return t.optionComparator(e, t.$data._value);
                }) || e;
          },
          closeSearchOptions: function () {
            (this.open = !1), this.$emit('search:blur');
          },
          maybeDeleteValue: function () {
            if (
              !this.searchEl.value.length &&
              this.selectedValue &&
              this.selectedValue.length &&
              this.clearable
            ) {
              var e = null;
              this.multiple &&
                (e = m()(
                  this.selectedValue.slice(0, this.selectedValue.length - 1)
                )),
                this.updateValue(e);
            }
          },
          optionExists: function (e) {
            var t = this;
            return this.optionList.some(function (o) {
              return t.optionComparator(o, e);
            });
          },
          normalizeOptionForSlot: function (e) {
            return 'object' === g()(e) ? e : j()({}, this.label, e);
          },
          pushTag: function (e) {
            this.pushedTags.push(e);
          },
          onEscape: function () {
            this.search.length ? (this.search = '') : this.searchEl.blur();
          },
          onSearchBlur: function () {
            if (!this.mousedown || this.searching) {
              var e = this.clearSearchOnSelect,
                t = this.multiple;
              return (
                this.clearSearchOnBlur({
                  clearSearchOnSelect: e,
                  multiple: t,
                }) && (this.search = ''),
                void this.closeSearchOptions()
              );
            }
            (this.mousedown = !1),
              0 !== this.search.length ||
                0 !== this.options.length ||
                this.closeSearchOptions();
          },
          onSearchFocus: function () {
            (this.open = !0), this.$emit('search:focus');
          },
          onMousedown: function () {
            this.mousedown = !0;
          },
          onMouseUp: function () {
            this.mousedown = !1;
          },
          onSearchKeyDown: function (e) {
            var t = this,
              o = function (e) {
                return (
                  e.preventDefault(), !t.isComposing && t.typeAheadSelect()
                );
              },
              n = {
                8: function (e) {
                  return t.maybeDeleteValue();
                },
                9: function (e) {
                  return t.onTab();
                },
                27: function (e) {
                  return t.onEscape();
                },
                38: function (e) {
                  return e.preventDefault(), t.typeAheadUp();
                },
                40: function (e) {
                  return e.preventDefault(), t.typeAheadDown();
                },
              };
            this.selectOnKeyCodes.forEach(function (e) {
              return (n[e] = o);
            });
            var i = this.mapKeydown(n, this);
            if ('function' == typeof i[e.keyCode]) return i[e.keyCode](e);
          },
        },
      };
      o(9);
      var I = k()(R, [
          [
            'render',
            function (e, t, o, O, m, y) {
              const g = Object(n.resolveDirective)('append-to-body');
              return (
                Object(n.openBlock)(),
                Object(n.createElementBlock)(
                  'div',
                  {
                    dir: o.dir,
                    class: Object(n.normalizeClass)([
                      'v-select',
                      y.stateClasses,
                    ]),
                  },
                  [
                    Object(n.renderSlot)(
                      e.$slots,
                      'header',
                      Object(n.normalizeProps)(
                        Object(n.guardReactiveProps)(y.scope.header)
                      )
                    ),
                    Object(n.createElementVNode)(
                      'div',
                      {
                        id: `vs${o.uid}__combobox`,
                        ref: 'toggle',
                        class: 'vs__dropdown-toggle',
                        role: 'combobox',
                        'aria-expanded': y.dropdownOpen.toString(),
                        'aria-owns': `vs${o.uid}__listbox`,
                        'aria-label': 'Search for option',
                        onMousedown:
                          t[1] || (t[1] = (e) => y.toggleDropdown(e)),
                      },
                      [
                        Object(n.createElementVNode)(
                          'div',
                          s,
                          [
                            (Object(n.openBlock)(!0),
                            Object(n.createElementBlock)(
                              n.Fragment,
                              null,
                              Object(n.renderList)(y.selectedValue, (t, i) =>
                                Object(n.renderSlot)(
                                  e.$slots,
                                  'selected-option-container',
                                  {
                                    option: y.normalizeOptionForSlot(t),
                                    deselect: y.deselect,
                                    multiple: o.multiple,
                                    disabled: o.disabled,
                                  },
                                  () => [
                                    (Object(n.openBlock)(),
                                    Object(n.createElementBlock)(
                                      'span',
                                      {
                                        key: o.getOptionKey(t),
                                        class: 'vs__selected',
                                      },
                                      [
                                        Object(n.renderSlot)(
                                          e.$slots,
                                          'selected-option',
                                          Object(n.normalizeProps)(
                                            Object(n.guardReactiveProps)(
                                              y.normalizeOptionForSlot(t)
                                            )
                                          ),
                                          () => [
                                            Object(n.createTextVNode)(
                                              Object(n.toDisplayString)(
                                                o.getOptionLabel(t)
                                              ),
                                              1
                                            ),
                                          ]
                                        ),
                                        o.multiple
                                          ? (Object(n.openBlock)(),
                                            Object(n.createElementBlock)(
                                              'button',
                                              {
                                                key: 0,
                                                ref: 'deselectButtons',
                                                disabled: o.disabled,
                                                type: 'button',
                                                class: 'vs__deselect',
                                                title: `Deselect ${o.getOptionLabel(
                                                  t
                                                )}`,
                                                'aria-label': `Deselect ${o.getOptionLabel(
                                                  t
                                                )}`,
                                                onClick: (e) => y.deselect(t),
                                              },
                                              [
                                                (Object(n.openBlock)(),
                                                Object(n.createBlock)(
                                                  Object(
                                                    n.resolveDynamicComponent
                                                  )(y.childComponents.Deselect)
                                                )),
                                              ],
                                              8,
                                              l
                                            ))
                                          : Object(n.createCommentVNode)(
                                              '',
                                              !0
                                            ),
                                      ]
                                    )),
                                  ]
                                )
                              ),
                              256
                            )),
                            Object(n.renderSlot)(
                              e.$slots,
                              'search',
                              Object(n.normalizeProps)(
                                Object(n.guardReactiveProps)(y.scope.search)
                              ),
                              () => [
                                Object(n.createElementVNode)(
                                  'input',
                                  Object(n.mergeProps)(
                                    { class: 'vs__search' },
                                    y.scope.search.attributes,
                                    Object(n.toHandlers)(y.scope.search.events)
                                  ),
                                  null,
                                  16
                                ),
                              ]
                            ),
                          ],
                          512
                        ),
                        Object(n.createElementVNode)(
                          'div',
                          c,
                          [
                            Object(n.withDirectives)(
                              Object(n.createElementVNode)(
                                'button',
                                {
                                  ref: 'clearButton',
                                  disabled: o.disabled,
                                  type: 'button',
                                  class: 'vs__clear',
                                  title: 'Clear Selected',
                                  'aria-label': 'Clear Selected',
                                  onClick:
                                    t[0] ||
                                    (t[0] = (...e) =>
                                      y.clearSelection &&
                                      y.clearSelection(...e)),
                                },
                                [
                                  (Object(n.openBlock)(),
                                  Object(n.createBlock)(
                                    Object(n.resolveDynamicComponent)(
                                      y.childComponents.Deselect
                                    )
                                  )),
                                ],
                                8,
                                a
                              ),
                              [[n.vShow, y.showClearButton]]
                            ),
                            Object(n.renderSlot)(
                              e.$slots,
                              'open-indicator',
                              Object(n.normalizeProps)(
                                Object(n.guardReactiveProps)(
                                  y.scope.openIndicator
                                )
                              ),
                              () => [
                                o.noDrop
                                  ? Object(n.createCommentVNode)('', !0)
                                  : (Object(n.openBlock)(),
                                    Object(n.createBlock)(
                                      Object(n.resolveDynamicComponent)(
                                        y.childComponents.OpenIndicator
                                      ),
                                      Object(n.normalizeProps)(
                                        Object(n.mergeProps)(
                                          { key: 0 },
                                          y.scope.openIndicator.attributes
                                        )
                                      ),
                                      null,
                                      16
                                    )),
                              ]
                            ),
                            Object(n.renderSlot)(
                              e.$slots,
                              'spinner',
                              Object(n.normalizeProps)(
                                Object(n.guardReactiveProps)(y.scope.spinner)
                              ),
                              () => [
                                Object(n.withDirectives)(
                                  Object(n.createElementVNode)(
                                    'div',
                                    u,
                                    'Loading...',
                                    512
                                  ),
                                  [[n.vShow, e.mutableLoading]]
                                ),
                              ]
                            ),
                          ],
                          512
                        ),
                      ],
                      40,
                      r
                    ),
                    Object(n.createVNode)(
                      n.Transition,
                      { name: o.transition },
                      {
                        default: Object(n.withCtx)(() => [
                          y.dropdownOpen
                            ? Object(n.withDirectives)(
                                (Object(n.openBlock)(),
                                Object(n.createElementBlock)(
                                  'ul',
                                  {
                                    id: `vs${o.uid}__listbox`,
                                    ref: 'dropdownMenu',
                                    key: `vs${o.uid}__listbox`,
                                    class: 'vs__dropdown-menu',
                                    role: 'listbox',
                                    tabindex: '-1',
                                    onMousedown:
                                      t[2] ||
                                      (t[2] = Object(n.withModifiers)(
                                        (...e) =>
                                          y.onMousedown && y.onMousedown(...e),
                                        ['prevent']
                                      )),
                                    onMouseup:
                                      t[3] ||
                                      (t[3] = (...e) =>
                                        y.onMouseUp && y.onMouseUp(...e)),
                                  },
                                  [
                                    Object(n.renderSlot)(
                                      e.$slots,
                                      'list-header',
                                      Object(n.normalizeProps)(
                                        Object(n.guardReactiveProps)(
                                          y.scope.listHeader
                                        )
                                      )
                                    ),
                                    (Object(n.openBlock)(!0),
                                    Object(n.createElementBlock)(
                                      n.Fragment,
                                      null,
                                      Object(n.renderList)(
                                        y.filteredOptions,
                                        (t, i) => (
                                          Object(n.openBlock)(),
                                          Object(n.createElementBlock)(
                                            'li',
                                            {
                                              id: `vs${o.uid}__option-${i}`,
                                              key: o.getOptionKey(t),
                                              role: 'option',
                                              class: Object(n.normalizeClass)([
                                                'vs__dropdown-option',
                                                {
                                                  'vs__dropdown-option--deselect':
                                                    y.isOptionDeselectable(t) &&
                                                    i === e.typeAheadPointer,
                                                  'vs__dropdown-option--selected':
                                                    y.isOptionSelected(t),
                                                  'vs__dropdown-option--highlight':
                                                    i === e.typeAheadPointer,
                                                  'vs__dropdown-option--disabled':
                                                    !o.selectable(t),
                                                },
                                              ]),
                                              'aria-selected':
                                                i === e.typeAheadPointer ||
                                                null,
                                              onMouseover: (n) =>
                                                o.selectable(t)
                                                  ? (e.typeAheadPointer = i)
                                                  : null,
                                              onClick: Object(n.withModifiers)(
                                                (e) =>
                                                  o.selectable(t)
                                                    ? y.select(t)
                                                    : null,
                                                ['prevent', 'stop']
                                              ),
                                            },
                                            [
                                              Object(n.renderSlot)(
                                                e.$slots,
                                                'option',
                                                Object(n.normalizeProps)(
                                                  Object(n.guardReactiveProps)(
                                                    y.normalizeOptionForSlot(t)
                                                  )
                                                ),
                                                () => [
                                                  Object(n.createTextVNode)(
                                                    Object(n.toDisplayString)(
                                                      o.getOptionLabel(t)
                                                    ),
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ],
                                            42,
                                            d
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                    0 === y.filteredOptions.length
                                      ? (Object(n.openBlock)(),
                                        Object(n.createElementBlock)('li', h, [
                                          Object(n.renderSlot)(
                                            e.$slots,
                                            'no-options',
                                            Object(n.normalizeProps)(
                                              Object(n.guardReactiveProps)(
                                                y.scope.noOptions
                                              )
                                            ),
                                            () => [f]
                                          ),
                                        ]))
                                      : Object(n.createCommentVNode)('', !0),
                                    Object(n.renderSlot)(
                                      e.$slots,
                                      'list-footer',
                                      Object(n.normalizeProps)(
                                        Object(n.guardReactiveProps)(
                                          y.scope.listFooter
                                        )
                                      )
                                    ),
                                  ],
                                  40,
                                  p
                                )),
                                [[g]]
                              )
                            : (Object(n.openBlock)(),
                              Object(n.createElementBlock)(
                                'ul',
                                {
                                  key: 1,
                                  id: `vs${o.uid}__listbox`,
                                  role: 'listbox',
                                  style: {
                                    display: 'none',
                                    visibility: 'hidden',
                                  },
                                },
                                null,
                                8,
                                b
                              )),
                        ]),
                        _: 3,
                      },
                      8,
                      ['name']
                    ),
                    Object(n.renderSlot)(
                      e.$slots,
                      'footer',
                      Object(n.normalizeProps)(
                        Object(n.guardReactiveProps)(y.scope.footer)
                      )
                    ),
                  ],
                  10,
                  i
                )
              );
            },
          ],
        ]),
        K = { ajax: _, pointer: S, pointerScroll: w };
      o.d(t, 'VueSelect', function () {
        return I;
      }),
        o.d(t, 'mixins', function () {
          return K;
        });
      t.default = I;
    },
  ]);
});
//# sourceMappingURL=vue-select.js.map
