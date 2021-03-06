define({ "api": [
  {
    "type": "post",
    "url": "auth",
    "title": "1.用户认证Token",
    "version": "0.1.0",
    "name": "auth",
    "group": "ALL",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://api.wuliu.dev.weipei.cc/auth"
      }
    ],
    "description": "<p>用户输入账号登陆. Define 用户需要修改现有的手机号码,需要提交新的手机号码到服务器.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://api.wuliu.dev.weipei.cc\n\nbody:\n{\n  \"phone\": \"18615788190\",\n  \"password\": \"admin\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "Integer",
            "optional": false,
            "field": "phone",
            "description": "<p>司机手机号码.</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>司机账号密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌.</p>"
          }
        ]
      }
    },
    "filename": "app/example.js",
    "groupTitle": "ALL"
  },
  {
    "type": "post",
    "url": "refresh-token",
    "title": "2. 用户刷新Token",
    "version": "0.1.0",
    "name": "refresh_token",
    "group": "ALL",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://api.wuliu.dev.weipei.cc/refresh-token"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {token}\"\n  \"eg\"：\"@apiHeader (Request Header Fields) {String} [Authorization=\"Bearer de6821a970634cb19619b1023ebdfb82b1ae2f05\"]   Authorization.\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>用户输入账号登陆. Define 用户需要修改现有的手机号码,需要提交新的手机号码到服务器.</p>",
    "parameter": {
      "fields": {
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>account.</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account_id",
            "description": "<p>用户ID.</p>"
          }
        ]
      }
    },
    "filename": "app/example.js",
    "groupTitle": "ALL"
  },
  {
    "type": "get",
    "url": "users/{id}",
    "title": "3. 账户基础信息",
    "version": "0.1.0",
    "name": "users__id_",
    "group": "ALL",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://api.wuliu.dev.weipei.cc/auth"
      }
    ],
    "description": "<p>用户输入账号登陆. Define 用户需要修改现有的手机号码,需要提交新的手机号码到服务器.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://api.wuliu.dev.weipei.cc\n\nbody:\n{\n  \"phone\": \"18615788190\",\n  \"password\": \"admin\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "Integer",
            "optional": false,
            "field": "phone",
            "description": "<p>司机手机号码.</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>司机账号密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌.</p>"
          }
        ]
      }
    },
    "filename": "app/example.js",
    "groupTitle": "ALL"
  }
] });
