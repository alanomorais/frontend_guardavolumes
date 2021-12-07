<template>
    <div class="container-cadastro">
        <div class="formulario">
            <img src="img/Boxes.png" alt="">
            <h1>Guarda Volume</h1>
            <p>Cadastro de Novo Usuário</p>

            <form class="form-cadastro">
                <div class="nome-completo">
                    <input type="text" nome="nome" class="dados-cadastro" id="nome" placeholder="NOME COMPLETO">
                </div><!--nome-completo-->
                <div class="username">
                    <input type="text" nome="username" class="dados-cadastro" id="username" placeholder="USUÁRIO">
                </div><!--username-->
                <div class="email-cadastro">
                    <input type="email" nome="email" class="dados-cadastro" id="email" placeholder="E-MAIL">
                </div><!--email-cadastro-->
                <div class="senha-cadastro">
                    <input type="password" nome="senha" class="dados-cadastro" id="senha-cadastro" placeholder="SENHA">
                </div><!--senha-cadastro-->
                <a href="index.html" class="btn btn-cadastro">ENVIAR</a>
            </form><!--form-cadastro-->

        </div><!--formulario-->
    
    </div><!--container-cadastro-->
</template>

<script>
export default {
    name: 'SignUp',

    data(){

    }
}
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
}
</style>