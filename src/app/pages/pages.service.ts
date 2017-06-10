import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ITooltip } from 'api/tooltip';

@Injectable()
export class PagesService {

    private tooltipsUrl = "../../api/tooltips.json";

    constructor(private _http: Http) { }

    getTooltips(): Observable<ITooltip[]> {
        return this._http.get(this.tooltipsUrl)
            .map(response => <ITooltip[]>response.json().tooltipsData);
    }

    getTooltip(id: number): Observable<ITooltip> {
        return this.getTooltips()
        .map(tooltips => tooltips.find(tooltip => tooltip.id === id));
    }

}