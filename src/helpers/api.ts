import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class Api {
  private _axios: AxiosInstance;

  constructor() {
    this._axios = Axios.create();
  }

  get axios() {
    return this._axios;
  }

  public async get<T = any>(url: string, config?: AxiosRequestConfig) {
    return this._axios.get<T>(url, config).then(res => res.data);
  }

  public async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this._axios.post<T>(url, data, config).then(res => res.data);
  }

  public async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this._axios.put<T>(url, data, config).then(res => res.data);
  }

  public async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this._axios.patch<T>(url, data, config).then(res => res.data);
  }

  public async delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return this._axios.delete<T>(url, config);
  }
}

const api = new Api();
export default api;
