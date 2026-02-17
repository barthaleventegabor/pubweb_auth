import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrinkapiService {
  private readonly http = inject(HttpClient);
  private readonly host = "http://localhost:8000/api/";

  getDrinks() {
    const token = localStorage.getItem("token");
    const url  = this.host + "drinks";
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(url, { headers });
  }

  addDrink(drink:any) {
      const url  = this.host + "newdrink";
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      return this.http.post(url, drink, { headers });
  }
  updateDrink(drink:any) {
      const url  = this.host + "updatedrink/" + drink.id;
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      return this.http.put(url, drink, { headers });
  }
  deleteDrink(id:number) {
      const url  = this.host + "deletedrink/" + id;
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      return this.http.delete(url, { headers });
  }
}
