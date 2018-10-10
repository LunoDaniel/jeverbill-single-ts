import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the BaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseProvider {

  private serverUrl = 'http://localhost:8088/';
  private http: HttpClient;

  constructor(protected injector: Injector) {
    this.http = this.injector.get(HttpClient);
  }

  protected httpGet(resource: string) {

    let url = this.serverUrl + resource;

    let options = {  };

    return this.http.get(url, options).toPromise()
        .then(res => this.handleSuccess(res))
        .catch(error => this.handleError(error));
  }

  private handleSuccess(res) {
    return res;
  }

  private handleError(res) {

    var message = 'Erro no sistema. Tente novamente.';

    let error = res && res.Error ? res.Error : null;

    if (error && error.Message) {
        message = error.Message;
    }

    return Observable.throw(message);
  }

}
