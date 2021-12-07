<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                  <i class="fas fa-hospital-user"></i>
                  <p class="card-category">Pacientes</p>
                  
                </div>                
                <h3 class="card-title" v-show="dashboard">{{dashboard.totPacientes}}                
                </h3>
              </div>
              <div class="card-footer">
                <div class="stats">                  
                  <a href="/Pacientes" class="btn btn-info">Exibir</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-success card-header-icon">
                <div class="card-icon">                  
                  <i class="fas fa-file-medical-alt"></i>
                  <p class="card-category">Altas</p>
                </div>                
                <h3 class="card-title" v-show="dashboard">{{dashboard.totAltas}}</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <a href="#" class="btn btn-info">Exibir</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                  <i class="fas fa-file-medical-alt"></i>                  
                  <p class="card-category">AInternados</p>
                </div>                
                <h3 class="card-title" v-show="dashboard">{{dashboard.totInternados}}</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <a href="#" class="btn btn-info">Exibir</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-info card-header-icon">
                <div class="card-icon">
                  <i class="fas fa-file-medical-alt"></i>
                </div>
                <p class="card-category">Armários Livre</p>
                <h3 class="card-title" v-show="dashboard">{{dashboard.armariosLivres}}</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <a href="#" class="btn btn-info">Exibir</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

import Cookies from "js-cookie";
import api from "../services/api";


export default {
    name: "Card",
  data() {
    return {
      dashboard: {},
    };
  },

  mounted() {
    const token = Cookies.get("__mytoken");

    return api
      .get("dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resposta) => {        
        this.dashboard = resposta.data;        
        
      });
  },    
}
</script>