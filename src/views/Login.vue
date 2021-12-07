<template>
  <div class="container-login">
    <div class="barra">
      <div class="logo-barra">
        <img
          class="logoC"
          src="../assets/img/logoC.png"
          alt="Governo do Estado do Ceará"
        />
        <img
          class="logoH"
          src="../assets/img/logovertical.png"
          alt="Hospital São José de Doença Infecciosa"
        />
      </div>
      <!--logo-barra-->

      <div class="btn-casdastrese">
        <a href="/SignUp" class="btn">CADASTRE-SE</a>
      </div>
      <!--btn-casdastrese-->
    </div>
    <!--barra-->

    <div class="login">
      <div class="logo">
        <img src="../assets/img/boxes.png" alt="" />
        <h1>Guarda Volume</h1>
      </div>

      <div class="login-input">
        <form @submit.stop.prevent="submit">
          <div class="input">
            <input
              v-model="email"
              class="user-password"
              type="text"
              placeholder="USUÁRIO OU E-MAIL"
            />
            <input
              v-model="password"
              class="user-password"
              type="password"
              placeholder="SENHA"
            />
          </div>
          <!--input-->

          <div class="btn-login">
            <button class="btn entrar" type="submit">Entrar</button>
            <a href="esqueciSenha.html" class="esqueci">Esqueceu a senha?</a>
          </div>
          <!--btn-login-->
        </form>
        <div id="alert" class="alert alert-danger" role="alert" v-if="retorno">
          <small>{{ msg }}</small>
        </div>
      </div>
      <!--longin-input-->
    </div>

    <!--login-->
  </div>
</template>

<script>
import Cookie from "js-cookie";
import api from "../services/api";

export default {
  name: "Login",

  data() {
    return {
      retorno: false,
      msg: "",
      email: "miguelmorais@gmail.com",
      password: "123456",
    };
  },

  methods: {
    submit() {
      api
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          Cookie.set("__mytoken", response.data.access_token.token);
          localStorage.setItem(
            "__User",
            JSON.stringify(response.data.access_token.user)
          );
          this.$router.replace("/");
        })
        .catch((error, msg, retorno) => {
          this.msg = msg;
          this.retorno = retorno = true;

          if (error.response) {
            const status = error.response.status;
            console.log("Status => ",status);
            switch (status) {
              case 200:
                this.msg =
                  "OK	O recurso solicitado foi processado e retornado com sucesso.";
                break;
              case 201:
                this.msg = "Created	O recurso informado foi criado com sucesso.";
                break;
              case 401:
                this.msg =
                  "Usuário/Senha inválidos";
                break;
              case 402:
                this.msg =
                  "Payment Required	A chave da API está correta, porém a conta foi bloqueada por inadimplência. Neste caso, acesse o painel para verificar as pendências.";
                break;
              case 403:
                this.msg =
                  "Forbidden	O acesso ao recurso não foi autorizado. Este erro por ocorrer por dois motivos: (1) Uma conexão sem criptografia foi iniciada. Neste caso utilize sempre HTTPS. (2) As configurações de perfil de acesso não permitem a ação desejada. Consulte as configurações de acesso no painel de administração.";
                break;
              case 404:
                this.msg =
                  "Not Found	O recurso solicitado ou o endpoint não foi encontrado.";
                break;
              case 406:
                this.msg =
                  "Not Acceptable	O formato enviado não é aceito. O cabeçalho Content-Type da requisição deve contar obrigatoriamente o valor application/json para requisições do tipo POST e PUT.";
                break;
              case 422:
                this.msg =
                  "Dados inválidos! Verifique se algum campo está vazio";
                break;
              case "429":
                this.msg =
                  "Too Many Requests	O limite de requisições foi atingido. Verifique o cabeçalho Retry-After para obter o tempo de espera (em segundos) necessário para a retentativa.";
                break;
              case "400":
                this.msg =
                  "Bad Request	Não foi possível interpretar a requisição. Verifique a sintaxe das informações enviadas.";
                break;
              case 500:
                this.msg = "Internal Server Error	Ocorreu uma falha na plataforma";
                break;
              default:
                this.msg = "Entre em contato com o Administrador do Sistema";
            }           
          } else if (error.request) {
            this.msg = "Verificar conexão da API";
            console.log("Verificar conexão da API =>", error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log("aqui => ", error.config);
        });
    },
  },
};
</script>

<style scoped>
/*RESET DO CSS*/

* {
  padding: 0;
  margin: 0;
  border: none;
  text-decoration: none;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #58af9cff;
  outline: none;
}

/*CONFIG DO CORPO DA PAGINA*/

body {
  width: 100vw;
  height: 100vh;
}

/*MOBILE FIRST*/
/*BARRA SUPERIOR*/

.barra {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #58af9cff;
  justify-content: flex-start;
}
.logo-barra {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.logoC {
  width: 6rem;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
}
.logoH {
  width: 3rem;
}
.btn-casdastrese {
  width: 60%;
}
.btn {
  font-size: 1rem;
  font-weight: 900;
  color: #ffff;
  padding: 1rem 1.5rem;
  border: 3px solid #ffff;
  border-radius: 15px;
  background-color: #58af9cff;
  transition: 0.5s;
}
.btn:hover {
  color: #58af9cff;
  background-color: #f3f3f3;
}

/*COPO DO LOGIN - E ESQUECI A SENHA*/

.login {
  width: 100%;
  height: 100%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.logo img {
  width: 8rem;
}
.logo h1 {
  font-size: 2rem;
}
.logoEs h1 {
  font-size: 2rem;
}
.input {
  width: 100%;
  margin-top: 1.5rem;
}
.user-password {
  width: 70%;
  text-align: left;
  background-color: #ecf0f1ff;
  padding: 1rem 1rem;
  margin: 15px;
  border-radius: 0.5rem;
}
.btn-login,
.novaSenha {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.esqueci {
  font-size: 1rem;
}
.entrar {
  width: 70%;
}
.entrar:hover {
  color: #58af9cff;
  border: 3px solid #58af9cff;
}
.esqueciSenha {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logoEs img {
  width: 8rem;
}
.esqueciEmail {
  width: 100%;
}

/*CORPO DA PAGINA DE CASDASTRO*/

.container-cadastro {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #58af9cff;
}
.formulario {
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 20px;
  border: 10px double #58af9cff;
  max-width: 900px;
}
.formulario img {
  width: 8rem;
}
.formulario h1 {
  font-size: 2rem;
}
.formulario p {
  font-size: 0.9rem;
  margin-top: 2rem;
  align-self: center;
}
.form-cadastro {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dados-cadastro {
  width: 70%;
  text-align: left;
  background-color: #ecf0f1ff;
  padding: 1rem 1rem;
  margin: 8px;
  border-radius: 0.5rem;
}
.btn-cadastro {
  width: 70%;
  align-self: center;
}
.btn-cadastro:hover {
  border: 3px solid #58af9cff;
}
input:focus {
  border: 2px solid #58af9cff;
}

/*MEDIA QUERIES*/
/*PARA VERSÃO DESKTOP FE NO MINIMO 1024PX DE LARGURA*/

@media (min-width: 1024px) {
  body {
    flex-direction: row;
    min-height: 600px;
  }
  .container-login {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .barra {
    width: 50vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
  .logo-barra {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 7rem;
  }
  .logoC {
    width: 11rem;
  }
  .logoH {
    width: 6rem;
  }
  .btn-casdastrese {
    margin-left: 0;
  }
  .login {
    width: 50vw;
  }
  .logo {
    width: 50vw;
  }
  .login h1 {
    font-size: 2rem;
  }
  .esqueciSenha {
    width: 50vw;
  }
  #alert {
    font-family: "Roboto", sans-serif;
    font-size: 0.5rem;
    color: red;
  }
}
</style>