import axios from "axios";
import _ from "lodash";
import { BASE_URL_IS_REQUIRED } from "../shared/constants/error-message";
import {
  CONTENT_TYPE_APPLICATION_JSON,
  CONTENT_TYPE_KEY,
  REQUEST_MODE_CORS,
  ACCESS_CONTROL_ALLOW_ORIGIN_KEY,
  ACCESS_CONTROL_ALLOW_ORIGIN_VALUE,
  TOKEN_BEARER,
} from "../shared/constants/network-keys";
import { AUTH_API_ACCESS_TOKEN } from "../shared/constants/localstorage-keys";
import serviceEnum from "../shared/constants/serviceEnum";

export default class HttpNetwork {
  /**
   * @constructor
   * @param {String} base the base URL of Api
   * @param {object} headers Optional
   */

  constructor(props) {
    if (props.service === serviceEnum.TV_BUSINESS_SERVICE) {
      if (process.env.REACT_APP_BASE_API_TV_MARKETPLACE === undefined)
        throw new Error(BASE_URL_IS_REQUIRED);
      this.base = process.env.REACT_APP_BASE_API_TV_MARKETPLACE;
    }
    this.token = localStorage.getItem(AUTH_API_ACCESS_TOKEN);
    this.headers = this.getHeaders(props.headers);
  }

  getHeaders(headers = null) {
    const defaultHeaders = {
      [CONTENT_TYPE_KEY]: CONTENT_TYPE_APPLICATION_JSON,
      mode: REQUEST_MODE_CORS,
      [ACCESS_CONTROL_ALLOW_ORIGIN_KEY]: ACCESS_CONTROL_ALLOW_ORIGIN_VALUE,
      Origin: this.base,
    };

    if (!headers) headers = defaultHeaders;
    if (this.token) headers.Authorization = TOKEN_BEARER + this.token;
    return headers;
  }

  getUrl(endpoint) {
    return `${this.base}${endpoint}`;
  }

  /**
   * Sends a request to the given endpoint of the API. This method is just
   * a wrapper for fetch(). If an auth token is present, it will be
   * automatically added to auth header of all requests.
   *
   * @param {String} endpoint Should start with slash, like /endpoint.
   * @param {Object} options Optional. Fetch options.
   * @return {Promise} It resolves to the HTTP response object. To get the
   *  actual data you probably want to call .json() method of that object.
   *  The promise rejects only on network errors. In case of HTTP errors
   *  (404, etc.) the promise will be resolved successfully.
   */

  async fetch(endpoint, options) {
    try {
      let url = this.getUrl(endpoint);
      let headers = this.headers;
      const opts = _.merge(_.cloneDeep(options) || {}, { url }, { headers });
      const response = await axios(opts);
      if(response.responseCode === 6023) {
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("userID");
        localStorage.removeItem("userInfo")
        window.location.href = '/'
        return 
      } else {
        return response.data;
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem(AUTH_API_ACCESS_TOKEN);
      }
      return error.response;
    }
  }

  /**
   * Sends DELETE request to the endpoint.
   *
   * @param {String} endpoint
   * @param {FormData|String} body
   * @return {Promise}
   */
  delete(endpoint, body) {
    return this.fetch(endpoint, { body, method: "DELETE" });
  }

  /**
   * Sends GET request to the endpoint.
   *
   * @param {String} endpoint
   * @return {Promise}
   */
  get(endpoint) {
    return this.fetch(endpoint, { method: "GET" });
  }

  /**
   * Sends POST request to the endpoint.
   *
   * @param {String} endpoint
   * @param {FormData|String} data
   * @return {Promise}
   */
  post(endpoint, data) {
    return this.fetch(endpoint, { data, method: "POST" });
  }

  /**
   * Sends POST request to the endpoint, with JSON payload.
   *
   * @param {String} endpoint
   * @param {JSON} json
   * @return {Promise}
   */
  postJson(endpoint, json) {
    return this.post(endpoint, JSON.stringify(json));
  }

  /**
   * Sends PUT request to the endpoint.
   *
   * @param {String} endpoint
   * @param {FormData|String} body
   * @return {Promise}
   */
  put(endpoint, body) {
    return this.fetch(endpoint, { data: body, method: "PUT" });
  }

  /**
   * Sends PUT request to the endpoint.
   *
   * @param {String} endpoint
   * @param {JSON} json
   * @return {Promise}
   */
  putJson(endpoint, json) {
    return this.put(endpoint, JSON.stringify(json));
  }
}
