import { Component, ViewChild, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';
import { Ubicationu } from '../../model/ubicationu.model';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  protected map: any;
  public origin: any;
  public destination: any;
  places: Place[] = [];
  ubicationu : Ubicationu[] = [];
  place:any = {};
   public lat: Number = 8.9936
   public lng: Number = -79.5201
  constructor(public navCtrl: NavController,
              private geolocation: Geolocation
                ) {
                
                const placeA = new Place("Ubications User", 8.9936, -79.5201);
                const BanistmoATM = new Place("Banistmo ATM", 8.915557, -79.526570);
                const bancoNacionalDePanama = new Place("Banco Nacional de Panama", 8.957019, -79.559942);
                const cajeroBanistmoATM  = new Place("General Bank ATM", 8.969028, -79.533174);
                const scotibankSucursalBellaVista = new Place("Scotibank Sucursal Bella Vista", 8.978079, -79.523029);
                const cajerosAutomaticosPanamaCity = new Place("Cajeros Automaticos Panama City ATM", 8.976301, -79.517486);
                const bangoGeneralAtmCalleAugusto = new Place("General Bank ATM Calle Augusto", 8.984841, -79.528339);
                const bacCredomaticATM = new Place("ATM | BAC Credomatic", 8.987438, -79.531956);
                const bancoGeneralAtmPanamaCity = new Place("Banco General Panama City ATM",8.985510, -79.520911);
                const scotibankSucursalCalle50 = new Place("Scotibank Sucursal Calle 50", 8.989843, -79.511995);
                const bnpATM = new Place("BNP ATM", 9.012574, -79.535129);
                const cajeroAutomaricoBNP = new Place("ATM National Bank of Panama", 9.019845, -79.532554);
                const bancoNacionalPanamaPanama = new Place("Banco Nacional de Panama | Paraiso", 9.033821, -79.499910);
                const banistmoATMpanamaCity = new Place("ATM Banistmo", 9.007766, -79.474900);
                const banistmoATMPanamaAvAntigua = new Place("ATM Banistmo Panama Av.Antigua", 9.016460, -79.465565);
                const scotibankATMplazaReal = new Place("Scotibank Plaza Real", 9.021095, -79.462624);
                const banistmoATMcostaDelEste = new Place("ATM Banistmo Costa Del Este", 9.023677, -79.462609);
                const scotiabankSucursalLosPueblos = new Place("ATM - Scotiabank Sucursal Los Pueblos", 9.049895, -79.450326);
                const scotibankCajerosAeropuerto = new Place("Scotibank Cajeros Aeropuerto", 9.067387, -79.386954);
                const banistmoATMPanamaCity2 = new Place("ATM | Banistmo", 9.037955, -79.529564);
               
                this.places.push( placeA, 
                                  BanistmoATM,
                                  bancoNacionalDePanama,
                                  cajeroBanistmoATM,
                                  scotibankSucursalBellaVista,
                                  cajerosAutomaticosPanamaCity,
                                  bangoGeneralAtmCalleAugusto,
                                  bacCredomaticATM,
                                  bancoGeneralAtmPanamaCity,
                                  scotibankSucursalCalle50,
                                  bnpATM,
                                  cajeroAutomaricoBNP,
                                  bancoNacionalPanamaPanama,
                                  banistmoATMpanamaCity,
                                  banistmoATMPanamaAvAntigua,
                                  scotibankATMplazaReal,
                                  banistmoATMcostaDelEste,
                                  scotiabankSucursalLosPueblos,
                                  scotibankCajerosAeropuerto,
                                  banistmoATMPanamaCity2
                                 );
      }

       redirectToRoute( place ) {
       
        this.geolocation.getCurrentPosition().then((resp) => {
        const ubicationUser = new Ubicationu ( resp.coords.latitude, resp.coords.longitude)
         let lat = place.lat;
         let lng = place.lng;
       //  this.origin = ubicationUser;
         this.origin = { lat: 8.9936, lng: -79.5201 };
         this.destination = { lat: lat , lng: lng}
        }).catch((error) => {
          console.log('Error getting location', error);
        });

      } 
      protected mapReady(map) {
        this.map = map;
      }
      public centerMap = (markerObj) => {
        if (this.map)
          this.map.setCenter({ lat:  8.9936, lng: -79.5201 });
      
      }
}
