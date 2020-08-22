{
  "version": "2.118.0",
  "grid": {
    "layers": {
      "Default layer": {
        "name": "Default layer"
      },
      "TrackInfo": {
        "name": "TrackInfo"
      },
      "Annotations": {
        "name": "Annotations"
      },
      "ManageSpectra": {
        "name": "ManageSpectra"
      },
      "Preferences": {
        "name": "Preferences"
      },
      "Sample": {
        "name": "Sample"
      },
      "Twig Header": {
        "name": "Twig Header"
      }
    },
    "xWidth": 10,
    "yHeight": 10
  },
  "modules": [
    {
      "url": "modules/types/science/spectra/spectra_displayer/",
      "configuration": {
        "sections": {
          "graph": [
            {
              "sections": {},
              "groups": {
                "graph": [
                  {
                    "url": [
                      ""
                    ],
                    "zoom": [
                      "xy"
                    ],
                    "wheelAction": [
                      "none"
                    ],
                    "wheelbaseline": [
                      0
                    ],
                    "fullOut": [
                      "both"
                    ],
                    "legend": [
                      "bottom"
                    ],
                    "legendOptions": [
                      [
                        "isSerieHideable",
                        "isSerieSelectable"
                      ]
                    ],
                    "mouseTracking": [
                      [
                        "track"
                      ]
                    ],
                    "trackingAxis": [
                      "x"
                    ],
                    "selectScatter": [
                      []
                    ],
                    "independantYZoom": [
                      []
                    ]
                  }
                ]
              }
            }
          ],
          "axis": [
            {
              "sections": {},
              "groups": {
                "xAxis": [
                  {
                    "checkboxes": [
                      [
                        "display",
                        "main",
                        "sec"
                      ]
                    ],
                    "label": [
                      ""
                    ],
                    "beforeSpacing": [
                      "0"
                    ],
                    "afterSpacing": [
                      0
                    ],
                    "min": [
                      ""
                    ],
                    "max": [
                      ""
                    ],
                    "nbTicksPrimary": [
                      5
                    ],
                    "axismodification": [
                      "none"
                    ]
                  }
                ],
                "yAxis": [
                  {
                    "checkboxes": [
                      [
                        "display",
                        "main",
                        "sec"
                      ]
                    ],
                    "label": [
                      ""
                    ],
                    "beforeSpacing": [
                      "0"
                    ],
                    "afterSpacing": [
                      "0.1"
                    ],
                    "min": [
                      ""
                    ],
                    "max": [
                      ""
                    ],
                    "nbTicksPrimary": [
                      5
                    ],
                    "fitToAxisOnFromTo": [
                      []
                    ]
                  }
                ]
              }
            }
          ],
          "series": [
            {
              "sections": {},
              "groups": {
                "series": [
                  {
                    "overflow": [
                      []
                    ],
                    "stackVerticalSpacing": [
                      0
                    ]
                  }
                ]
              }
            }
          ],
          "variables": [
            {
              "sections": {},
              "groups": {
                "variables": [
                  [
                    {
                      "variable": "chart",
                      "axis": "1",
                      "adaptTo": "none",
                      "plotcolor": [
                        1,
                        1,
                        255,
                        0.19
                      ],
                      "strokewidth": "1",
                      "strokestyle": "1",
                      "plotcontinuous": "continuous",
                      "peakpicking": [],
                      "markers": [],
                      "markerShape": "1",
                      "markerSize": 2,
                      "normalize": "none",
                      "optimizeSlots": [],
                      "tracking": [
                        "yes"
                      ]
                    }
                  ]
                ]
              }
            }
          ],
          "misc": [
            {
              "sections": {},
              "groups": {
                "misc": [
                  {
                    "highlightOptions": [
                      "{}"
                    ]
                  }
                ]
              }
            }
          ]
        },
        "groups": {}
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 30,
            "top": 6
          },
          "size": {
            "width": 88,
            "height": 51
          },
          "zIndex": 0,
          "display": true,
          "title": "XRD - Draw a rectangle to zoom in, SHIFT + drag to move",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 70,
            "height": 64
          },
          "zIndex": 0,
          "display": true,
          "title": "XRD - Draw a rectangle to zoom in, SHIFT + drag to move",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Annotations": {
          "position": {
            "left": 138,
            "top": 45
          },
          "size": {
            "width": 52,
            "height": 36
          },
          "zIndex": 0,
          "display": true,
          "title": "XRD - Draw a rectangle to zoom in, SHIFT + drag to move",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 60
          },
          "size": {
            "width": 49,
            "height": 26
          },
          "zIndex": 0,
          "display": true,
          "title": "XRD - Draw a rectangle to zoom in, SHIFT + drag to move",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Preferences": {
          "position": {
            "left": 30,
            "top": 0
          },
          "size": {
            "width": 88,
            "height": 51
          },
          "zIndex": 0,
          "display": false,
          "title": "XRD - Draw a rectangle to zoom in, SHIFT + drag to move",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 30,
            "top": 0
          },
          "size": {
            "width": 88,
            "height": 51
          },
          "zIndex": 0,
          "display": false,
          "title": "XRD - Draw a rectangle to zoom in, SHIFT + drag to move",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Twig Header": {
          "position": {
            "left": 30,
            "top": 23
          },
          "size": {
            "width": 88,
            "height": 34
          },
          "zIndex": 0,
          "display": false,
          "title": "XRD - Draw a rectangle to zoom in, SHIFT + drag to move",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 1,
      "vars_in": [
        {
          "rel": "chart",
          "name": "chart"
        },
        {
          "rel": "annotations",
          "name": "filterAnnotations"
        },
        {
          "rel": "annotations",
          "name": "trackAnnotations"
        }
      ],
      "actions_in": [
        {
          "rel": "fromToX",
          "name": "fromToXTemperature"
        },
        {
          "rel": "toggleGrid",
          "name": "toggleGridTemperature"
        }
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "event": "onTrackMouse",
          "rel": "dataAndEvent",
          "jpath": [],
          "name": "trackMove"
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "Blank",
              "icon": "fa-trash",
              "action": "clearData",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            },
            {
              "title": "Toggle grid",
              "icon": "fa-table",
              "action": "toggleGridTemperature",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Show fullscreen",
                "Print"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": "XRD - Draw a rectangle to zoom in, SHIFT + drag to move",
      "zindex": 3
    },
    {
      "url": "modules/types/edition/slick_grid/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "slickCheck": [
                [
                  "enableCellNavigation",
                  "rowNumbering",
                  "forceFitColumns",
                  "highlightScroll",
                  "editable"
                ]
              ],
              "copyPaste": [
                []
              ],
              "copyPasteOptions": [
                [
                  "newRows"
                ]
              ],
              "autoColumns": [
                []
              ],
              "toolbar": [
                []
              ],
              "colorjpath": [
                []
              ],
              "slick.defaultColumnWidth": [
                null
              ],
              "slick.rowHeight": [
                null
              ],
              "slick.headerRowHeight": [
                30
              ],
              "slick.selectionModel": [
                "row"
              ],
              "idProperty": [
                ""
              ],
              "filterType": [
                "pref"
              ],
              "filterRow": [
                "if (this.event==='rowsSelected') {\n    if (this.rows.length===1) {\n        var item=this.rows[0].item;\n        if (! item.peak) {\n            item.peak=[];\n        }\n    }\n}\nif(this.event === 'renderAction' && this.column.id === 'ⓘ') {\n    if(this.row.item.jcamp) {\n        this.renderOptions.disabled = false;\n    } else {\n        this.renderOptions.disabled = true;\n    }\n}"
              ],
              "customJpaths": [
                "instrument.model,method,jcamp.dUrl"
              ]
            }
          ],
          "cols": [
            [
              {
                "name": "Name",
                "jpath": [],
                "editor": "none",
                "forceType": "",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "twig:'  {% if reference %}{{reference}}  {% else %}  {{jcamp.filename|split(\"/\",3)[2]}}  {{text.filename|split(\"/\",3)[2]}}  {{cdf.filename|split(\"/\",3)[2]}}  {{xml.filename|split(\"/\",3)[2]}}  {{pdf.filename|split(\"/\",3)[2]}}  {{file.filename|split(\"/\",3)[2]}}  {% endif %}  '  ",
                "editorOptions": "",
                "width": 82,
                "hideColumn": []
              },
              {
                "name": "Instrument",
                "jpath": [
                  "instrument",
                  "model"
                ],
                "editor": "string",
                "forceType": "",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "width": 45,
                "hideColumn": []
              },
              {
                "name": "Method",
                "jpath": [
                  "method"
                ],
                "editor": "string",
                "forceType": "",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "width": 58,
                "hideColumn": []
              },
              {
                "name": "jcamp",
                "jpath": [
                  "jcamp",
                  "dUrl"
                ],
                "editor": "none",
                "forceType": "downloadlink",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "width": 30,
                "hideColumn": []
              }
            ]
          ],
          "actionCols": [
            [
              {
                "name": "ⓘ",
                "tooltip": "Spectrum information",
                "icon": "fa-info-circle",
                "backgroundColor": [
                  255,
                  255,
                  255,
                  0
                ],
                "color": [
                  0,
                  0,
                  0,
                  1
                ],
                "action": "spectrumInfo",
                "position": "end",
                "clickMode": "background",
                "isAction": true
              },
              {
                "name": "⊕",
                "tooltip": "Add spectrum",
                "icon": "fa-plus",
                "backgroundColor": [
                  255,
                  255,
                  255,
                  0
                ],
                "color": [
                  0,
                  0,
                  0,
                  1
                ],
                "action": "addSpectrum",
                "position": "end",
                "clickMode": "text",
                "isAction": true
              },
              {
                "name": "🗑",
                "tooltip": "Delete attachment and linked metadata",
                "icon": "fa-trash",
                "backgroundColor": [
                  255,
                  255,
                  255,
                  0
                ],
                "color": [
                  0,
                  0,
                  0,
                  1
                ],
                "action": "unattach",
                "position": "begin",
                "clickMode": "background",
                "isAction": true
              }
            ]
          ],
          "groupings": [
            [
              {
                "getter": []
              }
            ]
          ],
          "actionOutButtons": [
            [
              {}
            ]
          ],
          "data": [
            {
              "saveInView": [
                []
              ],
              "varname": [
                ""
              ],
              "data": [
                "[]"
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 6
          },
          "size": {
            "width": 29,
            "height": 21
          },
          "zIndex": 0,
          "display": true,
          "title": "List of XRD files",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 36
          },
          "size": {
            "width": 29,
            "height": 38
          },
          "zIndex": 0,
          "display": false,
          "title": "List of XRD files",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Annotations": {
          "position": {
            "left": 127,
            "top": 0
          },
          "size": {
            "width": 22,
            "height": 36
          },
          "zIndex": 0,
          "display": true,
          "title": "List of XRD files",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 29,
            "height": 30
          },
          "zIndex": 0,
          "display": true,
          "title": "List of XRD files",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 29,
            "height": 30
          },
          "zIndex": 0,
          "display": false,
          "title": "List of XRD files",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 29,
            "height": 30
          },
          "zIndex": 0,
          "display": true,
          "title": "List of XRD files",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 6
          },
          "size": {
            "width": 29,
            "height": 30
          },
          "zIndex": 0,
          "display": false,
          "title": "List of XRD files",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 2,
      "vars_in": [
        {
          "rel": "list",
          "name": "xrd"
        }
      ],
      "actions_in": [
        {
          "rel": "hideColumn",
          "name": "hideDeleteRow"
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "vars_out": [
        {
          "event": "onRowActive",
          "rel": "row",
          "jpath": [],
          "name": "entry"
        },
        {
          "event": "onRowActive",
          "rel": "row",
          "jpath": [
            "peak"
          ],
          "name": "peak"
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "Select columns to display",
              "icon": "fa-cogs",
              "action": "ModulePrefs",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            },
            {
              "title": "Display current sample spectra",
              "icon": "fa-home",
              "action": "recreateVariables",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            },
            {
              "title": "Reload sample from server",
              "icon": "fa-sync",
              "action": "refresh",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": "List of XRD files",
      "zindex": 1
    },
    {
      "url": "modules/types/array_search/smart_array_filter/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "debounce": [
                100
              ],
              "limit": [
                0
              ],
              "initialValue": [
                ""
              ],
              "placeholder": [
                "Enter product code"
              ],
              "fontSize": [
                20
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 37
          },
          "size": {
            "width": 29,
            "height": 7
          },
          "zIndex": 0,
          "display": true,
          "title": "Search specific entry",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 119,
            "top": 0
          },
          "size": {
            "width": 29,
            "height": 7
          },
          "zIndex": 0,
          "display": false,
          "title": "Search specific entry",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Search specific entry",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Admin"
        },
        "ManageSpectra": {
          "position": {
            "left": 119,
            "top": 0
          },
          "size": {
            "width": 29,
            "height": 7
          },
          "zIndex": 0,
          "display": false,
          "title": "Search specific entry",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Preferences": {
          "position": {
            "left": 119,
            "top": 0
          },
          "size": {
            "width": 29,
            "height": 7
          },
          "zIndex": 0,
          "display": false,
          "title": "Search specific entry",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 119,
            "top": 0
          },
          "size": {
            "width": 29,
            "height": 7
          },
          "zIndex": 0,
          "display": false,
          "title": "Search specific entry",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 37
          },
          "size": {
            "width": 29,
            "height": 7
          },
          "zIndex": 0,
          "display": false,
          "title": "Search specific entry",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 3,
      "vars_in": [
        {
          "rel": "input",
          "name": "sampleToc"
        }
      ],
      "actions_in": [
        {}
      ],
      "title": "Search specific entry",
      "vars_out": [
        {
          "event": "onQuery",
          "rel": "output",
          "jpath": [],
          "name": "sampleTocFiltered"
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "Help",
              "icon": "fa-question",
              "action": "Help",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "zindex": 3
    },
    {
      "url": "modules/types/edition/onde/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "hasButton": [
                [
                  "onload"
                ]
              ],
              "button_text": [
                "Export"
              ],
              "debouncing": [
                0
              ],
              "output": [
                "modified"
              ],
              "mode": [
                "schema"
              ],
              "schemaSource": [
                "variable"
              ],
              "schema": [
                "{}"
              ],
              "onchangeFilter": [
                null
              ]
            }
          ],
          "data": [
            {
              "saveInView": [
                []
              ],
              "varname": [
                ""
              ],
              "data": [
                "{}"
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 1,
            "top": 46
          },
          "size": {
            "width": 29,
            "height": 5
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 119,
            "top": 8
          },
          "size": {
            "width": 25,
            "height": 5
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "Annotations": {
          "position": {
            "left": 140,
            "top": 0
          },
          "size": {
            "width": 23,
            "height": 17
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Admin"
        },
        "ManageSpectra": {
          "position": {
            "left": 119,
            "top": 8
          },
          "size": {
            "width": 29,
            "height": 5
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "Preferences": {
          "position": {
            "left": 119,
            "top": 8
          },
          "size": {
            "width": 29,
            "height": 5
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 119,
            "top": 8
          },
          "size": {
            "width": 29,
            "height": 5
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "Twig Header": {
          "position": {
            "left": 1,
            "top": 46
          },
          "size": {
            "width": 29,
            "height": 5
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 4,
      "vars_in": [
        {
          "rel": "schema",
          "name": "groupFormSchema"
        },
        {
          "rel": "inputValue",
          "name": "groupForm"
        }
      ],
      "actions_in": [
        {}
      ],
      "title": "",
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "zindex": 3
    },
    {
      "url": "modules/types/edition/slick_grid/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "slickCheck": [
                [
                  "enableCellNavigation",
                  "rowNumbering",
                  "forceFitColumns",
                  "highlightScroll",
                  "forgetLastActive",
                  "editable"
                ]
              ],
              "copyPaste": [
                []
              ],
              "copyPasteOptions": [
                [
                  "newRows"
                ]
              ],
              "autoColumns": [
                []
              ],
              "toolbar": [
                []
              ],
              "colorjpath": [
                []
              ],
              "slick.defaultColumnWidth": [
                null
              ],
              "slick.rowHeight": [
                null
              ],
              "slick.headerRowHeight": [
                30
              ],
              "slick.selectionModel": [
                "row"
              ],
              "idProperty": [
                ""
              ],
              "filterType": [
                "pref"
              ],
              "filterRow": [
                "// Documentation: https://github.com/NPellet/visualizer/blob/46b40ca86345f8fa313563bf9c6ecb80ba323101/src/modules/types/edition/slick_grid/view.js#L1695-L1735"
              ],
              "customJpaths": [
                ""
              ]
            }
          ],
          "cols": [
            [
              {
                "name": "Reference",
                "jpath": [
                  "value",
                  "reference"
                ],
                "editor": "none",
                "forceType": "",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "hideColumn": []
              }
            ]
          ],
          "actionCols": [
            [
              {
                "backgroundColor": [
                  255,
                  255,
                  255,
                  0
                ],
                "color": [
                  0,
                  0,
                  0,
                  1
                ],
                "position": "end",
                "clickMode": "text"
              }
            ]
          ],
          "groupings": [
            [
              {
                "getter": []
              }
            ]
          ],
          "actionOutButtons": [
            [
              {}
            ]
          ],
          "data": [
            {
              "saveInView": [
                []
              ],
              "varname": [
                ""
              ],
              "data": [
                "[]"
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 51
          },
          "size": {
            "width": 29,
            "height": 27
          },
          "zIndex": 0,
          "display": true,
          "title": "List of selected entries",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 119,
            "top": 12
          },
          "size": {
            "width": 29,
            "height": 30
          },
          "zIndex": 0,
          "display": false,
          "title": "List of selected entries",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "List of selected entries",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Admin"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 31
          },
          "size": {
            "width": 29,
            "height": 28
          },
          "zIndex": 0,
          "display": true,
          "title": "List of selected entries",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Preferences": {
          "position": {
            "left": 119,
            "top": 13
          },
          "size": {
            "width": 29,
            "height": 29
          },
          "zIndex": 0,
          "display": false,
          "title": "List of selected entries",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 119,
            "top": 13
          },
          "size": {
            "width": 29,
            "height": 29
          },
          "zIndex": 0,
          "display": false,
          "title": "List of selected entries",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 51
          },
          "size": {
            "width": 29,
            "height": 27
          },
          "zIndex": 0,
          "display": false,
          "title": "List of selected entries",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 5,
      "vars_in": [
        {
          "rel": "list",
          "name": "sampleTocFiltered"
        }
      ],
      "actions_in": [
        {}
      ],
      "actions_out": [
        {
          "event": "onLastSelectedRow",
          "rel": "row",
          "jpath": [
            "id"
          ],
          "name": "clickedSample"
        }
      ],
      "vars_out": [
        {
          "event": "onRowActive",
          "rel": "row",
          "jpath": [
            "document",
            "$content",
            "spectra",
            "xrd"
          ],
          "name": "xrd"
        },
        {
          "event": "onRowActive",
          "rel": "row",
          "jpath": [],
          "name": "tocClicked"
        },
        {
          "event": "onRowActive",
          "rel": "row",
          "jpath": [],
          "name": "currentSampleTOC"
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "Refresh",
              "icon": "fa-refresh",
              "action": "refresh",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": "List of selected entries",
      "zindex": 16
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                []
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "const zones=API.getData('zones');\n\nensureHighlight(zones);\n\nfunction ensureHighlight(zones) {\n    let changed=false;\n    for (let zone of zones) {\n        if (! zone._highlight) {\n            Object.defineProperty(zone, '_highlight', {\n                writable: true,\n                enumerable: false\n            });\n            zone._highlight=Math.random();\n            changed=true;\n        }\n    }\n    if (changed) zones.triggerChange();\n}\n\nconst mathjs = await API.require('mathjs');\n\n\n\nfunction getValue(value, options={}) {\n    const {\n        customUnit\n    } = options;\n    let unit = mathjs.unit(String(value.unit));\n    unit.value = Number(value.SI);\n    let number;\n    if (customUnit) {\n      unit = unit.to(customUnit);\n      number = unit.toNumber(options.unit);\n    } else {\n      const unitStr = String(value.unit);\n      number = unit.toNumber(unitStr);\n    }\n    return number;\n}\n\n\nvar annotations = [];\nfor (var zone of zones) {\n    if(zone.to) {\n        annotations.push({\n            position:[\n                {x: getValue(zone.from),  y: \"10px\"},\n                {x: getValue(zone.to), y: \"15px\"}\n            ],\n            type: 'rect',\n            fillColor: 'grey',\n            strokeColor: 'grey',\n            _highlight: [zone._highlight],\n            info: zone,\n            \"label\": [\n              {\n                \"text\": zone.deltaCp!==undefined ? getValue(zone.deltaCp) + \" \" + zone.deltaCp.unit : '',\n                \"size\": \"18px\",\n                \"anchor\": \"middle\",\n                \"color\": \"red\",\n                \"position\": {\n                  \"x\": (getValue(zone.from) + getValue(zone.to))/2,\n                  \"y\": \"30px\"\n                }\n              }\n            ]\n        });\n    }\n}\nconsole.log(annotations);\n\nAPI.createData('annotations', annotations);"
              ]
            }
          ],
          "libs": [
            [
              {}
            ]
          ],
          "buttons": [
            [
              {
                "name": "button1",
                "label": "Execute",
                "hide": [],
                "disable": []
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 73,
            "top": 32
          },
          "size": {
            "width": 44,
            "height": 43
          },
          "zIndex": 0,
          "display": false,
          "title": "Create annotations",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Create annotations",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 7,
            "top": 0
          },
          "size": {
            "width": 67,
            "height": 69
          },
          "zIndex": 0,
          "display": true,
          "title": "Create annotations",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Admin"
        },
        "ManageSpectra": {
          "position": {
            "left": 73,
            "top": 32
          },
          "size": {
            "width": 44,
            "height": 43
          },
          "zIndex": 0,
          "display": false,
          "title": "Create annotations",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Preferences": {
          "position": {
            "left": 73,
            "top": 32
          },
          "size": {
            "width": 44,
            "height": 43
          },
          "zIndex": 0,
          "display": false,
          "title": "Create annotations",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 73,
            "top": 32
          },
          "size": {
            "width": 44,
            "height": 43
          },
          "zIndex": 0,
          "display": false,
          "title": "Create annotations",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Twig Header": {
          "position": {
            "left": 73,
            "top": 32
          },
          "size": {
            "width": 44,
            "height": 43
          },
          "zIndex": 0,
          "display": false,
          "title": "Create annotations",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 6,
      "vars_in": [
        {
          "rel": "inputValue",
          "name": "zones"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": "Create annotations",
      "zindex": 3
    },
    {
      "url": "modules/types/display/template-twig/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "selectable": [
                []
              ],
              "template": [
                ""
              ],
              "modifyInForm": [
                []
              ],
              "debouncing": [
                0
              ],
              "formOptions": [
                [
                  "keepFormValueIfDataUndefined"
                ]
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 119,
            "top": 44
          },
          "size": {
            "width": 42,
            "height": 34
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            242,
            204,
            1
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "Load": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Load"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 149,
            "top": 0
          },
          "size": {
            "width": 40,
            "height": 74
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Preferences": {
          "position": {
            "left": 149,
            "top": 0
          },
          "size": {
            "width": 40,
            "height": 74
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 149,
            "top": 0
          },
          "size": {
            "width": 40,
            "height": 74
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Twig Header": {
          "position": {
            "left": 119,
            "top": 48
          },
          "size": {
            "width": 42,
            "height": 30
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            242,
            204,
            1
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 7,
      "vars_in": [
        {
          "rel": "tpl",
          "name": "twigTemplate"
        },
        {
          "rel": "value",
          "name": "tocClicked"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                []
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "console.log(this.action.name);\n\nconst Color = await API.require(\"src/util/color\");\nconst nbColors = 8;\nconst colors = Color.getDistinctColorsAsString(nbColors);\n\nconst analysesManager = API.cache(\"analysesManager\");\nconst selectedSpectra = API.getData(\"selectedSpectra\");\n\nif (!this.action.name) {\n  this.action = {\n    name: this.button,\n  };\n}\n\nswitch (this.action.name) {\n  case 'spectrumInfo':\n    const jcampInfo = await API.require('vh/eln/util/jcampInfo');\n    jcampInfo(this.action.value);\n    break;\n  case 'clickedSample':\n    API.doAction('hideDeleteRow', '🗑');      \n    break;\n  case 'removeSpectrum': {\n    let spectrumUUID = String(this.action.value.id);\n    analysesManager.removeAnalysis(spectrumUUID);\n    for (let i=0; i<selectedSpectra.length; i++) {\n        if (String(selectedSpectra[i].id)===spectrumUUID) {\n            selectedSpectra.splice(i, 1);\n            break;\n        }\n    }\n    selectedSpectra.triggerChange();\n    break;    \n  }\n  case \"addSpectrum\": {\n    let sampleID = getSampleID(this.action.value);\n    let sampleUUID = getSampleUUID(this.action.value);\n    let spectrumUUID = getSpectrumUUID(this.action.value);\n    \n    let spectrumID = sampleID + ' ' + this.action.value.__name;\n    if (this.action.value.jcamp && this.action.value.jcamp.filename) {\n        let jcamp = await API.cache('roc').getAttachment({_id:sampleUUID},this.action.value.jcamp.filename);\n        let spectrum = XRD.fromJcamp(jcamp, { id: spectrumUUID, label: spectrumID });\n        analysesManager.addAnalysis(spectrum);\n        \n        let index = analysesManager.getAnalysisIndex(spectrumUUID);\n        selectedSpectra[index] = {\n            id: spectrumUUID,\n            code: sampleID,\n            label: spectrumID,\n            index: this.action.value.__name+'',\n            spectrum: JSON.parse(JSON.stringify(this.action.value)),\n            color: colors[index % nbColors],\n            display: true,\n            toc: JSON.parse(JSON.stringify(API.getData('currentSampleTOC')))\n        };\n        selectedSpectra.triggerChange();\n    }\n    break;\n  }\n  case \"hideSpectra\":\n    hideSpectra();\n    break;\n  case \"hideAllSpectra\":\n    hideAllSpectra();\n    break;\n  case \"showOnlySpectra\":\n    showOnlySpectra();\n    break;\n  case \"showSpectra\":\n    showSpectra();\n    break;\n  case \"showAllSpectra\":\n    showAllSpectra();\n    break;\n}\n\nfunction getSampleID(entry) {\n  while ((entry = entry.__parent)) {\n    if (entry.$id) return entry.$id.join(\" \");\n    if (entry.value && entry.value.$id) return entry.value.$id.join(\" \");\n  }\n  return \"\";\n}\n\nfunction getSampleUUID(entry) {\n  while ((entry = entry.__parent)) {\n    if (entry._id) return entry._id;\n    if (entry.value && entry.value._id) return entry.value._id;\n  }\n  return \"\";\n}\n\n\nfunction getSpectrumUUID(entry) {\n  return getSampleUUID(entry) + '_' + entry.__name;\n}\n\nfunction showAllSpectra() {\n  let selectedSpectra = API.getData(\"selectedSpectra\");\n  for (let spectrum of selectedSpectra) {\n    spectrum.display = true;\n  }\n  API.getData(\"selectedSpectra\").triggerChange();\n}\n\nfunction hideAllSpectra() {\n  let selectedSpectra = API.getData(\"selectedSpectra\");\n  for (let spectrum of selectedSpectra) {\n    spectrum.display = false;\n  }\n  API.getData(\"selectedSpectra\").triggerChange();\n}\n\nfunction showSpectra() {\n  let selectedSpectra = API.getData(\"selectedSpectra\");\n  let currentlySelectedSpectra = API.getData(\"currentlySelectedSpectra\");\n  for (let currentlySelectedSpectrum of currentlySelectedSpectra) {\n    let spectrum = selectedSpectra.filter(\n      (spectrum) => String(spectrum.id) === String(currentlySelectedSpectrum.id)\n    )[0];\n    spectrum.display = true;\n  }\n  API.getData(\"selectedSpectra\").triggerChange();\n}\n\nfunction showOnlySpectra() {\n  let selectedSpectra = API.getData(\"selectedSpectra\");\n  if (!Array.isArray(selectedSpectra)) return;\n  for (let spectrum of selectedSpectra) {\n    spectrum.display = false;\n  }\n  let currentlySelectedSpectra = API.getData(\"currentlySelectedSpectra\");\n  for (let currentlySelectedSpectrum of currentlySelectedSpectra) {\n    let spectrum = selectedSpectra.filter(\n      (spectrum) => String(spectrum.id) === String(currentlySelectedSpectrum.id)\n    )[0];\n    spectrum.display = true;\n  }\n  API.getData(\"selectedSpectra\").triggerChange();\n}\n\nfunction hideSpectra() {\n  let selectedSpectra = API.getData(\"selectedSpectra\");\n  let currentlySelectedSpectra = API.getData(\"currentlySelectedSpectra\");\n  for (let currentlySelectedSpectrum of currentlySelectedSpectra) {\n    let spectrum = selectedSpectra.filter(\n      (spectrum) => String(spectrum.id) === String(currentlySelectedSpectrum.id)\n    )[0];\n    spectrum.display = false;\n  }\n  API.getData(\"selectedSpectra\").triggerChange();\n}\n"
              ]
            }
          ],
          "libs": [
            [
              {
                "lib": "XRD",
                "alias": "XRD"
              }
            ]
          ],
          "buttons": [
            [
              {
                "name": "button1",
                "label": "Execute",
                "hide": [],
                "disable": []
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Action add / remove spectra",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Action add / remove spectra",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Action add / remove spectra",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 30,
            "top": 0
          },
          "size": {
            "width": 54,
            "height": 59
          },
          "zIndex": 0,
          "display": true,
          "title": "Action add / remove spectra",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Action add / remove spectra",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 36,
            "top": 0
          },
          "size": {
            "width": 67,
            "height": 33
          },
          "zIndex": 0,
          "display": false,
          "title": "Action add / remove spectra",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Action add / remove spectra",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 8,
      "vars_in": [
        {}
      ],
      "actions_in": [
        {
          "rel": "execute",
          "name": "addSpectrum"
        },
        {
          "rel": "execute",
          "name": "removeSpectrum"
        },
        {
          "rel": "execute",
          "name": "spectrumInfo"
        },
        {
          "rel": "execute",
          "name": "hideSpectra"
        },
        {
          "rel": "execute",
          "name": "hideAllSpectra"
        },
        {
          "rel": "execute",
          "name": "showSpectra"
        },
        {
          "rel": "execute",
          "name": "showAllSpectra"
        },
        {
          "rel": "execute",
          "name": "showOnlySpectra"
        },
        {
          "rel": "execute",
          "name": "clickedSample"
        }
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": "Action add / remove spectra"
    },
    {
      "url": "modules/types/edition/slick_grid/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "slickCheck": [
                [
                  "enableCellNavigation",
                  "rowNumbering",
                  "forceFitColumns",
                  "highlightScroll",
                  "forgetLastActive",
                  "editable"
                ]
              ],
              "copyPaste": [
                []
              ],
              "copyPasteOptions": [
                [
                  "newRows"
                ]
              ],
              "autoColumns": [
                []
              ],
              "toolbar": [
                []
              ],
              "colorjpath": [
                []
              ],
              "slick.defaultColumnWidth": [
                null
              ],
              "slick.rowHeight": [
                null
              ],
              "slick.headerRowHeight": [
                30
              ],
              "slick.selectionModel": [
                "row"
              ],
              "idProperty": [
                ""
              ],
              "filterType": [
                "pref"
              ],
              "filterRow": [
                "// Documentation: https://github.com/NPellet/visualizer/blob/46b40ca86345f8fa313563bf9c6ecb80ba323101/src/modules/types/edition/slick_grid/view.js#L1695-L1735"
              ],
              "customJpaths": [
                ""
              ]
            }
          ],
          "cols": [
            [
              {
                "name": "Sample code",
                "jpath": [
                  "code"
                ],
                "editor": "none",
                "forceType": "",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "width": 198,
                "hideColumn": []
              },
              {
                "name": "ID",
                "jpath": [
                  "index"
                ],
                "editor": "none",
                "forceType": "",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "width": 35,
                "hideColumn": []
              },
              {
                "name": "Show",
                "jpath": [
                  "display"
                ],
                "editor": "boolean",
                "forceType": "boolean",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "width": 44,
                "hideColumn": []
              },
              {
                "name": "Color",
                "jpath": [
                  "color"
                ],
                "editor": "color",
                "forceType": "color",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "width": 43,
                "hideColumn": []
              }
            ]
          ],
          "actionCols": [
            [
              {
                "name": "delete",
                "tooltip": "Remove spectrum",
                "icon": "fa-trash",
                "backgroundColor": [
                  255,
                  255,
                  255,
                  0
                ],
                "color": [
                  0,
                  0,
                  0,
                  1
                ],
                "action": "removeSpectrum",
                "position": "begin",
                "clickMode": "text",
                "isAction": true
              }
            ]
          ],
          "groupings": [
            [
              {
                "getter": []
              }
            ]
          ],
          "actionOutButtons": [
            [
              {}
            ]
          ],
          "data": [
            {
              "saveInView": [
                []
              ],
              "varname": [
                ""
              ],
              "data": [
                "[]"
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 30,
            "top": 58
          },
          "size": {
            "width": 42,
            "height": 20
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 50,
            "top": 60
          },
          "size": {
            "width": 63,
            "height": 26
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 40,
            "top": 53
          },
          "size": {
            "width": 50,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 64,
            "top": 58
          },
          "size": {
            "width": 63,
            "height": 22
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Twig Header": {
          "position": {
            "left": 30,
            "top": 58
          },
          "size": {
            "width": 41,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 9,
      "vars_in": [
        {
          "rel": "list",
          "name": "selectedSpectra"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "event": "onRowsSelect",
          "rel": "rows",
          "jpath": [],
          "name": "currentlySelectedSpectra"
        },
        {
          "event": "onRowActive",
          "rel": "row",
          "jpath": [
            "toc"
          ],
          "name": "tocClicked"
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "Show all spectra",
              "icon": "fa-eye",
              "action": "showAllSpectra",
              "position": "begin",
              "color": [
                56,
                118,
                29,
                1
              ]
            },
            {
              "title": "Append selected spectra",
              "icon": "fa-plus",
              "action": "showSpectra",
              "position": "begin",
              "color": [
                56,
                118,
                29,
                1
              ]
            },
            {
              "title": "Show only selected spectra",
              "icon": "fa-bullseye",
              "action": "showOnlySpectra",
              "position": "begin",
              "color": [
                180,
                95,
                6,
                1
              ]
            },
            {
              "title": "Hide selected spectra",
              "icon": "fa-minus",
              "action": "hideSpectra",
              "position": "begin",
              "color": [
                153,
                0,
                0,
                1
              ]
            },
            {
              "title": "Hide all spectra",
              "icon": "fa-eye-slash",
              "action": "hideAllSpectra",
              "position": "begin",
              "color": [
                153,
                0,
                0,
                1
              ]
            },
            {
              "title": "Select columns to display",
              "icon": "fa-cogs",
              "action": "ModulePrefs",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                []
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "const XRD = await API.require('XRD');\nconst analysesManager = API.cache('analysesManager');\nconst selectedSpectra = API.getData('selectedSpectra');\nconst preferences = API.getData('preferences').resurrect();;\n\nlet ids=selectedSpectra.filter(entry => DataObject.resurrect(entry.display)).map(entry => String(entry.id));\n\nlet colors=selectedSpectra\n        .filter(entry => DataObject.resurrect(entry.display))\n        .map(entry => String(entry.color));\n        \nlet analyses = analysesManager.getAnalyses({ids});\n\nconsole.log('Calculate chart')\n\nlet chart = XRD.getJSGraph(analyses, {\n    colors,\n    ids,\n    selector: {\n        flavor: preferences.flavor,\n    },\n    normalization: preferences.normalization, \n    processing: preferences.processing,\n});\nAPI.createData('chart', chart);\n\nlet filterAnnotations = XRD.getNormalizationAnnotations(preferences.normalization, {\n    y: {min:'0px', max:'2000px'}, \n})\n\nAPI.createData('filterAnnotations', filterAnnotations);\n"
              ]
            }
          ],
          "libs": [
            [
              {}
            ]
          ],
          "buttons": [
            [
              {
                "name": "button1",
                "label": "Execute",
                "hide": [],
                "disable": []
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "selectedSpectra or preferences has changed",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "selectedSpectra or preferences has changed",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "selectedSpectra or preferences has changed",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 85,
            "top": 0
          },
          "size": {
            "width": 63,
            "height": 59
          },
          "zIndex": 0,
          "display": true,
          "title": "selectedSpectra or preferences has changed",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "selectedSpectra or preferences has changed",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "Sample": {
          "position": {
            "left": 106,
            "top": 0
          },
          "size": {
            "width": 50,
            "height": 54
          },
          "zIndex": 0,
          "display": false,
          "title": "selectedSpectra or preferences has changed",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "selectedSpectra or preferences has changed",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 10,
      "vars_in": [
        {
          "rel": "inputValue",
          "name": "selectedSpectra"
        },
        {
          "rel": "inputValue",
          "name": "preferences"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": "selectedSpectra or preferences has changed"
    },
    {
      "url": "modules/types/client_interaction/code_editor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "mode": [
                "html"
              ],
              "outputType": [
                null
              ],
              "btnvalue": [
                "Send script"
              ],
              "iseditable": [
                [
                  "editable"
                ]
              ],
              "hasButton": [
                [
                  "button"
                ]
              ],
              "variable": [
                []
              ],
              "storeOnChange": [
                [
                  "store"
                ]
              ],
              "debouncing": [
                1000
              ],
              "script": [
                "<style>\n #extendedForm {\n        padding: 10px;\n    }\n    #extendedForm .addRow {\n        color: green;\n        font-weight: bold;\n        font-size: 12px;\n        padding: .4em .6em;\n    }\n    #extendedForm .removeRow {\n        color: red;\n        font-weight: bold;\n        font-size: 12px;\n        padding: .4em .8em;\n    }\n    #extendedForm h1 {\n        font-size: 16px;\n        padding-top: 12px;\n        padding-bottom: 4px;\n        space\n    }\n    #extendedForm h2 {\n        font-size: 12px;\n        margin-top: 12px;\n        margin-bottom: 4px;\n        space\n    }\n    #extendedForm input[type=number]{\n        width: 60px;\n    }\n    #extendedForm input, #extendedForm select {\n        margin-top: 3px;\n        margin-bottom: 3px;\n    } \n</style>\n\n<div id='extendedForm'>\n    <form>\n        <h1>Data / Display</h1>\n            <!--\n            Flavor: \n            <select name='flavor'>\n                <option value=\"\"></option>\n            </select>\n            <br>\n            Auto-refresh <input type=\"checkbox\" name=\"display.autorefresh\" checked> \n            <br>\n            -->\n            Display tracking info: <input type=\"checkbox\" name=\"display.trackingInfo\"><br>\n        <h1>Normalization</h1>\n        <table>\n            <tr>\n                <th align=\"left\">Range:</th>\n                <td>\n                    from: <input type=\"number\" name=\"normalization.from\" step=\"any\"> - \n                    to: <input type=\"number\" name=\"normalization.to\" step=\"any\">\n                </td>\n            </tr>\n            <tr>\n                <th align=\"left\">Processing:</th>\n                <td>\n                    <select name='normalization.processing'>\n                        <option value=\"\"></option>\n                        <option value=\"firstDerivative\">First derivative</option>\n                        <option value=\"secondDerivative\">Second derivative</option>\n                    </select>\n                </td>\n            </tr>\n            <tr>\n                <th align=\"left\">Number of points:</th>\n                <td>\n                    <input type='number' name='normalization.numberOfPoints' size=\"6\">\n                </td>\n            </tr>\n            <tr>\n                <th align=\"left\">Filters</th>\n                <td>\n                    <table>\n                        <tr>\n                            <th></th><th></th>\n                            <th>Name</th>\n                            <th>Options</th>\n                        </tr>\n                        <tr data-repeat='normalization.filters'>\n                            <td>\n                                <select onchange=\"updateOptions(this);\" data-field='name'>\n                                    <option value=\"\"></option>\n                                    <option value=\"centerMean\">Center Mean</option>\n                                    <option value=\"divideBySD\">Divide by SD</option>\n                                    <option value=\"rescale\">Rescale (x to y)</option>\n                                    <option value=\"normalize\">Normalize (sum to n)</option>\n                                </select>\n                            </td>\n                            <td>\n                                <input style=\"display:none\" class=\"options-min\" type='number' placeholder=\"min\" data-field='options.min' size=\"5\">\n                                <input style=\"display:none\" class=\"options-max\" type='number' placeholder=\"max\" data-field='options.max' size=\"5\">\n                                <input style=\"display:none\" class=\"options-value\" type='number' placeholder=\"value\" data-field='options.value' size=\"5\">\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n\n            <tr>\n                <th align=\"left\">Exclusions</th>\n                <td>\n                    <table>\n                        <tr>\n                            <th></th><th></th>\n                            <th>From</th>\n                            <th>To</th>\n                        </tr>\n                        <tr data-repeat='normalization.exclusions'>\n                            <td><input type='number' data-field='from' size=\"5\"></td>\n                            <td><input type='number' data-field='to' size=\"5\"></td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n\n\n        </table>\n        <center>\n            <input type=\"submit\" value=\"Update data and chart\">\n        </center>\n    </form>\n</div>\n\n<script>\n    function updateOptions(source) {\n        let value=$(source).val();\n        let fields=['min','max','value']\n        let show=[];\n        switch (value) {\n            case 'rescale':\n                show=['min','max'];\n                break;\n            case 'normalize':\n                show=['value'];\n            default:\n        }\n        let options = $(source).parent().next();\n        for (let key of fields) {\n            options.find('.options-'+key).hide();\n        }\n        for (let key of show) {\n            options.find('.options-'+key).show();\n        }\n    }\n    function toggle(element) {\n        let nextStyle=element.nextElementSibling.style\n        if (nextStyle.display===\"none\") {\n            nextStyle.display = \"block\";\n            element.innerHTML='▼';\n        } else {\n            nextStyle.display = \"none\";\n            element.innerHTML='▶';\n        }\n    }\n</script>\n\n<script>\n    require(['vh/util/twigAdvancedForm'], function(AF) {\n        AF('extendedForm', {debug:false});\n    });\n</script>"
              ]
            }
          ],
          "ace": [
            {
              "useSoftTabs": [
                [
                  "yes"
                ]
              ],
              "tabSize": [
                4
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 13,
            "top": 0
          },
          "size": {
            "width": 70,
            "height": 74
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 11,
      "vars_in": [
        {}
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "event": "onEditorChange",
          "rel": "data",
          "jpath": [],
          "name": "twigPreferences"
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/display/template-twig/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "selectable": [
                []
              ],
              "template": [
                ""
              ],
              "modifyInForm": [
                [
                  "yes"
                ]
              ],
              "debouncing": [
                0
              ],
              "formOptions": [
                [
                  "keepFormValueIfDataUndefined"
                ]
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 119,
            "top": 0
          },
          "size": {
            "width": 42,
            "height": 43
          },
          "zIndex": 0,
          "display": true,
          "title": "Display preferences",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Display preferences",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Display preferences",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 149,
            "top": 0
          },
          "size": {
            "width": 38,
            "height": 59
          },
          "zIndex": 0,
          "display": true,
          "title": "Display preferences",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 84,
            "top": 0
          },
          "size": {
            "width": 48,
            "height": 47
          },
          "zIndex": 0,
          "display": true,
          "title": "Display preferences",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "Display preferences",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Twig Header": {
          "position": {
            "left": 119,
            "top": 11
          },
          "size": {
            "width": 42,
            "height": 41
          },
          "zIndex": 0,
          "display": false,
          "title": "Display preferences",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 12,
      "vars_in": [
        {
          "rel": "value",
          "name": "preferences"
        },
        {
          "rel": "tpl",
          "name": "twigPreferences"
        },
        {
          "rel": "form",
          "name": "preferences"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": "Display preferences"
    },
    {
      "url": "modules/types/edition/object_editor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "editable": [
                "view"
              ],
              "expanded": [
                [
                  "expand"
                ]
              ],
              "storeObject": [
                []
              ],
              "displayValue": [
                []
              ],
              "searchBox": [
                [
                  "search"
                ]
              ],
              "sendButton": [
                []
              ],
              "output": [
                "new"
              ],
              "storedObject": [
                "{}"
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 140,
            "top": 0
          },
          "size": {
            "width": 38,
            "height": 66
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 13,
      "vars_in": [
        {
          "rel": "value",
          "name": "preferences"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/client_interaction/dragdrop/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "label": [
                "Drag brml, XY, jcamp or txt"
              ],
              "dragoverlabel": [
                ""
              ],
              "hoverlabel": [
                "Drag'n drop or paste here"
              ],
              "fileSelectLabel": [
                "Select file"
              ],
              "labelFontSize": [
                18
              ],
              "checkOptions": [
                [
                  "promptAmbiguous"
                ]
              ],
              "inputOptions": [
                [
                  "allowDrop",
                  "allowPaste",
                  "allowFileInput"
                ]
              ]
            }
          ],
          "vars": [
            [
              {
                "filter": "ext",
                "extension": "*",
                "filetype": "base64",
                "type": "",
                "variable": "file"
              }
            ]
          ],
          "string_general": [
            {
              "askFilename": [
                [
                  "yes"
                ]
              ]
            }
          ],
          "string": [
            [
              {
                "filter": "mime",
                "extension": "text/plain",
                "type": "",
                "variable": "str"
              },
              {
                "filter": "ext",
                "extension": "dx",
                "type": "",
                "variable": "str"
              },
              {
                "filter": "ext",
                "extension": "jdx",
                "type": "",
                "variable": "str"
              },
              {
                "filter": "ext",
                "extension": "DX",
                "type": "",
                "variable": "str"
              },
              {
                "filter": "ext",
                "extension": "JDX",
                "type": "",
                "variable": "str"
              }
            ]
          ],
          "photo": [
            [
              {
                "variable": "photo"
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 28
          },
          "size": {
            "width": 29,
            "height": 8
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 108,
            "top": 24
          },
          "size": {
            "width": 36,
            "height": 23
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Twig Header": {
          "position": {
            "left": 120,
            "top": 0
          },
          "size": {
            "width": 37,
            "height": 5
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 14,
      "title": "",
      "vars_out": [
        {
          "event": "onRead",
          "rel": "dataarray",
          "jpath": [],
          "name": "droppedXRD"
        }
      ],
      "vars_in": [],
      "actions_in": [
        {}
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "zindex": 2,
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ]
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                [
                  "yes"
                ]
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "const XRD = await API.require('XRD');\nconsole.log(XRD);\nconst action=getAction() || {name:''};\nconst sample=API.cache('sample');\nconsole.log(\"Receive action: \",action);\nif (!sample) return;\n\nif(this.action) {\n    switch (action.name) {\n    default:\n        sample.handleAction(action);\n    }    \n} else if(this.variable) {\n    const data=API.getData(this.variable).file[0];\n\n    const content=data.content;\n\n    sample.handleDrop(this.variable, false, {\n        autoJcamp: true,\n        converters: {\n            brml: async (content) => {\n                const analysis = await XRD.fromBRML(atob(content));\n                return XRD.toJcamp(analysis);\n            },\n            xy: async (content) => {\n                const analysis = await XRD.fromPowDLLXY(atob(content));\n                return XRD.toJcamp(analysis);\n            }\n        }\n    });\n}\n\n\n"
              ]
            }
          ],
          "libs": [
            [
              {}
            ]
          ],
          "buttons": [
            [
              {
                "name": "button1",
                "label": "Execute",
                "hide": [],
                "disable": []
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 142,
            "top": 16
          },
          "size": {
            "width": 50,
            "height": 33
          },
          "zIndex": 0,
          "display": false,
          "title": "Deal with all the actions",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 34,
            "top": 0
          },
          "size": {
            "width": 70,
            "height": 56
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 142,
            "top": 16
          },
          "size": {
            "width": 50,
            "height": 33
          },
          "zIndex": 0,
          "display": false,
          "title": "Deal with all the actions",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        }
      },
      "id": 15,
      "vars_in": [
        {
          "rel": "inputValue",
          "name": "droppedXRD"
        }
      ],
      "actions_in": [
        {
          "rel": "execute",
          "name": "refresh"
        },
        {
          "rel": "execute",
          "name": "save"
        },
        {
          "rel": "execute",
          "name": "recreateVariables"
        },
        {
          "rel": "execute",
          "name": "deleteAttachment"
        },
        {
          "rel": "execute",
          "name": "updateAttachments"
        },
        {
          "rel": "execute",
          "name": "unattach"
        }
      ],
      "title": "",
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "zindex": 2,
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ]
    },
    {
      "url": "modules/types/client_interaction/code_editor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "mode": [
                "html"
              ],
              "outputType": [
                null
              ],
              "btnvalue": [
                "Send script"
              ],
              "iseditable": [
                [
                  "editable"
                ]
              ],
              "hasButton": [
                [
                  "button"
                ]
              ],
              "variable": [
                []
              ],
              "storeOnChange": [
                [
                  "store"
                ]
              ],
              "debouncing": [
                0
              ],
              "script": [
                "<style>\n    #sampleHeader, #sampleHeader tbody  {\n        font-size: 12px;\n        font-family: Arial, Helvetica, sans-serif;\n    }\n    #sampleHeader .header {\n        font-size: 16px;\n        width: 100%;\n    }\n    #sampleHeader td {\n        vertical-align: top;\n    }\n    #sampleHeader .headerCode {\n        font-size: 20px;\n    }\n</style>\n\n<div id='sampleHeader' style='height: inherit;'>\n    <table class=\"header\" style='height: inherit;'>\n      <tr>\n          <td width='33%'>\n              <span class='headerField'>Product code:</span><br>\n              <span class='headerCode'>{{sample[\"$id\"][0]}}</span>\n          </td>\n          <td width='33%'>\n              <span class='headerField'>Batch code:</span><br>\n              <span class='headerCode'>{{sample[\"$id\"][1]}}</span>\n          </td>\n          <td  width='33%' align=\"right\">\n            Created on: {{rendertype(sample[\"$creationDate\"],{dateFormat:'YYYY-MM-DD'})}}<br>\n            Modified on: {{rendertype(sample[\"$modificationDate\"],{dateFormat:'YYYY-MM-DD'})}}\n          </td>\n      </tr>\n    </table>\n</div>\n\n"
              ]
            }
          ],
          "ace": [
            {
              "useSoftTabs": [
                [
                  "yes"
                ]
              ],
              "tabSize": [
                4
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 19,
            "top": 3
          },
          "size": {
            "width": 72,
            "height": 56
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 16,
      "vars_in": [
        {}
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "event": "onEditorChange",
          "rel": "data",
          "jpath": [],
          "name": "twigHeader"
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/display/template-twig/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "selectable": [
                []
              ],
              "template": [
                ""
              ],
              "modifyInForm": [
                []
              ],
              "debouncing": [
                0
              ],
              "formOptions": [
                [
                  "keepFormValueIfDataUndefined"
                ]
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 30,
            "top": 0
          },
          "size": {
            "width": 88,
            "height": 5
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 94,
            "top": 9
          },
          "size": {
            "width": 66,
            "height": 19
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 17,
      "vars_in": [
        {
          "rel": "tpl",
          "name": "twigHeader"
        },
        {
          "rel": "value",
          "name": "sample"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                []
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "debugger;"
              ]
            }
          ],
          "libs": [
            [
              {}
            ]
          ],
          "buttons": [
            [
              {
                "name": "button1",
                "label": "Execute",
                "hide": [],
                "disable": []
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 108,
            "top": 0
          },
          "size": {
            "width": 60,
            "height": 23
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 18,
      "vars_in": [
        {}
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                []
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "let trackThrottle=API.cache('trackThrottle');\nif (! trackThrottle) {\n    trackThrottle = _.throttle((action) => {\n        generateTrackAnnotations(action);\n    }, 100);\n    API.cache('trackThrottle', trackThrottle);\n}\n\ntrackThrottle(this.action);\n\nfunction generateTrackAnnotations(action) {\n    const trackMove = action.value.data;\n    if (! trackMove || Object.keys(trackMove).length===0) {\n        API.createData('trackAnnotations', []);\n        return;\n    }\n    \n    const selectedSpectra = API.getData('selectedSpectra');\n    const preferences = API.getData('preferences').resurrect();;\n    if (! preferences.display.trackingInfo) {\n        API.createData('trackAnnotations', []);\n        return;\n    }\n    let ids=selectedSpectra.filter(entry => DataObject.resurrect(entry.display)).map(entry => String(entry.id));\n    let colors=selectedSpectra.filter(entry => DataObject.resurrect(entry.display)).map(entry => String(entry.color));\n    \n    const spectra=API.cache('analysesManager').getAnalyses({ids});\n    \n    // we will get the index for all the charts\n    let keys=Object.keys(trackMove);\n    let data=new Array(keys.length);\n    for (let key of keys) {\n        let index = Number(key.replace(/chart-?/,'') || 0);\n        data[index]={\n            x: trackMove[key].xClosest,\n            y: trackMove[key].yClosest,\n            color: colors[index],\n            spectrum: spectra[index],\n        };\n    }\n    \n    let trackAnnotations = getTrackAnnotations(data);\n    API.createData('trackAnnotations', trackAnnotations);\n    \n    function getTrackAnnotations(data, options = {}) {\n      const { \n          showSpectrumID = true,\n          startX = 300,\n      } = options;\n      let annotations = [];\n    \n      let line = 0;\n    \n      if (isNaN(data[0].x)) return;\n      annotations.push({\n        type: 'line',\n        position: [\n          { x: `${startX}px`, y: `${15 + 15 * line}px` },\n          { x: `${startX+15}px`, y: `${15 + 15 * line}px` },\n        ],\n        strokeWidth: 0.0000001,\n        label: {\n          size: 16,\n          text: `x: ${data[0].x.toPrecision(6)}`,\n          position: { x: `${startX+60}px`, y: `${20 + 15 * line}px` },\n        },\n      });\n      line++;\n    \n      for (let datum of data) {\n        if (isNaN(datum.y)) continue;\n        annotations.push({\n          type: 'line',\n          position: [\n            { x: `${startX}px`, y: `${15 + 15 * line}px` },\n            { x: `${startX+15}px`, y: `${15 + 15 * line}px` },\n          ],\n          strokeColor: datum.color,\n          strokeWidth: 2,\n          label: {\n            text: `${datum.y.toPrecision(4)}${showSpectrumID ? ` - ${datum.spectrum.label}` : ''}`,\n            position: { x: `${startX+20}px`, y: `${20 + 15 * line}px` },\n          },\n        });\n        line++;\n      }\n    \n      return annotations;\n    }\n}\n"
              ]
            }
          ],
          "libs": [
            [
              {}
            ]
          ],
          "buttons": [
            [
              {
                "name": "button1",
                "label": "Execute",
                "hide": [],
                "disable": []
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 73,
            "top": 0
          },
          "size": {
            "width": 80,
            "height": 49
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 19,
      "vars_in": [
        {}
      ],
      "actions_in": [
        {
          "rel": "execute",
          "name": "trackMove"
        }
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                []
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "const analysesManager = API.cache(\"analysesManager\");\n\ndebugger;"
              ]
            }
          ],
          "libs": [
            [
              {}
            ]
          ],
          "buttons": [
            [
              {
                "name": "button1",
                "label": "Execute",
                "hide": [],
                "disable": []
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 114,
            "top": 60
          },
          "size": {
            "width": 55,
            "height": 26
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 20,
      "vars_in": [
        {}
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/edition/object_editor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "editable": [
                "view"
              ],
              "expanded": [
                []
              ],
              "storeObject": [
                []
              ],
              "displayValue": [
                []
              ],
              "searchBox": [
                [
                  "search"
                ]
              ],
              "sendButton": [
                []
              ],
              "output": [
                "new"
              ],
              "storedObject": [
                "{}"
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 85,
            "top": 56
          },
          "size": {
            "width": 57,
            "height": 27
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 21,
      "vars_in": [
        {
          "rel": "value",
          "name": "preferences"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/edition/slick_grid/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "slickCheck": [
                [
                  "enableCellNavigation",
                  "rowNumbering",
                  "forceFitColumns",
                  "highlightScroll",
                  "forgetLastActive"
                ]
              ],
              "copyPaste": [
                []
              ],
              "copyPasteOptions": [
                [
                  "newRows"
                ]
              ],
              "autoColumns": [
                []
              ],
              "toolbar": [
                []
              ],
              "colorjpath": [
                []
              ],
              "slick.defaultColumnWidth": [
                null
              ],
              "slick.rowHeight": [
                null
              ],
              "slick.headerRowHeight": [
                30
              ],
              "slick.selectionModel": [
                "row"
              ],
              "idProperty": [
                ""
              ],
              "filterType": [
                "pref"
              ],
              "filterRow": [
                "// Documentation: https://github.com/NPellet/visualizer/blob/46b40ca86345f8fa313563bf9c6ecb80ba323101/src/modules/types/edition/slick_grid/view.js#L1695-L1735"
              ],
              "customJpaths": [
                ""
              ]
            }
          ],
          "cols": [
            [
              {
                "jpath": [],
                "editor": "none",
                "forceType": "",
                "formatter": "typerenderer",
                "copyFormatter": "default",
                "visibility": "both",
                "rendererOptions": "",
                "editorOptions": "",
                "hideColumn": []
              }
            ]
          ],
          "actionCols": [
            [
              {
                "backgroundColor": [
                  255,
                  255,
                  255,
                  0
                ],
                "color": [
                  0,
                  0,
                  0,
                  1
                ],
                "position": "end",
                "clickMode": "text"
              }
            ]
          ],
          "groupings": [
            [
              {
                "getter": []
              }
            ]
          ],
          "actionOutButtons": [
            [
              {}
            ]
          ],
          "data": [
            {
              "saveInView": [
                []
              ],
              "varname": [
                ""
              ],
              "data": [
                "[]"
              ]
            }
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 73,
            "top": 58
          },
          "size": {
            "width": 45,
            "height": 20
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 150,
            "top": 0
          },
          "size": {
            "width": 38,
            "height": 33
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 22,
      "vars_in": [
        {
          "rel": "list",
          "name": "peak"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              []
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                []
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "\n\n"
              ]
            }
          ],
          "libs": [
            [
              {}
            ]
          ],
          "buttons": [
            [
              {
                "name": "button1",
                "label": "Execute",
                "hide": [],
                "disable": []
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 77,
            "top": 7
          },
          "size": {
            "width": 46,
            "height": 47
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 23,
      "vars_in": [
        {}
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin",
              "color": [
                100,
                100,
                100,
                1
              ]
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    },
    {
      "url": "modules/types/client_interaction/code_executor/",
      "configuration": {
        "sections": {},
        "groups": {
          "group": [
            {
              "display": [
                [
                  "editor",
                  "buttons"
                ]
              ],
              "execOnLoad": [
                []
              ],
              "asyncAwait": [
                [
                  "top"
                ]
              ],
              "script": [
                "const dataSynced = API.getData('dataSynced');\n\nconsole.log('synced')\n\nif (dataSynced && !dataSynced.resurrect()) {\n    this.getButton('save').setColor('green');\n    this.enableButton('save');\n} else {\n    this.getButton('save').setColor('grey');\n    this.disableButton('save');\n}\n\nswitch (this.button) {\n    case 'save':\n        API.doAction('save');\n        break;\n}\n"
              ]
            }
          ],
          "libs": [
            [
              {}
            ]
          ],
          "buttons": [
            [
              {
                "name": "save",
                "label": "Save data",
                "hide": [],
                "disable": [
                  "disable"
                ]
              }
            ]
          ]
        }
      },
      "layers": {
        "Default layer": {
          "position": {
            "left": 11,
            "top": 0
          },
          "size": {
            "width": 24,
            "height": 5
          },
          "zIndex": 0,
          "display": true,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": false,
          "created": true,
          "name": "Default layer"
        },
        "TrackInfo": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "TrackInfo"
        },
        "Annotations": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Annotations"
        },
        "ManageSpectra": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "ManageSpectra"
        },
        "Preferences": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Preferences"
        },
        "Sample": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Sample"
        },
        "Twig Header": {
          "position": {
            "left": 0,
            "top": 0
          },
          "size": {
            "width": 20,
            "height": 20
          },
          "zIndex": 0,
          "display": false,
          "title": "",
          "bgColor": [
            255,
            255,
            255,
            0
          ],
          "wrapper": true,
          "created": true,
          "name": "Twig Header"
        }
      },
      "id": 24,
      "vars_in": [
        {
          "rel": "inputValue",
          "name": "dataSynced"
        }
      ],
      "actions_in": [
        {}
      ],
      "vars_out": [
        {
          "jpath": []
        }
      ],
      "actions_out": [
        {
          "jpath": []
        }
      ],
      "toolbar": {
        "custom": [
          [
            {
              "title": "",
              "icon": "",
              "action": "",
              "position": "begin"
            }
          ]
        ],
        "common": [
          {
            "toolbar": [
              [
                "Open Preferences"
              ]
            ]
          }
        ]
      },
      "css": [
        {
          "fontSize": [
            ""
          ],
          "fontFamily": [
            ""
          ]
        }
      ],
      "title": ""
    }
  ],
  "variables": [
    {
      "jpath": [
        ""
      ]
    }
  ],
  "aliases": [
    {
      "path": "https://www.lactame.com/lib/ml/3.5.0/ml",
      "alias": "ML"
    },
    {
      "path": "https://www.lactame.com/github/cheminfo-js/visualizer-helper/5c3ef26debcdb91e0f87688b7d0c9028d1daed17/",
      "alias": "vh"
    },
    {
      "path": "http://localhost:9898/cheminfo-js/visualizer-helper/",
      "alias": "vhxx"
    },
    {
      "path": "http://localhost:9898/cheminfo/xrd-analysis/dist/xrd-analysis",
      "alias": "XRDxx"
    },
    {
      "path": "https://www.lactame.com/lib/xrd-analysis/0.3.0/xrd-analysis",
      "alias": "XRD"
    }
  ],
  "configuration": {
    "title": "X-ray powder diffraction (XRD)"
  },
  "actionscripts": [
    {
      "sections": {},
      "groups": {
        "action": [
          {
            "name": [
              "ModulePrefs"
            ],
            "script": [
              "const modulePrefsManager=API.cache('modulePrefsManager');\nmodulePrefsManager.updateSlickGridPrefs(value);"
            ]
          }
        ]
      }
    },
    {
      "sections": {},
      "groups": {
        "action": [
          {
            "name": [
              "LoadPrefs"
            ],
            "script": [
              "const modulePrefsManager=API.cache('modulePrefsManager');\nmodulePrefsManager.reloadModulePrefs(value);"
            ]
          }
        ]
      }
    }
  ],
  "init_script": [
    {
      "sections": {},
      "groups": {
        "general": [
          {
            "script": [
              "const [\n    Roc,\n    loadTwig,\n    Sample,\n    libs,\n    ModulePrefsManager,\n    Toc,\n    XRD,\n] = await API.require([\n    'vh/rest-on-couch/Roc',\n    'vh/eln/templates/loadTwig',\n    'vh/eln/Sample',\n    'vh/eln/libs',\n    'vh/util/ModulePrefsManager',\n    'vh/eln/Toc',\n    'XRD'\n]);\n\nconst modulePrefsManager = new ModulePrefsManager( {hasRoc: typeof IframeBridge!==\"undefined\"} );\nAPI.cache('modulePrefsManager',modulePrefsManager);\n\nIframeBridge.onMessage(onMessage);\nIframeBridge.ready();\nasync function onMessage(data) {\n    if(data.type === 'tab.data') {\n        var sample = new Sample(data.message.couchDB, data.message.uuid, {\n            track:true,\n            onSync(synced) {\n              API.createData('dataSynced', synced);\n            }\n        });\n        API.cache('sample',sample);\n        API.createData('reference',data.message.reference);\n        \n        var roc = new Roc(data.message.couchDB);\n        API.cache('roc',roc);\n        \n        modulePrefsManager.setRoc(roc);\n        \n        const sampleToc = new Toc(roc, {\n           filter: (entry) => (entry.value.nbXRD)\n        });\n        API.cache('sampleToc', sampleToc);\n        sampleToc.initializeGroupForm();\n        \n        sample.waitSampleLoaded().then( async (test) => {\n            let toc=await sample.getToc();\n            API.createData('tocClicked', toc);\n            API.createData('currentSampleTOC', toc);\n        });\n        \n    }\n}\n\nAPI.createData('preferences', {\n    normalization: {numberOfPoints: \"\"},\n    flavor: '',\n    display: {\n        trackingInfo: true\n    }\n});\n\nconst analysesManager = new XRD.AnalysesManager();\nAPI.cache('analysesManager', analysesManager);\nAPI.createData('selectedSpectra', []);\n\nloadTwig(['org.cheminfo.sampleToc.chemical.default']);\n\nAPI.require('vh/util/tips').then( Tips => {\n    Tips.showTips();\n    Tips.addPageHelp({iconSize:'fa-4x'});\n});\n\n\n"
            ]
          }
        ]
      }
    }
  ],
  "custom_filters": [
    {
      "sections": {
        "modules": [
          {
            "sections": {},
            "groups": {
              "modules": [
                [
                  {}
                ]
              ]
            }
          }
        ],
        "filtersLib": [
          {
            "sections": {},
            "groups": {
              "filters": [
                [
                  {}
                ]
              ]
            }
          }
        ],
        "filters": [
          {
            "sections": {},
            "groups": {
              "filter": [
                {
                  "name": [
                    null
                  ],
                  "script": [
                    null
                  ]
                }
              ],
              "libs": [
                [
                  {}
                ]
              ]
            }
          }
        ]
      },
      "groups": {}
    }
  ],
  "actionfiles": [
    {
      "sections": {},
      "groups": {
        "action": [
          [
            {}
          ]
        ]
      }
    }
  ]
}