import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
 export class updateSpecificCommunityService{
   counter = true;

constructor(private http: Http) { }

  updateSpecificCommunity(Form, domain){

  const url = `/api/v1/communities/communities/${domain}`;

  return this.http.patch(url, Form) .map(() => Form);
  
 }
 }